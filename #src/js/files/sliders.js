//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

// =============slider Partners  ====================================================
const swiper = new Swiper('.partners', {
	loop: true,
	spaceBetween: 20,
	mousewheel: {
		invert: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	 },
	 autoplay: {
		delay: 2000,
	 },
	 breakpoints: {
		320: {
		  slidesPerView: 1.7,
		},
		400: {
		  slidesPerView: 2.7,
		},
		500: {
		  slidesPerView: 3.7,
		},
		700: {
		  slidesPerView: 4.7,
		},
		900: {
		  slidesPerView: 5.7,
		},
		1100: {
		  slidesPerView: 6.7,
		},
		1300: {
		  slidesPerView: 7.7,
		},
		1500: {
		  slidesPerView: 8.7,
		},
		1700: {
		  slidesPerView: 9.7,
		},
		1920: {
		  slidesPerView: 10.7,
		},
	}
})
// let slider_about = new Swiper('.about__slider', {
// 	/*
// 	effect: 'fade',
// 	autoplay: {
// 		delay: 3000,
// 		disableOnInteraction: false,
// 	},
// 	*/
// 	observer: true,
// 	observeParents: true,
// 	slidesPerView: 1,
// 	spaceBetween: 0,
// 	autoHeight: true,
// 	speed: 800,
// 	//touchRatio: 0,
// 	//simulateTouch: false,
// 	//loop: true,
// 	//preloadImages: false,
// 	//lazy: true,
// 	// Dotts
// 	//pagination: {
// 	//	el: '.slider-quality__pagging',
// 	//	clickable: true,
// 	//},
// 	// Arrows
// 	navigation: {
// 		nextEl: '.about__more .more__item_next',
// 		prevEl: '.about__more .more__item_prev',
// 	},
// 	/*
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 0,
// 			autoHeight: true,
// 		},
// 		768: {
// 			slidesPerView: 2,
// 			spaceBetween: 20,
// 		},
// 		992: {
// 			slidesPerView: 3,
// 			spaceBetween: 20,
// 		},
// 		1268: {
// 			slidesPerView: 4,
// 			spaceBetween: 30,
// 		},
// 	},
// 	*/
// 	on: {
// 		lazyImageReady: function () {
// 			ibg();
// 		},
// 	}
// 	// And if we need scrollbar
// 	//scrollbar: {
// 	//	el: '.swiper-scrollbar',
// 	//},
// });
