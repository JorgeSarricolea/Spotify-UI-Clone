const topBar = document.querySelector('.topbar');

// Change opacity with Scroll
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		topBar.classList.add('transparent');
	} else {
		topBar.classList.remove('transparent');
	}
});

// Topbar high keeper
let topbarHeight = topBar.offsetHeight;
// Add a height based paddingTop to the main content
const mainContent = document.querySelector('.main-content');
mainContent.style.paddingTop = `${topbarHeight + 20}px`;