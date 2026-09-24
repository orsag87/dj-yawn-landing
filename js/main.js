/* ============================================================
   DJ YAWN — Cinematic Links · main.js
   Plain build: GSAP/Lenis scroll, no atmosphere layer
   ============================================================ */

/* -------------------- EDIT YOUR LINKS HERE -------------------- */
const CONFIG = {
  socials: [
    { name: 'Instagram',  url: 'https://instagram.com/dj.yawn',
      svg: '<path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.06 15.58 2.05 15.2 2.05 12s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.42 2.2 8.8 2.2 12 2.2Zm0 3.65A6.15 6.15 0 1 0 18.15 12 6.15 6.15 0 0 0 12 5.85Zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.4-10.55a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z"/>' },
    { name: 'Spotify',    url: 'https://open.spotify.com/artist/1whCaRyOBdvIWcvHzq225q',
      svg: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0Zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02Zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.32-1.32 9.72-.66 13.44 1.62.36.18.54.78.3 1.2Zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3Z"/>' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/djyawn',
      svg: '<path d="M1.4 12.9c-.08 0-.14.06-.15.15l-.2 1.9.2 1.86c.01.09.07.15.15.15.08 0 .14-.06.15-.15l.23-1.86-.23-1.9c-.01-.09-.07-.15-.15-.15Zm1.3-.9c-.09 0-.16.07-.17.17l-.27 2.78.27 2.68c.01.1.08.17.17.17.09 0 .16-.07.17-.17l.3-2.68-.3-2.78c-.01-.1-.08-.17-.17-.17Zm10.3-4.02c-.3 0-.58.06-.84.16-.17-1.98-1.83-3.54-3.86-3.54-.5 0-.98.1-1.4.27-.17.06-.21.13-.21.26v10.3c0 .13.1.24.24.25h6.07A2.83 2.83 0 0 0 16 15.6a2.83 2.83 0 0 0-2.7-2.82ZM6.06 5.9c-.1 0-.18.08-.19.19l-.32 6.83.32 3.9c.01.11.09.19.19.19.1 0 .18-.08.19-.19l.36-3.9-.36-6.83c-.01-.11-.09-.19-.19-.19Zm-1.34.66c-.1 0-.18.08-.18.19l-.3 6.17.3 3.94c0 .1.08.18.18.18.1 0 .17-.08.18-.18l.34-3.94-.34-6.17c-.01-.11-.08-.19-.18-.19Zm-1.32.98c-.09 0-.16.07-.17.17l-.28 5.19.28 3.93c.01.1.08.17.17.17.09 0 .16-.07.17-.17l.32-3.93-.32-5.19c-.01-.1-.08-.17-.17-.17Z"/>' },
    { name: 'Apple Music',url: 'https://music.apple.com/ca/artist/dj-yawn/1515997927',
      svg: '<path d="M16.5 3.5c.4 0 .7.3.7.7v11.4a3.4 3.4 0 1 1-1.4-2.75V7.1l-6 1.3v6.5a3.4 3.4 0 1 1-1.4-2.75V6.2c0-.4.25-.7.6-.78l6.5-1.4a1 1 0 0 1 .4-.02Z"/>' }
  ],

  // Item types: 'release' | 'link' | 'divider' | 'band'
  stream: [
    { type: 'release', title: 'Temperature', meta: 'DJ YAWN · Somastate Records', badge: 'Out now',
      cover: 'assets/temperature-cover.jpg?v=2',
      canvas: 'assets/temperature-canvas.mp4',
      poster: 'assets/temperature-poster.jpg',
      audio: 'assets/temperature-preview.mp3',
      spotify: 'https://open.spotify.com/album/3vDgkxDTzrkMoVJRkJVJuW' },
    { type: 'link', title: 'Yawnin\' EP', sub: 'Out October 23 · Nailz first, October 16', url: 'https://open.spotify.com/artist/1whCaRyOBdvIWcvHzq225q' },
    { type: 'link', title: 'CzechOne Two', sub: 'Single · Somastate Records', url: 'https://open.spotify.com/album/3hoEZ8bBxTHx1hzBEbI93V' },
    { type: 'mix', kicker: 'Live set', title: 'Shambhala 2025', sub: 'Listen on Mixcloud', url: 'https://www.mixcloud.com/djyawn/dj-yawn-live-shambhala-music-festival-2025-deep-dub/' },
    { type: 'video', kicker: 'Video', title: '"Wave" ft. PAV4N', sub: 'Music video', youtube: 'wLp3BH0ySVg' },
    { type: 'link', title: 'Sleepy Song Starters', sub: 'Free download', url: 'https://www.dropbox.com/l/AADBoe0wjOk5zAf-T5Pzdr3Jgx4wetcQcL8', featured: true },
    { type: 'link', title: 'Press kit', sub: 'epk.djyawn.com', url: 'https://epk.djyawn.com' },
    { type: 'link', title: 'Bookings', sub: 'bookings@djyawn.com', url: 'mailto:bookings@djyawn.com' },
    { type: 'link', title: 'Merch', sub: 'Producer Dojo store', url: 'https://members.producerdojo.com/muse' }
  ]
};

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOBILE = window.matchMedia('(max-width: 640px)').matches;
const arrowSVG = '<svg class="card-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

