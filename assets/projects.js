(() => {
  const categoryTabs = [...document.querySelectorAll('[data-category-target]')];
  const projectTabs = [...document.querySelectorAll('[data-project-target]')];

  const developmentTab = document.querySelector('[data-category-target="category-software"]');
  if (developmentTab) developmentTab.textContent = 'Development';

  const developmentProjects = document.querySelector('.category-panel#category-software .project-tabs');
  if (developmentProjects) developmentProjects.setAttribute('aria-label', 'Development projects');

  const activate = (tabs, targetAttribute, targetId) => {
    tabs.forEach((tab) => {
      const active = tab.getAttribute(targetAttribute) === targetId;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
    });
  };

  categoryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.categoryTarget;
      activate(categoryTabs, 'data-category-target', targetId);
      document.querySelectorAll('.category-panel').forEach((panel) => {
        panel.hidden = panel.id !== targetId;
      });
    });
  });

  projectTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.projectTarget;
      const category = tab.closest('.category-panel');
      const localTabs = [...category.querySelectorAll('[data-project-target]')];
      activate(localTabs, 'data-project-target', targetId);
      category.querySelectorAll('.project-panel').forEach((panel) => {
        panel.classList.toggle('is-active', panel.id === targetId);
      });
    });
  });
})();

(() => {
  const makeVideo = (shell, src) => new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('aria-label', shell.dataset.videoLabel || 'Project video');

    const cleanup = () => {
      video.removeEventListener('canplay', ready);
      video.removeEventListener('error', failed);
    };
    const ready = () => { cleanup(); resolve(video); };
    const failed = () => { cleanup(); video.remove(); reject(new Error('Video source failed')); };

    video.addEventListener('canplay', ready, { once: true });
    video.addEventListener('error', failed, { once: true });
    video.src = src;
    shell.appendChild(video);
    video.load();
  });

  const loadLegacyFallback = async (src) => {
    let encoded = '';
    for (let index = 1; index <= 3; index += 1) {
      const part = String(index).padStart(2, '0');
      const response = await fetch(`${src}.part${part}.b64`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Fallback part ${part} unavailable`);
      encoded += (await response.text()).trim();
    }

    const binary = atob(encoded.replace(/\s+/g, ''));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return URL.createObjectURL(new Blob([bytes], { type: 'video/webm' }));
  };

  document.querySelectorAll('[data-video-player]').forEach((shell) => {
    const button = shell.querySelector('[data-load-video]');
    if (!button) return;

    button.addEventListener('click', async () => {
      const src = shell.dataset.videoSrc;
      if (!src || shell.classList.contains('is-loaded') || shell.classList.contains('is-loading')) return;

      shell.classList.add('is-loading');
      button.textContent = 'Loading…';
      button.disabled = true;

      let objectUrl = null;
      try {
        let video;
        try {
          video = await makeVideo(shell, src);
        } catch (directError) {
          objectUrl = await loadLegacyFallback(src);
          video = await makeVideo(shell, objectUrl);
        }

        shell.querySelector('.video-poster')?.remove();
        button.remove();
        shell.classList.remove('is-loading');
        shell.classList.add('is-loaded');
        video.play().catch(() => {});

        if (objectUrl) {
          window.addEventListener('pagehide', () => URL.revokeObjectURL(objectUrl), { once: true });
        }
      } catch (error) {
        console.error('Project video failed to load.', error);
        shell.classList.remove('is-loading');
        button.disabled = false;
        button.textContent = 'Video unavailable';
      }
    });
  });
})();
