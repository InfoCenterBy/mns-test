const btnShowBlock = document.querySelectorAll('._btn-toggle');
const closeBlock = document.querySelector('.header-special__btn_close');
const body = document.querySelector('body');
const overlay = document.querySelector('.header__overlay');

btnShowBlock.forEach(item => {
	item.addEventListener('click', function (){
		if (item.classList.contains("_show-block")) {
			item.classList.remove('_show-block');
			overlay.classList.remove('_active');
		} else {
			addClass(item);
		}
	})
})

function addClass(currentItem) {
	btnShowBlock.forEach((item) => {
		item.classList.remove('_show-block');
		overlay.classList.remove('_active');
	})
	item = currentItem;
	item.classList.add('_show-block');
	overlay.classList.add('_active');
}

document.addEventListener('click', function(e){
	if (!e.target.closest('.hidden-block, ._btn-toggle')) {
		btnShowBlock.forEach(item => {
			if (item.classList.contains('_show-block')) {
				item.classList.remove('_show-block');
			}
		})
		overlay.classList.remove('_active');
	}
})

closeBlock.addEventListener('click', function(e){
	btnShowBlock.forEach((item) => {
		item.classList.remove('_show-block');
	})
	overlay.classList.remove('_active');
})

// const btnShowAccardeon = document.querySelector('.ref-info__btn');
// const wrapperDrop = document.querySelector('.ref-info-drop');
// btnShowAccardeon.addEventListener('click', function (){
// 	btnShowAccardeon.classList.toggle('_show-block');
// 	wrapperDrop.classList.toggle('_show-block');
// });


// ===========  Toggle theme nav-header ===========================
$('.nav-header__toggle-theme').click(function (){
	$('.nav-header__nav').toggleClass('_black');
})

// ===========  Toggle theme header-special =======================
$('.header-special__btn_toggle-theme').click(function (){
	$('.header-special__wrapper').toggleClass('_black');
})




$(function(){

	$('.language-select').click(function(){
		$(this).toggleClass('open');
	})

	$(document).click(function (e) {
		let s = $('.language-select');
		if (!s.is(e.target)) {
         s.removeClass('open');
      }
   });
		
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

function ibg() {
	let ibg = document.querySelectorAll("._ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();