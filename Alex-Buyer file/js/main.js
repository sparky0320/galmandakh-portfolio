$(function() {

  const I18N = {
    mn: {
      status: 'Компанийн багт нээлттэй',
      'home.pre': 'Full-stack хөгжүүлэгч',
      'home.name': 'ГАЛМАНДАХ',
      'home.role': 'Next.js, Laravel, Node.js, Flutter. <span>Figma</span>-аас <span>production</span> хүртэл.',
      'home.cta1': 'Ажлууд үзэх',
      'home.cta2': 'Одоо хийж буй',
      'home.scroll': 'доош',
      'about.badge': 'жил',
      'about.label': 'Хэн бэ',
      'about.title': 'Асуудлыг <span class="accent">задлана,</span><br>системийг хүргэнэ.',
      'about.desc': 'Backend, frontend — full-stack хөгжүүлэгч. Даатгал, төлбөр, POS зэрэг бодит үйл ажиллагаа дээр төлбөрийн хэрэгсэлтэй системийг эхнээс нь дуустал босгож, эсвэл production дээр шинэ модуль болгон хүргэсэн. Next.js, Laravel, Node.js, Flutter.<br><br>Шинэ домэйн, шинэ стекийг хурдан сууж, ажлыг хэрэглэгчид хүртэл авч явдаг. Тодорхой бус асуудлыг задлаад шийдэл гаргах, шинэ санаа гаргаж бүтээгдэхүүнд оруулах нь миний тогтмол ажиллах арга.<br><br>Хиймэл оюун, загвар хөгжүүлэлт, системийн архитектурт чиглэсэн. AI хэрэгслийг өдөр тутмын хөгжүүлэлтэд аль хэдийн ашигладаг. Дараагийн алхам — загвар болон AI-г байгууллагын системд нэгтгэх.',
      'about.p1': 'Хурдан сурч, хүргэнэ',
      'about.p2': 'Шинэ санаа, тодорхой шийдэл',
      'about.p3': 'Хиймэл оюун · загварчлал',
      'work.label': 'Портфолио',
      'work.title': 'Хийсэн ажил',
      'work.all': 'Бүгд',
      'work.feat': 'Feature',
      'work.view': 'Дэлгэрэнгүй',
      'tag.zero': 'Эхнээс дуустал',
      'tag.feat': 'Production · feature',
      'lab.label': 'Хувийн лаборатори',
      'lab.title': 'Одоо хийж буй',
      'lab.now': 'Хийж байна',
      'lab.livebuild': 'Live · хөгжүүлэлт',
      'lab.boardName': 'Оюун тоглоом',
      'lab.note': 'Эдгээр нь захиалгын ажил биш — өөрөө санаачилж хөгжүүлж буй системүүд. WEZAAL нээлттэй, Мөр, оюун тоглоом, Сан AI идэвхтэй явж байна.',
      'skills.label': 'Тоо',
      'skills.title': 'Гараас гарсан',
      'skills.s1': 'Төсөл',
      'skills.s2': 'Мобайл апп',
      'skills.s3': 'Амьд вэб',
      'skills.s4': 'Жил',
      'skills.b1': 'Next.js · Laravel · Node.js',
      'skills.b2': 'Flutter / мобайл',
      'skills.b3': 'POS · KDS · принтер',
      'skills.b4': 'Figma · Photoshop · Illustrator',
      'svc.label': 'Юу хийдэг вэ',
      'svc.title': 'Үйлчилгээ',
      'svc.n1': 'Full-stack вэб',
      'svc.d1': 'Next.js, Laravel, Node.js. Landing, LMS, дашбоард, QPay төлбөр — эхнээс нь бүтэн систем.',
      'svc.n2': 'Flutter апп',
      'svc.d2': 'Miniapp, POS, marketplace. iOS & Android дээр хөгжүүлэлт.',
      'svc.n3': 'POS · KDS · принтер',
      'svc.d3': 'Цаг бүртгэл, kitchen display, custom принтер, касс. Амьд цэг дээр ажилладаг систем.',
      'svc.n4': 'Эхнээс дуустал',
      'svc.d4': 'Хоосон хуудаснаас систем босгоно. Даатгал, LMS, landing, miniapp.',
      'svc.n5': 'Production feature',
      'svc.d5': 'Амьд систем дээр шинэ модуль нэмнэ. ClickUp / Trello-оор явц барина.',
      'svc.n6': 'Хиймэл оюун · загварчлал',
      'svc.d6': 'Загвар хөгжүүлэх, архитектурыг бодох чиглэлтэй. Шинэ орчинд хурдан сууж, санаа гаргаад шийдэл хүргэнэ.',
      'contact.label': 'Холбоо барих',
      'contact.title': 'Надтай холбогдоорой',
      'contact.sub': 'Баг эсвэл байгууллагатай шууд холбогдоорой — утас, имэйл, GitHub.',
      'contact.phone': 'Утас',
      'contact.email': 'Имэйл',
      'modal.role': 'Үүрэг',
      'modal.year': 'Он',
      'modal.stack': 'Технологи',
      'modal.live': 'Нээх',
      'modal.store': 'Апп дэлгүүр',
      'modal.more': 'Экосистем'
    },
    en: {
      status: 'Open to company teams',
      'home.pre': 'Full-stack developer',
      'home.name': 'GALMANDAKH',
      'home.role': 'Next.js, Laravel, Node.js, Flutter. From <span>Figma</span> to <span>production</span>.',
      'home.cta1': 'View work',
      'home.cta2': 'Now building',
      'home.scroll': 'scroll',
      'about.badge': 'years',
      'about.label': 'Who I am',
      'about.title': 'I <span class="accent">frame the problem</span><br>and deliver the system.',
      'about.desc': 'Full-stack engineer — backend and frontend. I have shipped payment-backed systems in insurance, commerce and operations: from a blank page to live, and as new modules on products already in production. Next.js, Laravel, Node.js, Flutter.<br><br>I ramp on a new domain or stack quickly and stay until the work is in users’ hands. I am strongest at turning an unclear brief into a shippable design, and at proposing the idea that unblocks the team.<br><br>I am building toward applied AI — model development and system architecture. I already use AI tooling in daily engineering. Next: putting models into the systems companies actually run.',
      'about.p1': 'Fast ramp-up, then delivery',
      'about.p2': 'New ideas, concrete solutions',
      'about.p3': 'Applied AI · architecture',
      'work.label': 'Portfolio',
      'work.title': 'Selected work',
      'work.all': 'All',
      'work.feat': 'Feature',
      'work.view': 'View details',
      'tag.zero': '0 → 1',
      'tag.feat': 'Production · feature',
      'lab.label': 'Personal lab',
      'lab.title': 'Now building',
      'lab.now': 'In progress',
      'lab.livebuild': 'Live · building',
      'lab.boardName': 'Mind Games',
      'lab.note': 'These are not client briefs — systems I started myself. WEZAAL is live; Mör, the board-game site and San AI are in progress.',
      'skills.label': 'Numbers',
      'skills.title': 'Shipped',
      'skills.s1': 'Projects',
      'skills.s2': 'Mobile apps',
      'skills.s3': 'Live sites',
      'skills.s4': 'Years',
      'skills.b1': 'Next.js · Laravel · Node.js',
      'skills.b2': 'Flutter / mobile',
      'skills.b3': 'POS · KDS · printer',
      'skills.b4': 'Figma · Photoshop · Illustrator',
      'svc.label': 'What I do',
      'svc.title': 'Services',
      'svc.n1': 'Full-stack web',
      'svc.d1': 'Next.js, Laravel, Node.js. Landings, LMS, dashboards, QPay — a full system from zero.',
      'svc.n2': 'Flutter apps',
      'svc.d2': 'Miniapps, POS, marketplaces. iOS & Android.',
      'svc.n3': 'POS · KDS · printer',
      'svc.d3': 'Time clock, kitchen display, custom printers, cash. Systems that run on the floor.',
      'svc.n4': '0 → 1 builds',
      'svc.d4': 'Stand a system up from a blank page. Insurance, LMS, landings, miniapps.',
      'svc.n5': 'Production features',
      'svc.d5': 'New modules on systems already live. Progress tracked in ClickUp / Trello.',
      'svc.n6': 'Applied AI · architecture',
      'svc.d6': 'Directed toward model development and system design. I ramp fast in a new environment and turn ideas into shipped solutions.',
      'contact.label': 'Contact',
      'contact.title': 'Get in touch',
      'contact.sub': 'For a team or a company — call, email, or GitHub. No form.',
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'modal.role': 'Role',
      'modal.year': 'Year',
      'modal.stack': 'Stack',
      'modal.live': 'Open',
      'modal.store': 'App store',
      'modal.more': 'Ecosystem'
    }
  };

  let lang = localStorage.getItem('pf-lang') || 'mn';
  const qlang = new URLSearchParams(window.location.search).get('lang');
  if (qlang === 'mn' || qlang === 'en') lang = qlang;
  if (lang !== 'mn' && lang !== 'en') lang = 'mn';

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.mn[key] || key;
  }

  function applyLang() {
    $('html').attr('lang', lang);
    document.title = lang === 'mn'
      ? 'Галмандах — Full-stack хөгжүүлэгч'
      : 'Galmandakh — Full-stack Developer';

    $('[data-i18n]').each(function() {
      const key = $(this).data('i18n');
      $(this).text(t(key));
    });
    $('[data-i18n-html]').each(function() {
      const key = $(this).data('i18n-html');
      $(this).html(t(key));
    });
    $('[data-i18n-placeholder]').each(function() {
      const key = $(this).data('i18n-placeholder');
      $(this).attr('placeholder', t(key));
    });

    $('.nav-dot').each(function() {
      const label = $(this).data('label-' + lang);
      if (label) {
        $(this).attr('data-label', label);
        this.style.setProperty('--label', '"' + label + '"');
      }
    });

    const name = t('home.name');
    $('.glitch-wrap').attr('data-text', name);
    $('.home-name').text(name);

    $('.lang-btn').removeClass('active');
    $('.lang-btn[data-lang="' + lang + '"]').addClass('active');
  }

  applyLang();

  $('.lang-btn').on('click', function() {
    lang = $(this).data('lang');
    localStorage.setItem('pf-lang', lang);
    applyLang();
  });

  let current = 0;
  const total = 7;
  let animating = false;

  let mx = 0, my = 0, rx = 0, ry = 0, hoverScale = 1, cursorReady = false;
  const $dot = $('#cursor');
  const $ring = $('#cursor-ring');
  const dotEl = $dot[0];
  const ringEl = $ring[0];

  window.addEventListener('pointermove', function(e) {
    mx = e.clientX;
    my = e.clientY;
    if (!cursorReady) {
      rx = mx;
      ry = my;
      cursorReady = true;
    }
  }, { passive: true });

  (function tickCursor() {
    rx += (mx - rx) * 0.78;
    ry += (my - ry) * 0.78;
    if (dotEl) {
      dotEl.style.transform = 'translate3d(' + mx + 'px,' + my + 'px,0) translate(-50%,-50%) scale(' + hoverScale + ')';
    }
    if (ringEl) {
      ringEl.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0) translate(-50%,-50%)';
    }
    requestAnimationFrame(tickCursor);
  })();

  $('a, button, .nav-dot, .project-card, .service-card, .social-btn, .btn-glow, .btn-outline-glow, .lang-btn, .wf-btn, .contact-link').on('mouseenter', function() {
    hoverScale = 2.1;
    $dot.css({ background: 'var(--accent2)' });
    $ring.css({ width: '52px', height: '52px', opacity: '.35' });
  }).on('mouseleave', function() {
    hoverScale = 1;
    $dot.css({ background: 'var(--accent)' });
    $ring.css({ width: '34px', height: '34px', opacity: '.7' });
  });

  function scrollEl() {
    return $('#sec-' + current).find('.section-content.scrollable')[0];
  }

  window.goTo = function(idx) {
    if (animating || idx === current || idx < 0 || idx >= total) return;
    animating = true;
    const dir = idx > current ? 1 : -1;
    const cur = document.getElementById('sec-' + current);
    const next = document.getElementById('sec-' + idx);
    if (!cur || !next) { animating = false; return; }

    next.style.transition = 'none';
    next.style.transform = 'translate3d(0,' + (dir * 48) + 'px,0)';
    next.style.opacity = '0';
    void next.offsetHeight;
    next.style.transition = '';
    next.classList.add('active');
    next.style.transform = 'translate3d(0,0,0)';
    next.style.opacity = '1';

    cur.style.transform = 'translate3d(0,' + (dir * -40) + 'px,0)';
    cur.style.opacity = '0';
    cur.classList.remove('active');

    const $sc = $(next).find('.section-content.scrollable');
    if ($sc.length) $sc.scrollTop(0);

    $('.nav-dot').removeClass('active');
    $('[data-section="' + idx + '"]').addClass('active');
    current = idx;

    window.setTimeout(function() {
      cur.style.transform = '';
      cur.style.opacity = '';
      next.style.transform = '';
      next.style.opacity = '';
      next.style.transition = '';
      animating = false;
      onSectionActive(idx);
    }, 720);
  };

  function onSectionActive(idx) {
    if (idx === 4) {
      $('.counter').each(function() {
        const $this = $(this);
        const target = parseInt($this.data('target'), 10);
        $({ n: 0 }).animate({ n: target }, {
          duration: 1600, easing: 'swing',
          step: function() { $this.text(Math.floor(this.n)); },
          complete: function() { $this.text(target); }
        });
      });
      $('.skill-bar-fill').each(function() {
        $(this).css('width', $(this).data('width') + '%');
      });
    }
  }

  $('.nav-dot').on('click', function() {
    goTo(parseInt($(this).data('section'), 10));
  });

  let lastWheel = 0;
  let edgeLock = 0;
  window.addEventListener('wheel', function(e) {
    if ($('#proj-modal').hasClass('open')) return;
    const el = scrollEl();
    if (el && el.scrollHeight > el.clientHeight + 4) {
      const atTop = el.scrollTop <= 1;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
      if (e.deltaY > 0 && !atBottom) { edgeLock = 0; return; }
      if (e.deltaY < 0 && !atTop) { edgeLock = 0; return; }
      edgeLock += 1;
      if (edgeLock < 2) return;
    }
    const now = Date.now();
    if (now - lastWheel < 780) return;
    lastWheel = now;
    edgeLock = 0;
    e.preventDefault();
    if (e.deltaY > 0) goTo(current + 1);
    else goTo(current - 1);
  }, { passive: false });

  let touchStartY = 0;
  $(document).on('touchstart', function(e) {
    touchStartY = e.originalEvent.touches[0].clientY;
  });
  $(document).on('touchend', function(e) {
    const el = scrollEl();
    if (el && el.scrollHeight > el.clientHeight + 4) return;
    const diff = touchStartY - e.originalEvent.changedTouches[0].clientY;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goTo(current + 1);
      else goTo(current - 1);
    }
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(current + 1);
    if (e.key === 'ArrowUp' || e.key === 'PageUp') goTo(current - 1);
  });

  gsap.fromTo('#sec-0 .section-content',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: .3 }
  );
  gsap.fromTo('#topbar',
    { y: -30, opacity: 0 },
    { y: 0, opacity: 1, duration: .8, ease: 'power3.out', delay: .5 }
  );
  gsap.fromTo('#main-nav',
    { x: 30, opacity: 0 },
    { x: 0, opacity: 1, duration: .8, ease: 'power3.out', delay: .7 }
  );

  const bootSection = parseInt(new URLSearchParams(window.location.search).get('s') || '0', 10);
  if (bootSection > 0 && bootSection < total) {
    setTimeout(function() { goTo(bootSection); }, 400);
  }

  $(document).on('mousemove', function(e) {
    const cx = e.clientX / window.innerWidth - .5;
    const cy = e.clientY / window.innerHeight - .5;
    gsap.to('.orb-1', { x: cx * 40, y: cy * 40, duration: 2, ease: 'power1.out' });
    gsap.to('.orb-2', { x: cx * -30, y: cy * -30, duration: 2, ease: 'power1.out' });
    gsap.to('.orb-3', { x: cx * 20, y: cy * 20, duration: 2, ease: 'power1.out' });
  });

  $('.wf-btn').on('click', function() {
    const f = $(this).data('filter');
    $('.wf-btn').removeClass('active');
    $(this).addClass('active');
    $('#sec-2 .project-card').each(function() {
      const kinds = String($(this).data('filter') || '').split(/\s+/);
      const show = f === 'all' || kinds.indexOf(String(f)) !== -1;
      $(this).toggleClass('is-hidden', !show);
    });
  });

  function openModal(card) {
    const $c = $(card);
    const suffix = lang === 'en' ? 'en' : 'mn';
    const title = $c.data('title-' + suffix) || $c.data('title-mn');
    const img   = $c.data('img');
    const tags  = String($c.data('tags-' + suffix) || $c.data('tags-mn') || '').split(',');
    const desc  = $c.data('desc-' + suffix) || $c.data('desc-mn');
    const role  = $c.data('role-' + suffix) || $c.data('role-mn');
    const year  = $c.data('year');
    const stack = $c.data('stack');
    const live  = $c.attr('data-live') || '';
    const store = $c.attr('data-store') || '';
    let more = [];
    try {
      const raw = $c.attr('data-more');
      if (raw) more = JSON.parse(raw);
    } catch (err) { more = []; }

    $('#modal-img').attr('src', img);
    $('#modal-title').text(title);
    $('#modal-desc').text(desc);
    $('#modal-role').text(role);
    $('#modal-year').text(year);
    $('#modal-stack').text(stack);

    if (more.length) {
      $('#modal-live, #modal-store').addClass('is-hidden').attr('href', '#');
      const moreHtml = more.map(function(item) {
        const label = lang === 'en' ? (item.en || item.mn) : (item.mn || item.en);
        const icon = (item.href || '').indexOf('play.google') !== -1
          ? 'bi-google-play'
          : 'bi-box-arrow-up-right';
        return '<a class="mbtn-secondary" href="' + item.href + '" target="_blank" rel="noopener"><i class="bi ' + icon + '"></i> ' + label + '</a>';
      }).join('');
      $('#modal-more').html(
        '<div class="modal-more-label">' + t('modal.more') + '</div><div class="modal-more-row">' + moreHtml + '</div>'
      ).prop('hidden', false);
    } else {
      $('#modal-more').empty().prop('hidden', true);
      if (live) {
        $('#modal-live').attr('href', live).removeClass('is-hidden');
      } else {
        $('#modal-live').addClass('is-hidden').attr('href', '#');
      }
      if (store) {
        $('#modal-store').attr('href', store).removeClass('is-hidden');
      } else {
        $('#modal-store').addClass('is-hidden').attr('href', '#');
      }
    }

    const chipsHtml = tags.filter(Boolean).map(function(tag) {
      return '<span class="modal-chip">' + $.trim(tag) + '</span>';
    }).join('');
    $('#modal-chips').html(chipsHtml);

    $('#proj-modal').addClass('open');
    $('body').css('overflow', 'hidden');
  }

  function closeModal() {
    $('#proj-modal').removeClass('open');
    $('body').css('overflow', '');
  }

  $(document).on('click', '.project-card', function() { openModal(this); });
  $('#modal-close, #modal-backdrop').on('click', closeModal);
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

});
