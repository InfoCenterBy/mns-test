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
});;
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
;
jQuery(document).ready(function($){
    $.bvi({
        'bvi_target' : '.bvi-open', // Класс ссылки включения плагина
        "bvi_theme" : "white", // Цвет сайта
        "bvi_font" : "arial", // Шрифт
        "bvi_font_size" : 16, // Размер шрифта
        "bvi_letter_spacing" : "normal", // Межбуквенный интервал
        "bvi_line_height" : "normal", // Междустрочный интервал
        "bvi_images" : false, // Изображения
        "bvi_reload" : false, // Перезагрузка страницы при выключении плагина
        "bvi_fixed" : false, // Фиксирование панели для слабовидящих вверху страницы
        "bvi_tts" : true, // Синтез речи
        "bvi_flash_iframe" : true, // Встроенные элементы (видео, карты и тд.)
        "bvi_hide" : false // Скрывает панель для слабовидящих и показывает иконку панели.
    });
});;
/*!
 * Button visually impaired v2.0
 */
(function ($) {
    "use strict";
    $.bvi = function (options) {
        var default_setting = $.extend({
            'bvi_target': '.bvi-open',
            'bvi_theme': 'white',
            'bvi_font': 'arial',
            'bvi_font_size': 16,
            'bvi_letter_spacing': 'normal',
            'bvi_line_height': 'normal',
            'bvi_images': true,
            'bvi_reload': false,
            'bvi_fixed': true,
            'bvi_tts': true,
            'bvi_flash_iframe': true,
            'bvi_hide': false
        }, options);

        var versionIE = detectIE();
        var selector = default_setting.bvi_target;
        var check_bvi_theme;
        var check_bvi_font;
        var check_bvi_letter_spacing;
        var check_bvi_line_height;
        var check_bvi_font_size;
        var check_bvi_images;
        var check_bvi_fixed;
        var check_bvi_tts;
        var check_bvi_flash_iframe;
        var check_bvi_hide;
        var checkError;
        var bvi_tts_synth = window.speechSynthesis;
        var bvi_tts_support_browser = (bvi_tts_synth !== undefined) ? true : false;
        var sm = '576';
        var md = '768';
        var lg = '992';
        var xl = '1200';
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        console.log('Bvi console: ready Button visually impaired v2.0');

        if (bvi_tts_support_browser) {
            setInterval(function () {
                if (bvi_tts_synth.speaking == false) {
                    $('.bvi-tts-play').removeClass('disabled');
                    $('.bvi-tts-pause').addClass('disabled');
                    $('.bvi-tts-resume').addClass('disabled');
                    $('.bvi-tts-stop').addClass('disabled');
                }
            }, 1000);
            console.log('Bvi console: Чтение речи поддерживается в данной браузере');
        } else {
            console.log('Bvi console: Чтение речи не поддерживается в данном браузере');
        }

        $(window).on('resize', function () {
            var width_resize = (window.innerWidth > 0) ? window.innerWidth : screen.width;

            if (width_resize >= lg) {
                $('.bvi-panel-container').show();
            }

            if (width_resize <= lg) {
                $('.bvi-panel-container').removeClass('bvi-container').addClass('bvi-container-fluid');
            } else {
                $('.bvi-panel-container').removeClass('bvi-container-fluid').addClass('bvi-container');
            }
        });

        function detectIE() {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf('MSIE ');

            if (msie > 0) {
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }

            return false;
        }

        function bvi_tts_speak(text) {
            if (Cookies.get('bvi-tts') === 'true' && bvi_tts_support_browser) {
                bvi_tts_synth.cancel();
                var voices = bvi_tts_synth.getVoices();
                var chunkLength = 120;
                var pattRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
                var $array = [];
                var $text = text;

                while ($text.length > 0) {
                    $array.push($text.match(pattRegex)[0]);
                    $text = $text.substring($array[$array.length - 1].length);
                }

                $.each($array, function () {
                    var speechUtterance = new SpeechSynthesisUtterance(this.trim());
                    speechUtterance.volume = 1;
                    speechUtterance.rate = 1;
                    speechUtterance.pitch = 1;
                    speechUtterance.lang = 'ru-RU';

                    speechUtterance.onstart = function (event) {
                        console.log(speechUtterance);
                        //console.log('Start called for: ' + event.utterance.text + '-' + event.charIndex);
                    };

                    speechUtterance.onend = function (event) {
                        //console.log(event.name + ' end ' + event.elapsedTime + ' milliseconds.');
                    };

                    speechUtterance.onpause = function (event) {
                        //console.log(event.name + ' pause ' + event.elapsedTime + ' milliseconds.');
                    };

                    speechUtterance.onresume = function (event) {
                        //console.log(event.name + ' resume ' + event.elapsedTime + ' milliseconds.');
                    };

                    speechUtterance.onboundary = function (event) {
                        /*
                        var world = bvi_getWordAt(event.utterance.text, event.charIndex);
                        var src_str = $(id).text();
                        var term = world.replace(/(\s+)/, "(<[^>]+>)*$1(<[^>]+>)*");
                        var pattern = new RegExp("(" + term + ")", "gi");
                        src_str = src_str.replace(pattern, "<mark>$1</mark>");
                        src_str = src_str.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/, "$1</mark>$2<mark>$4");
                        $(id).html(src_str);
                        console.log(event.utterance.text);
                        */
                    };

                    for (var i = 0; i < voices.length; i++) {
                        if (voices[i].lang === 'ru-RU' && voices[i].voiceURI === 'Google русский') {
                            speechUtterance.voice = voices[i];
                            speechUtterance.voiceURI = voices[i].voiceURI;
                        } else if (voices[i].lang === 'ru-RU' && voices[i].voiceURI === 'Microsoft Irina Desktop - Russian') {
                            speechUtterance.voice = voices[i];
                            speechUtterance.voiceURI = voices[i].voiceURI;
                        } else if (voices[i].lang === 'ru-RU' && voices[i].voiceURI === 'urn:moz-tts:sapi:Microsoft Irina Desktop - Russian?ru-RU') {
                            speechUtterance.voice = voices[i];
                            speechUtterance.voiceURI = voices[i].voiceURI;
                        } else if (voices[i].lang === 'ru-RU' && voices[i].voiceURI === 'com.apple.speech.synthesis.voice.yuri') {
                            speechUtterance.voice = voices[i];
                            speechUtterance.voiceURI = voices[i].voiceURI;
                        }
                    }

                    bvi_tts_synth.speak(speechUtterance);
                });
            }
        }

        function bvi_getWordAt(str, pos) {
            str = String(str);
            pos = Number(pos) >>> 0;
            var left = str.slice(0, pos + 1).search(/\S+$/),
                right = str.slice(pos).search(/\s/);
            if (right < 0) {
                return str.slice(left);
            }
            return str.slice(left, right + pos);
        }

        function bvi_tts_player() {
            var bvi_tts_text_id;
            var bvi_tts_voice_target = $(".bvi-tts");

            $('.bvi-tts-link').remove();
            $('.bvi-tts-text').contents().unwrap();

            if (Cookies.get('bvi-tts') === 'true' && bvi_tts_support_browser) {
                bvi_tts_voice_target.each(function (index) {
                    bvi_tts_text_id = 'bvi-tts-text-id-' + index;
                    $(this).wrapInner('<div class="bvi-tts-text ' + bvi_tts_text_id + '"></div>');
                    $(this).prepend('<div class="bvi-tts-link bvi-tts-link-id-' + index + '" data-bvi-tts-class-text=".' + bvi_tts_text_id + '" data-bvi-tts-link-id=".bvi-tts-link-id-' + index + '">\n' +
                        '    <a href="#" class="bvi-tts-play bvi-link">Воспроизвести</a>\n' +
                        '    <a href="#" class="bvi-tts-pause bvi-link disabled">Пауза</i></a>\n' +
                        '    <a href="#" class="bvi-tts-resume bvi-link disabled">Продолжить</i></a>\n' +
                        '    <a href="#" class="bvi-tts-stop bvi-link disabled">Стоп</i></a>\n' +
                        '</div>');
                });

                $('.bvi-tts-link').show();

                $('.bvi-tts-play').click(function () {
                    bvi_tts_synth.cancel();
                    var bvi_tts_class = $(this).parent().data('bvi-tts-class-text');
                    var bvi_tts_links_id = $(this).parent().data('bvi-tts-link-id');
                    var bvi_tts_class_text = $(bvi_tts_class).text();

                    bvi_tts_speak(bvi_tts_class_text);

                    $('.bvi-tts-play').removeClass('disabled');
                    $('.bvi-tts-pause').addClass('disabled');
                    $('.bvi-tts-resume').addClass('disabled');
                    $('.bvi-tts-stop').addClass('disabled');
                    $(bvi_tts_links_id + ' .bvi-tts-play').addClass('disabled');
                    $(bvi_tts_links_id + ' .bvi-tts-pause').removeClass('disabled');
                    $(bvi_tts_links_id + ' .bvi-tts-stop').removeClass('disabled');
                    return false;
                });

                $('.bvi-tts-resume').click(function () {
                    var bvi_tts_links_id = $(this).parent().data('bvi-tts-link-id');
                    $(bvi_tts_links_id + ' .bvi-tts-pause').removeClass('disabled');
                    $(this).addClass('disabled');
                    bvi_tts_synth.resume();
                    return false;
                });

                $('.bvi-tts-pause').click(function () {
                    var bvi_tts_links_id = $(this).parent().data('bvi-tts-link-id');
                    $(bvi_tts_links_id + ' .bvi-tts-resume').removeClass('disabled');
                    $(this).addClass('disabled');
                    bvi_tts_synth.pause();
                    return false;
                });

                $('.bvi-tts-stop').click(function () {
                    bvi_tts_synth.cancel();
                    var bvi_tts_links_id = $(this).parent().data('bvi-tts-link-id');
                    $(this).addClass('disabled');
                    $(bvi_tts_links_id + ' .bvi-tts-play').removeClass('disabled');
                    $(bvi_tts_links_id + ' .bvi-tts-pause').addClass('disabled');
                    $(bvi_tts_links_id + ' .bvi-tts-resume').addClass('disabled');
                    return false;
                });
            } else {
                $('.bvi-tts-link').remove();
                $('.bvi-tts-text').contents().unwrap();
            }
        }

        function bvi_click() {
            $("#bvi-panel-close, .bvi-panel-close, #bvi-toggler-close").click(function () {

                bvi_tts_speak('Обычная версия сайта');

                if (Cookies.get("bvi-reload") === 'true') {
                    document.location.reload(true);
                }

                $(".bvi-body *").each(function () {
                    var $this = $(this);
                    var background_image = $this.css("background-image");
                    var pattern = background_image.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
                    if (pattern != 'none') {
                        if (versionIE == 11 || versionIE == 10 || versionIE == 9) {
                            var data_bvi_img_original = $this.attr('data-bvi-background-image-original') || pattern;
                            $this.css("background-image", "url(" + data_bvi_img_original + ")");
                            $this.removeClass('bvi-background-image');
                        }
                    }
                });

                $("img").each(function () {
                    $(this).show();
                    $('div.bvi-img').remove();
                    $(this).removeClass("bvi-background-image");
                    if (versionIE == 11 || versionIE == 10 || versionIE == 9) {
                        var data_bvi_img_original = $(this).attr('data-bvi-img-original') || this.src;
                        this.src = data_bvi_img_original;
                    }
                });

                Cookies.remove("bvi-panel-active", {path: "/"});
                Cookies.remove("bvi-font-size", {path: "/"});
                Cookies.remove("bvi-theme", {path: "/"});
                Cookies.remove("bvi-images", {path: "/"});
                Cookies.remove("bvi-line-height", {path: "/"});
                Cookies.remove("bvi-letter-spacing", {path: "/"});
                Cookies.remove("bvi-tts", {path: "/"});
                Cookies.remove("bvi-font-family", {path: "/"});
                Cookies.remove("bvi-panel-hide", {path: "/"});
                Cookies.remove("bvi-flash-iframe", {path: "/"});
                Cookies.remove("bvi-reload", {path: "/"});

                active();
                return false;
            });

            $('#bvi-panel-hide, #bvi-toggler-menu-hide').click(function () {
                $('.bvi-panel').toggle(0);
                $('.bvi-link-top').toggle(0);
                set('data-bvi-panel-hide', 'bvi-panel-hide', true);
                bvi_tts_speak('Панель скрыта');
                return false;
            });

            $('#bvi-panel-show').click(function () {
                $('.bvi-panel').toggle(0);
                $('.bvi-link-top').toggle(0);
                set('data-bvi-panel-hide', 'bvi-panel-hide', false);
                bvi_tts_speak('Панель открыта');
                return false;
            });

            $('#bvi-setting').click(function () {
                $('.bvi-setting-menu').toggle(0);
                $(this).toggleClass("active");
                bvi_tts_speak('Дополнительные настройки');
                return false;
            });

            $('#bvi-toggler').click(function () {
                $('.bvi-panel-container').toggle(0);
                $(this).toggleClass("active");
                bvi_tts_speak('Меню');
                return false;
            });

            $('#bvi-setting-close').click(function () {
                $('.bvi-setting-menu').toggle(0);
                $('#bvi-setting').toggleClass("active");
                bvi_tts_speak('Дополнительные настройки закрыты');
                return false;
            });

            $('#bvi-font-size-less').click(function () {
                var size = parseFloat(Cookies.get("bvi-font-size")) - 1;
                $(this).addClass('active').siblings().removeClass('active');
                $('#bvi-font-size').text(size);
                if (size != 0) {
                    set('data-bvi-size', 'bvi-font-size', size);
                    bvi_tts_speak('Размер шрифта уменьшен');
                }
                return false;
            });

            $('#bvi-font-size-more').click(function () {
                var size = parseFloat(Cookies.get("bvi-font-size")) + 1;
                $(this).addClass('active').siblings().removeClass('active');
                $('#bvi-font-size').text(size);
                if (size != 40) {
                    set('data-bvi-size', 'bvi-font-size', size);
                    bvi_tts_speak('Размер шрифта увеличен');
                }
                return false;
            });

            $("#bvi-theme-white").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-theme', 'bvi-theme', 'white');
                bvi_tts_speak('Цвет сайта черным по белому');
                return false;
            });

            $("#bvi-theme-black").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-theme', 'bvi-theme', 'black');
                bvi_tts_speak('Цвет сайта белым по черному');
                return false;
            });

            $("#bvi-theme-blue").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-theme', 'bvi-theme', 'blue');
                bvi_tts_speak('Цвет сайта тёмно-синим по голубому');
                return false;
            });

            $("#bvi-theme-brown").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-theme', 'bvi-theme', 'brown');
                bvi_tts_speak('Цвет сайта коричневым по бежевому');
                return false;
            });

            $("#bvi-theme-green").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-theme', 'bvi-theme', 'green');
                bvi_tts_speak('Цвет сайта зеленым по тёмно-коричневому');
                return false;
            });

            $('#bvi-images-true').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-images', 'bvi-images', true);
                bvi_tts_speak('Изображения включены');
                return false;
            });

            $('#bvi-images-false').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-images', 'bvi-images', false);
                bvi_tts_speak('Изображения выключены');
                return false;
            });

            $('#bvi-images-grayscale').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-images', 'bvi-images', 'grayscale');
                bvi_tts_speak('Изображения чёрно-белые');
                return false;
            });

            $("#bvi-line-height-normal").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-line-height', 'bvi-line-height', 'normal');
                bvi_tts_speak('Междустрочный интервал cтандартный');
                return false;
            });

            $("#bvi-line-height-average").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-line-height', 'bvi-line-height', 'average');
                bvi_tts_speak('Междустрочный интервал средний');
                return false;
            });

            $("#bvi-line-height-big").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-line-height', 'bvi-line-height', 'big');
                bvi_tts_speak('Междустрочный интервал большой');
                return false;
            });

            $("#bvi-letter-spacing-normal").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-letter-spacing', 'bvi-letter-spacing', 'normal');
                bvi_tts_speak('Межбуквенный интервал одинарный');
                return false;
            });

            $("#bvi-letter-spacing-average").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-letter-spacing', 'bvi-letter-spacing', 'average');
                bvi_tts_speak('Межбуквенный интервал полуторный');
                return false;
            });

            $("#bvi-letter-spacing-big").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-letter-spacing', 'bvi-letter-spacing', 'big');
                bvi_tts_speak('Межбуквенный интервал двойной');
                return false;
            });

            $("#bvi-font-family-arial").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-font-family', 'bvi-font-family', 'arial');
                bvi_tts_speak('Шрифт без засечек');
                return false;
            });

            $("#bvi-font-family-times").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-font-family', 'bvi-font-family', 'times');
                bvi_tts_speak('Шрифт с засечками');
                return false;
            });

            $("#bvi-flash-iframe-true").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-flash-iframe', 'bvi-flash-iframe', true);
                bvi_tts_speak('Включить встроенные элементы');
                return false;
            });

            $("#bvi-flash-iframe-false").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-flash-iframe', 'bvi-flash-iframe', false);
                bvi_tts_speak('Выключить встроенные элементы');
                return false;
            });

            $("#bvi-tts-true").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-tts', 'bvi-tts', true);
                bvi_tts_speak('Синтез речи включён');
                bvi_tts_player();
                return false;
            });

            $("#bvi-tts-false").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-tts', 'bvi-tts', false);
                bvi_tts_speak('Синтез речи выключён');
                bvi_tts_player();
                return false;
            });

            $("#bvi-settings-default").click(function () {
                $('#bvi-theme-' + Cookies.get("bvi-theme")).removeClass('active');
                $('#bvi-images-' + Cookies.get("bvi-images")).removeClass('active');
                $('#bvi-line-height-' + Cookies.get("bvi-line-height")).removeClass('active');
                $('#bvi-letter-spacing-' + Cookies.get("bvi-letter-spacing")).removeClass('active');
                $('#bvi-font-family-' + Cookies.get("bvi-font-family")).removeClass('active');
                $('#bvi-flash-iframe-' + Cookies.get("bvi-flash-iframe")).removeClass('active');
                $('#bvi-tts-' + Cookies.get("bvi-tts")).removeClass('active');

                $('#bvi-theme-' + default_setting.bvi_theme).addClass('active');
                $('#bvi-images-' + default_setting.bvi_images).addClass('active');
                $('#bvi-line-height-' + default_setting.bvi_line_height).addClass('active');
                $('#bvi-letter-spacing-' + default_setting.bvi_letter_spacing).addClass('active');
                $('#bvi-font-family-' + default_setting.bvi_font).addClass('active');
                $('#bvi-flash-iframe-' + default_setting.bvi_flash_iframe).addClass('active');
                $('#bvi-tts-' + default_setting.bvi_tts).addClass('active');

                $('#bvi-font-size').text(default_setting.bvi_font_size);

                set('data-bvi-size', 'bvi-font-size', default_setting.bvi_font_size);
                set('data-bvi-theme', 'bvi-theme', default_setting.bvi_theme);
                set('data-bvi-images', 'bvi-images', default_setting.bvi_images);
                set('data-bvi-line-height', 'bvi-line-height', default_setting.bvi_line_height);
                set('data-bvi-letter-spacing', 'bvi-letter-spacing', default_setting.bvi_letter_spacing);
                set('data-bvi-font-family', 'bvi-font-family', default_setting.bvi_font);
                set('data-bvi-flash-iframe', 'bvi-flash-iframe', default_setting.bvi_flash_iframe);
                set('data-bvi-tts', 'bvi-tts', default_setting.bvi_tts);
                bvi_tts_speak('Настройки по умолчанию');
                bvi_tts_player();
                return false;
            });
        }

        function set(data, set_cookies, set_cookies_data) {
            Cookies.set(set_cookies, set_cookies_data, {path: "/", expires: 1});
            $(".bvi-body").attr(data, Cookies.get(set_cookies));
            get_image();
        }

        function set_active_link() {
            $('#bvi-theme-' + Cookies.get("bvi-theme")).addClass('active');
            $('#bvi-images-' + Cookies.get("bvi-images")).addClass('active');
            $('#bvi-line-height-' + Cookies.get("bvi-line-height")).addClass('active');
            $('#bvi-letter-spacing-' + Cookies.get("bvi-letter-spacing")).addClass('active');
            $('#bvi-font-family-' + Cookies.get("bvi-font-family")).addClass('active');
            $('#bvi-flash-iframe-' + Cookies.get("bvi-flash-iframe")).addClass('active');
            $('#bvi-tts-' + Cookies.get("bvi-tts")).addClass('active');
        }

        function get() {
            if (typeof Cookies.get("bvi-font-size") === 'undefined'
                || typeof Cookies.get("bvi-theme") === 'undefined'
                || typeof Cookies.get("bvi-images") === 'undefined'
                || typeof Cookies.get("bvi-line-height") === 'undefined'
                || typeof Cookies.get("bvi-letter-spacing") === 'undefined'
                || typeof Cookies.get("bvi-tts") === 'undefined'
                || typeof Cookies.get("bvi-font-family") === 'undefined'
                || typeof Cookies.get("bvi-panel-hide") === 'undefined'
                || typeof Cookies.get("bvi-flash-iframe") === 'undefined'
                || typeof Cookies.get("bvi-reload") === 'undefined'
                || typeof Cookies.get("bvi-fixed") === 'undefined'
            ) {
                Cookies.set("bvi-font-size", default_setting.bvi_font_size, {path: "/", expires: 1});
                Cookies.set("bvi-theme", default_setting.bvi_theme, {path: "/", expires: 1});
                Cookies.set("bvi-images", default_setting.bvi_images, {path: "/", expires: 1});
                Cookies.set("bvi-line-height", default_setting.bvi_line_height, {path: "/", expires: 1});
                Cookies.set("bvi-letter-spacing", default_setting.bvi_letter_spacing, {path: "/", expires: 1});
                Cookies.set("bvi-tts", default_setting.bvi_tts, {path: "/", expires: 1});
                Cookies.set("bvi-font-family", default_setting.bvi_font, {path: "/", expires: 1});
                Cookies.set("bvi-panel-hide", default_setting.bvi_hide, {path: "/", expires: 1});
                Cookies.set("bvi-flash-iframe", default_setting.bvi_flash_iframe, {path: "/", expires: 1});
                Cookies.set("bvi-reload", default_setting.bvi_reload, {path: "/", expires: 1});
                Cookies.set("bvi-fixed", default_setting.bvi_fixed, {path: "/", expires: 1});
            }

            $('.bvi-body').attr({
                'data-bvi-panel-hide': Cookies.get("bvi-panel-hide"),
                'data-bvi-size': Cookies.get("bvi-font-size"),
                'data-bvi-theme': Cookies.get("bvi-theme"),
                'data-bvi-images': Cookies.get("bvi-images"),
                'data-bvi-line-height': Cookies.get("bvi-line-height"),
                'data-bvi-letter-spacing': Cookies.get("bvi-letter-spacing"),
                'data-bvi-font-family': Cookies.get("bvi-font-family"),
                'data-bvi-flash-iframe': Cookies.get("bvi-flash-iframe"),
                'data-bvi-reload': Cookies.get("bvi-reload"),
                'data-bvi-tts': Cookies.get("bvi-tts"),
                'data-bvi-fixed': Cookies.get("bvi-fixed")
            });

            $('#bvi-font-size').text(Cookies.get("bvi-font-size"));

            var bvi_panel = Cookies.get("bvi-panel-hide");

            if (bvi_panel === 'false' || typeof bvi_panel === 'undefined') {
                $('.bvi-panel').show();
                $('.bvi-link-top').hide();
            } else {
                $('.bvi-panel').hide();
                $('.bvi-link-top').show("slow");
            }
        }

        function get_image() {
            var bvi_images = Cookies.get("bvi-images");

            $(".bvi-body *").each(function () {
                var $this = $(this);
                var background_image = $this.css("background-image");
                var pattern = background_image.replace(/^url\(['"]?/,'').replace(/['"]?\)$/,'');

                if (pattern != 'none') {
                    $(this).addClass('bvi-background-image');
                }
            });

            $("img").each(function () {
                $(this).addClass('bvi-img');
            });

				$(".img").each(function () {
						$(this).addClass('bvi-img-wrapper');
				});

            if (bvi_images === 'true') {
                $("img").each(function () {
                    $(this).show();
                    $('div.bvi-img').remove();
                    //$(this).removeClass("bvi-background-image");
                    if (versionIE == 11 || versionIE == 10 || versionIE == 9) {
                        var data_bvi_img_original = $(this).attr('data-bvi-img-original') || this.src;
                        this.src = data_bvi_img_original;
                    }
                });

                $(".bvi-body *").each(function () {
                    var $this = $(this);
                    var background_image = $this.css("background-image");
                    var pattern = background_image.replace(/^url\(['"]?/,'').replace(/['"]?\)$/,'');
                    if (pattern != 'none') {
                        if (versionIE == 11 || versionIE == 10 || versionIE == 9) {
                            var r = '^(https?|http)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]';
                            if(pattern.match(r)) {
                                var data_bvi_img_original = $this.attr('data-bvi-background-image-original') || pattern;
                                $this.css("background-image", "url(" + data_bvi_img_original + ")");
                            }
                        }
                    }
                });
            }

            if (bvi_images === 'false') {
                $('div.bvi-img').remove();

                $("img").each(function () {
                    $(this).hide();
                    //$(this).removeClass("bvi-background-image");
                    var alt = this.alt || 'Изображение';
                    var imgClass = $(this).attr("class") || 'bvi-class-none';
                    var imgId = $(this).attr("id") || 'bvi-id-none';
                    $(this).after($('<div class="' + imgClass + '" id="' + imgId + '" style="width: ' + $(this).get(0).naturalWidth + 'px; height: 100%;">').html(alt));
                });
            }

            if (bvi_images === 'grayscale') {
                $("img").each(function () {
                    $(this).show();
                    $('div.bvi-img').remove();
                    //$(this).removeClass("bvi-background-image");
                    if (versionIE == 11 || versionIE == 10 || versionIE == 9) {
                        $(this).attr('data-bvi-img-original', this.src);
                        if (location.hostname === extractHostname(this.src)) {
                            var src = grayscale(this.src);
                            this.src = src;
                        } else {
                            return false;
                        }
                    }
                });

                $(".bvi-body *").each(function () {
                    var $this = $(this);
                    var background_image = $this.css("background-image");
                    var pattern = background_image.replace(/^url\(['"]?/,'').replace(/['"]?\)$/,'');
                    if (pattern != 'none') {
                        if (versionIE == 11 || versionIE == 10 || versionIE == 9) {
                            var r = '^(https?|http)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]';
                            if(pattern.match(r)) {
                                var src_pattern = grayscale(pattern);
                                $this.attr('data-bvi-background-image-original', pattern);
                                $this.css("background-image", "url(" + src_pattern + ") !important");
                            }
                        }
                    }
                });
            }
        }

        function extractHostname(url) {
            var hostname;
            if (url.indexOf("//") > -1) {
                hostname = url.split('/')[2];
            } else {
                hostname = url.split('/')[0];
            }
            hostname = hostname.split(':')[0];
            hostname = hostname.split('?')[0];

            return hostname;
        }

        function grayscale(src) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var imgObj = new Image();
            //imgObj.crossOrigin = "Anonymous";
            imgObj.src = src;
            canvas.width = imgObj.naturalWidth || imgObj.offsetWidth || imgObj.width;
            canvas.height = imgObj.naturalHeight || imgObj.offsetHeight || imgObj.height;
            ctx.drawImage(imgObj, 0, 0);
            var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

            for (var y = 0; y < imgPixels.height; y++) {
                for (var x = 0; x < imgPixels.width; x++) {
                    var i = (y * 4) * imgPixels.width + x * 4;
                    var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                    imgPixels.data[i] = avg;
                    imgPixels.data[i + 1] = avg;
                    imgPixels.data[i + 2] = avg;
                }
            }

            ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

            return canvas.toDataURL();
        }

        function active() {
            if (versionIE == 8 || versionIE == 7 || versionIE == 6 || versionIE == 5) {
                console.log('Bvi console: Браузер не поддерживается.');
                alert(confirm('Браузер не поддерживается.'));
            } else {
                if (Cookies.get('bvi-panel-active') === 'true') {
                    $(selector).addClass('bvi-hide').after($('<a href="#" class="bvi-panel-close" title="Обычная версия сайта">Обычная версия сайта</a>'));
                    panel();
                    bvi_tts_player();
                    bvi_click();
                    set_active_link();
                    if (bvi_tts_support_browser === false) {
                        Cookies.set("bvi-tts", false, {path: "/", expires: 1});
                        $('#bvi-tts-true').remove();
                        $('#bvi-tts-false').remove();
                    }
                } else {
                    bvi_tts_player();
                    $(selector).removeClass('bvi-hide');
                    $('.bvi-panel-close').remove();
                    $(".bvi-panel").remove();
                    $(".bvi-link-top").remove();
                    $('body > .bvi-body').contents().unwrap();
                    $('.bvi-tts-link').remove();
                    $('.bvi-tts-text').contents().unwrap();
                }
            }
        }

        function panel() {
            $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">');
            $('body').wrapInner('<div class="bvi-body"></div>');
            $('body').prepend('<div class="bvi-panel">\n' +
                '    <div class="bvi-container-fluid">\n' +
                '        <div class="bvi-row bvi-no-gutters">\n' +
                '            <div class="bvi-col-12">\n' +
                '                <div class="bvi-panel-toggler">\n' +
                '                    <a href="#" id="bvi-toggler" class="bvi-link" title="Меню">Меню</a>\n' +
                '                    <a href="#" id="bvi-toggler-close" class="bvi-link" title="Обычная версия сайта">Обычная версия сайта</a>\n' +
                '                    <a href="#" id="bvi-toggler-menu-hide" class="bvi-link" title="Скрыть панель"><i class="bvi-images bvi-images-minus-square-o "></i></a>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '    <div class="bvi-panel-container bvi-container">\n' +
                '        <div class="bvi-row bvi-no-gutters">\n' +
                '            <div class="bvi-col-6 bvi-col-sm-6 bvi-col-md-3 bvi-col-lg-3 bvi-col-xl-3 bvi-text-center">\n' +
                '                <div class="bvi-title">Размер шрифта <span id="bvi-font-size"></span> px</div>\n' +
                '                <a href="#" id="bvi-font-size-less" class="bvi-link" title="Уменьшить размер шрифта">A -</a>\n' +
                '                <a href="#" id="bvi-font-size-more" class="bvi-link" title="Увеличить размер шрифта">A +</a>\n' +
                '            </div>\n' +
                '            <div class="bvi-col-6 bvi-col-sm-6 bvi-col-md-3 bvi-col-lg-3 bvi-col-xl-3 bvi-text-center">\n' +
                '                <div class="bvi-title">Цвета сайта</div>\n' +
                '                <a href="#" id="bvi-theme-white" class="bvi-link bvi-link-white " title="Черным по белому">Ц</a>\n' +
                '                <a href="#" id="bvi-theme-black" class="bvi-link bvi-link-black" title="Белым по черному">Ц</a>\n' +
                '                <a href="#" id="bvi-theme-blue" class="bvi-link bvi-link-blue" title="Темно-синим по голубому">Ц</a>\n' +
                '                <a href="#" id="bvi-theme-brown" class="bvi-link bvi-link-brown" title="Коричневым по бежевому">Ц</a>\n' +
                '                <a href="#" id="bvi-theme-green" class="bvi-link bvi-link-green" title="Зеленым по темно-коричневому">Ц</a>\n' +
                '            </div>\n' +
                '            <div class="bvi-col-6 bvi-col-sm-6 bvi-col-md-3 bvi-col-lg-3 bvi-col-xl-2 bvi-text-center">\n' +
                '                <div class="bvi-title">Изображения</div>\n' +
                '                <a href="#" id="bvi-images-true" class="bvi-link" title="Изображения включены"><i class="bvi-images bvi-images-on"></i></a>\n' +
                '                <a href="#" id="bvi-images-false" class="bvi-link" title="Изображения выключены"><i class="bvi-images bvi-images-off"></i></a>\n' +
                '                <a href="#" id="bvi-images-grayscale" class="bvi-link" title="Изображения черно-белые"><i class="bvi-images bvi-images-adjust"></i></a>\n' +
                '            </div>\n' +
                '            <div class="bvi-col-6 bvi-col-sm-6 bvi-col-md-3 bvi-col-lg-3 bvi-col-xl-4 bvi-text-center">\n' +
                '                <div class="bvi-title">Дополнительно</div>\n' +
                '                <a href="#" id="bvi-tts-true" class="bvi-link" title=""><i class="bvi-images bvi-images-volume-on"></i></a>\n' +
                '                <a href="#" id="bvi-tts-false" class="bvi-link"><i class="bvi-images bvi-images-volume-off"></i></a>\n' +
                '                <a href="#" id="bvi-setting" class="bvi-link" title="Настройки">Настройки</a>\n' +
                '                <a href="#" id="bvi-panel-close" class="bvi-link" title="Обычная версия сайта"><i class="bvi-images bvi-images-eye-slash"></i></a>\n' +
                '                <a href="#" id="bvi-panel-hide" class="bvi-link" title="Скрыть панель"><i class="bvi-images bvi-images-minus-square-o"></i></a>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '        <div class="bvi-setting-menu bvi-hide-lg">\n' +
                '            <div class="bvi-row bvi-no-gutters">\n' +
                '                <div class="bvi-col-sm-12 bvi-col-md-6 bvi-col-lg-4 bvi-col-xl-4 bvi-text-center">\n' +
                '                    <div class="bvi-title">Междустрочный интервал</div>\n' +
                '                    <a href="#" id="bvi-line-height-normal" class="bvi-link" title="Междустрочный интервал стандартный">Стандартный</a>\n' +
                '                    <a href="#" id="bvi-line-height-average" class="bvi-link" title="Междустрочный интервал средний">Средний</a>\n' +
                '                    <a href="#" id="bvi-line-height-big" class="bvi-link" title="Междустрочный интервал большой">Большой</a>\n' +
                '                </div>\n' +
                '                <div class="bvi-col-sm-12 bvi-col-md-6 bvi-col-lg-5 bvi-col-xl-5 bvi-text-center">\n' +
                '                    <div class="bvi-title">Межбуквенный интервал</div>\n' +
                '                    <a href="#" id="bvi-letter-spacing-normal" class="bvi-link" title="Межбуквенный интервал одинарный">Одинарный</a>\n' +
                '                    <a href="#" id="bvi-letter-spacing-average" class="bvi-link"\n' +
                '                       title="Межбуквенный интервал полуторный">Полуторный</a>\n' +
                '                    <a href="#" id="bvi-letter-spacing-big" class="bvi-link" title="Межбуквенный интервал двойной">Двойной</a>\n' +
                '                </div>\n' +
                '                <div class="bvi-col-sm-12 bvi-col-md-6 bvi-col-lg-3 bvi-col-xl-3 bvi-text-center">\n' +
                '                    <div class="bvi-title">Шрифт</div>\n' +
                '                    <a href="#" id="bvi-font-family-arial" class="bvi-link" title="Шрифт без засечек">Без засечек</a>\n' +
                '                    <a href="#" id="bvi-font-family-times" class="bvi-link" title="Шрифт с засечками">С засечками</a>\n' +
                '                </div>\n' +
                '                <div class="bvi-col-sm-12 bvi-col-md-6 bvi-col-lg-6 bvi-col-xl-6 bvi-text-center">\n' +
                '                    <div class="bvi-title">Встроенные элементы (Видео, карты и тд.)</div>\n' +
                '                    <a href="#" id="bvi-flash-iframe-true" class="bvi-link" title="Включить">Включить</a>\n' +
                '                    <a href="#" id="bvi-flash-iframe-false" class="bvi-link" title="Выключить">Выключить</a>\n' +
                '                </div>\n' +
                '                <div class="bvi-col-sm-12 bvi-col-md-12 bvi-col-lg-6 bvi-col-xl-6 bvi-text-right">\n' +
                '                    <div class="bvi-title">&nbsp;</div>\n' +
                '                    <a href="#" id="bvi-settings-default" class="bvi-link" title="Вернуть стандартные настройки">Настройки\n' +
                '                        по умолчанию</a>\n' +
                '                    <a href="#" id="bvi-setting-close" class="bvi-link" title="Закрыть панель">Закрыть панель</a>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="bvi-row bvi-mt">\n' +
                '                <div class="bvi-col-12 bvi-text-center">\n' +
                '                    <a href="http://bvi.isvek.ru/" class="bvi-link-copy" target="_blank" title="bvi.isvek.ru v2.0">bvi.isvek.ru</a>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<a href="#" id="bvi-panel-show" class="bvi-link bvi-link-top"><i class="bvi-images bvi-images-eye"></i></a>');

            if (width >= lg) {
                $('.bvi-panel-container').show();
            }

            if (width <= lg) {
                $('.bvi-panel-container').removeClass('bvi-container').addClass('bvi-container-fluid');
            } else {
                $('.bvi-panel-container').removeClass('bvi-container-fluid').addClass('bvi-container');
            }

            var scroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            if (scroll > 99) {
                if (Cookies.get("bvi-fixed") == 'true') {
                    $(".bvi-panel").addClass("bvi-fixed-top");
                }
            }

            $(window).scroll(function () {
                if ($(this).scrollTop() >= 99) {
                    if (Cookies.get("bvi-fixed") == 'true') {
                        $(".bvi-panel").addClass('bvi-fixed-top');
                    }
                } else {
                    $(".bvi-panel").removeClass("bvi-fixed-top");
                }
            });

            get();
            get_image();
        }

        if (default_setting.bvi_theme == 'white' ||
            default_setting.bvi_theme == 'black' ||
            default_setting.bvi_theme == 'blue' ||
            default_setting.bvi_theme == 'brown' ||
            default_setting.bvi_theme == 'green') {
            check_bvi_theme = true;
        } else {
            check_bvi_theme = false;
            checkError = ['bvi_theme'];
        }

        if (default_setting.bvi_font == 'times' || default_setting.bvi_font == 'arial') {
            check_bvi_font = true;
        } else {
            check_bvi_font = false;
            checkError = ['bvi_font'];
        }

        if (default_setting.bvi_letter_spacing == 'normal' || default_setting.bvi_letter_spacing == 'average' || default_setting.bvi_letter_spacing == 'big') {
            check_bvi_letter_spacing = true;
        } else {
            check_bvi_letter_spacing = false;
            checkError = ['bvi_letter_spacing'];
        }

        if (default_setting.bvi_line_height == 'normal' || default_setting.bvi_line_height == 'average' || default_setting.bvi_line_height == 'big') {
            check_bvi_line_height = true;
        } else {
            check_bvi_line_height = false;
            checkError = ['bvi_line_height'];
        }

        if (default_setting.bvi_font_size == 0) {
            check_bvi_font_size = false;
            checkError = ['bvi_font_size'];
        } else if (default_setting.bvi_font_size <= 40) {
            check_bvi_font_size = true;
        } else {
            check_bvi_font_size = false;
            checkError = ['bvi_font_size'];
        }

        if (default_setting.bvi_images === false || default_setting.bvi_images === true || default_setting.bvi_images === 'grayscale') {
            check_bvi_images = true;
        } else {
            check_bvi_images = false;
            checkError = ['bvi_images'];
        }

        if (default_setting.bvi_fixed === false || default_setting.bvi_fixed === true) {
            check_bvi_fixed = true;
        } else {
            check_bvi_fixed = false;
            checkError = ['bvi_fixed'];
        }

        if (default_setting.bvi_tts === false || default_setting.bvi_tts === true) {
            check_bvi_tts = true;
        } else {
            check_bvi_tts = false;
            checkError = ['bvi_tts'];
        }

        if (default_setting.bvi_flash_iframe === false || default_setting.bvi_flash_iframe === true) {
            check_bvi_flash_iframe = true;
        } else {
            check_bvi_flash_iframe = false;
            checkError = ['bvi_flash_iframe'];
        }

        if (default_setting.bvi_hide === false || default_setting.bvi_hide === true) {
            check_bvi_hide = true;
        } else {
            check_bvi_hide = false;
            checkError = ['bvi_hide'];
        }

        if (check_bvi_theme === true &&
            check_bvi_font === true &&
            check_bvi_letter_spacing === true &&
            check_bvi_line_height === true &&
            check_bvi_font_size === true &&
            check_bvi_images === true &&
            check_bvi_fixed === true &&
            check_bvi_flash_iframe === true &&
            check_bvi_tts === true &&
            check_bvi_hide === true) {
            if ($(selector).length) {
                $(selector).click(function () {
                    Cookies.set('bvi-panel-active', true, {path: "/", expires: 1});
                    active();
                    bvi_tts_speak('Версия сайта для слабовидящих');
                    return false;
                });
            } else {
                console.log('Bvi console: Неправильный параметр - [bvi_target]');
            }
            active();
        } else {
            console.log('Bvi console: Неправильный параметр - [' + checkError + ']');
        }
    };
})(jQuery);
;