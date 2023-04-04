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

/* PLAY BUTTON */

const containerConcentracion = document.querySelectorAll(
	'.card-concentracion'
);
const containerSpotifyPlaylists = document.querySelectorAll(
	'.card-spotify-playlists'
);

// Function to repeat
const createButton = card => {
	// Button creation
	const button = document.createElement('button');
	button.innerHTML = '<i class="fa-solid fa-play"></i>';

	// Add button
	card.appendChild(button);

	// Hide button
	button.style.display = 'none';
	button.classList.add('btn-play');

	// Hover effect
	card.addEventListener('mouseover', () => {
		button.style.display = 'block';
	});

	card.addEventListener('mouseout', () => {
		button.style.display = 'none';
	});
};

// ForEach per rows of cards
containerConcentracion.forEach(card => {
	createButton(card);
});

containerSpotifyPlaylists.forEach(card => {
	createButton(card);
});