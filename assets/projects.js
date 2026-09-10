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
  document.querySelectorAll('[data-video-player]').forEach((shell) => {
    const button = shell.querySelector('[data-load-video]');
    if (!button) return;

    button.addEventListener('click', () => {
      const src = shell.dataset.videoSrc;
      if (!src || shell.classList.contains('is-loaded') || shell.classList.contains('is-loading')) return;

      shell.classList.add('is-loading');
      button.textContent = 'Loading…';
      button.disabled = true;

      const video = document.createElement('video');
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = 'auto';
      video.setAttribute('aria-label', shell.dataset.videoLabel || 'Project video');

      video.addEventListener('canplay', () => {
        shell.querySelector('.video-poster')?.remove();
        button.remove();
        shell.classList.remove('is-loading');
        shell.classList.add('is-loaded');
        video.play().catch(() => {});
      }, { once: true });

      video.addEventListener('error', () => {
        video.remove();
        shell.classList.remove('is-loading');
        button.disabled = false;
        button.textContent = 'Video unavailable';
      }, { once: true });

      video.src = src;
      shell.appendChild(video);
      video.load();
    });
  });
})();
