// hamburger menu toggle functionality
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



// previous and next buttons for the tech stack carousel
const track = document.getElementById('techTrack');
const prevBtn = document.querySelector('.tech-carousel .prev');
const nextBtn = document.querySelector('.tech-carousel .next');
const dotsEl = document.getElementById('techDots');

function pageWidth() { return track.clientWidth; }
function totalPages() { return Math.max(1, Math.round(track.scrollWidth / pageWidth())); }
function currentPage() { return Math.round(track.scrollLeft / pageWidth()); }

function scrollByPage(dir) {
  track.scrollBy({ left: dir * pageWidth(), behavior: 'smooth' });
}

function buildDots() {
  dotsEl.innerHTML = '';
  const n = totalPages();
  for (let i = 0; i < n; i++) {
    const d = document.createElement('span');
    d.className = 'dot' + (i === currentPage() ? ' active' : '');
    d.addEventListener('click', () => track.scrollTo({ left: i * pageWidth(), behavior: 'smooth' }));
    dotsEl.appendChild(d);
  }
}

function updateDots() {
  [...dotsEl.children].forEach((dot, i) => dot.classList.toggle('active', i === currentPage()));
}

prevBtn.addEventListener('click', () => scrollByPage(-1));
nextBtn.addEventListener('click', () => scrollByPage(1));
track.addEventListener('scroll', () => requestAnimationFrame(updateDots));
window.addEventListener('resize', () => { buildDots(); updateDots(); });

buildDots(); updateDots();


