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

  const archivedVideoBlob = async (src, onProgress) => {
    let encoded = '';
    const partCount = 3;

    for (let index = 1; index <= partCount; index += 1) {
      const part = String(index).padStart(2, '0');
      const url = `${PURKINJE_ARCHIVE_BASE}${src}.part${part}.b64`;
      const response = await fetch(url, { cache: 'force-cache' });
      if (!response.ok) throw new Error(`Unable to load archived video part ${part}`);
      encoded += (await response.text()).trim();
      onProgress?.(Math.round((index / partCount) * 90));
    }

    const binary = atob(encoded.replace(/\s+/g, ''));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }

    onProgress?.(100);
    return new Blob([bytes], { type: 'video/webm' });
  };

  const fetchVideoWithProgress = async (src, onProgress) => {
    const response = await fetch(src, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`Video request failed with ${response.status}`);

    const contentType = response.headers.get('content-type') || 'video/webm';
    const total = Number(response.headers.get('content-length')) || 0;

    if (!response.body || !total) {
      onProgress?.(null);
      const blob = await response.blob();
      onProgress?.(100);
      return blob;
    }

    const reader = response.body.getReader();
    const chunks = [];
    let received = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      received += value.byteLength;
      onProgress?.(Math.min(99, Math.round((received / total) * 100)));
    }

    onProgress?.(100);
    return new Blob(chunks, { type: contentType });
  };

  const resolveVideoSource = async (src, onProgress) => {
    try {
      return await fetchVideoWithProgress(src, onProgress);
    } catch (_) {
      return archivedVideoBlob(src, onProgress);
    }
  };

  document.querySelectorAll('[data-video-player]').forEach((shell) => {
    const button = shell.querySelector('[data-load-video]');
    if (!button) return;

    button.addEventListener('click', async () => {
      const src = shell.dataset.videoSrc;
      if (!src || shell.classList.contains('is-loaded') || shell.classList.contains('is-loading')) return;

      shell.classList.add('is-loading');
      button.textContent = 'Loading 0%';
      button.disabled = true;
      button.setAttribute('aria-live', 'polite');

      let objectUrl;

      const showProgress = (percent) => {
        button.textContent = Number.isFinite(percent) ? `Loading ${percent}%` : 'Loading…';
      };

      try {
        const blob = await resolveVideoSource(src, showProgress);
        button.textContent = 'Preparing video…';
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
