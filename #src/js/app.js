"use strict";
// ==================  polyfill for method Closest  ================================
(function (ELEMENT) {
  ELEMENT.matches =
    ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
  ELEMENT.closest =
    ELEMENT.closest ||
    function closest(selector) {
      if (!this) return null;
      if (this.matches(selector)) return this;
      if (!this.parentElement) {
        return null;
      } else return this.parentElement.closest(selector);
    };
})(Element.prototype);

// ===================  Toggle block menu  ========================================
const btnShowBlock = document.querySelectorAll("._btn-toggle");
const closeBlock = document.querySelector(".header-special__btn-close");
const body = document.querySelector("body");
const overlay = document.querySelector(".header__overlay");

Array.prototype.slice.call(btnShowBlock).forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("_show-block")) {
      item.classList.remove("_show-block");
      overlay.classList.remove("_active");
    } else {
      addClass(item);
    }
  });
});

function addClass(currentItem) {
  Array.prototype.slice.call(btnShowBlock).forEach(function (item) {
    item.classList.remove("_show-block");
    overlay.classList.remove("_active");
    item = currentItem;
    item.classList.add("_show-block");
    overlay.classList.add("_active");
  });
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".hidden-block, ._btn-toggle")) {
    Array.prototype.slice.call(btnShowBlock).forEach(function (item) {
      if (item.classList.contains("_show-block")) {
        item.classList.remove("_show-block");
      }
    });
    overlay.classList.remove("_active");
  }
});

if (closeBlock) {
  closeBlock.addEventListener("click", function (e) {
    Array.prototype.slice.call(btnShowBlock).forEach(function (item) {
      item.classList.remove("_show-block");
    });
    overlay.classList.remove("_active");
  });
}

// ===========  Toggle language ===========================
$(function () {
  $(".language-select").click(function () {
    $(this).toggleClass("open");
  });

  $(document).click(function (e) {
    let s = $(".language-select");
    if (!s.is(e.target)) {
      s.removeClass("open");
    }
  });

  $(".language-select__item").click(function () {
    var setLang = $(".language-select").data("location"),
      dataLangSelect = $(this).data("lang");
    $(".language-select").data("location", dataLangSelect);
    $(".language-select__item").removeClass("_active");
    $(this).toggleClass("_active");
  });
});

// =============  Function ibg  ====================================================
function ibg() {
  let ibg = document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img") && ibg[i].querySelector("img").getAttribute("src") != null) {
      ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

// ================   Tab To DropDown   ==============================================
(function ($) {
  $.fn.tabConvert = function (options) {
    var settings = $.extend(
      {
        activeClass: "active",
        screenSize: 767,
      },
      options
    );

    return this.each(function (i) {
      var wrap = $(this).wrap('<div class="tab-to-dropdown"></div>'),
        currentItem = $(this),
        container = $(this).closest(".tab-to-dropdown"),
        value = $(this)
          .find("." + settings.activeClass)
          .text(),
        toggler = '<div class="selected-tab">' + value + "</div>";
      currentItem.addClass("converted-tab");
      container.prepend(toggler);

      function tabConvert_toggle() {
        currentItem.parent().find(".converted-tab").slideToggle(0);
      }

      container.find(".selected-tab").click(function () {
        tabConvert_toggle();
      });

      currentItem.find("a").click(function (e) {
        var windowWidth = window.innerWidth;
        if (settings.screenSize >= windowWidth) {
          tabConvert_toggle();
          var selected_text = $(this).text();
          $(this).closest(".tab-to-dropdown").find(".selected-tab").text(selected_text);
        }
      });

      function resize_function() {
        var windowWidth = window.innerWidth;
        if (settings.screenSize >= windowWidth) {
          currentItem.css("display", "none");
          currentItem.parent().find(".selected-tab").css("display", "");
        } else {
          currentItem.css("display", "");
          currentItem.parent().find(".selected-tab").css("display", "none");
        }
      }
      resize_function();

      $(window).resize(function () {
        resize_function();
      });
    });
  };

  // 	Toggle will appear on size 767px
  $(".nav-tab").tabConvert({
    activeClass: "active",
    screenSize: 767,
  });
})(jQuery);

// ===========  Sticky Sidebar ===========================
const sidebarBlock = document.querySelector(".sidebar");

if (sidebarBlock && $(window).width() > 992) {
  var sidebar = new StickySidebar(sidebarBlock, {
    topSpacing: 20,
  });
  sidebar.updateSticky();
}

// ===========  Sticky nav-tab-vertical ===========================
const navTabVerticalBlock = document.querySelector(".nav-tab-vertical__sticky");
if (navTabVerticalBlock && $(window).width() > 768) {
  var sidebar = new StickySidebar(navTabVerticalBlock, {
    topSpacing: 20,
  });
  sidebar.updateSticky();
}

// ===========  Page personal-area, toggle link entries ===========================
const linksTab = document.querySelectorAll(".link-nav-tab");
const linksEntries = document.querySelectorAll(".link-entries");

Array.prototype.slice.call(linksTab).forEach(function (linkTab) {
  linkTab.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("company") ||
      e.target.parentNode.classList.contains("company") ||
      e.target.parentNode.parentNode.classList.contains("company")
    ) {
      Array.prototype.slice.call(linksEntries).forEach(function (link) {
        link.classList.add("hidden");
      });
    } else {
      Array.prototype.slice.call(linksEntries).forEach(function (link) {
        link.classList.remove("hidden");
      });
    }
  });
});

