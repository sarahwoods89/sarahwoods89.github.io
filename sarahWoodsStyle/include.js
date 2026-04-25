(function () {
  // Apply saved theme before paint to prevent flash
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }

  function updateToggleIcon() {
    var btn = document.getElementById('dark-mode-toggle');
    if (!btn) return;
    var isDark = document.documentElement.classList.contains('dark-mode');
    btn.textContent = isDark ? '☀' : '🌙';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function injectPartial(placeholderId, url, callback) {
    var el = document.getElementById(placeholderId);
    if (!el) return;
    fetch(url)
      .then(function (r) { return r.text(); })
      .then(function (html) {
        el.outerHTML = html;
        if (callback) callback();
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
      burgerBtn.addEventListener('click', function () {
        var open = nav.classList.toggle('nav-open');
        burgerBtn.setAttribute('aria-expanded', open);
        burgerBtn.classList.toggle('burger-open', open);
      });
      document.addEventListener('click', function (e) {
        if (!burgerBtn.contains(e.target) && !nav.contains(e.target)) {
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
