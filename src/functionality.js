(function () {

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('body').insertAdjacentHTML('beforeend', `<div class="root"></div>`)
  });

  const displayOnResize = () => {
    if (window.matchMedia("(width<=375px)").matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelectorAll('.flexing').forEach(item => {
        item.classList.remove('flex-row');
        item.classList.add('flex-col');
      })
      document.querySelectorAll('.card').forEach(item => {
        item.classList.add('center');
      })
      document.querySelector('.footer').classList.add('flex-col');
      document.querySelector('.footer').classList.add('center');
      document.querySelector('.floating-left').classList.remove('left');
      document.querySelector('.floating-right').classList.remove('right');
      document.querySelector('.headings').classList.add('center');
    }
    if (window.matchMedia("(width>375px)").matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelectorAll('.flexing').forEach(item => {
        item.classList.remove('flex-col');
        item.classList.add('flex-row');
      })
      document.querySelectorAll('.card').forEach(item => {
        item.classList.remove('center');
      })
      document.querySelector('.footer').classList.remove('flex-col');
      document.querySelector('.footer').classList.remove('center');
      document.querySelector('.floating-left').classList.add('left');
      document.querySelector('.floating-right').classList.add('right');
      document.querySelector('.headings').classList.remove('center');
    }
  }

  // ----- WINDOW ON RESIZE FUNCTION WITH TIMEOUT DEBOUNCING TECHNIQUE ------

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(displayOnResize(), 500);
  });
})();