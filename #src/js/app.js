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

// ===========  Page personal-area toggle link entries ===========================
const linksTab = document.querySelectorAll(".link-nav-tab")
const linksEntries = document.querySelectorAll(".link-entries")

// linksTab.forEach((linkTab) => {
// 	linkTab.addEventListener("click", function (e){
// 		if (e.target.classList.contains("company") || e.target.parentNode.classList.contains("company") || e.target.parentNode.parentNode.classList.contains("company")) {
// 			linksEntries.forEach((link => link.classList.add('hidden')))
// 		} else {
// 			linksEntries.forEach((link => link.classList.remove('hidden')))
// 		}
// 	})
// })

// ===========  Tooltips ===========================
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// ====================   scroll accordion to top   ==========================
$(".item-block__title, .accordion-btn").click(function(){
	$('html, body').animate({
		scrollTop: $(this).offset().top
	}, 300);
});

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