/* -------------------- RENDER STREAM -------------------- */
function render() {
  const stream = document.getElementById('stream');

  let li = 0;
  CONFIG.stream.forEach(item => {
    if (item.type === 'divider') {
      const d = document.createElement('div');
      d.className = 'divider reveal'; d.textContent = item.text;
      stream.appendChild(d);
      return;
    }
    if (item.type === 'band') {
      const b = document.createElement('div');
      b.className = 'band reveal';
      b.innerHTML = `<div class="band-img" data-parallax style="background-image:url('${item.img}')"></div>
        <div class="band-cap">${item.cap}<small>${item.sub || ''}</small></div>`;
      stream.appendChild(b);
      return;
    }
    if (item.type === 'release') {
      const media = REDUCED
        ? `<img class="phone-media" src="${item.poster}" alt="${item.title} canvas">`
        : `<video class="phone-media" autoplay muted loop playsinline preload="metadata" poster="${item.poster}"><source src="${item.canvas}" type="video/mp4"></video>`;
      const wrap = document.createElement('div');
      wrap.className = 'release reveal';
      wrap.innerHTML =
        `<div class="phone">
          ${media}
          <span class="release-badge">${item.badge || ''}</span>
          <div class="np">
            <img class="np-cover" src="${item.cover}" alt="${item.title} cover">
            <span class="np-info"><span class="np-title">${item.title}</span><span class="np-meta">${item.meta || ''}</span></span>
            <button class="np-play" type="button" aria-label="Play preview of ${item.title}">
              <svg class="ic-play" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              <svg class="ic-pause" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
            </button>
          </div>
          <div class="np-bar"><i></i></div>
          <audio class="np-audio" src="${item.audio}" preload="none"></audio>
        </div>
        <a class="release-spotify" href="${item.spotify}" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0Zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02Zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.32-1.32 9.72-.66 13.44 1.62.36.18.54.78.3 1.2Zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3Z"/></svg>
          OPEN ON SPOTIFY</a>`;
      stream.appendChild(wrap);
      return;
    }
    if (item.type === 'mix') {
      const m = document.createElement('a');
      m.className = 'mixcard reveal';
      m.href = item.url; m.target = '_blank'; m.rel = 'noopener noreferrer';
      m.innerHTML =
        `<span class="mixcard-play"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
         <span class="mixcard-body"><span class="mix-kicker">${item.kicker || 'LATEST MIX'}</span><span class="mixcard-title">${item.title}</span><span class="mix-sub">${item.sub || ''}</span></span>
         <span class="mixcard-tag">MIXCLOUD ↗</span>`;
      stream.appendChild(m);
      return;
    }
    if (item.type === 'video') {
      const v = document.createElement('div');
      v.className = 'video reveal';
      v.innerHTML =
        `<div class="mix-head"><span class="mix-kicker">${item.kicker || 'WATCH'}</span><span class="mix-title">${item.title}</span><span class="mix-sub">${item.sub || ''}</span></div>
         <button class="video-facade" data-yt="${item.youtube}" type="button" aria-label="Play ${item.title}">
           <img class="video-thumb" src="https://i.ytimg.com/vi/${item.youtube}/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${item.youtube}/hqdefault.jpg'" alt="">
           <span class="video-play"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
         </button>`;
      stream.appendChild(v);
      return;
    }
    if (item.type === 'setvideo') {
      const sv = document.createElement('div');
      sv.className = 'video reveal';
      sv.innerHTML =
        `<div class="mix-head"><span class="mix-kicker">${item.kicker || 'WATCH'}</span><span class="mix-title">${item.title}</span><span class="mix-sub">${item.sub || ''}</span></div>
         <button class="video-facade" data-src="${item.src}" type="button" aria-label="Play ${item.title}">
           <img class="video-thumb" src="${item.poster}" alt="">
           <span class="video-play"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
         </button>`;
      stream.appendChild(sv);
      return;
    }
    if (item.type === 'subscribe') {
      const s = document.createElement('div');
      s.className = 'subscribe reveal';
      s.innerHTML =
        `<span class="sub-kicker">${item.kicker || 'STAY IN THE LOOP'}</span>
         <span class="sub-copy">${item.copy || ''}</span>
         <form class="sub-form" novalidate>
           <input class="sub-email" type="email" inputmode="email" placeholder="you@email.com" aria-label="Email address" required>
           <button class="sub-btn" type="submit">JOIN</button>
         </form>
         <span class="sub-note" hidden>You're on the list ✦</span>`;
      stream.appendChild(s);
      return;
    }
    // link
    li++;
    const a = document.createElement('a');
    a.className = 'card reveal' + (item.featured ? ' is-featured' : '');
    a.href = item.url;
    if (!item.url.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    a.innerHTML =
      `<span class="card-body"><span class="card-title">${item.title}</span><span class="card-sub">${item.sub || ''}</span></span>
       ${arrowSVG}`;
    stream.appendChild(a);
  });

  // mouse-tracking glow
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* -------------------- RELEASE MODULE (canvas + preview player) -------------------- */
function wireReleases() {
  document.querySelectorAll('.release').forEach(rel => {
    const audio = rel.querySelector('.np-audio');
    const btn = rel.querySelector('.np-play');
    const bar = rel.querySelector('.np-bar i');
    const video = rel.querySelector('video.phone-media');

    // Canvas plays only while on screen (autoplay-safe, saves battery)
    if (video && 'IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        entries.forEach(e => e.isIntersecting ? video.play().catch(() => {}) : video.pause());
      }, { threshold: 0.25 }).observe(video);
    }

    if (!audio || !btn) return;

    btn.addEventListener('click', () => {
      if (audio.paused) {
        document.querySelectorAll('.np-audio').forEach(a => { if (a !== audio) a.pause(); });
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    });
    audio.addEventListener('play',  () => { rel.classList.add('is-playing'); btn.setAttribute('aria-label', 'Pause preview'); });
    audio.addEventListener('pause', () => { rel.classList.remove('is-playing'); btn.setAttribute('aria-label', 'Play preview'); });
    audio.addEventListener('ended', () => { rel.classList.remove('is-playing'); if (bar) bar.style.width = '0%'; });
    audio.addEventListener('timeupdate', () => {
      if (bar && audio.duration) bar.style.width = (audio.currentTime / audio.duration * 100) + '%';
    });
  });
}

/* -------------------- VIDEO PREVIEW (YouTube facade — click to play) -------------------- */
function wireVideos() {
  document.querySelectorAll('.video-facade').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      const id = btn.getAttribute('data-yt');
      const frame = document.createElement('div');
      frame.className = 'mix-frame';
      frame.innerHTML = src
        ? `<video src="${src}" controls autoplay playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000"></video>`
        : `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
      btn.replaceWith(frame);
    });
  });
}

/* -------------------- MAILING LIST (front-end only — connect a provider to go live) -------------------- */
function wireSubscribe() {
  document.querySelectorAll('.subscribe').forEach(box => {
    const form = box.querySelector('.sub-form');
    const note = box.querySelector('.sub-note');
    const input = box.querySelector('.sub-email');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!input.checkValidity()) { input.reportValidity(); return; }
      // TODO: connect a provider — point form.action at your Mailchimp / Beehiiv / ConvertKit
      // embedded-form endpoint (method="post") and submit, OR POST input.value to your list API.
      // Until then this only confirms locally — no email is actually stored.
      form.hidden = true;
      note.hidden = false;
    });
  });
}

/* -------------------- PARTICLE FIELD -------------------- */
function particles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return null;
  const ctx = canvas.getContext('2d');
  let w, h, dpr, parts = [], scrollFactor = 0, raf;

  const COUNT = REDUCED ? 0 : (MOBILE ? 40 : 90);

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = Math.floor(innerWidth * dpr);
    h = canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
  }
  function make() {
    parts = [];
    for (let i = 0; i < COUNT; i++) {
      parts.push({
        x: Math.random() * w, y: Math.random() * h,
        r: (Math.random() * 1.6 + 0.4) * dpr,
        vy: (Math.random() * 0.25 + 0.08) * dpr,
        drift: (Math.random() - 0.5) * 0.2 * dpr,
        a: Math.random() * 0.5 + 0.15,
        tw: Math.random() * Math.PI * 2,
        blue: Math.random() > 0.7
      });
    }
  }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    const speed = 1 + scrollFactor * 2.2; // descend faster as you go deeper
    for (const p of parts) {
      p.y -= p.vy * speed;
      p.x += p.drift;
      p.tw += 0.02;
      if (p.y < -8) { p.y = h + 8; p.x = Math.random() * w; }
      if (p.x < -8) p.x = w + 8; if (p.x > w + 8) p.x = -8;
      const alpha = p.a * (0.6 + 0.4 * Math.sin(p.tw));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.blue ? `rgba(123,150,210,${alpha})` : `rgba(220,230,240,${alpha})`;
      ctx.shadowBlur = 6 * dpr; ctx.shadowColor = p.blue ? 'rgba(73,102,159,0.8)' : 'rgba(255,255,255,0.5)';
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    raf = requestAnimationFrame(frame);
  }

  resize(); make();
  if (COUNT > 0) frame();
  addEventListener('resize', () => { resize(); make(); });
  return { setScroll: v => { scrollFactor = v; } };
}

/* -------------------- SCROLL CHOREOGRAPHY -------------------- */
function scroll(field) {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Lenis smooth scroll (skip if reduced motion or lib missing)
  let lenis = null;
  const Lenis = window.Lenis || (window.lenis && window.lenis.default);
  if (!REDUCED && typeof Lenis === 'function') {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  // feed scroll depth to particle field
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate: self => field && field.setScroll(self.progress)
  });

  // reveal on enter
  gsap.utils.toArray('.reveal').forEach(el => {
    ScrollTrigger.create({
      trigger: el, start: 'top 88%',
      onEnter: () => el.classList.add('in'),
      once: true
    });
  });

  // hero parallax + fade
  gsap.to('.hero-inner', {
    yPercent: -18, opacity: 0.25, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  // letterbox recede as you leave the hero
  gsap.to('.letterbox-top', { yPercent: -100, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: '40% top', scrub: true } });
  gsap.to('.letterbox-bottom', { yPercent: 100, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: '40% top', scrub: true } });

  // band photo parallax
  gsap.utils.toArray('[data-parallax]').forEach(img => {
    gsap.fromTo(img, { yPercent: -8 }, {
      yPercent: 8, ease: 'none',
      scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  // back to surface
  document.querySelector('.to-surface')?.addEventListener('click', () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
  });
}

/* -------------------- BOOT -------------------- */
document.addEventListener('DOMContentLoaded', () => {
  render();
  wireReleases();
  wireVideos();
  wireSubscribe();
  const field = particles();
  scroll(field);
});
