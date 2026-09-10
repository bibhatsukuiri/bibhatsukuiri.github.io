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

(async () => {
  const videos = [...document.querySelectorAll('video[data-video-base][data-video-parts]')];

  for (const video of videos) {
    try {
      const base = video.dataset.videoBase;
      const count = Number(video.dataset.videoParts);
      let encoded = '';

      for (let index = 1; index <= count; index += 1) {
        const part = String(index).padStart(2, '0');
        const response = await fetch(`${base}.part${part}.b64`);
        if (!response.ok) throw new Error(`Unable to load video part ${part}`);
        encoded += (await response.text()).trim();
      }

      const binary = atob(encoded.replace(/\s+/g, ''));
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index += 1) {
        bytes[index] = binary.charCodeAt(index);
      }

      const objectUrl = URL.createObjectURL(new Blob([bytes], { type: 'video/webm' }));
      video.src = objectUrl;
      video.load();
      video.play().catch(() => {});
      window.addEventListener('pagehide', () => URL.revokeObjectURL(objectUrl), { once: true });
    } catch (error) {
      console.error('Project video failed to load.', error);
      video.closest('.video-shell')?.classList.add('video-error');
    }
  }
})();
