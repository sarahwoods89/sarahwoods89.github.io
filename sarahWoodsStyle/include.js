(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }

  var moonSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var sunSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';

  function updateToggleIcon() {
    var btn = document.getElementById('dark-mode-toggle');
    if (!btn) return;
    var isDark = document.documentElement.classList.contains('dark-mode');
    btn.innerHTML = isDark ? sunSVG : moonSVG;
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function injectPartial(placeholderId, url, callback) {
    var el = document.getElementById(placeholderId);
    if (!el) return;
    fetch(url)
      .then(function (r) { return r.text(); })
      .then(function (html) {
        el.outerHTML = html;
        if (callback) setTimeout(callback, 0);
      });
  }

  function setActiveNav() {
    var path = window.location.pathname;
    var navLinks = document.querySelectorAll('#header-nav a');
    navLinks.forEach(function (a) {
      a.classList.remove('fw-bold');
      var href = a.getAttribute('href');
      if (href === '/') {
        if (path === '/' || path === '/index.html') a.classList.add('fw-bold');
      } else if (path.startsWith(href)) {
        a.classList.add('fw-bold');
      }
    });

    updateToggleIcon();

    var toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark-mode');
        var isDark = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateToggleIcon();
      });
    }

    var burgerBtn = document.getElementById('burger-btn');
    var nav = document.getElementById('header-nav');
    if (burgerBtn && nav) {
      burgerBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = nav.classList.toggle('nav-open');
        burgerBtn.setAttribute('aria-expanded', open);
        burgerBtn.classList.toggle('burger-open', open);
      });
      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target)) {
          nav.classList.remove('nav-open');
          burgerBtn.setAttribute('aria-expanded', 'false');
          burgerBtn.classList.remove('burger-open');
        }
      });
    }
  }

  injectPartial('site-header', '/partials/header.html', setActiveNav);
  injectPartial('site-footer', '/partials/footer.html');
})();
