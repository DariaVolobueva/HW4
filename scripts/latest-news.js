document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.news__content');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 2) + window.scrollY;
		scrollItems.forEach(element => {
			let scrollOffset = element.offsetTop - 50;
			if (windowCenter >= scrollOffset) {
				element.classList.add('animation-class');
			} else {
				element.classList.remove('animation-class');
			}
		});
	};

	scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation();
	});
});