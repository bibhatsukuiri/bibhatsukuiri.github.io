(() => {
  const categoryTabs = [...document.querySelectorAll('[data-category-target]')];
  const projectTabs = [...document.querySelectorAll('[data-project-target]')];

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
  const PURKINJE_ARCHIVE_COMMIT = '068e343ebda62f66f53f17566af08ef506eafb26';
  const PURKINJE_ARCHIVE_BASE = `https://raw.githubusercontent.com/bibhatsukuiri/bibhatsukuiri.github.io/${PURKINJE_ARCHIVE_COMMIT}/`;

  const archivedVideoBlob = async (src) => {
    let encoded = '';

    for (let index = 1; index <= 3; index += 1) {
      const part = String(index).padStart(2, '0');
      const url = `${PURKINJE_ARCHIVE_BASE}${src}.part${part}.b64`;
      const response = await fetch(url, { cache: 'force-cache' });
      if (!response.ok) throw new Error(`Unable to load archived video part ${part}`);
      encoded += (await response.text()).trim();
    }

    const binary = atob(encoded.replace(/\s+/g, ''));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }

    return new Blob([bytes], { type: 'video/webm' });
  };

  const resolveVideoSource = async (src) => {
    try {
      const response = await fetch(src, { cache: 'no-cache' });
      if (response.ok) {
        const blob = await response.blob();
        if (blob.type.startsWith('video/') || blob.size > 0) return blob;
      }
    } catch (_) {
      // Fall through to the archived project asset.
    }

    return archivedVideoBlob(src);
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

      let objectUrl;

      try {
        const blob = await resolveVideoSource(src);
        objectUrl = URL.createObjectURL(blob);

        const video = document.createElement('video');
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.preload = 'auto';
        video.setAttribute('aria-label', shell.dataset.videoLabel || 'Project video');

        const loaded = new Promise((resolve, reject) => {
          video.addEventListener('canplay', resolve, { once: true });
          video.addEventListener('error', reject, { once: true });
        });

        video.src = objectUrl;
        shell.appendChild(video);
        video.load();
        await loaded;

        shell.querySelector('.video-poster')?.remove();
        button.remove();
        shell.classList.remove('is-loading');
        shell.classList.add('is-loaded');
        video.play().catch(() => {});

        window.addEventListener('pagehide', () => URL.revokeObjectURL(objectUrl), { once: true });
      } catch (error) {
        console.error('Project video failed to load.', error);
        if (objectUrl) URL.revokeObjectURL(objectUrl);
        shell.querySelector('video')?.remove();
        shell.classList.remove('is-loading');
        button.disabled = false;
        button.textContent = 'Video unavailable';
      }
    });
  });
})();