// ===========  Tooltips ===========================
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// ====================   scroll accordion to top   ==========================
$("#accordionMns").on("shown.bs.collapse", function (event) {
  $("html, body").animate(
    {
      // scrollTop: $(event.target).parent().offset().top,
    },
    400
  );
});
$(".item-block__title, .accordion-btn, .accordion-question__btn").click(function () {
  $("html, body").animate(
    {
      // scrollTop: $(this).offset().top,
    },
    300
  );
});

// ==================  Select Tab   ===================================

$(".select-tab-content").hide();
$("#select-tab-1").show();

$("#select-tab-box").change(function () {
  var dropdown = $("#select-tab-box").val();
  $(".select-tab-content").hide();
  $("#" + "select-tab-" + dropdown).show();
});

// ==================  Select Tab administrative-procedures ( Tab 2 )  ===================================

$(".select-tab-content-01").hide();
$("#select-tab-101").show();

$("#select-tab-box-01").change(function () {
  var dropdown = $("#select-tab-box-01").val();
  $(".select-tab-content-01").hide();
  $("#" + "select-tab-" + dropdown).show();
});

// ============  tab to accordion  ========================================================
$(".nav-accordion-link").click(function () {
  if ($(this).hasClass("d_active")) {
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).removeClass("active show");
    $(this).removeClass("d_active");
  } else {
    $(".content-accordion").removeClass("active show");
    $(".nav-accordion-link").removeClass("d_active");
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).addClass("active show");
    $(this).addClass("d_active");
  }
});

// =============  clarifications Slider   =================================
$(".slider-clarifications__body").slick({
  infinite: true,
  slidesToShow: 1,
  arrows: true,
  dots: true,
});

$(".slickPrev").on("click", function (e) {
  e.preventDefault();
  let currentSlider = $(this).parents(".slider-clarifications").find('[data-slider="clarifications"]');
  currentSlider.slick("slickPrev");
});

$(".slickNext").on("click", function (e) {
  e.preventDefault();
  let currentSlider = $(this).parents(".slider-clarifications").find('[data-slider="clarifications"]');
  currentSlider.slick("slickNext");
});

// =============  Main Slider   =================================
$(".partners").slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 565,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// =============  Modal for IE-11   =================================
$(window).on("load", function () {
  $("#browserUnsupport").modal("show");
});

// =============  Notification   =================================

const blockNotification = document.querySelector(".notification");
const closeBlockNotification = document.querySelector(".notification__close");
if (blockNotification) {
  (function showBlock() {
    setTimeout(function () {
      blockNotification.classList.add("open");
    }, 3000);
  })();

  closeBlockNotification.addEventListener("click", function () {
    blockNotification.classList.remove("open");
  });
}

// =============  Form    =================================
$(function () {
  $("input[data-tel='tel']").mask("+375 (99) 999-99-99");
  $("input[data-date='date']").mask("9999");
});

function formAddError(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
}

