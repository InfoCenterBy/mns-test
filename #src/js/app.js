'use strict';
// ==================  polyfill for method Closest  ================================
(function(ELEMENT) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
	ELEMENT.closest = ELEMENT.closest || function closest(selector) {
		if (!this) return null;
		if (this.matches(selector)) return this;
		if (!this.parentElement) {return null}
			else return this.parentElement.closest(selector)
		};
}(Element.prototype));

// ===================  Toggle block menu  ========================================
const btnShowBlock = document.querySelectorAll('._btn-toggle');
const closeBlock = document.querySelector('.header-special__btn_close');
const body = document.querySelector('body');
const overlay = document.querySelector('.header__overlay');

Array.prototype.slice.call(btnShowBlock).forEach(function(item) {
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
	Array.prototype.slice.call(btnShowBlock).forEach(function(item) {
		item.classList.remove('_show-block');
		overlay.classList.remove('_active');
		item = currentItem;
		item.classList.add('_show-block');
		overlay.classList.add('_active');
	})
}

document.addEventListener('click', function(e){
	if (!e.target.closest('.hidden-block, ._btn-toggle')) {
		Array.prototype.slice.call(btnShowBlock).forEach(function(item) {
			if (item.classList.contains('_show-block')) {
				item.classList.remove('_show-block');
			}
		})
		overlay.classList.remove('_active');
	}
})

closeBlock.addEventListener('click', function(e){
	Array.prototype.slice.call(btnShowBlock).forEach(function(item) {
		item.classList.remove('_show-block');
	})
	overlay.classList.remove('_active');
})

// ===========  Toggle theme nav-header ===========================
$('.nav-header__toggle-theme').click(function (){
	$('.nav-header__nav').toggleClass('_black');
})

// ===========  Toggle theme header-special =======================
$('.header-special__btn_toggle-theme').click(function (){
	$('.header-special__wrapper').toggleClass('_black');
})

// ===========  Toggle language ===========================
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
});

// =============  Function ibg  ====================================================
function ibg() {
	let ibg = document.querySelectorAll("._ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();

// ================   Tab To DropDown   ==============================================
(function( $ ) {
	$.fn.tabConvert = function(options) {

		var settings = $.extend({
			activeClass: "active",
			screenSize: 767,
		}, options );

		return this.each(function(i) {
			var wrap = $(this).wrap('<div class="tab-to-dropdown"></div>'),
					currentItem = $(this),
					container = $(this).closest('.tab-to-dropdown'),
					value = $(this).find('.'+settings.activeClass).text(),
					toggler = '<button class="selected-tab">'+ value +'</button>';
			currentItem.addClass('converted-tab');
			container.prepend(toggler);
			
			function tabConvert_toggle(){
				currentItem.parent().find('.converted-tab').slideToggle(0);
			}

			container.find('.selected-tab').click(function(){
				tabConvert_toggle();
			});
			
			currentItem.find('a').click(function(e){
				var windowWidth = window.innerWidth;
				if( settings.screenSize >= windowWidth){
					tabConvert_toggle();
					var selected_text = $(this).text();
					$(this).closest('.tab-to-dropdown').find('.selected-tab').text(selected_text);
				}
			});
			
			function resize_function(){
				var windowWidth = window.innerWidth;
				if( settings.screenSize >= windowWidth){
					currentItem.css('display','none');
					currentItem.parent().find('.selected-tab').css('display','');
				}else{
					currentItem.css('display','');
					currentItem.parent().find('.selected-tab').css('display','none');
				}
			}
			resize_function();
			
			$(window).resize(function(){
				resize_function();
			});
			
		});
	};
  
// 	Toggle will appear on size 767px
	$('.nav-tab').tabConvert({
			activeClass: "active",
			screenSize: 767,
	});

}( jQuery ));

// ===========  Sticky Sidebar ===========================
const sidebarBlock = document.querySelector(".sidebar")
if (sidebarBlock) {
	var sidebar = new StickySidebar(sidebarBlock, {
		topSpacing: 20,
		bottomSpacing: 20
	});
	sidebar.updateSticky();
}

// ===========  Page personal-area, toggle link entries ===========================
const linksTab = document.querySelectorAll(".link-nav-tab")
const linksEntries = document.querySelectorAll(".link-entries")

Array.prototype.slice.call(linksTab).forEach(function(linkTab) {
	linkTab.addEventListener("click", function (e){
		if (e.target.classList.contains("company") || e.target.parentNode.classList.contains("company") || e.target.parentNode.parentNode.classList.contains("company")) {
			Array.prototype.slice.call(linksEntries).forEach(function(link) {
				link.classList.add('hidden');
			})
		} else {
			Array.prototype.slice.call(linksEntries).forEach(function(link) {
				link.classList.remove('hidden');
			})
		}
	})
})

// ===========  Tooltips ===========================
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// ====================   scroll accordion to top   ==========================
$('#accordionMns').on('shown.bs.collapse', function(event) {
	$('html, body').animate({
	  scrollTop: $(event.target).parent().offset().top
	}, 400);
 });
// $(".item-block__title, .accordion-btn").click(function(){
// 	$('html, body').animate({
// 		scrollTop: $(this).offset().top
// 	}, 300);
// });

// ================================================================================

  //hide all tabs first
  $('.select-tab-content').hide();
  //show the first tab content
  $('#select-tab-1').show();
  
  $('#select-tab-box').change(function () {
	  dropdown = $('#select-tab-box').val();
	 //first hide all tabs again when a new option is selected
	 $('.select-tab-content').hide();
	 //then show the tab content of whatever option value was selected
	 $('#' + "select-tab-" + dropdown).show(); 
  });

  // =============  Main Slider   =================================
$('.partners').slick({
	infinite: true,
	slidesToShow: 11,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: false,
	responsive: [
		{
			breakpoint: 1250,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 565,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}