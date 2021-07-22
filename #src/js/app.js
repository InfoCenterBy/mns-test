const btnShowBlock = document.querySelectorAll('._btn-toggle');
const closeBlock = document.querySelector('.header-special__btn-close');
const body = document.querySelector('body');
const overlay = document.querySelector('.header__overlay');

btnShowBlock.forEach(item => {
	item.addEventListener('click', function (){
		if (item.classList.contains("show-block")) {
			item.classList.remove('show-block');
			overlay.classList.remove('_active');
		} else {
			addClass(item);
		}
	})
})

function addClass(currentItem) {
	btnShowBlock.forEach((item) => {
		item.classList.remove('show-block');
		overlay.classList.remove('_active');
	})
	item = currentItem;
	item.classList.add('show-block');
	overlay.classList.add('_active');
}

document.addEventListener('click', function(e){
	if (!e.target.closest('.hidden-block, ._btn-toggle')) {
		btnShowBlock.forEach(item => {
			if (item.classList.contains('show-block')) {
				item.classList.remove('show-block');
			}
		})
		overlay.classList.remove('_active');
	}
})

closeBlock.addEventListener('click', function(e){
	btnShowBlock.forEach((item) => {
		item.classList.remove('show-block');
	})
	overlay.classList.remove('_active');
})

const btnToggleTheme = document.querySelector('.nav-header__toggle-theme');
const cntTheme = document.querySelector('.nav-header__nav');

btnToggleTheme.addEventListener('click', function (){
	cntTheme.classList.toggle('_black');
})

const btnToggleThemeSpecial = document.querySelector('.header-special__toggle-theme');
const cntThemeSpecial = document.querySelector('.header-special__block');

// const btnShowAccardeon = document.querySelector('.ref-info__btn');
// const wrapperDrop = document.querySelector('.ref-info-drop');
// btnShowAccardeon.addEventListener('click', function (){
// 	btnShowAccardeon.classList.toggle('show-block');
// 	wrapperDrop.classList.toggle('show-block');
// });

btnToggleThemeSpecial.addEventListener('click', function (){
	cntThemeSpecial.classList.toggle('_black');
})

let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}


$(function(){

	$('.language-select').click(function(){
		$(this).toggleClass('open');
	})
		
	$('.language-select__item').click(function(){
	var setLang = $('.language-select').data('location'),
			dataLangSelect = $(this).data('lang')
			$('.language-select').data('location', dataLangSelect);
			$('.language-select__item').removeClass('_active');
			$(this).toggleClass('_active');
	})

	$('.partners__slider').slick({
		infinite: true,
		arrows: false,
		dots: false,
		slidesToShow: 11,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 9,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 7,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 565,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 475,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});
});