function formRemoveError(input) {
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form-questionnaire");

  if (form) {
    form.addEventListener("submit", formSend);

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);

      if (error === 0) {
        let response = await fetch("index.php", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          formData.reset();
        } else {
          alert("Ошибка");
        }
      }

      function formValidate(form) {
        let error = 0;
        let formRequired = document.querySelectorAll("._required");

        for (let i = 0; i < formRequired.length; i++) {
          const input = formRequired[i];
          formRemoveError(input);
          if (input.classList.contains("_email")) {
            if (emailTest(input)) {
              formAddError(input);
              error++;
            }
          } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
            formAddError(input);
            error++;
          } else if (input.selectedIndex === 0) {
            formAddError(input);
            error++;
          } else {
            if (input.value === "") {
              formAddError(input);
              error++;
            }
          }
        }
        return error;
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form-ends");
  if (form) {
    form.addEventListener("submit", formSend);

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);

      if (error === 0) {
        let response = await fetch("index.php", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          formData.reset();
        } else {
          alert("Ошибка");
        }
      }

      function formValidate(form) {
        let error = 0;
        let formRequired = document.querySelectorAll("._required");

        for (let i = 0; i < formRequired.length; i++) {
          const input = formRequired[i];
          formRemoveError(input);
          if (input.classList.contains("_email")) {
            if (emailTest(input)) {
              formAddError(input);
              error++;
            }
          } else if (input.value === "") {
            formAddError(input);
            error++;
          }
        }
        return error;
      }
    }
  }
});

/// =============    Lazy load via iframe     ===========================
document.addEventListener("DOMContentLoaded", function () {
  const iframesLazy = document.querySelectorAll("iframe.iframe-lazy-video");
  if ("IntersectionObserver" in window) {
    const iframeObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.target.src.length == 0) {
          entry.target.src = entry.target.dataset.src;
          iframeObserver.unobserve(entry.target);
        }
      });
    });
    iframesLazy.forEach(function (iframe) {
      iframeObserver.observe(iframe);
    });
  } else {
    for (let i = 0; i < iframesLazy.length; i++) {
      if (lazyVids[i].getAttribute("data-src")) {
        lazyVids[i].setAttribute("src", lazyVids[i].getAttribute("data-src"));
      }
    }
  }
});

document.querySelectorAll("#app-popup").forEach((el) => {
  el.addEventListener("click", function () {
    let text = document.querySelector("#download-app-text");
    if (this.getAttribute("web-version") === "true") {
      text.innerHTML = "Будет доступно для использования с 1 января 2023 года.";
    } else {
      text.innerHTML = "Приложение «Налог на профессиональный доход» будет доступно для скачивания с 1 января 2023 года";
    }
  });
});

$(".popover-dismiss").popover({
  trigger: "focus",
  animation: true,
});

// $("#user-nav-tabs li").on('click', function(e) {
//    var targetLink = $(e.currentTarget.children[0]).attr("href").slice(1);

//    var content_map = {
//          content1: "#tabs-content1",
//          content2: "#tabs-content2",
//          content3: "#tabs-content3",
//          content4: "#tabs-content4"
//    }

//    $(e.currentTarget).siblings().removeClass("active");

//    $.each(content_map, function(hash, elid) {
//       if (hash == targetLink) {
//             $(elid).show();
//             $(e.currentTarget).addClass("active");
//       } else {
//             $(elid).hide();
//       }
//    });
// });

function uploadFile(target) {
  document.getElementById("file-name").innerHTML = target.files[0].name;
}

const swiperChildrenMain = new Swiper(".swiper.children-taxes-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
  allowTouchMove: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1,
      spaceBetween: 4,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".children-taxes-slider .swiper-button-next",
    prevEl: ".children-taxes-slider .swiper-button-prev",
  },
});

const swiperChildrenEx = new Swiper(".swiper.children-taxes-slider-ex", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
  allowTouchMove: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1,
      spaceBetween: 4,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    // when window width is >= 480px
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
  navigation: {
    nextEl: ".children-taxes-slider-ex .swiper-button-next",
    prevEl: ".children-taxes-slider-ex .swiper-button-prev",
  },
});

const swiperChildrenOnline = new Swiper(".swiper.children-taxes-slider-online", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
  allowTouchMove: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1,
      spaceBetween: 4,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    // when window width is >= 480px
    // when window width is >= 640px
    768: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
  navigation: {
    nextEl: ".children-taxes-slider-online .swiper-button-next",
    prevEl: ".children-taxes-slider-online .swiper-button-prev",
  },
});

const swiperChildrenEvent = new Swiper(".swiper.children-taxes-slider-event", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
  allowTouchMove: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1,
      spaceBetween: 4,
    },
    // when window width is >= 480px
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
  navigation: {
    nextEl: ".children-taxes-slider-event .swiper-button-next",
    prevEl: ".children-taxes-slider-event .swiper-button-prev",
  },
});
