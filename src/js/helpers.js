// CREATE SMOOTH SCROLL

function createSmoothScroll(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  const checkIfDone = setInterval(function() {
      const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
          targetAnchor.tabIndex = "-1";
          targetAnchor.focus();
          window.history.pushState("", "", targetID);
          clearInterval(checkIfDone);
      }
  }, 2000);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = createSmoothScroll));

// GET SCROLL UP Button

const upBtn = document.querySelector('.icon-up');
window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 1060) {
        upBtn.classList.add('active');
    } else {
        upBtn.classList.remove('active');
    };
}, {passive: true});

upBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
})