(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav-links');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var box = document.getElementById('lightbox');
  var big = document.getElementById('lightbox-img');
  var closeBtn = box ? box.querySelector('.close-btn') : null;
  var lastFocus = null;

  function openBox(src, alt) {
    lastFocus = document.activeElement;
    big.src = src;
    big.alt = alt || 'عرض مكبر';
    box.hidden = false;
    closeBtn.focus();
  }
  function closeBox() {
    box.hidden = true;
    big.src = '';
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var img = item.querySelector('img');
      openBox(item.getAttribute('data-src'), img ? img.alt : '');
    });
  });
  if (box) {
    box.addEventListener('click', function (e) {
      if (e.target !== big) closeBox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !box.hidden) closeBox();
    });
  }
})();
