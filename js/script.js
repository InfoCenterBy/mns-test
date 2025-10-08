/*! mns-tax-calc 2021-03-19 */
function CountChildInvalidError() {
   (this.name = 'CountChildInvalidError'),
      (this.message = 'Count children invalid more then child before 18');
}
if ('undefined' == typeof jQuery)
   throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
   'use strict';
   var b = a.fn.jquery.split(' ')[0].split('.');
   if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1))
      throw new Error(
         "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
      );
})(jQuery),
   +(function (a) {
      'use strict';
      function b(b, d) {
         return this.each(function () {
            var e = a(this),
               f = e.data('bs.modal'),
               g = a.extend(
                  {},
                  c.DEFAULTS,
                  e.data(),
                  'object' == typeof b && b
               );
            f || e.data('bs.modal', (f = new c(this, g))),
               'string' == typeof b ? f[b](d) : g.show && f.show(d);
         });
      }
      var c = function (b, c) {
         (this.options = c),
            (this.$body = a(document.body)),
            (this.$element = a(b)),
            (this.$dialog = this.$element.find('.modal-dialog')),
            (this.$backdrop = null),
            (this.isShown = null),
            (this.originalBodyPad = null),
            (this.scrollbarWidth = 0),
            (this.ignoreBackdropClick = !1),
            this.options.remote &&
               this.$element.find('.modal-content').load(
                  this.options.remote,
                  a.proxy(function () {
                     this.$element.trigger('loaded.bs.modal');
                  }, this)
               );
      };
      (c.VERSION = '3.3.5'),
         (c.TRANSITION_DURATION = 300),
         (c.BACKDROP_TRANSITION_DURATION = 150),
         (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
         (c.prototype.toggle = function (a) {
            return this.isShown ? this.hide() : this.show(a);
         }),
         (c.prototype.show = function (b) {
            var d = this,
               e = a.Event('show.bs.modal', { relatedTarget: b });
            this.$element.trigger(e),
               this.isShown ||
                  e.isDefaultPrevented() ||
                  ((this.isShown = !0),
                  this.checkScrollbar(),
                  this.setScrollbar(),
                  this.$body.addClass('modal-open'),
                  this.escape(),
                  this.resize(),
                  this.$element.on(
                     'click.dismiss.bs.modal',
                     '[data-dismiss="modal"]',
                     a.proxy(this.hide, this)
                  ),
                  this.$dialog.on('mousedown.dismiss.bs.modal', function () {
                     d.$element.one('mouseup.dismiss.bs.modal', function (b) {
                        a(b.target).is(d.$element) &&
                           (d.ignoreBackdropClick = !0);
                     });
                  }),
                  this.backdrop(function () {
                     var e =
                        a.support.transition && d.$element.hasClass('fade');
                     d.$element.parent().length || d.$element.appendTo(d.$body),
                        d.$element.show().scrollTop(0),
                        d.adjustDialog(),
                        e && d.$element[0].offsetWidth,
                        d.$element.addClass('show'),
                        d.enforceFocus();
                     var f = a.Event('shown.bs.modal', { relatedTarget: b });
                     e
                        ? d.$dialog
                             .one('bsTransitionEnd', function () {
                                d.$element.trigger('focus').trigger(f);
                             })
                             .emulateTransitionEnd(c.TRANSITION_DURATION)
                        : d.$element.trigger('focus').trigger(f);
                  }));
         }),
         (c.prototype.hide = function (b) {
            b && b.preventDefault(),
               (b = a.Event('hide.bs.modal')),
               this.$element.trigger(b),
               this.isShown &&
                  !b.isDefaultPrevented() &&
                  ((this.isShown = !1),
                  this.escape(),
                  this.resize(),
                  a(document).off('focusin.bs.modal'),
                  this.$element
                     .removeClass('show')
                     .off('click.dismiss.bs.modal')
                     .off('mouseup.dismiss.bs.modal'),
                  this.$dialog.off('mousedown.dismiss.bs.modal'),
                  a.support.transition && this.$element.hasClass('fade')
                     ? this.$element
                          .one('bsTransitionEnd', a.proxy(this.hideModal, this))
                          .emulateTransitionEnd(c.TRANSITION_DURATION)
                     : this.hideModal());
         }),
         (c.prototype.enforceFocus = function () {
            a(document)
               .off('focusin.bs.modal')
               .on(
                  'focusin.bs.modal',
                  a.proxy(function (a) {
                     this.$element[0] === a.target ||
                        this.$element.has(a.target).length ||
                        this.$element.trigger('focus');
                  }, this)
               );
         }),
         (c.prototype.escape = function () {
            this.isShown && this.options.keyboard
               ? this.$element.on(
                    'keydown.dismiss.bs.modal',
                    a.proxy(function (a) {
                       27 == a.which && this.hide();
                    }, this)
                 )
               : this.isShown || this.$element.off('keydown.dismiss.bs.modal');
         }),
         (c.prototype.resize = function () {
            this.isShown
               ? a(window).on(
                    'resize.bs.modal',
                    a.proxy(this.handleUpdate, this)
                 )
               : a(window).off('resize.bs.modal');
         }),
         (c.prototype.hideModal = function () {
            var a = this;
            this.$element.hide(),
               this.backdrop(function () {
                  a.$body.removeClass('modal-open'),
                     a.resetAdjustments(),
                     a.resetScrollbar(),
                     a.$element.trigger('hidden.bs.modal');
               });
         }),
         (c.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
         }),
         (c.prototype.backdrop = function (b) {
            var d = this,
               e = this.$element.hasClass('fade') ? 'fade' : '';
            if (this.isShown && this.options.backdrop) {
               var f = a.support.transition && e;
               if (
                  ((this.$backdrop = a(document.createElement('div'))
                     .addClass('modal-backdrop ' + e)
                     .appendTo(this.$body)),
                  this.$element.on(
                     'click.dismiss.bs.modal',
                     a.proxy(function (a) {
                        return this.ignoreBackdropClick
                           ? void (this.ignoreBackdropClick = !1)
                           : void (
                                a.target === a.currentTarget &&
                                ('static' == this.options.backdrop
                                   ? this.$element[0].focus()
                                   : this.hide())
                             );
                     }, this)
                  ),
                  f && this.$backdrop[0].offsetWidth,
                  this.$backdrop.addClass('show'),
                  !b)
               )
                  return;
               f
                  ? this.$backdrop
                       .one('bsTransitionEnd', b)
                       .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
                  : b();
            } else if (!this.isShown && this.$backdrop) {
               this.$backdrop.removeClass('show');
               var g = function () {
                  d.removeBackdrop(), b && b();
               };
               a.support.transition && this.$element.hasClass('fade')
                  ? this.$backdrop
                       .one('bsTransitionEnd', g)
                       .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
                  : g();
            } else b && b();
         }),
         (c.prototype.handleUpdate = function () {
            this.adjustDialog();
         }),
         (c.prototype.adjustDialog = function () {
            var a =
               this.$element[0].scrollHeight >
               document.documentElement.clientHeight;
            this.$element.css({
               paddingLeft:
                  !this.bodyIsOverflowing && a ? this.scrollbarWidth : '',
               paddingRight:
                  this.bodyIsOverflowing && !a ? this.scrollbarWidth : '',
            });
         }),
         (c.prototype.resetAdjustments = function () {
            this.$element.css({ paddingLeft: '', paddingRight: '' });
         }),
         (c.prototype.checkScrollbar = function () {
            var a = window.innerWidth;
            if (!a) {
               var b = document.documentElement.getBoundingClientRect();
               a = b.right - Math.abs(b.left);
            }
            (this.bodyIsOverflowing = document.body.clientWidth < a),
               (this.scrollbarWidth = this.measureScrollbar());
         }),
         (c.prototype.setScrollbar = function () {
            var a = parseInt(this.$body.css('padding-right') || 0, 10);
            (this.originalBodyPad = document.body.style.paddingRight || ''),
               this.bodyIsOverflowing &&
                  this.$body.css('padding-right', a + this.scrollbarWidth);
         }),
         (c.prototype.resetScrollbar = function () {
            this.$body.css('padding-right', this.originalBodyPad);
         }),
         (c.prototype.measureScrollbar = function () {
            var a = document.createElement('div');
            (a.className = 'modal-scrollbar-measure'), this.$body.append(a);
            var b = a.offsetWidth - a.clientWidth;
            return this.$body[0].removeChild(a), b;
         });
      var d = a.fn.modal;
      (a.fn.modal = b),
         (a.fn.modal.Constructor = c),
         (a.fn.modal.noConflict = function () {
            return (a.fn.modal = d), this;
         }),
         a(document).on(
            'click.bs.modal.data-api',
            '[data-toggle="modal"]',
            function (c) {
               var d = a(this),
                  e = d.attr('href'),
                  f = a(
                     d.attr('data-target') ||
                        (e && e.replace(/.*(?=#[^\s]+$)/, ''))
                  ),
                  g = f.data('bs.modal')
                     ? 'toggle'
                     : a.extend(
                          { remote: !/#/.test(e) && e },
                          f.data(),
                          d.data()
                       );
               d.is('a') && c.preventDefault(),
                  f.one('show.bs.modal', function (a) {
                     a.isDefaultPrevented() ||
                        f.one('hidden.bs.modal', function () {
                           d.is(':visible') && d.trigger('focus');
                        });
                  }),
                  b.call(f, g, this);
            }
         );
   })(jQuery),
   +(function (a) {
      'use strict';
      function b(b) {
         return this.each(function () {
            var d = a(this),
               e = d.data('bs.tooltip'),
               f = 'object' == typeof b && b;
            (!e && /destroy|hide/.test(b)) ||
               (e || d.data('bs.tooltip', (e = new c(this, f))),
               'string' == typeof b && e[b]());
         });
      }
      var c = function (a, b) {
         (this.type = null),
            (this.options = null),
            (this.enabled = null),
            (this.timeout = null),
            (this.hoverState = null),
            (this.$element = null),
            (this.inState = null),
            this.init('tooltip', a, b);
      };
      (c.VERSION = '4.4.6'),
         (c.TRANSITION_DURATION = 150),
         (c.DEFAULTS = {
            animation: !0,
            placement: 'top',
            selector: !1,
            template:
               '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: 'hover focus',
            title: '',
            delay: 0,
            html: !1,
            container: !1,
            viewport: { selector: 'body', padding: 0 },
         }),
         (c.prototype.init = function (b, c, d) {
            if (
               ((this.enabled = !0),
               (this.type = b),
               (this.$element = a(c)),
               (this.options = this.getOptions(d)),
               (this.$viewport =
                  this.options.viewport &&
                  a(
                     a.isFunction(this.options.viewport)
                        ? this.options.viewport.call(this, this.$element)
                        : this.options.viewport.selector ||
                             this.options.viewport
                  )),
               (this.inState = { click: !1, hover: !1, focus: !1 }),
               this.$element[0] instanceof document.constructor &&
                  !this.options.selector)
            )
               throw new Error(
                  '`selector` option must be specified when initializing ' +
                     this.type +
                     ' on the window.document object!'
               );
            for (var e = this.options.trigger.split(' '), f = e.length; f--; ) {
               var g = e[f];
               if ('click' == g)
                  this.$element.on(
                     'click.' + this.type,
                     this.options.selector,
                     a.proxy(this.toggle, this)
                  );
               else if ('manual' != g) {
                  var h = 'hover' == g ? 'mouseenter' : 'focusin',
                     i = 'hover' == g ? 'mouseleave' : 'focusout';
                  this.$element.on(
                     h + '.' + this.type,
                     this.options.selector,
                     a.proxy(this.enter, this)
                  ),
                     this.$element.on(
                        i + '.' + this.type,
                        this.options.selector,
                        a.proxy(this.leave, this)
                     );
               }
            }
            this.options.selector
               ? (this._options = a.extend({}, this.options, {
                    trigger: 'manual',
                    selector: '',
                 }))
               : this.fixTitle();
         }),
         (c.prototype.getDefaults = function () {
            return c.DEFAULTS;
         }),
         (c.prototype.getOptions = function (b) {
            return (
               (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
               b.delay &&
                  'number' == typeof b.delay &&
                  (b.delay = { show: b.delay, hide: b.delay }),
               b
            );
         }),
         (c.prototype.getDelegateOptions = function () {
            var b = {},
               c = this.getDefaults();
            return (
               this._options &&
                  a.each(this._options, function (a, d) {
                     c[a] != d && (b[a] = d);
                  }),
               b
            );
         }),
         (c.prototype.enter = function (b) {
            var c =
               b instanceof this.constructor
                  ? b
                  : a(b.currentTarget).data('bs.' + this.type);
            return (
               c ||
                  ((c = new this.constructor(
                     b.currentTarget,
                     this.getDelegateOptions()
                  )),
                  a(b.currentTarget).data('bs.' + this.type, c)),
               b instanceof a.Event &&
                  (c.inState['focusin' == b.type ? 'focus' : 'hover'] = !0),
               c.tip().hasClass('show') || 'show' == c.hoverState
                  ? void (c.hoverState = 'show')
                  : (clearTimeout(c.timeout),
                    (c.hoverState = 'show'),
                    c.options.delay && c.options.delay.show
                       ? void (c.timeout = setTimeout(function () {
                            'show' == c.hoverState && c.show();
                         }, c.options.delay.show))
                       : c.show())
            );
         }),
         (c.prototype.isInStateTrue = function () {
            for (var a in this.inState) if (this.inState[a]) return !0;
            return !1;
         }),
         (c.prototype.leave = function (b) {
            var c =
               b instanceof this.constructor
                  ? b
                  : a(b.currentTarget).data('bs.' + this.type);
            if (
               (c ||
                  ((c = new this.constructor(
                     b.currentTarget,
                     this.getDelegateOptions()
                  )),
                  a(b.currentTarget).data('bs.' + this.type, c)),
               b instanceof a.Event &&
                  (c.inState['focusout' == b.type ? 'focus' : 'hover'] = !1),
               !c.isInStateTrue())
            )
               return (
                  clearTimeout(c.timeout),
                  (c.hoverState = 'out'),
                  c.options.delay && c.options.delay.hide
                     ? void (c.timeout = setTimeout(function () {
                          'out' == c.hoverState && c.hide();
                       }, c.options.delay.hide))
                     : c.hide()
               );
         }),
         (c.prototype.show = function () {
            var b = a.Event('show.bs.' + this.type);
            if (this.hasContent() && this.enabled) {
               this.$element.trigger(b);
               var d = a.contains(
                  this.$element[0].ownerDocument.documentElement,
                  this.$element[0]
               );
               if (b.isDefaultPrevented() || !d) return;
               var e = this,
                  f = this.tip(),
                  g = this.getUID(this.type);
               this.setContent(),
                  f.attr('id', g),
                  this.$element.attr('aria-describedby', g),
                  this.options.animation && f.addClass('fade');
               var h =
                     'function' == typeof this.options.placement
                        ? this.options.placement.call(
                             this,
                             f[0],
                             this.$element[0]
                          )
                        : this.options.placement,
                  i = /\s?auto?\s?/i,
                  j = i.test(h);
               j && (h = h.replace(i, '') || 'top'),
                  f
                     .detach()
                     .css({ top: 0, left: 0, display: 'block' })
                     .addClass(h)
                     .data('bs.' + this.type, this),
                  this.options.container
                     ? f.appendTo(this.options.container)
                     : f.insertAfter(this.$element),
                  this.$element.trigger('inserted.bs.' + this.type);
               var k = this.getPosition(),
                  l = f[0].offsetWidth,
                  m = f[0].offsetHeight;
               if (j) {
                  var n = h,
                     o = this.getPosition(this.$viewport);
                  (h =
                     'bottom' == h && k.bottom + m > o.bottom
                        ? 'top'
                        : 'top' == h && k.top - m < o.top
                        ? 'bottom'
                        : 'right' == h && k.right + l > o.width
                        ? 'left'
                        : 'left' == h && k.left - l < o.left
                        ? 'right'
                        : h),
                     f.removeClass(n).addClass(h);
               }
               var p = this.getCalculatedOffset(h, k, l, m);
               this.applyPlacement(p, h);
               var q = function () {
                  var a = e.hoverState;
                  e.$element.trigger('shown.bs.' + e.type),
                     (e.hoverState = null),
                     'out' == a && e.leave(e);
               };
               a.support.transition && this.$tip.hasClass('fade')
                  ? f
                       .one('bsTransitionEnd', q)
                       .emulateTransitionEnd(c.TRANSITION_DURATION)
                  : q();
            }
         }),
         (c.prototype.applyPlacement = function (b, c) {
            var d = this.tip(),
               e = d[0].offsetWidth,
               f = d[0].offsetHeight,
               g = parseInt(d.css('margin-top'), 10),
               h = parseInt(d.css('margin-left'), 10);
            isNaN(g) && (g = 0),
               isNaN(h) && (h = 0),
               (b.top += g),
               (b.left += h),
               a.offset.setOffset(
                  d[0],
                  a.extend(
                     {
                        using: function (a) {
                           d.css({
                              top: Math.round(a.top),
                              left: Math.round(a.left),
                           });
                        },
                     },
                     b
                  ),
                  0
               ),
               d.addClass('show');
            var i = d[0].offsetWidth,
               j = d[0].offsetHeight;
            'top' == c && j != f && (b.top = b.top + f - j);
            var k = this.getViewportAdjustedDelta(c, b, i, j);
            k.left ? (b.left += k.left) : (b.top += k.top);
            var l = /top|bottom/.test(c),
               m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
               n = l ? 'offsetWidth' : 'offsetHeight';
            d.offset(b), this.replaceArrow(m, d[0][n], l);
         }),
         (c.prototype.replaceArrow = function (a, b, c) {
            this.arrow()
               .css(c ? 'left' : 'top', 50 * (1 - a / b) + '%')
               .css(c ? 'top' : 'left', '');
         }),
         (c.prototype.setContent = function () {
            var a = this.tip(),
               b = this.getTitle();
            a.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](b),
               a.removeClass('fade show top bottom left right');
         }),
         (c.prototype.hide = function (b) {
            function d() {
               'show' != e.hoverState && f.detach(),
                  e.$element
                     .removeAttr('aria-describedby')
                     .trigger('hidden.bs.' + e.type),
                  b && b();
            }
            var e = this,
               f = a(this.$tip),
               g = a.Event('hide.bs.' + this.type);
            if ((this.$element.trigger(g), !g.isDefaultPrevented()))
               return (
                  f.removeClass('show'),
                  a.support.transition && f.hasClass('fade')
                     ? f
                          .one('bsTransitionEnd', d)
                          .emulateTransitionEnd(c.TRANSITION_DURATION)
                     : d(),
                  (this.hoverState = null),
                  this
               );
         }),
         (c.prototype.fixTitle = function () {
            var a = this.$element;
            (a.attr('title') ||
               'string' != typeof a.attr('data-original-title')) &&
               a
                  .attr('data-original-title', a.attr('title') || '')
                  .attr('title', '');
         }),
         (c.prototype.hasContent = function () {
            return this.getTitle();
         }),
         (c.prototype.getPosition = function (b) {
            b = b || this.$element;
            var c = b[0],
               d = 'BODY' == c.tagName,
               e = c.getBoundingClientRect();
            null == e.width &&
               (e = a.extend({}, e, {
                  width: e.right - e.left,
                  height: e.bottom - e.top,
               }));
            var f = d ? { top: 0, left: 0 } : b.offset(),
               g = {
                  scroll: d
                     ? document.documentElement.scrollTop ||
                       document.body.scrollTop
                     : b.scrollTop(),
               },
               h = d
                  ? { width: a(window).width(), height: a(window).height() }
                  : null;
            return a.extend({}, e, g, h, f);
         }),
         (c.prototype.getCalculatedOffset = function (a, b, c, d) {
            return 'bottom' == a
               ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
               : 'top' == a
               ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
               : 'left' == a
               ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
               : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
         }),
         (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
            var e = { top: 0, left: 0 };
            if (!this.$viewport) return e;
            var f =
                  (this.options.viewport && this.options.viewport.padding) || 0,
               g = this.getPosition(this.$viewport);
            if (/right|left/.test(a)) {
               var h = b.top - f - g.scroll,
                  i = b.top + f - g.scroll + d;
               h < g.top
                  ? (e.top = g.top - h)
                  : i > g.top + g.height && (e.top = g.top + g.height - i);
            } else {
               var j = b.left - f,
                  k = b.left + f + c;
               j < g.left
                  ? (e.left = g.left - j)
                  : k > g.right && (e.left = g.left + g.width - k);
            }
            return e;
         }),
         (c.prototype.getTitle = function () {
            var a,
               b = this.$element,
               c = this.options;
            return (a =
               b.attr('data-original-title') ||
               ('function' == typeof c.title ? c.title.call(b[0]) : c.title));
         }),
         (c.prototype.getUID = function (a) {
            do a += ~~(1e6 * Math.random());
            while (document.getElementById(a));
            return a;
         }),
         (c.prototype.tip = function () {
            if (
               !this.$tip &&
               ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
            )
               throw new Error(
                  this.type +
                     ' `template` option must consist of exactly 1 top-level element!'
               );
            return this.$tip;
         }),
         (c.prototype.arrow = function () {
            return (this.$arrow =
               this.$arrow || this.tip().find('.arrow'));
         }),
         (c.prototype.enable = function () {
            this.enabled = !0;
         }),
         (c.prototype.disable = function () {
            this.enabled = !1;
         }),
         (c.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled;
         }),
         (c.prototype.toggle = function (b) {
            var c = this;
            b &&
               ((c = a(b.currentTarget).data('bs.' + this.type)),
               c ||
                  ((c = new this.constructor(
                     b.currentTarget,
                     this.getDelegateOptions()
                  )),
                  a(b.currentTarget).data('bs.' + this.type, c))),
               b
                  ? ((c.inState.click = !c.inState.click),
                    c.isInStateTrue() ? c.enter(c) : c.leave(c))
                  : c.tip().hasClass('show')
                  ? c.leave(c)
                  : c.enter(c);
         }),
         (c.prototype.destroy = function () {
            var a = this;
            clearTimeout(this.timeout),
               this.hide(function () {
                  a.$element.off('.' + a.type).removeData('bs.' + a.type),
                     a.$tip && a.$tip.detach(),
                     (a.$tip = null),
                     (a.$arrow = null),
                     (a.$viewport = null);
               });
         });
      var d = a.fn.tooltip;
      (a.fn.tooltip = b),
         (a.fn.tooltip.Constructor = c),
         (a.fn.tooltip.noConflict = function () {
            return (a.fn.tooltip = d), this;
         });
   })(jQuery),
   (function (a) {
      'function' == typeof define && define.amd
         ? define(['jquery.validate'], a)
         : a(jQuery);
   })(function (a) {
      a.extend(a.fn, {
         validate: function (b) {
            if (!this.length)
               return void (
                  b &&
                  b.debug &&
                  window.console &&
                  console.warn(
                     "Nothing selected, can't validate, returning nothing."
                  )
               );
            var c = a.data(this[0], 'validator');
            return c
               ? c
               : (this.attr('novalidate', 'novalidate'),
                 (c = new a.validator(b, this[0])),
                 a.data(this[0], 'validator', c),
                 c.settings.onsubmit &&
                    (this.on('click.validate', ':submit', function (b) {
                       c.settings.submitHandler && (c.submitButton = b.target),
                          a(this).hasClass('cancel') && (c.cancelSubmit = !0),
                          void 0 !== a(this).attr('formnovalidate') &&
                             (c.cancelSubmit = !0);
                    }),
                    this.on('submit.validate', function (b) {
                       function d() {
                          var d, e;
                          return (
                             !c.settings.submitHandler ||
                             (c.submitButton &&
                                (d = a("<input type='hidden'/>")
                                   .attr('name', c.submitButton.name)
                                   .val(a(c.submitButton).val())
                                   .appendTo(c.currentForm)),
                             (e = c.settings.submitHandler.call(
                                c,
                                c.currentForm,
                                b
                             )),
                             c.submitButton && d.remove(),
                             void 0 !== e && e)
                          );
                       }
                       return (
                          c.settings.debug && b.preventDefault(),
                          c.cancelSubmit
                             ? ((c.cancelSubmit = !1), d())
                             : c.form()
                             ? c.pendingRequest
                                ? ((c.formSubmitted = !0), !1)
                                : d()
                             : (c.focusInvalid(), !1)
                       );
                    })),
                 c);
         },
         valid: function () {
            var b, c, d;
            return (
               a(this[0]).is('form')
                  ? (b = this.validate().form())
                  : ((d = []),
                    (b = !0),
                    (c = a(this[0].form).validate()),
                    this.each(function () {
                       (b = c.element(this) && b), (d = d.concat(c.errorList));
                    }),
                    (c.errorList = d)),
               b
            );
         },
         rules: function (b, c) {
            var d,
               e,
               f,
               g,
               h,
               i,
               j = this[0];
            if (b)
               switch (
                  ((d = a.data(j.form, 'validator').settings),
                  (e = d.rules),
                  (f = a.validator.staticRules(j)),
                  b)
               ) {
                  case 'add':
                     a.extend(f, a.validator.normalizeRule(c)),
                        delete f.messages,
                        (e[j.name] = f),
                        c.messages &&
                           (d.messages[j.name] = a.extend(
                              d.messages[j.name],
                              c.messages
                           ));
                     break;
                  case 'remove':
                     return c
                        ? ((i = {}),
                          a.each(c.split(/\s/), function (b, c) {
                             (i[c] = f[c]),
                                delete f[c],
                                'required' === c &&
                                   a(j).removeAttr('aria-required');
                          }),
                          i)
                        : (delete e[j.name], f);
               }
            return (
               (g = a.validator.normalizeRules(
                  a.extend(
                     {},
                     a.validator.classRules(j),
                     a.validator.attributeRules(j),
                     a.validator.dataRules(j),
                     a.validator.staticRules(j)
                  ),
                  j
               )),
               g.required &&
                  ((h = g.required),
                  delete g.required,
                  (g = a.extend({ required: h }, g)),
                  a(j).attr('aria-required', 'true')),
               g.remote &&
                  ((h = g.remote),
                  delete g.remote,
                  (g = a.extend(g, { remote: h }))),
               g
            );
         },
      }),
         a.extend(a.expr[':'], {
            blank: function (b) {
               return !a.trim('' + a(b).val());
            },
            filled: function (b) {
               return !!a.trim('' + a(b).val());
            },
            unchecked: function (b) {
               return !a(b).prop('checked');
            },
         }),
         (a.validator = function (b, c) {
            (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
               (this.currentForm = c),
               this.init();
         }),
         (a.validator.format = function (b, c) {
            return 1 === arguments.length
               ? function () {
                    var c = a.makeArray(arguments);
                    return c.unshift(b), a.validator.format.apply(this, c);
                 }
               : (arguments.length > 2 &&
                    c.constructor !== Array &&
                    (c = a.makeArray(arguments).slice(1)),
                 c.constructor !== Array && (c = [c]),
                 a.each(c, function (a, c) {
                    b = b.replace(
                       new RegExp('\\{' + a + '\\}', 'g'),
                       function () {
                          return c;
                       }
                    );
                 }),
                 b);
         }),
         a.extend(a.validator, {
            defaults: {
               messages: {},
               groups: {},
               rules: {},
               errorClass: 'error',
               validClass: 'valid',
               errorElement: 'label',
               focusCleanup: !1,
               focusInvalid: !0,
               errorContainer: a([]),
               errorLabelContainer: a([]),
               onsubmit: !0,
               ignore: ':hidden',
               ignoreTitle: !1,
               onfocusin: function (a) {
                  (this.lastActive = a),
                     this.settings.focusCleanup &&
                        (this.settings.unhighlight &&
                           this.settings.unhighlight.call(
                              this,
                              a,
                              this.settings.errorClass,
                              this.settings.validClass
                           ),
                        this.hideThese(this.errorsFor(a)));
               },
               onfocusout: function (a) {
                  this.checkable(a) ||
                     (!(a.name in this.submitted) && this.optional(a)) ||
                     this.element(a);
               },
               onkeyup: function (b, c) {
                  var d = [
                     16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225,
                  ];
                  (9 === c.which && '' === this.elementValue(b)) ||
                     a.inArray(c.keyCode, d) !== -1 ||
                     ((b.name in this.submitted || b === this.lastElement) &&
                        this.element(b));
               },
               onclick: function (a) {
                  a.name in this.submitted
                     ? this.element(a)
                     : a.parentNode.name in this.submitted &&
                       this.element(a.parentNode);
               },
               highlight: function (b, c, d) {
                  'radio' === b.type
                     ? this.findByName(b.name).addClass(c).removeClass(d)
                     : a(b).addClass(c).removeClass(d);
               },
               unhighlight: function (b, c, d) {
                  'radio' === b.type
                     ? this.findByName(b.name).removeClass(c).addClass(d)
                     : a(b).removeClass(c).addClass(d);
               },
            },
            setDefaults: function (b) {
               a.extend(a.validator.defaults, b);
            },
            messages: {
               required: 'This field is required.',
               remote: 'Please fix this field.',
               email: 'Please enter a valid email address.',
               url: 'Please enter a valid URL.',
               date: 'Please enter a valid date.',
               dateISO: 'Please enter a valid date ( ISO ).',
               number: 'Please enter a valid number.',
               digits: 'Please enter only digits.',
               creditcard: 'Please enter a valid credit card number.',
               equalTo: 'Please enter the same value again.',
               maxlength: a.validator.format(
                  'Please enter no more than {0} characters.'
               ),
               minlength: a.validator.format(
                  'Please enter at least {0} characters.'
               ),
               rangelength: a.validator.format(
                  'Please enter a value between {0} and {1} characters long.'
               ),
               range: a.validator.format(
                  'Please enter a value between {0} and {1}.'
               ),
               max: a.validator.format(
                  'Please enter a value less than or equal to {0}.'
               ),
               min: a.validator.format(
                  'Please enter a value greater than or equal to {0}.'
               ),
            },
            autoCreateRanges: !1,
            prototype: {
               init: function () {
                  function b(b) {
                     var c = a.data(this.form, 'validator'),
                        d = 'on' + b.type.replace(/^validate/, ''),
                        e = c.settings;
                     e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
                  }
                  (this.labelContainer = a(this.settings.errorLabelContainer)),
                     (this.errorContext =
                        (this.labelContainer.length && this.labelContainer) ||
                        a(this.currentForm)),
                     (this.containers = a(this.settings.errorContainer).add(
                        this.settings.errorLabelContainer
                     )),
                     (this.submitted = {}),
                     (this.valueCache = {}),
                     (this.pendingRequest = 0),
                     (this.pending = {}),
                     (this.invalid = {}),
                     this.reset();
                  var c,
                     d = (this.groups = {});
                  a.each(this.settings.groups, function (b, c) {
                     'string' == typeof c && (c = c.split(/\s/)),
                        a.each(c, function (a, c) {
                           d[c] = b;
                        });
                  }),
                     (c = this.settings.rules),
                     a.each(c, function (b, d) {
                        c[b] = a.validator.normalizeRule(d);
                     }),
                     a(this.currentForm)
                        .on(
                           'focusin.validate focusout.validate keyup.validate',
                           ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                           b
                        )
                        .on(
                           'click.validate',
                           "select, option, [type='radio'], [type='checkbox']",
                           b
                        ),
                     this.settings.invalidHandler &&
                        a(this.currentForm).on(
                           'invalid-form.validate',
                           this.settings.invalidHandler
                        ),
                     a(this.currentForm)
                        .find('[required], [data-rule-required], .required')
                        .attr('aria-required', 'true');
               },
               form: function () {
                  return (
                     this.checkForm(),
                     a.extend(this.submitted, this.errorMap),
                     (this.invalid = a.extend({}, this.errorMap)),
                     this.valid() ||
                        a(this.currentForm).triggerHandler('invalid-form', [
                           this,
                        ]),
                     this.showErrors(),
                     this.valid()
                  );
               },
               checkForm: function () {
                  this.prepareForm();
                  for (
                     var a = 0, b = (this.currentElements = this.elements());
                     b[a];
                     a++
                  )
                     this.check(b[a]);
                  return this.valid();
               },
               element: function (b) {
                  var c = this.clean(b),
                     d = this.validationTargetFor(c),
                     e = !0;
                  return (
                     (this.lastElement = d),
                     void 0 === d
                        ? delete this.invalid[c.name]
                        : (this.prepareElement(d),
                          (this.currentElements = a(d)),
                          (e = this.check(d) !== !1),
                          e
                             ? delete this.invalid[d.name]
                             : (this.invalid[d.name] = !0)),
                     a(b).attr('aria-invalid', !e),
                     this.numberOfInvalids() ||
                        (this.toHide = this.toHide.add(this.containers)),
                     this.showErrors(),
                     e
                  );
               },
               showErrors: function (b) {
                  if (b) {
                     a.extend(this.errorMap, b), (this.errorList = []);
                     for (var c in b)
                        this.errorList.push({
                           message: b[c],
                           element: this.findByName(c)[0],
                        });
                     this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b);
                     });
                  }
                  this.settings.showErrors
                     ? this.settings.showErrors.call(
                          this,
                          this.errorMap,
                          this.errorList
                       )
                     : this.defaultShowErrors();
               },
               resetForm: function () {
                  a.fn.resetForm && a(this.currentForm).resetForm(),
                     (this.submitted = {}),
                     (this.lastElement = null),
                     this.prepareForm(),
                     this.hideErrors();
                  var b,
                     c = this.elements()
                        .removeData('previousValue')
                        .removeAttr('aria-invalid');
                  if (this.settings.unhighlight)
                     for (b = 0; c[b]; b++)
                        this.settings.unhighlight.call(
                           this,
                           c[b],
                           this.settings.errorClass,
                           ''
                        );
                  else c.removeClass(this.settings.errorClass);
               },
               numberOfInvalids: function () {
                  return this.objectLength(this.invalid);
               },
               objectLength: function (a) {
                  var b,
                     c = 0;
                  for (b in a) c++;
                  return c;
               },
               hideErrors: function () {
                  this.hideThese(this.toHide);
               },
               hideThese: function (a) {
                  a.not(this.containers).text(''), this.addWrapper(a).hide();
               },
               valid: function () {
                  return 0 === this.size();
               },
               size: function () {
                  return this.errorList.length;
               },
               focusInvalid: function () {
                  if (this.settings.focusInvalid)
                     try {
                        a(
                           this.findLastActive() ||
                              (this.errorList.length &&
                                 this.errorList[0].element) ||
                              []
                        )
                           .filter(':visible')
                           .focus()
                           .trigger('focusin');
                     } catch (b) {}
               },
               findLastActive: function () {
                  var b = this.lastActive;
                  return (
                     b &&
                     1 ===
                        a.grep(this.errorList, function (a) {
                           return a.element.name === b.name;
                        }).length &&
                     b
                  );
               },
               elements: function () {
                  var b = this,
                     c = {};
                  return a(this.currentForm)
                     .find('input, select, textarea')
                     .not(':submit, :reset, :image, :disabled')
                     .not(this.settings.ignore)
                     .filter(function () {
                        return (
                           !this.name &&
                              b.settings.debug &&
                              window.console &&
                              console.error('%o has no name assigned', this),
                           !(
                              this.name in c || !b.objectLength(a(this).rules())
                           ) && ((c[this.name] = !0), !0)
                        );
                     });
               },
               clean: function (b) {
                  return a(b)[0];
               },
               errors: function () {
                  var b = this.settings.errorClass.split(' ').join('.');
                  return a(
                     this.settings.errorElement + '.' + b,
                     this.errorContext
                  );
               },
               reset: function () {
                  (this.successList = []),
                     (this.errorList = []),
                     (this.errorMap = {}),
                     (this.toShow = a([])),
                     (this.toHide = a([])),
                     (this.currentElements = a([]));
               },
               prepareForm: function () {
                  this.reset(),
                     (this.toHide = this.errors().add(this.containers));
               },
               prepareElement: function (a) {
                  this.reset(), (this.toHide = this.errorsFor(a));
               },
               elementValue: function (b) {
                  var c,
                     d = a(b),
                     e = b.type;
                  return 'radio' === e || 'checkbox' === e
                     ? this.findByName(b.name).filter(':checked').val()
                     : 'number' === e && 'undefined' != typeof b.validity
                     ? !b.validity.badInput && d.val()
                     : ((c = d.val()),
                       'string' == typeof c ? c.replace(/\r/g, '') : c);
               },
               check: function (b) {
                  b = this.validationTargetFor(this.clean(b));
                  var c,
                     d,
                     e,
                     f = a(b).rules(),
                     g = a.map(f, function (a, b) {
                        return b;
                     }).length,
                     h = !1,
                     i = this.elementValue(b);
                  for (d in f) {
                     e = { method: d, parameters: f[d] };
                     try {
                        if (
                           ((c = a.validator.methods[d].call(
                              this,
                              i,
                              b,
                              e.parameters
                           )),
                           'dependency-mismatch' === c && 1 === g)
                        ) {
                           h = !0;
                           continue;
                        }
                        if (((h = !1), 'pending' === c))
                           return void (this.toHide = this.toHide.not(
                              this.errorsFor(b)
                           ));
                        if (!c) return this.formatAndAdd(b, e), !1;
                     } catch (j) {
                        throw (
                           (this.settings.debug &&
                              window.console &&
                              console.log(
                                 'Exception occurred when checking element ' +
                                    b.id +
                                    ", check the '" +
                                    e.method +
                                    "' method.",
                                 j
                              ),
                           j instanceof TypeError &&
                              (j.message +=
                                 '.  Exception occurred when checking element ' +
                                 b.id +
                                 ", check the '" +
                                 e.method +
                                 "' method."),
                           j)
                        );
                     }
                  }
                  if (!h)
                     return (
                        this.objectLength(f) && this.successList.push(b), !0
                     );
               },
               customDataMessage: function (b, c) {
                  return (
                     a(b).data(
                        'msg' +
                           c.charAt(0).toUpperCase() +
                           c.substring(1).toLowerCase()
                     ) || a(b).data('msg')
                  );
               },
               customMessage: function (a, b) {
                  var c = this.settings.messages[a];
                  return c && (c.constructor === String ? c : c[b]);
               },
               findDefined: function () {
                  for (var a = 0; a < arguments.length; a++)
                     if (void 0 !== arguments[a]) return arguments[a];
               },
               defaultMessage: function (b, c) {
                  return this.findDefined(
                     this.customMessage(b.name, c),
                     this.customDataMessage(b, c),
                     (!this.settings.ignoreTitle && b.title) || void 0,
                     a.validator.messages[c],
                     '<strong>Warning: No message defined for ' +
                        b.name +
                        '</strong>'
                  );
               },
               formatAndAdd: function (b, c) {
                  var d = this.defaultMessage(b, c.method),
                     e = /\$?\{(\d+)\}/g;
                  'function' == typeof d
                     ? (d = d.call(this, c.parameters, b))
                     : e.test(d) &&
                       (d = a.validator.format(
                          d.replace(e, '{$1}'),
                          c.parameters
                       )),
                     this.errorList.push({
                        message: d,
                        element: b,
                        method: c.method,
                     }),
                     (this.errorMap[b.name] = d),
                     (this.submitted[b.name] = d);
               },
               addWrapper: function (a) {
                  return (
                     this.settings.wrapper &&
                        (a = a.add(a.parent(this.settings.wrapper))),
                     a
                  );
               },
               defaultShowErrors: function () {
                  var a, b, c;
                  for (a = 0; this.errorList[a]; a++)
                     (c = this.errorList[a]),
                        this.settings.highlight &&
                           this.settings.highlight.call(
                              this,
                              c.element,
                              this.settings.errorClass,
                              this.settings.validClass
                           ),
                        this.showLabel(c.element, c.message);
                  if (
                     (this.errorList.length &&
                        (this.toShow = this.toShow.add(this.containers)),
                     this.settings.success)
                  )
                     for (a = 0; this.successList[a]; a++)
                        this.showLabel(this.successList[a]);
                  if (this.settings.unhighlight)
                     for (a = 0, b = this.validElements(); b[a]; a++)
                        this.settings.unhighlight.call(
                           this,
                           b[a],
                           this.settings.errorClass,
                           this.settings.validClass
                        );
                  (this.toHide = this.toHide.not(this.toShow)),
                     this.hideErrors(),
                     this.addWrapper(this.toShow).show();
               },
               validElements: function () {
                  return this.currentElements.not(this.invalidElements());
               },
               invalidElements: function () {
                  return a(this.errorList).map(function () {
                     return this.element;
                  });
               },
               showLabel: function (b, c) {
                  var d,
                     e,
                     f,
                     g = this.errorsFor(b),
                     h = this.idOrName(b),
                     i = a(b).attr('aria-describedby');
                  g.length
                     ? (g
                          .removeClass(this.settings.validClass)
                          .addClass(this.settings.errorClass),
                       g.html(c))
                     : ((g = a('<' + this.settings.errorElement + '>')
                          .attr('id', h + '-error')
                          .addClass(this.settings.errorClass)
                          .html(c || '')),
                       (d = g),
                       this.settings.wrapper &&
                          (d = g
                             .hide()
                             .show()
                             .wrap('<' + this.settings.wrapper + '/>')
                             .parent()),
                       this.labelContainer.length
                          ? this.labelContainer.append(d)
                          : this.settings.errorPlacement
                          ? this.settings.errorPlacement(d, a(b))
                          : d.insertAfter(b),
                       g.is('label')
                          ? g.attr('for', h)
                          : 0 === g.parents("label[for='" + h + "']").length &&
                            ((f = g
                               .attr('id')
                               .replace(/(:|\.|\[|\]|\$)/g, '\\$1')),
                            i
                               ? i.match(new RegExp('\\b' + f + '\\b')) ||
                                 (i += ' ' + f)
                               : (i = f),
                            a(b).attr('aria-describedby', i),
                            (e = this.groups[b.name]),
                            e &&
                               a.each(this.groups, function (b, c) {
                                  c === e &&
                                     a(
                                        "[name='" + b + "']",
                                        this.currentForm
                                     ).attr('aria-describedby', g.attr('id'));
                               }))),
                     !c &&
                        this.settings.success &&
                        (g.text(''),
                        'string' == typeof this.settings.success
                           ? g.addClass(this.settings.success)
                           : this.settings.success(g, b)),
                     (this.toShow = this.toShow.add(g));
               },
               errorsFor: function (b) {
                  var c = this.idOrName(b),
                     d = a(b).attr('aria-describedby'),
                     e = "label[for='" + c + "'], label[for='" + c + "'] *";
                  return (
                     d && (e = e + ', #' + d.replace(/\s+/g, ', #')),
                     this.errors().filter(e)
                  );
               },
               idOrName: function (a) {
                  return (
                     this.groups[a.name] ||
                     (this.checkable(a) ? a.name : a.id || a.name)
                  );
               },
               validationTargetFor: function (b) {
                  return (
                     this.checkable(b) && (b = this.findByName(b.name)),
                     a(b).not(this.settings.ignore)[0]
                  );
               },
               checkable: function (a) {
                  return /radio|checkbox/i.test(a.type);
               },
               findByName: function (b) {
                  return a(this.currentForm).find("[name='" + b + "']");
               },
               getLength: function (b, c) {
                  switch (c.nodeName.toLowerCase()) {
                     case 'select':
                        return a('option:selected', c).length;
                     case 'input':
                        if (this.checkable(c))
                           return this.findByName(c.name).filter(':checked')
                              .length;
                  }
                  return b.length;
               },
               depend: function (a, b) {
                  return (
                     !this.dependTypes[typeof a] ||
                     this.dependTypes[typeof a](a, b)
                  );
               },
               dependTypes: {
                  boolean: function (a) {
                     return a;
                  },
                  string: function (b, c) {
                     return !!a(b, c.form).length;
                  },
                  function: function (a, b) {
                     return a(b);
                  },
               },
               optional: function (b) {
                  var c = this.elementValue(b);
                  return (
                     !a.validator.methods.required.call(this, c, b) &&
                     'dependency-mismatch'
                  );
               },
               startRequest: function (a) {
                  this.pending[a.name] ||
                     (this.pendingRequest++, (this.pending[a.name] = !0));
               },
               stopRequest: function (b, c) {
                  this.pendingRequest--,
                     this.pendingRequest < 0 && (this.pendingRequest = 0),
                     delete this.pending[b.name],
                     c &&
                     0 === this.pendingRequest &&
                     this.formSubmitted &&
                     this.form()
                        ? (a(this.currentForm).submit(),
                          (this.formSubmitted = !1))
                        : !c &&
                          0 === this.pendingRequest &&
                          this.formSubmitted &&
                          (a(this.currentForm).triggerHandler('invalid-form', [
                             this,
                          ]),
                          (this.formSubmitted = !1));
               },
               previousValue: function (b) {
                  return (
                     a.data(b, 'previousValue') ||
                     a.data(b, 'previousValue', {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(b, 'remote'),
                     })
                  );
               },
               destroy: function () {
                  this.resetForm(),
                     a(this.currentForm)
                        .off('.validate')
                        .removeData('validator');
               },
            },
            classRuleSettings: {
               required: { required: !0 },
               email: { email: !0 },
               url: { url: !0 },
               date: { date: !0 },
               dateISO: { dateISO: !0 },
               number: { number: !0 },
               digits: { digits: !0 },
               creditcard: { creditcard: !0 },
            },
            addClassRules: function (b, c) {
               b.constructor === String
                  ? (this.classRuleSettings[b] = c)
                  : a.extend(this.classRuleSettings, b);
            },
            classRules: function (b) {
               var c = {},
                  d = a(b).attr('class');
               return (
                  d &&
                     a.each(d.split(' '), function () {
                        this in a.validator.classRuleSettings &&
                           a.extend(c, a.validator.classRuleSettings[this]);
                     }),
                  c
               );
            },
            normalizeAttributeRule: function (a, b, c, d) {
               /min|max/.test(c) &&
                  (null === b || /number|range|text/.test(b)) &&
                  ((d = Number(d)), isNaN(d) && (d = void 0)),
                  d || 0 === d
                     ? (a[c] = d)
                     : b === c && 'range' !== b && (a[c] = !0);
            },
            attributeRules: function (b) {
               var c,
                  d,
                  e = {},
                  f = a(b),
                  g = b.getAttribute('type');
               for (c in a.validator.methods)
                  'required' === c
                     ? ((d = b.getAttribute(c)),
                       '' === d && (d = !0),
                       (d = !!d))
                     : (d = f.attr(c)),
                     this.normalizeAttributeRule(e, g, c, d);
               return (
                  e.maxlength &&
                     /-1|2147483647|524288/.test(e.maxlength) &&
                     delete e.maxlength,
                  e
               );
            },
            dataRules: function (b) {
               var c,
                  d,
                  e = {},
                  f = a(b),
                  g = b.getAttribute('type');
               for (c in a.validator.methods)
                  (d = f.data(
                     'rule' +
                        c.charAt(0).toUpperCase() +
                        c.substring(1).toLowerCase()
                  )),
                     this.normalizeAttributeRule(e, g, c, d);
               return e;
            },
            staticRules: function (b) {
               var c = {},
                  d = a.data(b.form, 'validator');
               return (
                  d.settings.rules &&
                     (c =
                        a.validator.normalizeRule(d.settings.rules[b.name]) ||
                        {}),
                  c
               );
            },
            normalizeRules: function (b, c) {
               return (
                  a.each(b, function (d, e) {
                     if (e === !1) return void delete b[d];
                     if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                           case 'string':
                              f = !!a(e.depends, c.form).length;
                              break;
                           case 'function':
                              f = e.depends.call(c, c);
                        }
                        f
                           ? (b[d] = void 0 === e.param || e.param)
                           : delete b[d];
                     }
                  }),
                  a.each(b, function (d, e) {
                     b[d] = a.isFunction(e) ? e(c) : e;
                  }),
                  a.each(['minlength', 'maxlength'], function () {
                     b[this] && (b[this] = Number(b[this]));
                  }),
                  a.each(['rangelength', 'range'], function () {
                     var c;
                     b[this] &&
                        (a.isArray(b[this])
                           ? (b[this] = [
                                Number(b[this][0]),
                                Number(b[this][1]),
                             ])
                           : 'string' == typeof b[this] &&
                             ((c = b[this]
                                .replace(/[\[\]]/g, '')
                                .split(/[\s,]+/)),
                             (b[this] = [Number(c[0]), Number(c[1])])));
                  }),
                  a.validator.autoCreateRanges &&
                     (null != b.min &&
                        null != b.max &&
                        ((b.range = [b.min, b.max]),
                        delete b.min,
                        delete b.max),
                     null != b.minlength &&
                        null != b.maxlength &&
                        ((b.rangelength = [b.minlength, b.maxlength]),
                        delete b.minlength,
                        delete b.maxlength)),
                  b
               );
            },
            normalizeRule: function (b) {
               if ('string' == typeof b) {
                  var c = {};
                  a.each(b.split(/\s/), function () {
                     c[this] = !0;
                  }),
                     (b = c);
               }
               return b;
            },
            addMethod: function (b, c, d) {
               (a.validator.methods[b] = c),
                  (a.validator.messages[b] =
                     void 0 !== d ? d : a.validator.messages[b]),
                  c.length < 3 &&
                     a.validator.addClassRules(b, a.validator.normalizeRule(b));
            },
            methods: {
               required: function (b, c, d) {
                  if (!this.depend(d, c)) return 'dependency-mismatch';
                  if ('select' === c.nodeName.toLowerCase()) {
                     var e = a(c).val();
                     return e && e.length > 0;
                  }
                  return this.checkable(c)
                     ? this.getLength(b, c) > 0
                     : b.length > 0;
               },
               email: function (a, b) {
                  return (
                     this.optional(b) ||
                     /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                        a
                     )
                  );
               },
               url: function (a, b) {
                  return (
                     this.optional(b) ||
                     /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                        a
                     )
                  );
               },
               date: function (a, b) {
                  return (
                     this.optional(b) ||
                     !/Invalid|NaN/.test(new Date(a).toString())
                  );
               },
               dateISO: function (a, b) {
                  return (
                     this.optional(b) ||
                     /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                        a
                     )
                  );
               },
               number: function (a, b) {
                  return (
                     this.optional(b) ||
                     /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                  );
               },
               digits: function (a, b) {
                  return this.optional(b) || /^\d+$/.test(a);
               },
               creditcard: function (a, b) {
                  if (this.optional(b)) return 'dependency-mismatch';
                  if (/[^0-9 \-]+/.test(a)) return !1;
                  var c,
                     d,
                     e = 0,
                     f = 0,
                     g = !1;
                  if (
                     ((a = a.replace(/\D/g, '')),
                     a.length < 13 || a.length > 19)
                  )
                     return !1;
                  for (c = a.length - 1; c >= 0; c--)
                     (d = a.charAt(c)),
                        (f = parseInt(d, 10)),
                        g && (f *= 2) > 9 && (f -= 9),
                        (e += f),
                        (g = !g);
                  return e % 10 === 0;
               },
               minlength: function (b, c, d) {
                  var e = a.isArray(b) ? b.length : this.getLength(b, c);
                  return this.optional(c) || e >= d;
               },
               maxlength: function (b, c, d) {
                  var e = a.isArray(b) ? b.length : this.getLength(b, c);
                  return this.optional(c) || e <= d;
               },
               rangelength: function (b, c, d) {
                  var e = a.isArray(b) ? b.length : this.getLength(b, c);
                  return this.optional(c) || (e >= d[0] && e <= d[1]);
               },
               min: function (a, b, c) {
                  return this.optional(b) || a >= c;
               },
               max: function (a, b, c) {
                  return this.optional(b) || a <= c;
               },
               range: function (a, b, c) {
                  return this.optional(b) || (a >= c[0] && a <= c[1]);
               },
               equalTo: function (b, c, d) {
                  var e = a(d);
                  return (
                     this.settings.onfocusout &&
                        e
                           .off('.validate-equalTo')
                           .on('blur.validate-equalTo', function () {
                              a(c).valid();
                           }),
                     b === e.val()
                  );
               },
               remote: function (b, c, d) {
                  if (this.optional(c)) return 'dependency-mismatch';
                  var e,
                     f,
                     g = this.previousValue(c);
                  return (
                     this.settings.messages[c.name] ||
                        (this.settings.messages[c.name] = {}),
                     (g.originalMessage =
                        this.settings.messages[c.name].remote),
                     (this.settings.messages[c.name].remote = g.message),
                     (d = ('string' == typeof d && { url: d }) || d),
                     g.old === b
                        ? g.valid
                        : ((g.old = b),
                          (e = this),
                          this.startRequest(c),
                          (f = {}),
                          (f[c.name] = b),
                          a.ajax(
                             a.extend(
                                !0,
                                {
                                   mode: 'abort',
                                   port: 'validate' + c.name,
                                   dataType: 'json',
                                   data: f,
                                   context: e.currentForm,
                                   success: function (d) {
                                      var f,
                                         h,
                                         i,
                                         j = d === !0 || 'true' === d;
                                      (e.settings.messages[c.name].remote =
                                         g.originalMessage),
                                         j
                                            ? ((i = e.formSubmitted),
                                              e.prepareElement(c),
                                              (e.formSubmitted = i),
                                              e.successList.push(c),
                                              delete e.invalid[c.name],
                                              e.showErrors())
                                            : ((f = {}),
                                              (h =
                                                 d ||
                                                 e.defaultMessage(c, 'remote')),
                                              (f[c.name] = g.message =
                                                 a.isFunction(h) ? h(b) : h),
                                              (e.invalid[c.name] = !0),
                                              e.showErrors(f)),
                                         (g.valid = j),
                                         e.stopRequest(c, j);
                                   },
                                },
                                d
                             )
                          ),
                          'pending')
                  );
               },
            },
         });
      var b,
         c = {};
      a.ajaxPrefilter
         ? a.ajaxPrefilter(function (a, b, d) {
              var e = a.port;
              'abort' === a.mode && (c[e] && c[e].abort(), (c[e] = d));
           })
         : ((b = a.ajax),
           (a.ajax = function (d) {
              var e = ('mode' in d ? d : a.ajaxSettings).mode,
                 f = ('port' in d ? d : a.ajaxSettings).port;
              return 'abort' === e
                 ? (c[f] && c[f].abort(),
                   (c[f] = b.apply(this, arguments)),
                   c[f])
                 : b.apply(this, arguments);
           }));
   }),
   Object.create ||
      (Object.create = function (a, b) {
         function c() {}
         if ('object' != typeof a && 'function' != typeof a)
            throw new TypeError('Object prototype may only be an Object: ' + a);
         if (null === a)
            throw new Error(
               "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
            );
         if ('undefined' != typeof b)
            throw new Error(
               "This browser's implementation of Object.create is a shim and doesn't support a second argument."
            );
         return (c.prototype = a), new c();
      }),
   ('undefined' != typeof console && 'undefined' != typeof console.log) ||
      (this.console = { log: function () {} });
var TaxService = function (a) {
   this.calculator = a;
};
TaxService.prototype.sumCalculator = function () {
   return this.calculator.calculate();
};
var Calculator = function (a) {
   this.dataUser = a;
};
(Calculator.prototype.firstStepA1 = function (a) {
   return (
      this.dataUser.sumByTax2 <= this.config.MS_VALUE
         ? ((a.result = this.dataUser.sumByTax2 - this.config.MS_VALUE_1),
           (a.benefits += this.config.MS_VALUE_1))
         : (a.result = this.dataUser.sumByTax2),
      (a.result = a.result < 0 ? 0 : a.result),
      console.log('Finish 1 step with result:', a.result),
      a
   );
}),
   (Calculator.prototype.firstStepA1NoDeduction = function (a) {
      return (
         (a.result = this.dataUser.sumByTax2),
         console.log('Finish 1 step (no deduction) with result:', a.result),
         a
      );
   }),
   (Calculator.prototype.secondStepA1 = function (a) {
      if (this.dataUser.oneParent5)
         (a.result =
            a.result -
            this.config.MS_VALUE_2 * this.dataUser.countChildBeforeEighteen6),
            (a.benefits +=
               this.config.MS_VALUE_2 *
               this.dataUser.countChildBeforeEighteen6);
      else if (
         0 === this.dataUser.countChildBeforeEighteen6 &&
         0 === this.dataUser.countChildInvalid7
      );
      else if (
         1 === this.dataUser.countChildBeforeEighteen6 &&
         0 === this.dataUser.countChildInvalid7
      )
         (a.result = a.result - this.config.MS_VALUE_3),
            (a.benefits += this.config.MS_VALUE_3);
      else if (
         1 === this.dataUser.countChildBeforeEighteen6 &&
         1 === this.dataUser.countChildInvalid7
      )
         (a.result = a.result - this.config.MS_VALUE_2),
            (a.benefits += this.config.MS_VALUE_2);
      else if (
         this.dataUser.countChildBeforeEighteen6 >= 2 &&
         this.dataUser.countChildInvalid7 <=
            this.dataUser.countChildBeforeEighteen6
      )
         (a.result =
            a.result -
            this.config.MS_VALUE_2 * this.dataUser.countChildBeforeEighteen6),
            (a.benefits +=
               this.config.MS_VALUE_2 *
               this.dataUser.countChildBeforeEighteen6);
      else if (
         this.dataUser.countChildInvalid7 >
         this.dataUser.countChildBeforeEighteen6
      )
         throw new CountChildInvalidError();
      return (
         (a.result = a.result < 0 ? 0 : a.result),
         console.log('Finish 2 step with result:', a.result),
         a
      );
   }),
   (Calculator.prototype.threeStepA1 = function (a) {
      return (
         this.dataUser.oneParent5
            ? ((a.result =
                 a.result -
                 this.config.MS_VALUE_2 * this.dataUser.countDependents8),
              (a.benefits +=
                 this.config.MS_VALUE_2 * this.dataUser.countDependents8))
            : ((a.result =
                 a.result -
                 this.config.MS_VALUE_3 * this.dataUser.countDependents8),
              (a.benefits +=
                 this.config.MS_VALUE_3 * this.dataUser.countDependents8)),
         (a.result = a.result < 0 ? 0 : a.result),
         console.log('Finish 3 step with result:', a.result),
         a
      );
   }),
   (Calculator.prototype.fourStepA1 = function (a) {
      return (
         this.dataUser.privileges9
            ? ((a.result = a.result - this.config.MS_VALUE_4),
              (a.benefits += this.config.MS_VALUE_4))
            : (a.result = a.result),
         (a.result = a.result < 0 ? 0 : a.result),
         console.log('Finish 4 step with result:', a.result),
         a
      );
   }),
   (Calculator.prototype.fiveStepA1 = function (a) {
      return (
         (a.result = a.result - this.dataUser.sumByEducation10),
         (a.benefits += this.dataUser.sumByEducation10),
         (a.result = a.result < 0 ? 0 : a.result),
         console.log('Finish 5 step with result:', a.result),
         a
      );
   }),
   (Calculator.prototype.sixStepA1 = function (a) {
      return (
         this.dataUser.sumSpendInsurancePremiums11 <= this.config.MS_VALUE_5
            ? ((a.result =
                 a.result - this.dataUser.sumSpendInsurancePremiums11),
              (a.benefits += this.dataUser.sumSpendInsurancePremiums11))
            : ((a.result = a.result - this.config.MS_VALUE_5),
              (a.benefits += this.config.MS_VALUE_5)),
         (a.result = a.result < 0 ? 0 : a.result),
         console.log('Finish 6 step with result:', a.result),
         a
      );
   }),
   (Calculator.prototype.sevenStepA1 = function (a) {
      return (
         (a.result = a.result - this.dataUser.costsForBuild12),
         (a.benefits += this.dataUser.costsForBuild12),
         (a.result = a.result < 0 ? 0 : a.result),
         console.log('Finish 7 step with result:', a.result),
         a
      );
   }),
   (Calculator.prototype.additionalStepA1 = function (a) {
      return (
         (a.result =
            a.result -
            this.dataUser.sumByEducation10 -
            this.dataUser.sumSpendInsurancePremiums11 -
            this.dataUser.costsForBuild12),
         (a.benefits =
            a.benefits +
            this.dataUser.sumByEducation10 +
            this.dataUser.sumSpendInsurancePremiums11 +
            this.dataUser.costsForBuild12),
         (a.result = a.result < 0 ? 0 : a.result),
         console.log('Finish additional step with result:', a.result),
         a
      );
   }),
   (Calculator.prototype.income = function (a, b) {
      if (a.selectYear > 2019)
         return (
            console.log(' > 2019'),
            ((1 == this.dataUser.incomeType1 ||
               2 == this.dataUser.incomeType1) &&
               this.dataUser.haveJob3 &&
               !this.dataUser.incomeFromJob4) ||
            5 == this.dataUser.incomeType1
               ? ((a = this.firstStepA1NoDeduction(a)),
                 2021 !== a.selectYear && (a = this.additionalStepA1(a)),
                 this.finishStep(a, b))
               : ((a = this.firstStepA1(a)),
                 (a = this.secondStepA1(a)),
                 (a = this.threeStepA1(a)),
                 (a = this.fourStepA1(a)),
                 ((1 != this.dataUser.incomeType1 &&
                    2 != this.dataUser.incomeType1) ||
                    this.dataUser.haveJob3) &&
                    ((a = this.fiveStepA1(a)),
                    (a = this.sixStepA1(a)),
                    (a = this.sevenStepA1(a))),
                 this.finishStep(a, b))
         );
      if (a.selectYear < 2019) {
         if (this.dataUser.haveJob3 && this.dataUser.incomeFromJob4)
            return (
               (a = this.firstStepA1(a)),
               (a = this.secondStepA1(a)),
               (a = this.threeStepA1(a)),
               (a = this.fourStepA1(a)),
               (a = this.fiveStepA1(a)),
               (a = this.sixStepA1(a)),
               (a = this.sevenStepA1(a)),
               this.finishStep(a, b)
            );
         if (this.dataUser.haveJob3 && !this.dataUser.incomeFromJob4)
            return (a.result = this.dataUser.sumByTax2), this.finishStep(a, b);
         if (!this.dataUser.haveJob3)
            return (
               (a = this.firstStepA1(a)),
               (a = this.secondStepA1(a)),
               (a = this.threeStepA1(a)),
               (a = this.fourStepA1(a)),
               this.finishStep(a, b)
            );
      }
      return 2019 === a.selectYear
         ? (1 != this.dataUser.incomeType1 && 2 != this.dataUser.incomeType1) ||
           !this.dataUser.haveJob3 ||
           this.dataUser.incomeFromJob4
            ? 5 == this.dataUser.incomeType1
               ? ((a = this.firstStepA1NoDeduction(a)),
                 (a = this.additionalStepA1(a)),
                 this.finishStep(a, b))
               : ((a = this.firstStepA1(a)),
                 (a = this.secondStepA1(a)),
                 (a = this.threeStepA1(a)),
                 (a = this.fourStepA1(a)),
                 (a = this.fiveStepA1(a)),
                 (a = this.sixStepA1(a)),
                 (a = this.sevenStepA1(a)),
                 this.finishStep(a, b))
            : ((a = this.firstStepA1NoDeduction(a)),
              (a = this.additionalStepA1(a)),
              this.finishStep(a, b))
         : void 0;
   }),
   (Calculator.prototype.finishStep = function (a, b) {
      return (
         console.log('Last step for get percent:', a, b),
         (a.result = (a.result / 100) * b),
         this.dataUser.sumByTax2 < a.benefits &&
            (a.benefits = this.dataUser.sumByTax2),
         a
      );
   }),
   (Calculator.prototype.setFormUserData = function (a) {
      this.dataUser = a;
   }),
   (CountChildInvalidError.property = Object.create(Error.prototype)),
   (CountChildInvalidError.constructor = CountChildInvalidError);
var Calculator2015 = function (a) {
   (this.config = {
      MS_VALUE: 442e4,
      MS_VALUE_1: 73e4,
      MS_VALUE_2: 41e4,
      MS_VALUE_3: 21e4,
      MS_VALUE_4: 103e4,
      MS_VALUE_5: 16e6,
      percent: { PERCENT_13: 13, PERCENT_9: 9, PERCENT_4: 4, PERCENT_16: 16 },
   }),
      Calculator.apply(this, arguments);
};
(Calculator2015.prototype = Object.create(Calculator.prototype)),
   (Calculator2015.constructor = Calculator2015),
   (Calculator2015.prototype.calculate = function () {
      var a = { result: 0, benefits: 0 };
      switch (this.dataUser.incomeType1) {
         case 1:
            return this.income(a, this.config.percent.PERCENT_13);
         case 2:
            return this.income(a, this.config.percent.PERCENT_9);
         default:
            throw new Error('not found');
      }
   });
var Calculator2016 = function (a) {
   (this.config = {
      MS_VALUE: 501e4,
      MS_VALUE_1: 83e4,
      MS_VALUE_2: 46e4,
      MS_VALUE_3: 24e4,
      MS_VALUE_4: 117e4,
      MS_VALUE_5: 1813e4,
      percent: { PERCENT_13: 13, PERCENT_9: 9, PERCENT_4: 4, PERCENT_16: 16 },
   }),
      Calculator.apply(this, arguments);
};
(Calculator2016.prototype = Object.create(Calculator.prototype)),
   (Calculator2016.constructor = Calculator2016),
   (Calculator2016.prototype.calculate = function () {
      var a = { result: 0, benefits: 0 };
      switch (this.dataUser.incomeType1) {
         case 1:
            return this.income(a, this.config.percent.PERCENT_13);
         case 2:
            return this.income(a, this.config.percent.PERCENT_9);
         case 3:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_4)
            );
         case 4:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_16)
            );
      }
   });
var Calculator2016after = function (a) {
   (this.config = {
      MS_VALUE: 501,
      MS_VALUE_1: 83,
      MS_VALUE_2: 46,
      MS_VALUE_3: 24,
      MS_VALUE_4: 117,
      MS_VALUE_5: 1813,
      percent: { PERCENT_13: 13, PERCENT_9: 9, PERCENT_4: 4, PERCENT_16: 16 },
   }),
      Calculator.apply(this, arguments);
};
(Calculator2016after.prototype = Object.create(Calculator.prototype)),
   (Calculator2016after.constructor = Calculator2016after),
   (Calculator2016after.prototype.calculate = function () {
      var a = { result: 0, benefits: 0 };
      switch (this.dataUser.incomeType1) {
         case 1:
            return this.income(a, this.config.percent.PERCENT_13);
         case 2:
            return this.income(a, this.config.percent.PERCENT_9);
         case 3:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_4)
            );
         case 4:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_16)
            );
      }
   });
var Calculator2017 = function (a) {
   (this.config = {
      MS_VALUE: 563,
      MS_VALUE_1: 93,
      MS_VALUE_2: 52,
      MS_VALUE_3: 27,
      MS_VALUE_4: 131,
      MS_VALUE_5: 2874,
      percent: { PERCENT_13: 13, PERCENT_9: 9, PERCENT_4: 4, PERCENT_16: 16 },
   }),
      Calculator.apply(this, arguments);
};
(Calculator2017.prototype = Object.create(Calculator.prototype)),
   (Calculator2017.constructor = Calculator2017),
   (Calculator2017.prototype.calculate = function () {
      var a = { result: 0, benefits: 0 };
      switch (this.dataUser.incomeType1) {
         case 1:
            return this.income(a, this.config.percent.PERCENT_13);
         case 2:
            return this.income(a, this.config.percent.PERCENT_9);
         case 3:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_4)
            );
         case 4:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_16)
            );
         case 5:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_13)
            );
      }
   });
var Calculator2018 = function (a) {
   (this.config = {
      MS_VALUE: 620,
      MS_VALUE_1: 102,
      MS_VALUE_2: 57,
      MS_VALUE_3: 30,
      MS_VALUE_4: 144,
      MS_VALUE_5: 3164,
      percent: { PERCENT_13: 13, PERCENT_9: 9, PERCENT_4: 4, PERCENT_16: 16 },
   }),
      Calculator.apply(this, arguments);
};
(Calculator2018.prototype = Object.create(Calculator.prototype)),
   (Calculator2018.constructor = Calculator2018),
   (Calculator2018.prototype.calculate = function () {
      var a = { result: 0, benefits: 0 };
      switch (this.dataUser.incomeType1) {
         case 1:
            return this.income(a, this.config.percent.PERCENT_13);
         case 2:
            return this.income(a, this.config.percent.PERCENT_9);
         case 3:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_4)
            );
         case 4:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_16)
            );
         case 5:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_13)
            );
      }
   });
var Calculator2019 = function (a) {
   (this.config = {
      MS_VALUE: 665,
      MS_VALUE_1: 110,
      MS_VALUE_2: 61,
      MS_VALUE_3: 32,
      MS_VALUE_4: 155,
      MS_VALUE_5: 99999999999,
      percent: { PERCENT_13: 13, PERCENT_9: 9, PERCENT_4: 4, PERCENT_16: 16 },
   }),
      Calculator.apply(this, arguments);
};
(Calculator2019.prototype = Object.create(Calculator.prototype)),
   (Calculator2019.constructor = Calculator2019),
   (Calculator2019.prototype.calculate = function () {
      var a = { result: 0, benefits: 0, selectYear: 2019 };
      switch (this.dataUser.incomeType1) {
         case 1:
            return this.income(a, this.config.percent.PERCENT_13);
         case 2:
            return this.income(a, this.config.percent.PERCENT_9);
         case 3:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_4)
            );
         case 4:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_16)
            );
         case 5:
            return this.income(a, this.config.percent.PERCENT_13);
      }
   });
var Calculator2020 = function (a) {
   (this.config = {
      MS_VALUE: 709,
      MS_VALUE_1: 117,
      MS_VALUE_2: 65,
      MS_VALUE_3: 34,
      MS_VALUE_4: 165,
      MS_VALUE_5: 99999999999,
      percent: { PERCENT_13: 13, PERCENT_9: 9, PERCENT_4: 4, PERCENT_16: 16 },
   }),
      Calculator.apply(this, arguments);
};
(Calculator2020.prototype = Object.create(Calculator.prototype)),
   (Calculator2020.constructor = Calculator2020),
   (Calculator2020.prototype.calculate = function () {
      var a = { result: 0, benefits: 0, selectYear: 2020 };
      switch (this.dataUser.incomeType1) {
         case 1:
            return this.income(a, this.config.percent.PERCENT_13);
         case 2:
            return this.income(a, this.config.percent.PERCENT_9);
         case 3:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_4)
            );
         case 4:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_16)
            );
         case 5:
            return this.income(a, this.config.percent.PERCENT_13);
      }
   });
var Calculator2021 = function (a) {
   (this.config = {
      MS_VALUE: 761,
      MS_VALUE_1: 126,
      MS_VALUE_2: 70,
      MS_VALUE_3: 37,
      MS_VALUE_4: 177,
      MS_VALUE_5: 99999999999,
      percent: { PERCENT_13: 13, PERCENT_9: 13, PERCENT_4: 4, PERCENT_16: 16 },
   }),
      Calculator.apply(this, arguments);
};
(Calculator2021.prototype = Object.create(Calculator.prototype)),
   (Calculator2021.constructor = Calculator2021),
   (Calculator2021.prototype.calculate = function () {
      var a = { result: 0, benefits: 0, selectYear: 2021 };
      switch (this.dataUser.incomeType1) {
         case 1:
            return this.income(a, this.config.percent.PERCENT_13);
         case 2:
            return this.income(a, this.config.percent.PERCENT_9);
         case 3:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_4)
            );
         case 4:
            return (
               (a.result = this.dataUser.sumByTax2),
               this.finishStep(a, this.config.percent.PERCENT_16)
            );
         case 5:
            return this.income(a, this.config.percent.PERCENT_13);
      }
   }),
   (function (a) {
      function b(b) {
         var c = b,
            d = c.value.length;
         if ('selectionEnd' in c) {
            var e = c.selectionEnd;
            a(c).val(g(a(c).val().replace(/\s+/g, '').replace(/\,/, '.')));
            var f = c.value.length;
            c.setSelectionRange(e + (f - d), e + (f - d));
         } else {
            var h = c.createTextRange();
            h.expand('character', c.value.length);
            var i = document.selection.createRange();
            i.setEndPoint('StartToStart', h);
            var j = i.text.length;
            a(c).val(g(a(c).val().replace(/\s+/g, '').replace(/\,/, '.')));
            var f = c.value.length;
            i.move('character', j + (f - d)), i.select();
         }
      }
      function c(a, b) {
         var c = [],
            d = [];
         for (var e in a) a.hasOwnProperty(e) && c.push(e);
         for (var e in b) b.hasOwnProperty(e) && d.push(e);
         if (c.length != d.length) return !1;
         for (var f = 0; f < c.length; f++) {
            var g = c[f];
            if (a[g] !== b[g]) return !1;
         }
         return !0;
      }
      function d() {
         a('.modal-calculator .calc-sum-tax-label').text(0),
            a('.modal-calculator .calc-quantity-tax-label').text(0),
            a('.modal-calculator .calc-progress-complete').css('width', '0%'),
            a('.modal-calculator .calc-progress-2').css('width', '0%'),
            a('.modal-calculator .calc-benefits-result').text(0),
            a('.modal-calculator .calc-triangle').css('margin-left', '0%');
      }
      function e() {
         var a = null,
            b = null;
         if (
            ((p = !c(o.formUser, o.defaultUser)),
            2015 !== n &&
               2016 !== n &&
               '2016after' !== n &&
               2017 !== n &&
               2018 !== n &&
               2019 !== n &&
               2020 !== n &&
               2021 !== n)
         )
            throw new Error('Not found realization for the year');
         2015 === n &&
            ((b = new Calculator2015(f(o.formUser))), (a = new TaxService(b))),
            2016 === n &&
               ((b = new Calculator2016(f(o.formUser))),
               (a = new TaxService(b))),
            '2016after' === n &&
               ((b = new Calculator2016after(f(o.formUser))),
               (a = new TaxService(b))),
            2017 === n &&
               ((b = new Calculator2017(f(o.formUser))),
               (a = new TaxService(b))),
            2018 === n &&
               ((b = new Calculator2018(f(o.formUser))),
               (a = new TaxService(b))),
            2019 === n &&
               ((b = new Calculator2019(f(o.formUser))),
               (a = new TaxService(b))),
            2020 === n &&
               ((b = new Calculator2020(f(o.formUser))),
               (a = new TaxService(b))),
            2021 === n &&
               ((b = new Calculator2021(f(o.formUser))),
               (a = new TaxService(b)));
         try {
            var d = a.sumCalculator();
            i(d, b, n), console.log('Finish result:', d.result);
         } catch (e) {
            console.log(e.message), console.log('Finish result:', 0);
         }
      }
      function f(b) {
         return {
            incomeType1: +b.incomeType1,
            sumByTax2: +b.sumByTax2,
            haveJob3: a.parseJSON(b.haveJob3),
            incomeFromJob4: a.parseJSON(b.incomeFromJob4),
            oneParent5: a.parseJSON(b.oneParent5),
            countChildBeforeEighteen6: +b.countChildBeforeEighteen6,
            countChildInvalid7: +b.countChildInvalid7,
            countDependents8: +b.countDependents8,
            privileges9: a.parseJSON(b.privileges9),
            sumByEducation10: +b.sumByEducation10,
            sumSpendInsurancePremiums11: +b.sumSpendInsurancePremiums11,
            costsForBuild12: +b.costsForBuild12,
         };
      }
      function g(a) {
         return 0 === a
            ? 0
            : a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      }
      function h(a, b) {
         var b = b || 0,
            c = Math.pow(10, b),
            d = Math.abs(Math.round(a * c)),
            e = (a < 0 ? '-' : '') + String(Math.floor(d / c));
         if (b > 0) {
            var f = String(d % c),
               g = new Array(Math.max(b - f.length, 0) + 1).join('0');
            e += '.' + g + f;
         }
         return e;
      }
      function i(b, c, d) {
         a(
            '.modal-calculator .calc-right-part-gerb .if-not-by-agent-2021'
         ).hide(),
            a('.modal-calculator .calc-block-information')
               .find('.calc-not-privileges-agent')
               .hide(),
            2019 !== d &&
               2020 !== d &&
               2021 !== d &&
               ('false' === o.formUser.incomeFromJob4 &&
               'true' === o.formUser.haveJob3
                  ? (a('.txt').hide(),
                    3 == o.formUser.incomeType1 ||
                    4 == o.formUser.incomeType1 ||
                    5 == o.formUser.incomeType1
                       ? a('.txt').show()
                       : a('.txt').hide(),
                    a('.modal-calculator .calc-block-information')
                       .find(
                          '.calc-add-sum,.calc-add-privileges,.calc-show-tax,.calc-not-privileges'
                       )
                       .hide(),
                    a('.modal-calculator .calc-not-privileges').show())
                  : 0 !== +o.formUser.sumByTax2 ||
                    (1 != o.formUser.incomeType1 && 2 != o.formUser.incomeType1)
                  ? (3 != o.formUser.incomeType1 &&
                       4 != o.formUser.incomeType1 &&
                       5 != o.formUser.incomeType1) ||
                    (2016 !== d &&
                       '2016after' !== d &&
                       2017 !== d &&
                       2018 !== d)
                     ? (l(o) &&
                          ('false' === o.formUser.haveJob3 ||
                             'true' === o.formUser.haveJob3) &&
                          +o.formUser.sumByTax2 > 0) ||
                       b.benefits > 0
                        ? (a('.modal-calculator .calc-block-information')
                             .find(
                                '.calc-add-sum,.calc-add-privileges,.calc-show-tax,.calc-not-privileges'
                             )
                             .hide(),
                          a('.modal-calculator .calc-show-tax').show())
                        : ((+o.formUser.sumByTax2 > 0 &&
                             'true' === o.formUser.incomeFromJob4) ||
                             'false' === o.formUser.haveJob3 ||
                             'true' === o.formUser.haveJob3) &&
                          (a('.modal-calculator .calc-block-information')
                             .find(
                                '.calc-add-sum,.calc-add-privileges,.calc-show-tax,.calc-not-privileges'
                             )
                             .hide(),
                          a('.modal-calculator .calc-add-privileges').show())
                     : (a('.modal-calculator .calc-block-information')
                          .find(
                             '.calc-add-sum,.calc-add-privileges,.calc-show-tax,.calc-not-privileges'
                          )
                          .hide(),
                       a('.modal-calculator .calc-not-privileges').show(),
                       a('.txt').show())
                  : (a('.modal-calculator .calc-block-information')
                       .find(
                          '.calc-add-sum,.calc-add-privileges,.calc-show-tax,.calc-not-privileges'
                       )
                       .hide(),
                    a('.modal-calculator .calc-add-sum').show())),
            d >= 2019 &&
               (2021 !== d ||
               (((1 != o.formUser.incomeType1 && 2 != o.formUser.incomeType1) ||
                  'true' !== o.formUser.haveJob3 ||
                  'false' !== o.formUser.incomeFromJob4) &&
                  5 != o.formUser.incomeType1)
                  ? 0 !== +o.formUser.sumByTax2 ||
                    (1 != o.formUser.incomeType1 &&
                       2 != o.formUser.incomeType1 &&
                       5 != o.formUser.incomeType1)
                     ? 3 == o.formUser.incomeType1 ||
                       4 == o.formUser.incomeType1
                        ? (a('.modal-calculator .calc-block-information')
                             .find(
                                '.calc-add-sum,.calc-add-privileges,.calc-show-tax,.calc-not-privileges'
                             )
                             .hide(),
                          a('.modal-calculator .calc-not-privileges').show(),
                          a('.txt').show())
                        : !(+o.formUser.sumByTax2 > 0) ||
                          ((5 != o.formUser.incomeType1 ||
                             m(o) ||
                             0 !== b.benefits) &&
                             ((1 != o.formUser.incomeType1 &&
                                2 != o.formUser.incomeType1) ||
                                'true' !== o.formUser.haveJob3 ||
                                'true' !== o.formUser.incomeFromJob4 ||
                                l(o) ||
                                0 !== b.benefits) &&
                             ((1 != o.formUser.incomeType1 &&
                                2 != o.formUser.incomeType1) ||
                                'true' !== o.formUser.haveJob3 ||
                                'false' !== o.formUser.incomeFromJob4 ||
                                m(o) ||
                                0 !== b.benefits) &&
                             ((1 != o.formUser.incomeType1 &&
                                2 != o.formUser.incomeType1) ||
                                'false' !== o.formUser.haveJob3 ||
                                l(o) ||
                                0 !== b.benefits))
                        ? (a('.modal-calculator .calc-block-information')
                             .find(
                                '.calc-add-sum,.calc-add-privileges,.calc-show-tax,.calc-not-privileges'
                             )
                             .hide(),
                          a('.modal-calculator .calc-show-tax').show())
                        : (a('.modal-calculator .calc-block-information')
                             .find(
                                '.calc-add-sum,.calc-add-privileges,.calc-show-tax,.calc-not-privileges'
                             )
                             .hide(),
                          a('.modal-calculator .calc-add-privileges').show())
                     : (a('.modal-calculator .calc-block-information')
                          .find(
                             '.calc-add-sum,.calc-add-privileges,.calc-show-tax,.calc-not-privileges'
                          )
                          .hide(),
                       a('.modal-calculator .calc-add-sum').show())
                  : (a('.modal-calculator .calc-block-information')
                       .find(
                          '.calc-add-sum,.calc-add-privileges,.calc-show-tax,.calc-not-privileges'
                       )
                       .hide(),
                    a('.modal-calculator .calc-not-privileges-agent').show(),
                    a('.txt').show())),
            2021 === d && 5 == o.formUser.incomeType1
               ? (a('.modal-calculator .calc-right-part').hide(),
                 a('.modal-calculator .calc-right-part-gerb').show(),
                 a(
                    '.modal-calculator .calc-right-part-gerb .if-incomeFromJob4-is-false'
                 ).hide(),
                 a(
                    '.modal-calculator .calc-right-part-gerb .if-incomeFromJob4-is-true'
                 ).hide(),
                 a(
                    '.modal-calculator .calc-right-part-gerb .if-not-by-agent-2021'
                 ).show())
               : (2019 === d ||
                    2020 === d ||
                    2021 === d ||
                    (3 != o.formUser.incomeType1 &&
                       4 != o.formUser.incomeType1 &&
                       5 != o.formUser.incomeType1)) &&
                 ((2019 !== d && 2020 !== d) ||
                    (3 != o.formUser.incomeType1 &&
                       4 != o.formUser.incomeType1)) &&
                 (2021 !== d ||
                    (3 != o.formUser.incomeType1 &&
                       4 != o.formUser.incomeType1))
               ? d < 2019 &&
                 'true' === o.formUser.haveJob3 &&
                 'false' === o.formUser.incomeFromJob4
                  ? (a('.modal-calculator .calc-right-part').hide(),
                    a('.modal-calculator .calc-right-part-gerb').show(),
                    a(
                       '.modal-calculator .calc-right-part-gerb .if-incomeFromJob4-is-false'
                    ).show(),
                    a(
                       '.modal-calculator .calc-right-part-gerb .if-incomeFromJob4-is-true'
                    ).hide())
                  : 2021 !== d ||
                    (1 != o.formUser.incomeType1 &&
                       2 != o.formUser.incomeType1) ||
                    'true' !== o.formUser.haveJob3 ||
                    'false' !== o.formUser.incomeFromJob4
                  ? (a('.modal-calculator .calc-right-part-gerb').hide(),
                    a('.modal-calculator .calc-right-part').show(),
                    a(
                       '.modal-calculator .calc-right-part-gerb .if-incomeFromJob4-is-false'
                    ).hide(),
                    a(
                       '.modal-calculator .calc-right-part-gerb .if-incomeFromJob4-is-true'
                    ).show())
                  : (a('.modal-calculator .calc-right-part').hide(),
                    a('.modal-calculator .calc-right-part-gerb').show(),
                    a(
                       '.modal-calculator .calc-right-part-gerb .if-not-by-agent-2021'
                    ).show(),
                    a(
                       '.modal-calculator .calc-right-part-gerb .if-incomeFromJob4-is-false'
                    ).hide(),
                    a(
                       '.modal-calculator .calc-right-part-gerb .if-incomeFromJob4-is-true'
                    ).hide())
               : (a('.modal-calculator .calc-right-part').hide(),
                 a('.modal-calculator .calc-right-part-gerb').show(),
                 a(
                    '.modal-calculator .calc-right-part-gerb .if-incomeFromJob4-is-false'
                 ).hide(),
                 a(
                    '.modal-calculator .calc-right-part-gerb .if-incomeFromJob4-is-true'
                 ).show()),
            3 == o.formUser.incomeType1 ||
            4 == o.formUser.incomeType1 ||
            5 == o.formUser.incomeType1
               ? a('.display-calcblock').hide()
               : 2019 !== d &&
                 2020 !== d &&
                 2021 !== d &&
                 'false' === o.formUser.haveJob3
               ? (a('.modal-calculator .calc-block-not-work').hide(),
                 a('.modal-calculator .calc-form-border').show())
               : 2019 === d ||
                 2020 === d ||
                 2021 === d ||
                 (1 != o.formUser.incomeType1 && 2 != o.formUser.incomeType1) ||
                 'true' !== o.formUser.haveJob3
               ? (2019 !== d && 2020 !== d && 2021 !== d) ||
                 (1 != o.formUser.incomeType1 && 2 != o.formUser.incomeType1) ||
                 (a('.modal-calculator .tax-deductions').show(),
                 a('.display-calcblock').hide(),
                 a('.modal-calculator .calc-form-border').show(),
                 2021 === d && 'false' === o.formUser.haveJob3
                    ? a('.modal-calculator .calc-block-not-work').hide()
                    : a('.modal-calculator .calc-block-not-work').show(),
                 'false' === o.formUser.haveJob3
                    ? a('.modal-calculator .income-from-job').hide()
                    : 'true' === o.formUser.haveJob3 &&
                      'false' === o.formUser.incomeFromJob4 &&
                      a('.modal-calculator .tax-deductions').hide())
               : (a('.modal-calculator .calc-form-border').show(),
                 a('.modal-calculator .calc-block-not-work').show()),
            (2019 !== d && 2020 !== d) ||
               5 != o.formUser.incomeType1 ||
               (a('.modal-calculator .tax-deductions').hide(),
               a('.modal-calculator .calc-form-border').show(),
               a('.modal-calculator .calc-block-not-work').show(),
               a('.display-calcblock').hide()),
            2015 == d || 2016 == d
               ? (a('.calc-sum-tax-label').text(g(Math.round(b.result))),
                 a('.calc-benefits-result').text(g(b.benefits)),
                 a('.calc-quantity-tax-label').text(g(o.formUser.sumByTax2)))
               : ('2016after' != d &&
                    2017 !== d &&
                    2018 !== d &&
                    2019 !== d &&
                    2020 !== d &&
                    2021 !== d) ||
                 (a('.calc-sum-tax-label').text(g(h(b.result, 2))),
                 a('.calc-quantity-tax-label').text(
                    g(h(o.formUser.sumByTax2, 2))
                 ),
                 a('.calc-benefits-result').text(g(h(b.benefits, 2))));
         var e =
            0 === b.result
               ? 0
               : Math.round((100 * b.result) / +o.formUser.sumByTax2);
         a('.calc-progress-complete').css('width', e + '%'),
            a('.calc-triangle').css('margin-left', e + '%');
      }
      function j(b) {
         a.extend(o.formUser, o.defaultUser);
         for (var c in o.formUser)
            'incomeType1' !== c &&
               (a('.modal-calculator input[name=' + c + ']').val(o.formUser[c]),
               a('.modal-calculator input[name=' + c + ']').val(o.formUser[c]));
         a('.modal-calculator .calc-income-tooltip').tooltip('enable'),
            a('.modal-calculator .calc-income-tooltip:first').tooltip(
               'disable'
            ),
            a('.modal-calculator .calc-income-type').removeClass('select');
         var f = 2019 === b || 2020 === b ? '#for2019' : '#notFor2019';
         2021 === b && (f = '#for2021');
         var g = a('.modal-calculator .calc-income .calc-income-type:eq(0)');
         g.addClass('select', 3e3).find(f).prop('checked', !0),
            g
               .find('.calc-income-type-text.calc-income-first')
               .removeClass('calc-dots')
               .find('span')
               .show(),
            a(
               '.modal-calculator .calc-income .calc-income-type:eq(1) .calc-income-type-text'
            ).addClass('calc-dots'),
            a(
               '.modal-calculator .calc-income .calc-income-type:eq(2) .calc-income-type-text'
            ).addClass('calc-dots'),
            a(
               '.modal-calculator .calc-income .calc-income-type:eq(3) .calc-income-type-text'
            ).addClass('calc-dots'),
            a(
               '.modal-calculator .calc-income .calc-income-type:eq(4) .calc-income-type-text'
            ).addClass('calc-dots'),
            a('.modal-calculator .btn-group')
               .find('.calc-button')
               .removeClass('calc-check'),
            a(
               '.modal-calculator .btn-group:eq(0) .calc-button:eq(0),.btn-group:eq(1) .calc-button:eq(0)'
            ).addClass('calc-check'),
            a(
               '.modal-calculator .btn-group:eq(2) .calc-button:eq(1),.btn-group:eq(3) .calc-button:eq(1)'
            ).addClass('calc-check'),
            a('.modal-calculator .calc-block-not-work').show(),
            a('.modal-calculator .calc-right-part-gerb').hide(),
            a('.display-calcblock').show(),
            a('.modal-calculator .calc-right-part').show(),
            a('.modal-calculator .calc-block-information')
               .find(
                  '.calc-add-sum,.calc-add-privileges,.calc-show-tax,.calc-not-privileges,.calc-not-privileges-agent'
               )
               .hide(),
            a('.modal-calculator .calc-add-sum').show(),
            a('.modal-calculator .calc-amount-tax-block').hide(),
            (p = !1),
            d();
         a('.modal-calculator .form').valid();
         e();
      }
      function k() {
         var b = a(this).find('.modal-calc-container');
         b.css(
            'margin-top',
            Math.max(0, (a(window).height() - b.height()) / 2)
         );
      }
      function l(a) {
         return (
            'false' !== a.formUser.oneParent5 ||
            '' !== a.formUser.countChildBeforeEighteen6 ||
            '' !== a.formUser.countChildInvalid7 ||
            '' !== a.formUser.countDependents8 ||
            'false' !== a.formUser.privileges9 ||
            '' !== a.formUser.sumByEducation10 ||
            '' !== a.formUser.sumSpendInsurancePremiums11 ||
            '' !== a.formUser.costsForBuild12
         );
      }
      function m(a) {
         return (
            '' !== a.formUser.sumByEducation10 ||
            '' !== a.formUser.sumSpendInsurancePremiums11 ||
            '' !== a.formUser.costsForBuild12
         );
      }
      var n = 2015,
         o = {
            formUser: {
               incomeType1: '1',
               sumByTax2: '',
               haveJob3: 'true',
               incomeFromJob4: 'true',
               oneParent5: 'false',
               countChildBeforeEighteen6: '',
               countChildInvalid7: '',
               countDependents8: '',
               privileges9: 'false',
               sumByEducation10: '',
               sumSpendInsurancePremiums11: '',
               costsForBuild12: '',
            },
            defaultUser: {
               incomeType1: '1',
               sumByTax2: '',
               haveJob3: 'true',
               incomeFromJob4: 'true',
               oneParent5: 'false',
               countChildBeforeEighteen6: '',
               countChildInvalid7: '',
               countDependents8: '',
               privileges9: 'false',
               sumByEducation10: '',
               sumSpendInsurancePremiums11: '',
               costsForBuild12: '',
            },
         },
         p = !1;
      a(document).ready(function () {
         function c() {
            return 'Введенные данные и расчеты не будут сохранены.';
         }
         console.log('DEBUG MODE!'),
            p && (window.onbeforeunload = c),
            a('.modal').on('shown.bs.modal', k),
            a(window).on('resize', function () {
               a('.modal:visible').each(k);
            }),
            a('.modal-calculator .calc-income-tooltip').tooltip({
               trigger: 'hover',
               html: !0,
               placement: 'auto',
            }),
            a('.modal-calculator .calc-income-tooltip:first').tooltip(
               'disable'
            ),
            a('.modal-calculator .calc-info-icon').tooltip({
               placement: 'auto',
            }),
            a.validator.addMethod(
               'checkInvalidChild',
               function (b, c, d) {
                  var e = !0;
                  return (
                     +a('.modal-calculator [name=countChildInvalid7]').val() >
                        +a(
                           '.modal-calculator [name=countChildBeforeEighteen6]'
                        ).val() &&
                        a('.modal-calculator [name=countChildInvalid7]').val()
                           .length > 0 &&
                        (e = !1),
                     e
                  );
               },
               'Your error message!'
            ),
            a.validator.addMethod('maxLength', function (b, c, d) {
               if (2015 == n || 2016 == n) {
                  if (b.length > 15) {
                     var e = 0;
                     (e =
                        c.value.indexOf(' ') !== -1
                           ? a(c).val().slice(0, 15)
                           : a(c).val().slice(0, 12)),
                        a(
                           '.modal-calculator [name=' + a(c).attr('name') + ']'
                        ).val(e);
                  }
                  return !0;
               }
               if (
                  '2016after' == n ||
                  2017 == n ||
                  2018 === n ||
                  2019 === n ||
                  2020 === n ||
                  2021 === n
               ) {
                  if (b.length > 11) {
                     var e = 0;
                     (e =
                        c.value.indexOf(' ') !== -1
                           ? a(c).val().slice(0, 13)
                           : a(c).val().slice(0, 1)),
                        a(
                           '.modal-calculator [name=' + a(c).attr('name') + ']'
                        ).val(e);
                  }
                  return !0;
               }
            }),
            a.validator.addMethod('regNumber', function (a, b, c) {
               return /^(\d?)+$/.test(a.replace(/\s+/g, ''));
            }),
            a.validator.addMethod('addAmount', function (a, b, c) {
               return 2015 == n || 2016 == n
                  ? /^(\d?)+$/.test(a.replace(/\s+/g, ''))
                  : ('2016after' != n &&
                       2017 != n &&
                       2018 !== n &&
                       2019 !== n &&
                       2020 !== n &&
                       2021 !== n) ||
                       /^(\d?)+(\.?)(\d?){2}$/.test(
                          a.replace(/\,+/g, '.').replace(/\s+/g, '')
                       );
            }),
            a.validator.addMethod('', function (a, b, c) {
               return 2015 == n || 2016 == n
                  ? /^(\d?)+$/.test(a.replace(/\s+/g, ''))
                  : ('2016after' != n &&
                       2017 != n &&
                       2018 !== n &&
                       2019 !== n &&
                       2020 !== n &&
                       2021 !== n) ||
                       /^(\d?)+(\.?)(\d?){2}$/.test(
                          a.replace(/\,+/g, '.').replace(/\s+/g, '')
                       );
            });
         var d = a('.modal-calculator .form').validate({
            errorPlacement: function (a, b) {
               return !0;
            },
            rules: {
               sumByTax2: { maxLength: !0, addAmount: !0 },
               countChildBeforeEighteen6: { maxLength: !0, regNumber: !0 },
               countChildInvalid7: {
                  maxLength: !0,
                  regNumber: !0,
                  checkInvalidChild: !0,
               },
               countDependents8: { maxLength: !0, regNumber: !0 },
               sumByEducation10: { maxLength: !0, addAmount: !0 },
               sumSpendInsurancePremiums11: { maxLength: !0, addAmount: !0 },
               costsForBuild12: { maxLength: !0, addAmount: !0 },
            },
         });
         a('.modal-calculator [name=incomeType1]').on('change', function (b) {
            a('.modal-calculator .calc-income')
               .find('.calc-income-type')
               .removeClass('select')
               .find('.calc-income-type-text')
               .addClass('calc-dots')
               .find(),
               a(this).closest('.calc-income-type').addClass('select'),
               a('.modal-calculator .calc-income-tooltip').tooltip('enable');
            var c = a(this)
               .closest('.calc-income-tooltip')
               .tooltip('disable')
               .parent('.calc-income-type')
               .find('.calc-income-type-text');
            c.hasClass('calc-income-first')
               ? c.find('span').show()
               : a(
                    '.modal-calculator .calc-income-type-text.calc-income-first span'
                 ).hide(),
               c.removeClass('calc-dots'),
               (o.formUser[a(this).attr('name')] = a(this).val()),
               e();
         }),
            a('button[name = "yearButton2015"]').click(function () {
               a('#calculatorModalChooser').modal('hide'),
                  (n = 2015),
                  a('.additional-for-2016, .hide-2017, .hide-2019').hide(),
                  a('.for2016').hide(),
                  a(
                     '.for2016after, .radio-for-2017б, .for2017, .for2018, .for2019, .radio-for-2019-g, .radio-for-2017-g'
                  ).hide(),
                  a('.for2020, .for2021').hide(),
                  a('.for2015, .not_for_2018, .not_for_2019').show(),
                  setTimeout(function () {
                     j();
                  }, 100),
                  e();
            }),
            a('button[name = "yearButton2016"]').click(function () {
               a('#calculatorModalChooser').modal('hide'),
                  (n = 2016),
                  a(
                     '.additional-for-2016, .hide-2017, .hide-2019, .tax-deductions'
                  ).show(),
                  a('.for2015').hide(),
                  a(
                     '.for2016after, .radio-for-2017, .for2017, .for2018, .for2019, .radio-for-2019-g, .radio-for-2017-g'
                  ).hide(),
                  a('.for2020, .for2021').hide(),
                  a('.for2016, .not_for_2018, .not_for_2019').show(),
                  setTimeout(function () {
                     j();
                  }, 100),
                  e();
            }),
            a('button[name = "yearButton2016after"]').click(function () {
               a('#calculatorModalChooser').modal('hide'),
                  (n = '2016after'),
                  a(
                     '.additional-for-2016, .hide-2017, .hide-2019, .tax-deductions'
                  ).show(),
                  a(
                     '.for2015, .for2016, .radio-for-2017, .for2017, .for2018, .for2019, .radio-for-2019-g, .radio-for-2017-g'
                  ).hide(),
                  a('.for2020, .for2021').hide(),
                  a('.for2016after, .not_for_2018, .not_for_2019').show(),
                  setTimeout(function () {
                     j();
                  }, 100),
                  e();
            }),
            a('button[name = "yearButton2017"]').click(function () {
               a('#calculatorModalChooser').modal('hide'),
                  (n = 2017),
                  a(
                     '.additional-for-2016, .radio-for-2017, .radio-for-2017-g, .hide-2019, .tax-deductions'
                  ).show(),
                  a(
                     '.for2015, .for2016, .for2016after, .hide-2017, .for2018, .for2019, .radio-for-2019-g'
                  ).hide(),
                  a('.for2020, .for2021').hide(),
                  a(
                     '.for2017, .radio-for-2017, .not_for_2018, .not_for_2019, .radio-for-2017-g'
                  ).show(),
                  setTimeout(function () {
                     j();
                  }, 100),
                  e();
            }),
            a('button[name = "yearButton2018"]').click(function () {
               a('#calculatorModalChooser').modal('hide'),
                  (n = 2018),
                  a(
                     '.additional-for-2016, .radio-for-2017, .radio-for-2017-g, .hide-2019, .tax-deductions'
                  ).show(),
                  a(
                     '.for2015, .for2016, .for2016after, .hide-2017, .for2017, .not_for_2018, .for2019, .radio-for-2019-g'
                  ).hide(),
                  a('.for2020, .for2021').hide(),
                  a(
                     '.for2018, .radio-for-2017, .not_for_2019, .radio-for-2017-g'
                  ).show(),
                  setTimeout(function () {
                     j();
                  }, 100),
                  e();
            }),
            a('button[name = "yearButton2019"]').click(function () {
               a('#calculatorModalChooser').modal('hide'),
                  (n = 2019),
                  a(
                     '.additional-for-2016, .radio-for-2017, .tax-deductions'
                  ).show(),
                  a(
                     '.for2015, .for2016, .for2016after, .hide-2017, .for2017, .not_for_2018, .for2018, .not_for_2019, .radio-for-2017-g, .hide-2019'
                  ).hide(),
                  a('.for2020, .for2021').hide(),
                  a('.for2019, .radio-for-2017, .radio-for-2019-g').show(),
                  setTimeout(function () {
                     j(2019);
                  }, 100),
                  e();
            }),
            a('button[name = "yearButton2020"]').click(function () {
               a('#calculatorModalChooser').modal('hide'),
                  (n = 2020),
                  a(
                     '.additional-for-2016, .radio-for-2017, .tax-deductions'
                  ).show(),
                  a(
                     '.for2015, .for2016, .for2016after, .hide-2017, .for2017, .not_for_2018, .for2018, .not_for_2019, .radio-for-2017-g, .hide-2019'
                  ).hide(),
                  a('.radio-for-2017, .radio-for-2019-g').show(),
                  a('.for2019').hide(),
                  a('.for2021').hide(),
                  a('.for2020').show(),
                  setTimeout(function () {
                     j(2020);
                  }, 100),
                  e();
            }),
            a('button[name = "yearButton2021"]').click(function () {
               a('#calculatorModalChooser').modal('hide'),
                  (n = 2021),
                  a(
                     '.additional-for-2016, .radio-for-2017, .tax-deductions'
                  ).show(),
                  a(
                     '.for2015, .for2016, .for2016after, .hide-2017, .for2017, .not_for_2018, .for2018, .not_for_2019, .radio-for-2017-g, .hide-2019'
                  ).hide(),
                  a('.radio-for-2017, .radio-for-2019-g').show(),
                  a('.for2019, .for2020').hide(),
                  a('.for2021').show(),
                  setTimeout(function () {
                     j(2021);
                  }, 100),
                  e();
            }),
            a('.modal-calculator .btn-group').on('click', function (b) {
               a(this).find('.calc-button').removeClass('calc-check'),
                  (o.formUser[a(b.target).attr('name')] = a(b.target).val()),
                  a(b.target).addClass('calc-check'),
                  e();
            }),
            a('.modal-calculator .calc-custom-button').click(function (b) {
               var c = a(this)
                     .parent('.input-group-btn')
                     .prev('div')
                     .find('input')
                     .attr('name'),
                  d = +o.formUser[c];
               '+' === this.value
                  ? (d += 1)
                  : '-' === this.value && ((d -= 1), d < 0 && (d = 0)),
                  (o.formUser[c] = d + ''),
                  a('.modal-calculator [name=' + c + ']').val(o.formUser[c]),
                  a('.modal-calculator .form').valid(),
                  e();
            }),
            a(
               '.modal-calculator [name=sumByTax2],[name=countChildBeforeEighteen6],[name=countChildInvalid7],[name=countDependents8],[name=sumByEducation10],[name=sumSpendInsurancePremiums11],[name=costsForBuild12]'
            ).on({
               keyup: function () {
                  a('.modal-calculator .form').valid(),
                     d.element(
                        '.modal-calculator [name=' + a(this).attr('name') + ']'
                     )
                        ? ((o.formUser[a(this).attr('name')] = a(this)
                             .val()
                             .replace(/\s+/g, '')
                             .replace(/\,/, '.')),
                          b(this))
                        : (o.formUser[a(this).attr('name')] = '0'),
                     '0' === a('.modal-calculator [name=sumByTax2]').val() ||
                     (+o.formUser.sumByTax2 >= 0 &&
                        d.element('.modal-calculator [name=sumByTax2]') &&
                        '' !== a('.modal-calculator [name=sumByTax2]').val())
                        ? a('.modal-calculator .calc-amount-tax-block').show()
                        : a('.modal-calculator .calc-amount-tax-block').hide(),
                     e();
               },
            }),
            a(
               '.modal-calculator [name=sumByTax2],[name=sumByEducation10],[name=sumSpendInsurancePremiums11],[name=costsForBuild12]'
            ).blur(function () {
               var c = a(this);
               if (
                  d.element(
                     '.modal-calculator [name=' + c.attr('name') + ']'
                  ) &&
                  ('2016after' == n ||
                     2017 === n ||
                     2018 === n ||
                     2019 === n ||
                     2020 === n ||
                     2021 === n)
               )
                  if ('' === a(c).val()) a(c).val('');
                  else {
                     var f = c.val().replace(/\s+/g, '').replace(/\,/, '.'),
                        g = h(parseFloat(f), 2);
                     a(c).val(g), b(this);
                  }
               e();
            }),
            a('.modal-calculator .calc-reset').click(function () {
               j(n);
            });
      });
   })(jQuery),
   $(document).ready(function () {
      $('a[href*="#calculatorModal"]').click(function (a) {
         a.preventDefault(), $('#calculatorModalChooser').modal();
      });
   });

document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.sidebar__list a');

    menuItems.forEach(function(item) {
        let currentHref = "/" + item.getAttribute('href') ;
        
        if (currentHref === currentPath) {
            item.classList.add('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname;
  const menuItems = document.querySelectorAll('.cigarettes__menu-item a');

  menuItems.forEach(item => {
      const href = "/" + item.getAttribute('href');
      if (href.includes(currentPage)) {
          item.classList.add('active');
      }
  });
});
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());
'use strict';

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.ResizeSensor = factory();
    }
}(typeof window !== 'undefined' ? window : this, function () {

    // Make sure it does not throw in a SSR (Server Side Rendering) situation
    if (typeof window === "undefined") {
        return null;
    }
    // https://github.com/Semantic-Org/Semantic-UI/issues/3855
    // https://github.com/marcj/css-element-queries/issues/257
    var globalWindow = typeof window != 'undefined' && window.Math == Math
        ? window
        : typeof self != 'undefined' && self.Math == Math
            ? self
            : Function('return this')();
    // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
    // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
    // would generate too many unnecessary events.
    var requestAnimationFrame = globalWindow.requestAnimationFrame ||
        globalWindow.mozRequestAnimationFrame ||
        globalWindow.webkitRequestAnimationFrame ||
        function (fn) {
            return globalWindow.setTimeout(fn, 20);
        };

    var cancelAnimationFrame = globalWindow.cancelAnimationFrame ||
        globalWindow.mozCancelAnimationFrame ||
        globalWindow.webkitCancelAnimationFrame ||
        function (timer) {
            globalWindow.clearTimeout(timer);
        };

    /**
     * Iterate over each of the provided element(s).
     *
     * @param {HTMLElement|HTMLElement[]} elements
     * @param {Function}                  callback
     */
    function forEachElement(elements, callback){
        var elementsType = Object.prototype.toString.call(elements);
        var isCollectionTyped = ('[object Array]' === elementsType
            || ('[object NodeList]' === elementsType)
            || ('[object HTMLCollection]' === elementsType)
            || ('[object Object]' === elementsType)
            || ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
            || ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
        );
        var i = 0, j = elements.length;
        if (isCollectionTyped) {
            for (; i < j; i++) {
                callback(elements[i]);
            }
        } else {
            callback(elements);
        }
    }

    /**
    * Get element size
    * @param {HTMLElement} element
    * @returns {Object} {width, height}
    */
    function getElementSize(element) {
        if (!element.getBoundingClientRect) {
            return {
                width: element.offsetWidth,
                height: element.offsetHeight
            }
        }

        var rect = element.getBoundingClientRect();
        return {
            width: Math.round(rect.width),
            height: Math.round(rect.height)
        }
    }

    /**
     * Apply CSS styles to element.
     *
     * @param {HTMLElement} element
     * @param {Object} style
     */
    function setStyle(element, style) {
        Object.keys(style).forEach(function(key) {
            element.style[key] = style[key];
        });
    }

    /**
     * Class for dimension change detection.
     *
     * @param {Element|Element[]|Elements|jQuery} element
     * @param {Function} callback
     *
     * @constructor
     */
    var ResizeSensor = function(element, callback) {
        //Is used when checking in reset() only for invisible elements
        var lastAnimationFrameForInvisibleCheck = 0;

        /**
         *
         * @constructor
         */
        function EventQueue() {
            var q = [];
            this.add = function(ev) {
                q.push(ev);
            };

            var i, j;
            this.call = function(sizeInfo) {
                for (i = 0, j = q.length; i < j; i++) {
                    q[i].call(this, sizeInfo);
                }
            };

            this.remove = function(ev) {
                var newQueue = [];
                for(i = 0, j = q.length; i < j; i++) {
                    if(q[i] !== ev) newQueue.push(q[i]);
                }
                q = newQueue;
            };

            this.length = function() {
                return q.length;
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {Function}    resized
         */
        function attachResizeEvent(element, resized) {
            if (!element) return;
            if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return;
            }

            element.resizedAttached = new EventQueue();
            element.resizedAttached.add(resized);

            element.resizeSensor = document.createElement('div');
            element.resizeSensor.dir = 'ltr';
            element.resizeSensor.className = 'resize-sensor';

            var style = {
                pointerEvents: 'none',
                position: 'absolute',
                left: '0px',
                top: '0px',
                right: '0px',
                bottom: '0px',
                overflow: 'hidden',
                zIndex: '-1',
                visibility: 'hidden',
                maxWidth: '100%'
            };
            var styleChild = {
                position: 'absolute',
                left: '0px',
                top: '0px',
                transition: '0s',
            };

            setStyle(element.resizeSensor, style);

            var expand = document.createElement('div');
            expand.className = 'resize-sensor-expand';
            setStyle(expand, style);

            var expandChild = document.createElement('div');
            setStyle(expandChild, styleChild);
            expand.appendChild(expandChild);

            var shrink = document.createElement('div');
            shrink.className = 'resize-sensor-shrink';
            setStyle(shrink, style);

            var shrinkChild = document.createElement('div');
            setStyle(shrinkChild, styleChild);
            setStyle(shrinkChild, { width: '200%', height: '200%' });
            shrink.appendChild(shrinkChild);

            element.resizeSensor.appendChild(expand);
            element.resizeSensor.appendChild(shrink);
            element.appendChild(element.resizeSensor);

            var computedStyle = window.getComputedStyle(element);
            var position = computedStyle ? computedStyle.getPropertyValue('position') : null;
            if ('absolute' !== position && 'relative' !== position && 'fixed' !== position && 'sticky' !== position) {
                element.style.position = 'relative';
            }

            var dirty = false;

            //last request animation frame id used in onscroll event
            var rafId = 0;
            var size = getElementSize(element);
            var lastWidth = 0;
            var lastHeight = 0;
            var initialHiddenCheck = true;
            lastAnimationFrameForInvisibleCheck = 0;

            var resetExpandShrink = function () {
                var width = element.offsetWidth;
                var height = element.offsetHeight;

                expandChild.style.width = (width + 10) + 'px';
                expandChild.style.height = (height + 10) + 'px';

                expand.scrollLeft = width + 10;
                expand.scrollTop = height + 10;

                shrink.scrollLeft = width + 10;
                shrink.scrollTop = height + 10;
            };

            var reset = function() {
                // Check if element is hidden
                if (initialHiddenCheck) {
                    var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;
                    if (invisible) {
                        // Check in next frame
                        if (!lastAnimationFrameForInvisibleCheck){
                            lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function(){
                                lastAnimationFrameForInvisibleCheck = 0;
                                reset();
                            });
                        }

                        return;
                    } else {
                        // Stop checking
                        initialHiddenCheck = false;
                    }
                }

                resetExpandShrink();
            };
            element.resizeSensor.resetSensor = reset;

            var onResized = function() {
                rafId = 0;

                if (!dirty) return;

                lastWidth = size.width;
                lastHeight = size.height;

                if (element.resizedAttached) {
                    element.resizedAttached.call(size);
                }
            };

            var onScroll = function() {
                size = getElementSize(element);
                dirty = size.width !== lastWidth || size.height !== lastHeight;

                if (dirty && !rafId) {
                    rafId = requestAnimationFrame(onResized);
                }

                reset();
            };

            var addEvent = function(el, name, cb) {
                if (el.attachEvent) {
                    el.attachEvent('on' + name, cb);
                } else {
                    el.addEventListener(name, cb);
                }
            };

            addEvent(expand, 'scroll', onScroll);
            addEvent(shrink, 'scroll', onScroll);

            // Fix for custom Elements and invisible elements
            lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function(){
                lastAnimationFrameForInvisibleCheck = 0;
                reset();
            });
        }

        forEachElement(element, function(elem){
            attachResizeEvent(elem, callback);
        });

        this.detach = function(ev) {
            // clean up the unfinished animation frame to prevent a potential endless requestAnimationFrame of reset
            if (lastAnimationFrameForInvisibleCheck) {
                cancelAnimationFrame(lastAnimationFrameForInvisibleCheck);
                lastAnimationFrameForInvisibleCheck = 0;
            }
            ResizeSensor.detach(element, ev);
        };

        this.reset = function() {
            //To prevent invoking element.resizeSensor.resetSensor if it's undefined
            if (element.resizeSensor.resetSensor) {
                element.resizeSensor.resetSensor();
            }
        };
    };

    ResizeSensor.reset = function(element) {
        forEachElement(element, function(elem){
            //To prevent invoking element.resizeSensor.resetSensor if it's undefined
            if (element.resizeSensor.resetSensor) {
                elem.resizeSensor.resetSensor();
            }
        });
    };

    ResizeSensor.detach = function(element, ev) {
        forEachElement(element, function(elem){
            if (!elem) return;
            if(elem.resizedAttached && typeof ev === "function"){
                elem.resizedAttached.remove(ev);
                if(elem.resizedAttached.length()) return;
            }
            if (elem.resizeSensor) {
                if (elem.contains(elem.resizeSensor)) {
                    elem.removeChild(elem.resizeSensor);
                }
                delete elem.resizeSensor;
                delete elem.resizedAttached;
            }
        });
    };

    if (typeof MutationObserver !== "undefined") {
        var observer = new MutationObserver(function (mutations) {
            for (var i in mutations) {
                if (mutations.hasOwnProperty(i)) {
                    var items = mutations[i].addedNodes;
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].resizeSensor) {
                            ResizeSensor.reset(items[j]);
                        }
                    }
                }
            }
        });

        document.addEventListener("DOMContentLoaded", function (event) {
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    }
    return ResizeSensor;
}));
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.StickySidebar = {})));
}(this, (function (exports) { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stickySidebar = createCommonjsModule(function (module, exports) {
(function (global, factory) {
  if (typeof undefined === "function" && undefined.amd) {
    undefined(['exports'], factory);
  } else {
    factory(exports);
  }
})(commonjsGlobal, function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  /**
   * Sticky Sidebar JavaScript Plugin.
   * @version 3.3.4
   * @author Ahmed Bouhuolia <a.bouhuolia@gmail.com>
   * @license The MIT License (MIT)
   */
  var StickySidebar = function () {

    // ---------------------------------
    // # Define Constants
    // ---------------------------------
    //
    var EVENT_KEY = '.stickySidebar';
    var DEFAULTS = {
      /**
       * Additional top spacing of the element when it becomes sticky.
       * @type {Numeric|Function}
       */
      topSpacing: 0,

      /**
       * Additional bottom spacing of the element when it becomes sticky.
       * @type {Numeric|Function}
       */
      bottomSpacing: 0,

      /**
       * Container sidebar selector to know what the beginning and end of sticky element.
       * @type {String|False}
       */
      containerSelector: false,

      /**
       * Inner wrapper selector.
       * @type {String}
       */
      innerWrapperSelector: '.inner-wrapper-sticky',

      /**
       * The name of CSS class to apply to elements when they have become stuck.
       * @type {String|False}
       */
      stickyClass: 'is-affixed',

      /**
       * Detect when sidebar and its container change height so re-calculate their dimensions.
       * @type {Boolean}
       */
      resizeSensor: true,

      /**
       * The sidebar returns to its normal position if its width below this value.
       * @type {Numeric}
       */
      minWidth: false
    };

    // ---------------------------------
    // # Class Definition
    // ---------------------------------
    //
    /**
     * Sticky Sidebar Class.
     * @public
     */

    var StickySidebar = function () {

      /**
       * Sticky Sidebar Constructor.
       * @constructor
       * @param {HTMLElement|String} sidebar - The sidebar element or sidebar selector.
       * @param {Object} options - The options of sticky sidebar.
       */
      function StickySidebar(sidebar) {
        var _this = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, StickySidebar);

        this.options = StickySidebar.extend(DEFAULTS, options);

        // Sidebar element query if there's no one, throw error.
        this.sidebar = 'string' === typeof sidebar ? document.querySelector(sidebar) : sidebar;
        if ('undefined' === typeof this.sidebar) throw new Error("There is no specific sidebar element.");

        this.sidebarInner = false;
        this.container = this.sidebar.parentElement;

        // Current Affix Type of sidebar element.
        this.affixedType = 'STATIC';
        this.direction = 'down';
        this.support = {
          transform: false,
          transform3d: false
        };

        this._initialized = false;
        this._reStyle = false;
        this._breakpoint = false;

        // Dimensions of sidebar, container and screen viewport.
        this.dimensions = {
          translateY: 0,
          maxTranslateY: 0,
          topSpacing: 0,
          lastTopSpacing: 0,
          bottomSpacing: 0,
          lastBottomSpacing: 0,
          sidebarHeight: 0,
          sidebarWidth: 0,
          containerTop: 0,
          containerHeight: 0,
          viewportHeight: 0,
          viewportTop: 0,
          lastViewportTop: 0
        };

        // Bind event handlers for referencability.
        ['handleEvent'].forEach(function (method) {
          _this[method] = _this[method].bind(_this);
        });

        // Initialize sticky sidebar for first time.
        this.initialize();
      }

      /**
       * Initializes the sticky sidebar by adding inner wrapper, define its container, 
       * min-width breakpoint, calculating dimensions, adding helper classes and inline style.
       * @private
       */


      _createClass(StickySidebar, [{
        key: 'initialize',
        value: function initialize() {
          var _this2 = this;

          this._setSupportFeatures();

          // Get sticky sidebar inner wrapper, if not found, will create one.
          if (this.options.innerWrapperSelector) {
            this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector);

            if (null === this.sidebarInner) this.sidebarInner = false;
          }

          if (!this.sidebarInner) {
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'inner-wrapper-sticky');
            this.sidebar.appendChild(wrapper);

            while (this.sidebar.firstChild != wrapper) {
              wrapper.appendChild(this.sidebar.firstChild);
            }this.sidebarInner = this.sidebar.querySelector('.inner-wrapper-sticky');
          }

          // Container wrapper of the sidebar.
          if (this.options.containerSelector) {
            var containers = document.querySelectorAll(this.options.containerSelector);
            containers = Array.prototype.slice.call(containers);

            containers.forEach(function (container, item) {
              if (!container.contains(_this2.sidebar)) return;
              _this2.container = container;
            });

            if (!containers.length) throw new Error("The container does not contains on the sidebar.");
          }

          // If top/bottom spacing is not function parse value to integer.
          if ('function' !== typeof this.options.topSpacing) this.options.topSpacing = parseInt(this.options.topSpacing) || 0;

          if ('function' !== typeof this.options.bottomSpacing) this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0;

          // Breakdown sticky sidebar if screen width below `options.minWidth`.
          this._widthBreakpoint();

          // Calculate dimensions of sidebar, container and viewport.
          this.calcDimensions();

          // Affix sidebar in proper position.
          this.stickyPosition();

          // Bind all events.
          this.bindEvents();

          // Inform other properties the sticky sidebar is initialized.
          this._initialized = true;
        }
      }, {
        key: 'bindEvents',
        value: function bindEvents() {
          window.addEventListener('resize', this, { passive: true, capture: false });
          window.addEventListener('scroll', this, { passive: true, capture: false });

          this.sidebar.addEventListener('update' + EVENT_KEY, this);

          if (this.options.resizeSensor && 'undefined' !== typeof ResizeSensor) {
            new ResizeSensor(this.sidebarInner, this.handleEvent);
            new ResizeSensor(this.container, this.handleEvent);
          }
        }
      }, {
        key: 'handleEvent',
        value: function handleEvent(event) {
          this.updateSticky(event);
        }
      }, {
        key: 'calcDimensions',
        value: function calcDimensions() {
          if (this._breakpoint) return;
          var dims = this.dimensions;

          // Container of sticky sidebar dimensions.
          dims.containerTop = StickySidebar.offsetRelative(this.container).top;
          dims.containerHeight = this.container.clientHeight;
          dims.containerBottom = dims.containerTop + dims.containerHeight;

          // Sidebar dimensions.
          dims.sidebarHeight = this.sidebarInner.offsetHeight;
          dims.sidebarWidth = this.sidebarInner.offsetWidth;

          // Screen viewport dimensions.
          dims.viewportHeight = window.innerHeight;

          // Maximum sidebar translate Y.
          dims.maxTranslateY = dims.containerHeight - dims.sidebarHeight;

          this._calcDimensionsWithScroll();
        }
      }, {
        key: '_calcDimensionsWithScroll',
        value: function _calcDimensionsWithScroll() {
          var dims = this.dimensions;

          dims.sidebarLeft = StickySidebar.offsetRelative(this.sidebar).left;

          dims.viewportTop = document.documentElement.scrollTop || document.body.scrollTop;
          dims.viewportBottom = dims.viewportTop + dims.viewportHeight;
          dims.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

          dims.topSpacing = this.options.topSpacing;
          dims.bottomSpacing = this.options.bottomSpacing;

          if ('function' === typeof dims.topSpacing) dims.topSpacing = parseInt(dims.topSpacing(this.sidebar)) || 0;

          if ('function' === typeof dims.bottomSpacing) dims.bottomSpacing = parseInt(dims.bottomSpacing(this.sidebar)) || 0;

          if ('VIEWPORT-TOP' === this.affixedType) {
            // Adjust translate Y in the case decrease top spacing value.
            if (dims.topSpacing < dims.lastTopSpacing) {
              dims.translateY += dims.lastTopSpacing - dims.topSpacing;
              this._reStyle = true;
            }
          } else if ('VIEWPORT-BOTTOM' === this.affixedType) {
            // Adjust translate Y in the case decrease bottom spacing value.
            if (dims.bottomSpacing < dims.lastBottomSpacing) {
              dims.translateY += dims.lastBottomSpacing - dims.bottomSpacing;
              this._reStyle = true;
            }
          }

          dims.lastTopSpacing = dims.topSpacing;
          dims.lastBottomSpacing = dims.bottomSpacing;
        }
      }, {
        key: 'isSidebarFitsViewport',
        value: function isSidebarFitsViewport() {
          var dims = this.dimensions;
          var offset = this.scrollDirection === 'down' ? dims.lastBottomSpacing : dims.lastTopSpacing;
          return this.dimensions.sidebarHeight + offset < this.dimensions.viewportHeight;
        }
      }, {
        key: 'observeScrollDir',
        value: function observeScrollDir() {
          var dims = this.dimensions;
          if (dims.lastViewportTop === dims.viewportTop) return;

          var furthest = 'down' === this.direction ? Math.min : Math.max;

          // If the browser is scrolling not in the same direction.
          if (dims.viewportTop === furthest(dims.viewportTop, dims.lastViewportTop)) this.direction = 'down' === this.direction ? 'up' : 'down';
        }
      }, {
        key: 'getAffixType',
        value: function getAffixType() {
          this._calcDimensionsWithScroll();
          var dims = this.dimensions;
          var colliderTop = dims.viewportTop + dims.topSpacing;
          var affixType = this.affixedType;

          if (colliderTop <= dims.containerTop || dims.containerHeight <= dims.sidebarHeight) {
            dims.translateY = 0;
            affixType = 'STATIC';
          } else {
            affixType = 'up' === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown();
          }

          // Make sure the translate Y is not bigger than container height.
          dims.translateY = Math.max(0, dims.translateY);
          dims.translateY = Math.min(dims.containerHeight, dims.translateY);
          dims.translateY = Math.round(dims.translateY);

          dims.lastViewportTop = dims.viewportTop;
          return affixType;
        }
      }, {
        key: '_getAffixTypeScrollingDown',
        value: function _getAffixTypeScrollingDown() {
          var dims = this.dimensions;
          var sidebarBottom = dims.sidebarHeight + dims.containerTop;
          var colliderTop = dims.viewportTop + dims.topSpacing;
          var colliderBottom = dims.viewportBottom - dims.bottomSpacing;
          var affixType = this.affixedType;

          if (this.isSidebarFitsViewport()) {
            if (dims.sidebarHeight + colliderTop >= dims.containerBottom) {
              dims.translateY = dims.containerBottom - sidebarBottom;
              affixType = 'CONTAINER-BOTTOM';
            } else if (colliderTop >= dims.containerTop) {
              dims.translateY = colliderTop - dims.containerTop;
              affixType = 'VIEWPORT-TOP';
            }
          } else {
            if (dims.containerBottom <= colliderBottom) {
              dims.translateY = dims.containerBottom - sidebarBottom;
              affixType = 'CONTAINER-BOTTOM';
            } else if (sidebarBottom + dims.translateY <= colliderBottom) {
              dims.translateY = colliderBottom - sidebarBottom;
              affixType = 'VIEWPORT-BOTTOM';
            } else if (dims.containerTop + dims.translateY <= colliderTop && 0 !== dims.translateY && dims.maxTranslateY !== dims.translateY) {
              affixType = 'VIEWPORT-UNBOTTOM';
            }
          }

          return affixType;
        }
      }, {
        key: '_getAffixTypeScrollingUp',
        value: function _getAffixTypeScrollingUp() {
          var dims = this.dimensions;
          var sidebarBottom = dims.sidebarHeight + dims.containerTop;
          var colliderTop = dims.viewportTop + dims.topSpacing;
          var colliderBottom = dims.viewportBottom - dims.bottomSpacing;
          var affixType = this.affixedType;

          if (colliderTop <= dims.translateY + dims.containerTop) {
            dims.translateY = colliderTop - dims.containerTop;
            affixType = 'VIEWPORT-TOP';
          } else if (dims.containerBottom <= colliderBottom) {
            dims.translateY = dims.containerBottom - sidebarBottom;
            affixType = 'CONTAINER-BOTTOM';
          } else if (!this.isSidebarFitsViewport()) {

            if (dims.containerTop <= colliderTop && 0 !== dims.translateY && dims.maxTranslateY !== dims.translateY) {
              affixType = 'VIEWPORT-UNBOTTOM';
            }
          }

          return affixType;
        }
      }, {
        key: '_getStyle',
        value: function _getStyle(affixType) {
          if ('undefined' === typeof affixType) return;

          var style = { inner: {}, outer: {} };
          var dims = this.dimensions;

          switch (affixType) {
            case 'VIEWPORT-TOP':
              style.inner = { position: 'fixed', top: dims.topSpacing,
                left: dims.sidebarLeft - dims.viewportLeft, width: dims.sidebarWidth };
              break;
            case 'VIEWPORT-BOTTOM':
              style.inner = { position: 'fixed', top: 'auto', left: dims.sidebarLeft,
                bottom: dims.bottomSpacing, width: dims.sidebarWidth };
              break;
            case 'CONTAINER-BOTTOM':
            case 'VIEWPORT-UNBOTTOM':
              var translate = this._getTranslate(0, dims.translateY + 'px');

              if (translate) style.inner = { transform: translate };else style.inner = { position: 'absolute', top: dims.translateY, width: dims.sidebarWidth };
              break;
          }

          switch (affixType) {
            case 'VIEWPORT-TOP':
            case 'VIEWPORT-BOTTOM':
            case 'VIEWPORT-UNBOTTOM':
            case 'CONTAINER-BOTTOM':
              style.outer = { height: dims.sidebarHeight, position: 'relative' };
              break;
          }

          style.outer = StickySidebar.extend({ height: '', position: '' }, style.outer);
          style.inner = StickySidebar.extend({ position: 'relative', top: '', left: '',
            bottom: '', width: '', transform: '' }, style.inner);

          return style;
        }
      }, {
        key: 'stickyPosition',
        value: function stickyPosition(force) {
          if (this._breakpoint) return;

          force = this._reStyle || force || false;

          var offsetTop = this.options.topSpacing;
          var offsetBottom = this.options.bottomSpacing;

          var affixType = this.getAffixType();
          var style = this._getStyle(affixType);

          if ((this.affixedType != affixType || force) && affixType) {
            var affixEvent = 'affix.' + affixType.toLowerCase().replace('viewport-', '') + EVENT_KEY;
            StickySidebar.eventTrigger(this.sidebar, affixEvent);

            if ('STATIC' === affixType) StickySidebar.removeClass(this.sidebar, this.options.stickyClass);else StickySidebar.addClass(this.sidebar, this.options.stickyClass);

            for (var key in style.outer) {
              var unit = 'number' === typeof style.outer[key] ? 'px' : '';
              this.sidebar.style[key] = style.outer[key] + unit;
            }

            for (var _key in style.inner) {
              var _unit = 'number' === typeof style.inner[_key] ? 'px' : '';
              this.sidebarInner.style[_key] = style.inner[_key] + _unit;
            }

            var affixedEvent = 'affixed.' + affixType.toLowerCase().replace('viewport-', '') + EVENT_KEY;
            StickySidebar.eventTrigger(this.sidebar, affixedEvent);
          } else {
            if (this._initialized) this.sidebarInner.style.left = style.inner.left;
          }

          this.affixedType = affixType;
        }
      }, {
        key: '_widthBreakpoint',
        value: function _widthBreakpoint() {

          if (window.innerWidth <= this.options.minWidth) {
            this._breakpoint = true;
            this.affixedType = 'STATIC';

            this.sidebar.removeAttribute('style');
            StickySidebar.removeClass(this.sidebar, this.options.stickyClass);
            this.sidebarInner.removeAttribute('style');
          } else {
            this._breakpoint = false;
          }
        }
      }, {
        key: 'updateSticky',
        value: function updateSticky() {
          var _this3 = this;

          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (this._running) return;
          this._running = true;

          (function (eventType) {
            requestAnimationFrame(function () {
              switch (eventType) {
                // When browser is scrolling and re-calculate just dimensions
                // within scroll. 
                case 'scroll':
                  _this3._calcDimensionsWithScroll();
                  _this3.observeScrollDir();
                  _this3.stickyPosition();
                  break;

                // When browser is resizing or there's no event, observe width
                // breakpoint and re-calculate dimensions.
                case 'resize':
                default:
                  _this3._widthBreakpoint();
                  _this3.calcDimensions();
                  _this3.stickyPosition(true);
                  break;
              }
              _this3._running = false;
            });
          })(event.type);
        }
      }, {
        key: '_setSupportFeatures',
        value: function _setSupportFeatures() {
          var support = this.support;

          support.transform = StickySidebar.supportTransform();
          support.transform3d = StickySidebar.supportTransform(true);
        }
      }, {
        key: '_getTranslate',
        value: function _getTranslate() {
          var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (this.support.transform3d) return 'translate3d(' + y + ', ' + x + ', ' + z + ')';else if (this.support.translate) return 'translate(' + y + ', ' + x + ')';else return false;
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          window.removeEventListener('resize', this, { capture: false });
          window.removeEventListener('scroll', this, { capture: false });

          this.sidebar.classList.remove(this.options.stickyClass);
          this.sidebar.style.minHeight = '';

          this.sidebar.removeEventListener('update' + EVENT_KEY, this);

          var styleReset = { inner: {}, outer: {} };

          styleReset.inner = { position: '', top: '', left: '', bottom: '', width: '', transform: '' };
          styleReset.outer = { height: '', position: '' };

          for (var key in styleReset.outer) {
            this.sidebar.style[key] = styleReset.outer[key];
          }for (var _key2 in styleReset.inner) {
            this.sidebarInner.style[_key2] = styleReset.inner[_key2];
          }if (this.options.resizeSensor && 'undefined' !== typeof ResizeSensor) {
            ResizeSensor.detach(this.sidebarInner, this.handleEvent);
            ResizeSensor.detach(this.container, this.handleEvent);
          }
        }
      }], [{
        key: 'supportTransform',
        value: function supportTransform(transform3d) {
          var result = false,
              property = transform3d ? 'perspective' : 'transform',
              upper = property.charAt(0).toUpperCase() + property.slice(1),
              prefixes = ['Webkit', 'Moz', 'O', 'ms'],
              support = document.createElement('support'),
              style = support.style;

          (property + ' ' + prefixes.join(upper + ' ') + upper).split(' ').forEach(function (property, i) {
            if (style[property] !== undefined) {
              result = property;
              return false;
            }
          });
          return result;
        }
      }, {
        key: 'eventTrigger',
        value: function eventTrigger(element, eventName, data) {
          try {
            var event = new CustomEvent(eventName, { detail: data });
          } catch (e) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, data);
          }
          element.dispatchEvent(event);
        }
      }, {
        key: 'extend',
        value: function extend(defaults, options) {
          var results = {};
          for (var key in defaults) {
            if ('undefined' !== typeof options[key]) results[key] = options[key];else results[key] = defaults[key];
          }
          return results;
        }
      }, {
        key: 'offsetRelative',
        value: function offsetRelative(element) {
          var result = { left: 0, top: 0 };

          do {
            var offsetTop = element.offsetTop;
            var offsetLeft = element.offsetLeft;

            if (!isNaN(offsetTop)) result.top += offsetTop;

            if (!isNaN(offsetLeft)) result.left += offsetLeft;

            element = 'BODY' === element.tagName ? element.parentElement : element.offsetParent;
          } while (element);
          return result;
        }
      }, {
        key: 'addClass',
        value: function addClass(element, className) {
          if (!StickySidebar.hasClass(element, className)) {
            if (element.classList) element.classList.add(className);else element.className += ' ' + className;
          }
        }
      }, {
        key: 'removeClass',
        value: function removeClass(element, className) {
          if (StickySidebar.hasClass(element, className)) {
            if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        }
      }, {
        key: 'hasClass',
        value: function hasClass(element, className) {
          if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
      }, {
        key: 'defaults',
        get: function () {
          return DEFAULTS;
        }
      }]);

      return StickySidebar;
    }();

    return StickySidebar;
  }();

  exports.default = StickySidebar;


  // Global
  // -------------------------
  window.StickySidebar = StickySidebar;
});
});

var stickySidebar$1 = unwrapExports(stickySidebar);

exports['default'] = stickySidebar$1;
exports.__moduleExports = stickySidebar;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=sticky-sidebar.js.map

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

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
});
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
               //  '                <a href="#" id="bvi-theme-blue" class="bvi-link bvi-link-blue" title="Темно-синим по голубому">Ц</a>\n' +
               //  '                <a href="#" id="bvi-theme-brown" class="bvi-link bvi-link-brown" title="Коричневым по бежевому">Ц</a>\n' +
               //  '                <a href="#" id="bvi-theme-green" class="bvi-link bvi-link-green" title="Зеленым по темно-коричневому">Ц</a>\n' +
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

/**
 * Swiper 5.3.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 29, 2020
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,(function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],r=t[1],n=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],n=e[1],o=e[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:n,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=i.filter((function(e,t){return t>0})),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},filter:function(e){for(var t=[],s=0;s<this.length;s+=1)e.call(this[s],s,this[s])&&t.push(this[s]);return new i(t)},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a;for(i=0;i<e.length;i+=1){var r=s(e[i]);for(a=0;a<r.length;a+=1)this[this.length]=r[a],this.length+=1}return this},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach((function(e){s.fn[e]=s.fn[e]||r[e]}));var n={deleteProps:function(e){var t=e;Object.keys(t).forEach((function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter((function(e){return""!==e}))).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(null!=a)for(var r=Object.keys(Object(a)),o=0,l=r.length;o<l;o+=1){var d=r[o],h=Object.getOwnPropertyDescriptor(a,d);void 0!==h&&h.enumerable&&(n.isObject(i[d])&&n.isObject(a[d])?n.extend(i[d],a[d]):!n.isObject(i[d])&&n.isObject(a[d])?(i[d]={},n.extend(i[d],a[d])):i[d]=a[d])}}return i}},o={touch:t.Modernizr&&!0===t.Modernizr.touch||!!(t.navigator.maxTouchPoints>0||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!!t.PointerEvent&&"maxTouchPoints"in t.navigator&&t.navigator.maxTouchPoints>0,observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t},l=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach((function(e){t.on(e,t.params.on[e])}))},d={components:{configurable:!0}};l.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach((function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)})),s},l.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];s.off(e,a),a.f7proxy&&delete a.f7proxy,t.apply(s,i)}return a.f7proxy=t,s.on(e,a,i)},l.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].length&&i.eventsListeners[e].forEach((function(s,a){(s===t||s.f7proxy&&s.f7proxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},l.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;if(!r.eventsListeners)return r;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r);var n=Array.isArray(i)?i:i.split(" ");return n.forEach((function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach((function(e){t.push(e)})),t.forEach((function(e){e.apply(a,s)}))}})),r},l.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i];s.params&&n.extend(e,s.params)}))},l.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach((function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i})),s.on&&t.on&&Object.keys(s.on).forEach((function(e){t.on(e,s.on[e])})),s.create&&s.create.bind(t)(a)}))},d.components.set=function(e){this.use&&this.use(e)},l.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+n.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach((function(t){s.prototype[t]=e.proto[t]})),e.static&&Object.keys(e.static).forEach((function(t){s[t]=e.static[t]})),e.install&&e.install.apply(s,t),s},l.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach((function(e){return s.installModule(e)})),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(l,d);var h={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),n.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,o=this.virtual&&e.virtual.enabled,l=o?this.virtual.slides.length:this.slides.length,d=i.children("."+this.params.slideClass),h=o?this.virtual.slides.length:d.length,p=[],c=[],u=[];function v(t){return!e.cssMode||t!==d.length-1}var f=e.slidesOffsetBefore;"function"==typeof f&&(f=e.slidesOffsetBefore.call(this));var m=e.slidesOffsetAfter;"function"==typeof m&&(m=e.slidesOffsetAfter.call(this));var g=this.snapGrid.length,b=this.snapGrid.length,w=e.spaceBetween,y=-f,x=0,T=0;if(void 0!==s){var E,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),this.virtualSize=-w,a?d.css({marginLeft:"",marginTop:""}):d.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(E=Math.floor(h/e.slidesPerColumn)===h/this.params.slidesPerColumn?h:Math.ceil(h/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(E=Math.max(E,e.slidesPerView*e.slidesPerColumn)));for(var C,M=e.slidesPerColumn,P=E/M,z=Math.floor(h/e.slidesPerColumn),k=0;k<h;k+=1){S=0;var $=d.eq(k);if(e.slidesPerColumn>1){var L=void 0,I=void 0,D=void 0;if("row"===e.slidesPerColumnFill&&e.slidesPerGroup>1){var O=Math.floor(k/(e.slidesPerGroup*e.slidesPerColumn)),A=k-e.slidesPerColumn*e.slidesPerGroup*O,G=0===O?e.slidesPerGroup:Math.min(Math.ceil((h-O*M*e.slidesPerGroup)/M),e.slidesPerGroup);L=(I=A-(D=Math.floor(A/G))*G+O*e.slidesPerGroup)+D*E/M,$.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})}else"column"===e.slidesPerColumnFill?(D=k-(I=Math.floor(k/M))*M,(I>z||I===z&&D===M-1)&&(D+=1)>=M&&(D=0,I+=1)):I=k-(D=Math.floor(k/P))*P;$.css("margin-"+(this.isHorizontal()?"top":"left"),0!==D&&e.spaceBetween&&e.spaceBetween+"px")}if("none"!==$.css("display")){if("auto"===e.slidesPerView){var H=t.getComputedStyle($[0],null),B=$[0].style.transform,N=$[0].style.webkitTransform;if(B&&($[0].style.transform="none"),N&&($[0].style.webkitTransform="none"),e.roundLengths)S=this.isHorizontal()?$.outerWidth(!0):$.outerHeight(!0);else if(this.isHorizontal()){var X=parseFloat(H.getPropertyValue("width")),V=parseFloat(H.getPropertyValue("padding-left")),Y=parseFloat(H.getPropertyValue("padding-right")),F=parseFloat(H.getPropertyValue("margin-left")),W=parseFloat(H.getPropertyValue("margin-right")),R=H.getPropertyValue("box-sizing");S=R&&"border-box"===R?X+F+W:X+V+Y+F+W}else{var q=parseFloat(H.getPropertyValue("height")),j=parseFloat(H.getPropertyValue("padding-top")),K=parseFloat(H.getPropertyValue("padding-bottom")),U=parseFloat(H.getPropertyValue("margin-top")),_=parseFloat(H.getPropertyValue("margin-bottom")),Z=H.getPropertyValue("box-sizing");S=Z&&"border-box"===Z?q+U+_:q+j+K+U+_}B&&($[0].style.transform=B),N&&($[0].style.webkitTransform=N),e.roundLengths&&(S=Math.floor(S))}else S=(s-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(S=Math.floor(S)),d[k]&&(this.isHorizontal()?d[k].style.width=S+"px":d[k].style.height=S+"px");d[k]&&(d[k].swiperSlideSize=S),u.push(S),e.centeredSlides?(y=y+S/2+x/2+w,0===x&&0!==k&&(y=y-s/2-w),0===k&&(y=y-s/2-w),Math.abs(y)<.001&&(y=0),e.roundLengths&&(y=Math.floor(y)),T%e.slidesPerGroup==0&&p.push(y),c.push(y)):(e.roundLengths&&(y=Math.floor(y)),(T-Math.min(this.params.slidesPerGroupSkip,T))%this.params.slidesPerGroup==0&&p.push(y),c.push(y),y=y+S+w),this.virtualSize+=S+w,x=S,T+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===e.effect||"coverflow"===e.effect)&&i.css({width:this.virtualSize+e.spaceBetween+"px"}),e.setWrapperSize&&(this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(S+e.spaceBetween)*E,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){C=[];for(var Q=0;Q<p.length;Q+=1){var J=p[Q];e.roundLengths&&(J=Math.floor(J)),p[Q]<this.virtualSize+p[0]&&C.push(J)}p=C}if(!e.centeredSlides){C=[];for(var ee=0;ee<p.length;ee+=1){var te=p[ee];e.roundLengths&&(te=Math.floor(te)),p[ee]<=this.virtualSize-s&&C.push(te)}p=C,Math.floor(this.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(this.virtualSize-s)}if(0===p.length&&(p=[0]),0!==e.spaceBetween&&(this.isHorizontal()?a?d.filter(v).css({marginLeft:w+"px"}):d.filter(v).css({marginRight:w+"px"}):d.filter(v).css({marginBottom:w+"px"})),e.centeredSlides&&e.centeredSlidesBounds){var ie=0;u.forEach((function(t){ie+=t+(e.spaceBetween?e.spaceBetween:0)}));var se=(ie-=e.spaceBetween)-s;p=p.map((function(e){return e<0?-f:e>se?se+m:e}))}if(e.centerInsufficientSlides){var ae=0;if(u.forEach((function(t){ae+=t+(e.spaceBetween?e.spaceBetween:0)})),(ae-=e.spaceBetween)<s){var re=(s-ae)/2;p.forEach((function(e,t){p[t]=e-re})),c.forEach((function(e,t){c[t]=e+re}))}}n.extend(this,{slides:d,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),h!==l&&this.emit("slidesLengthChange"),p.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),c.length!==b&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)if(this.params.centeredSlides)i.push.apply(i,this.visibleSlides);else for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,a=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var r=-e;a&&(r=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(t.centeredSlides?this.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility||t.centeredSlides&&t.autoHeight){var d=-(r-o.swiperSlideOffset),h=d+this.slidesSizesGrid[n];(d>=0&&d<this.size-1||h>1&&h<=this.size||d<=0&&h>=this.size)&&(this.visibleSlides.push(o),this.visibleSlidesIndexes.push(n),i.eq(n).addClass(t.slideVisibleClass))}o.progress=a?-l:l}this.visibleSlides=s(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;e=this&&this.translate&&this.translate*t||0}var i=this.params,s=this.maxTranslate()-this.minTranslate(),a=this.progress,r=this.isBeginning,o=this.isEnd,l=r,d=o;0===s?(a=0,r=!0,o=!0):(r=(a=(e-this.minTranslate())/s)<=0,o=a>=1),n.extend(this,{progress:a,isBeginning:r,isEnd:o}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&this.updateSlidesProgress(e),r&&!l&&this.emit("reachBeginning toEdge"),o&&!d&&this.emit("reachEnd toEdge"),(l&&!r||d&&!o)&&this.emit("fromEdge"),this.emit("progress",a)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,o=this.activeIndex,l=this.realIndex,d=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if(a.indexOf(i)>=0)t=a.indexOf(i);else{var c=Math.min(r.slidesPerGroupSkip,h);t=c+Math.floor((h-c)/r.slidesPerGroup)}if(t>=a.length&&(t=a.length-1),h!==o){var u=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);n.extend(this,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),l!==u&&this.emit("realIndexChange"),(this.initialized||this.runCallbacksOnInit)&&this.emit("slideChange")}else t!==d&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var r=n.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.wrapperEl,n=this.progress,o=0,l=0;this.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.cssMode?r[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-o:-l:s.virtualTranslate||a.transform("translate3d("+o+"px, "+l+"px, 0px)"),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?o:l;var d=this.maxTranslate()-this.minTranslate();(0===d?0:(e-this.minTranslate())/d)!==n&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,s,a){var r;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===s&&(s=!0);var n=this,o=n.params,l=n.wrapperEl;if(n.animating&&o.preventInteractionOnTransition)return!1;var d,h=n.minTranslate(),p=n.maxTranslate();if(d=s&&e>h?h:s&&e<p?p:e,n.updateProgress(d),o.cssMode){var c=n.isHorizontal();return 0===t?l[c?"scrollLeft":"scrollTop"]=-d:l.scrollTo?l.scrollTo(((r={})[c?"left":"top"]=-d,r.behavior="smooth",r)):l[c?"scrollLeft":"scrollTop"]=-d,!0}return 0===t?(n.setTransition(0),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,i&&n.emit("transitionEnd"))}),n.$wrapperEl[0].addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd))),!0}};var c={setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;if(!s.cssMode){s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex,a=this.params;if(this.animating=!1,!a.cssMode){this.setTransition(0);var r=t;if(r||(r=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===r?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}}};var u={slideTo:function(e,t,i,s){var a;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var r=this,n=e;n<0&&(n=0);var o=r.params,l=r.snapGrid,d=r.slidesGrid,h=r.previousIndex,p=r.activeIndex,c=r.rtlTranslate,u=r.wrapperEl;if(r.animating&&o.preventInteractionOnTransition)return!1;var v=Math.min(r.params.slidesPerGroupSkip,n),f=v+Math.floor((n-v)/r.params.slidesPerGroup);f>=l.length&&(f=l.length-1),(p||o.initialSlide||0)===(h||0)&&i&&r.emit("beforeSlideChangeStart");var m,g=-l[f];if(r.updateProgress(g),o.normalizeSlideIndex)for(var b=0;b<d.length;b+=1)-Math.floor(100*g)>=Math.floor(100*d[b])&&(n=b);if(r.initialized&&n!==p){if(!r.allowSlideNext&&g<r.translate&&g<r.minTranslate())return!1;if(!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(p||0)!==n)return!1}if(m=n>p?"next":n<p?"prev":"reset",c&&-g===r.translate||!c&&g===r.translate)return r.updateActiveIndex(n),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(g),"reset"!==m&&(r.transitionStart(i,m),r.transitionEnd(i,m)),!1;if(o.cssMode){var w=r.isHorizontal();return 0===t?u[w?"scrollLeft":"scrollTop"]=-g:u.scrollTo?u.scrollTo(((a={})[w?"left":"top"]=-g,a.behavior="smooth",a)):u[w?"scrollLeft":"scrollTop"]=-g,!0}return 0===t?(r.setTransition(0),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.transitionEnd(i,m)):(r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(i,m))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return this.slideTo(this.activeIndex+r,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map((function(e){return l(e)})),c=(n.map((function(e){return l(e)})),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0===c&&s.cssMode&&r.forEach((function(e){!c&&h>=e&&(c=e)})),void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);var a=this.activeIndex,r=Math.min(this.params.slidesPerGroupSkip,a),n=r+Math.floor((a-r)/this.params.slidesPerGroup),o=this.rtlTranslate?this.translate:-this.translate;if(o>=this.snapGrid[n]){var l=this.snapGrid[n];o-l>(this.snapGrid[n+1]-l)*s&&(a+=this.params.slidesPerGroup)}else{var d=this.snapGrid[n-1];o-d<=(this.snapGrid[n]-d)*s&&(a-=this.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,this.slidesGrid.length-1),this.slideTo(a,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,o=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?o<t.loopedSlides-r/2||o>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o):o>t.slides.length-r?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o)}else t.slideTo(o)}};var v={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each((function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)}));for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,i=this.slides,s=this.loopedSlides,a=this.allowSlidePrev,r=this.allowSlideNext,n=this.snapGrid,o=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var l=-n[t]-this.getTranslate();if(t<s)e=i.length-3*s+t,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l);else if(t>=i.length-s){e=-i.length+t+s,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l)}this.allowSlidePrev=a,this.allowSlideNext=r,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}};var f={setGrabCursor:function(e){if(!(o.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){o.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this.el.style.cursor="")}};var m,g,b,w,y,x,T,E,S,C,M,P,z,k,$,L={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&o.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,l=[],d=r-1;d>=e;d-=1){var h=this.slides.eq(d);h.remove(),l.unshift(h)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<l.length;c+=1)i.append(l[c]);s.loop&&this.loopCreate(),s.observer&&o.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},I=(m=t.navigator.platform,g=t.navigator.userAgent,b={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!t.cordova&&!t.phonegap),phonegap:!(!t.cordova&&!t.phonegap),electron:!1},w=t.screen.width,y=t.screen.height,x=g.match(/(Android);?[\s\/]+([\d.]+)?/),T=g.match(/(iPad).*OS\s([\d_]+)/),E=g.match(/(iPod)(.*OS\s([\d_]+))?/),S=!T&&g.match(/(iPhone\sOS|iOS)\s([\d_]+)/),C=g.indexOf("MSIE ")>=0||g.indexOf("Trident/")>=0,M=g.indexOf("Edge/")>=0,P=g.indexOf("Gecko/")>=0&&g.indexOf("Firefox/")>=0,z="Win32"===m,k=g.toLowerCase().indexOf("electron")>=0,$="MacIntel"===m,!T&&$&&o.touch&&(1024===w&&1366===y||834===w&&1194===y||834===w&&1112===y||768===w&&1024===y)&&(T=g.match(/(Version)\/([\d.]+)/),$=!1),b.ie=C,b.edge=M,b.firefox=P,x&&!z&&(b.os="android",b.osVersion=x[2],b.android=!0,b.androidChrome=g.toLowerCase().indexOf("chrome")>=0),(T||S||E)&&(b.os="ios",b.ios=!0),S&&!E&&(b.osVersion=S[2].replace(/_/g,"."),b.iphone=!0),T&&(b.osVersion=T[2].replace(/_/g,"."),b.ipad=!0),E&&(b.osVersion=E[3]?E[3].replace(/_/g,"."):null,b.ipod=!0),b.ios&&b.osVersion&&g.indexOf("Version/")>=0&&"10"===b.osVersion.split(".")[0]&&(b.osVersion=g.toLowerCase().split("version/")[1].split(" ")[0]),b.webView=!(!(S||T||E)||!g.match(/.*AppleWebKit(?!.*Safari)/i)&&!t.navigator.standalone)||t.matchMedia&&t.matchMedia("(display-mode: standalone)").matches,b.webview=b.webView,b.standalone=b.webView,b.desktop=!(b.ios||b.android)||k,b.desktop&&(b.electron=k,b.macos=$,b.windows=z,b.macos&&(b.os="macos"),b.windows&&(b.os="windows")),b.pixelRatio=t.devicePixelRatio||1,b);function D(i){var a=this.touchEventsData,r=this.params,o=this.touches;if(!this.animating||!r.preventInteractionOnTransition){var l=i;l.originalEvent&&(l=l.originalEvent);var d=s(l.target);if(("wrapper"!==r.touchEventsTarget||d.closest(this.wrapperEl).length)&&(a.isTouchEvent="touchstart"===l.type,(a.isTouchEvent||!("which"in l)||3!==l.which)&&!(!a.isTouchEvent&&"button"in l&&l.button>0||a.isTouched&&a.isMoved)))if(r.noSwiping&&d.closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||d.closest(r.swipeHandler)[0]){o.currentX="touchstart"===l.type?l.targetTouches[0].pageX:l.pageX,o.currentY="touchstart"===l.type?l.targetTouches[0].pageY:l.pageY;var h=o.currentX,p=o.currentY,c=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,u=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(!c||!(h<=u||h>=t.screen.width-u)){if(n.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=h,o.startY=p,a.touchStartTime=n.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==l.type){var v=!0;d.is(a.formElements)&&(v=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==d[0]&&e.activeElement.blur();var f=v&&this.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||f)&&l.preventDefault()}this.emit("touchStart",l)}}}}function O(t){var i=this.touchEventsData,a=this.params,r=this.touches,o=this.rtlTranslate,l=t;if(l.originalEvent&&(l=l.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==l.type){var d="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),h="touchmove"===l.type?d.pageX:l.pageX,p="touchmove"===l.type?d.pageY:l.pageY;if(l.preventedByNestedSwiper)return r.startX=h,void(r.startY=p);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(n.extend(r,{startX:h,startY:p,currentX:h,currentY:p}),i.touchStartTime=n.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(p<r.startY&&this.translate<=this.maxTranslate()||p>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<r.startX&&this.translate<=this.maxTranslate()||h>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&l.target===e.activeElement&&s(l.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",l),!(l.targetTouches&&l.targetTouches.length>1)){r.currentX=h,r.currentY=p;var c=r.currentX-r.startX,u=r.currentY-r.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(u,2))<this.params.threshold)){var v;if(void 0===i.isScrolling)this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(v=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?v>a.touchAngle:90-v>a.touchAngle);if(i.isScrolling&&this.emit("touchMoveOpposite",l),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,a.cssMode||l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",l)),this.emit("sliderMove",l),i.isMoved=!0;var f=this.isHorizontal()?c:u;r.diff=f,f*=a.touchRatio,o&&(f=-f),this.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var m=!0,g=a.resistanceRatio;if(a.touchReleaseOnEdges&&(g=0),f>0&&i.currentTranslate>this.minTranslate()?(m=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+f,g))):f<0&&i.currentTranslate<this.maxTranslate()&&(m=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-f,g))),m&&(l.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(f)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&!a.cssMode&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:n.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",l)}function A(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,o=t.$wrapperEl,l=t.slidesGrid,d=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=n.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap click",h),u<300&&c-i.lastClickTime<300&&t.emit("doubleTap doubleClick",h)),i.lastClickTime=n.now(),n.nextTick((function(){t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,!s.cssMode)if(s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||n.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T,E=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(s.freeModeSticky){for(var C,M=0;M<d.length;M+=1)if(d[M]>-y){C=M;break}y=-(y=Math.abs(d[C]-y)<Math.abs(d[C-1]-y)||"next"===t.swipeDirection?d[C]:d[C-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),s.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),z=t.slidesSizesGrid[t.activeIndex];b=P<z?s.speed:P<2*z?1.5*s.speed:2.5*s.speed}}else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&E?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),t.setTranslate(x),o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))}))):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var k=0,$=t.slidesSizesGrid[0],L=0;L<l.length;L+=L<s.slidesPerGroupSkip?1:s.slidesPerGroup){var I=L<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[L+I]?p>=l[L]&&p<l[L+I]&&(k=L,$=l[L+I]-l[L]):p>=l[L]&&(k=L,$=l[l.length-1]-l[l.length-2])}var D=(p-l[k])/$,O=k<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(D>=s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k)),"prev"===t.swipeDirection&&(D>1-s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(h.target===t.navigation.nextEl||h.target===t.navigation.prevEl)?h.target===t.navigation.nextEl?t.slideTo(k+O):t.slideTo(k):("next"===t.swipeDirection&&t.slideTo(k+O),"prev"===t.swipeDirection&&t.slideTo(k))}}}function G(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}function H(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function B(){var e=this.wrapperEl;this.previousTranslate=this.translate,this.translate=this.isHorizontal()?-e.scrollLeft:-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var t=this.maxTranslate()-this.minTranslate();(0===t?0:(this.translate-this.minTranslate())/t)!==this.progress&&this.updateProgress(this.translate),this.emit("setTranslate",this.translate,!1)}var N=!1;function X(){}var V={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},Y={update:h,translate:p,transition:c,slide:u,loop:v,grabCursor:f,manipulation:L,events:{attachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl;this.onTouchStart=D.bind(this),this.onTouchMove=O.bind(this),this.onTouchEnd=A.bind(this),t.cssMode&&(this.onScroll=B.bind(this)),this.onClick=H.bind(this);var r=!!t.nested;if(!o.touch&&o.pointerEvents)s.addEventListener(i.start,this.onTouchStart,!1),e.addEventListener(i.move,this.onTouchMove,r),e.addEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("touchstart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,this.onTouchStart,n),s.addEventListener(i.move,this.onTouchMove,o.passiveListener?{passive:!1,capture:r}:r),s.addEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.addEventListener(i.cancel,this.onTouchEnd,n),N||(e.addEventListener("touchstart",X),N=!0)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,r),e.addEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.addEventListener("click",this.onClick,!0),t.cssMode&&a.addEventListener("scroll",this.onScroll),t.updateOnWindowResize?this.on(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G,!0):this.on("observerUpdate",G,!0)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r=!!t.nested;if(!o.touch&&o.pointerEvents)s.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,r),e.removeEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("onTouchStart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,this.onTouchStart,n),s.removeEventListener(i.move,this.onTouchMove,r),s.removeEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.removeEventListener(i.cancel,this.onTouchEnd,n)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,r),e.removeEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.removeEventListener("click",this.onClick,!0),t.cssMode&&a.removeEventListener("scroll",this.onScroll),this.off(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=this.$el,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var o=this.getBreakpoint(r);if(o&&this.currentBreakpoint!==o){var l=o in r?r[o]:void 0;l&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=l[e];void 0!==t&&(l[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=l||this.originalParams,h=s.slidesPerColumn>1,p=d.slidesPerColumn>1;h&&!p?a.removeClass(s.containerModifierClass+"multirow "+s.containerModifierClass+"multirow-column"):!h&&p&&(a.addClass(s.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&a.addClass(s.containerModifierClass+"multirow-column"));var c=d.direction&&d.direction!==s.direction,u=s.loop&&(d.slidesPerView!==s.slidesPerView||c);c&&t&&this.changeDirection(),n.extend(this.params,d),n.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=o,u&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",d)}}},getBreakpoint:function(e){if(e){var i=!1,s=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var i=parseFloat(e.substr(1));return{value:t.innerHeight*i,point:e}}return{value:e,point:e}}));s.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var a=0;a<s.length;a+=1){var r=s[a],n=r.point;r.value<=t.innerWidth&&(i=n)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.params,t=this.isLocked,i=this.slides.length>0&&e.slidesOffsetBefore+e.spaceBetween*(this.slides.length-1)+this.slides[0].offsetWidth*this.slides.length;e.slidesOffsetBefore&&e.slidesOffsetAfter&&i?this.isLocked=i<=this.size:this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,t!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),t&&t!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push("initialized"),a.push(t.direction),t.freeMode&&a.push("free-mode"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&(a.push("multirow"),"column"===t.slidesPerColumnFill&&a.push("multirow-column")),I.android&&a.push("android"),I.ios&&a.push("ios"),t.cssMode&&a.push("css-mode"),a.forEach((function(i){e.push(t.containerModifierClass+i)})),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},F={},W=function(e){function t(){for(var i,a,r,l=[],d=arguments.length;d--;)l[d]=arguments[d];1===l.length&&l[0].constructor&&l[0].constructor===Object?r=l[0]:(a=(i=l)[0],r=i[1]),r||(r={}),r=n.extend({},r),a&&!r.el&&(r.el=a),e.call(this,r),Object.keys(Y).forEach((function(e){Object.keys(Y[e]).forEach((function(i){t.prototype[i]||(t.prototype[i]=Y[e][i])}))}));var h=this;void 0===h.modules&&(h.modules={}),Object.keys(h.modules).forEach((function(e){var t=h.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in r&&"enabled"in s))return;!0===r[i]&&(r[i]={enabled:!0}),"object"!=typeof r[i]||"enabled"in r[i]||(r[i].enabled=!0),r[i]||(r[i]={enabled:!1})}}));var p=n.extend({},V);h.useModulesParams(p),h.params=n.extend({},p,F,r),h.originalParams=n.extend({},h.params),h.passedParams=n.extend({},r),h.$=s;var c=s(h.params.el);if(a=c[0]){if(c.length>1){var u=[];return c.each((function(e,i){var s=n.extend({},r,{el:i});u.push(new t(s))})),u}var v,f,m;return a.swiper=h,c.data("swiper",h),a&&a.shadowRoot&&a.shadowRoot.querySelector?(v=s(a.shadowRoot.querySelector("."+h.params.wrapperClass))).children=function(e){return c.children(e)}:v=c.children("."+h.params.wrapperClass),n.extend(h,{$el:c,el:a,$wrapperEl:v,wrapperEl:v[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===h.params.direction},isVertical:function(){return"vertical"===h.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===h.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===v.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:h.params.allowSlideNext,allowSlidePrev:h.params.allowSlidePrev,touchEvents:(f=["touchstart","touchmove","touchend","touchcancel"],m=["mousedown","mousemove","mouseup"],o.pointerEvents&&(m=["pointerdown","pointermove","pointerup"]),h.touchEventsTouch={start:f[0],move:f[1],end:f[2],cancel:f[3]},h.touchEventsDesktop={start:m[0],move:m[1],end:m[2]},o.touch||!h.params.simulateTouch?h.touchEventsTouch:h.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:n.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:h.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),h.useModules(),h.params.init&&h.init(),h}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e?this:(this.$el.removeClass(""+this.params.containerModifierClass+i).addClass(""+this.params.containerModifierClass+e),this.params.direction=e,this.slides.each((function(t,i){"vertical"===e?i.style.width="":i.style.height=""})),this.emit("changeDirection"),t&&this.update(),this)},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,o=i.slides;return void 0===i.params||i.destroyed?null:(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),o&&o.length&&o.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),n.deleteProps(i)),i.destroyed=!0,null)},t.extendDefaults=function(e){n.extend(F,e)},i.extendedDefaults.get=function(){return F},i.defaults.get=function(){return V},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(l),R={name:"device",proto:{device:I},static:{device:I}},q={name:"support",proto:{support:o},static:{support:o}},j={isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:function(){var e=t.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)},K={name:"browser",proto:{browser:j},static:{browser:j}},U={name:"resize",create:function(){var e=this;n.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},_={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,i){void 0===i&&(i={});var s=this,a=new(0,_.func)((function(e){if(1!==e.length){var i=function(){s.emit("observerUpdate",e[0])};t.requestAnimationFrame?t.requestAnimationFrame(i):t.setTimeout(i,0)}else s.emit("observerUpdate",e[0])}));a.observe(e,{attributes:void 0===i.attributes||i.attributes,childList:void 0===i.childList||i.childList,characterData:void 0===i.characterData||i.characterData}),s.observer.observers.push(a)},init:function(){if(o.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},Z={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){n.extend(this,{observer:{init:_.init.bind(this),attach:_.attach.bind(this),destroy:_.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},Q={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,o=t.params.virtual,l=o.addSlidesBefore,d=o.addSlidesAfter,h=t.virtual,p=h.from,c=h.to,u=h.slides,v=h.slidesGrid,f=h.renderSlide,m=h.offset;t.updateActiveIndex();var g,b,w,y=t.activeIndex||0;g=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(b=Math.floor(s/2)+a+l,w=Math.floor(s/2)+a+d):(b=s+(a-1)+l,w=a+d);var x=Math.max((y||0)-w,0),T=Math.min((y||0)+b,u.length-1),E=(t.slidesGrid[x]||0)-(t.slidesGrid[0]||0);function S(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(n.extend(t.virtual,{from:x,to:T,offset:E,slidesGrid:t.slidesGrid}),p===x&&c===T&&!e)return t.slidesGrid!==v&&E!==m&&t.slides.css(g,E+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:E,from:x,to:T,slides:function(){for(var e=[],t=x;t<=T;t+=1)e.push(u[t]);return e}()}),void S();var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var P=p;P<=c;P+=1)(P<x||P>T)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+P+'"]').remove();for(var z=0;z<u.length;z+=1)z>=x&&z<=T&&(void 0===c||e?M.push(z):(z>c&&M.push(z),z<p&&C.push(z)));M.forEach((function(e){t.$wrapperEl.append(f(u[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(f(u[e],e))})),t.$wrapperEl.children(".swiper-slide").css(g,E+"px"),S()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var r=this.virtual.cache,n={};Object.keys(r).forEach((function(e){var t=r[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+1),n[parseInt(e,10)+s]=t})),this.virtual.cache=n}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},J={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){n.extend(this,{virtual:{update:Q.update.bind(this),appendSlide:Q.appendSlide.bind(this),prependSlide:Q.prependSlide.bind(this),removeSlide:Q.removeSlide.bind(this),removeAllSlides:Q.removeAllSlides.bind(this),renderSlide:Q.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};n.extend(this.params,e),n.extend(this.originalParams,e),this.params.initialSlide||this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},ee={handle:function(i){var s=this.rtlTranslate,a=i;a.originalEvent&&(a=a.originalEvent);var r=a.keyCode||a.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===r||this.isVertical()&&40===r||34===r))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===r||this.isVertical()&&38===r||33===r))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(33===r||34===r||37===r||39===r||38===r||40===r)){var n=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var o=t.innerWidth,l=t.innerHeight,d=this.$el.offset();s&&(d.left-=this.$el[0].scrollLeft);for(var h=[[d.left,d.top],[d.left+this.width,d.top],[d.left,d.top+this.height],[d.left+this.width,d.top+this.height]],p=0;p<h.length;p+=1){var c=h[p];c[0]>=0&&c[0]<=o&&c[1]>=0&&c[1]<=l&&(n=!0)}if(!n)return}this.isHorizontal()?(33!==r&&34!==r&&37!==r&&39!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),(34!==r&&39!==r||s)&&(33!==r&&37!==r||!s)||this.slideNext(),(33!==r&&37!==r||s)&&(34!==r&&39!==r||!s)||this.slidePrev()):(33!==r&&34!==r&&38!==r&&40!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),34!==r&&40!==r||this.slideNext(),33!==r&&38!==r||this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},te={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){n.extend(this,{keyboard:{enabled:!1,enable:ee.enable.bind(this),disable:ee.disable.bind(this),handle:ee.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var ie={lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel"},normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),e.shiftKey&&!s&&(s=a,a=0),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,i=this,a=i.params.mousewheel;i.params.cssMode&&t.preventDefault();var r=i.$el;if("container"!==i.params.mousewheel.eventsTarged&&(r=s(i.params.mousewheel.eventsTarged)),!i.mouseEntered&&!r[0].contains(t.target)&&!a.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var o=0,l=i.rtlTranslate?-1:1,d=ie.normalize(t);if(a.forceToAxis)if(i.isHorizontal()){if(!(Math.abs(d.pixelX)>Math.abs(d.pixelY)))return!0;o=d.pixelX*l}else{if(!(Math.abs(d.pixelY)>Math.abs(d.pixelX)))return!0;o=d.pixelY}else o=Math.abs(d.pixelX)>Math.abs(d.pixelY)?-d.pixelX*l:-d.pixelY;if(0===o)return!0;if(a.invert&&(o=-o),i.params.freeMode){var h={time:n.now(),delta:Math.abs(o),direction:Math.sign(o)},p=i.mousewheel.lastEventBeforeSnap,c=p&&h.time<p.time+500&&h.delta<=p.delta&&h.direction===p.direction;if(!c){i.mousewheel.lastEventBeforeSnap=void 0,i.params.loop&&i.loopFix();var u=i.getTranslate()+o*a.sensitivity,v=i.isBeginning,f=i.isEnd;if(u>=i.minTranslate()&&(u=i.minTranslate()),u<=i.maxTranslate()&&(u=i.maxTranslate()),i.setTransition(0),i.setTranslate(u),i.updateProgress(),i.updateActiveIndex(),i.updateSlidesClasses(),(!v&&i.isBeginning||!f&&i.isEnd)&&i.updateSlidesClasses(),i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout),i.mousewheel.timeout=void 0;var m=i.mousewheel.recentWheelEvents;m.length>=15&&m.shift();var g=m.length?m[m.length-1]:void 0,b=m[0];if(m.push(h),g&&(h.delta>g.delta||h.direction!==g.direction))m.splice(0);else if(m.length>=15&&h.time-b.time<500&&b.delta-h.delta>=1&&h.delta<=6){var w=o>0?.8:.2;i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.mousewheel.timeout=n.nextTick((function(){i.slideToClosest(i.params.speed,!0,void 0,w)}),0)}i.mousewheel.timeout||(i.mousewheel.timeout=n.nextTick((function(){i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.slideToClosest(i.params.speed,!0,void 0,.5)}),500))}if(c||i.emit("scroll",t),i.params.autoplay&&i.params.autoplayDisableOnInteraction&&i.autoplay.stop(),u===i.minTranslate()||u===i.maxTranslate())return!0}}else{var y={time:n.now(),delta:Math.abs(o),direction:Math.sign(o),raw:e},x=i.mousewheel.recentWheelEvents;x.length>=2&&x.shift();var T=x.length?x[x.length-1]:void 0;if(x.push(y),T?(y.direction!==T.direction||y.delta>T.delta)&&i.mousewheel.animateSlider(y):i.mousewheel.animateSlider(y),i.mousewheel.releaseScroll(y))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){return e.delta>=6&&n.now()-this.mousewheel.lastScrollTime<60||(e.direction<0?this.isEnd&&!this.params.loop||this.animating||(this.slideNext(),this.emit("scroll",e.raw)):this.isBeginning&&!this.params.loop||this.animating||(this.slidePrev(),this.emit("scroll",e.raw)),this.mousewheel.lastScrollTime=(new t.Date).getTime(),!1)},releaseScroll:function(e){var t=this.params.mousewheel;if(e.direction<0){if(this.isEnd&&!this.params.loop&&t.releaseOnEdges)return!0}else if(this.isBeginning&&!this.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.removeEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.on("mouseenter",this.mousewheel.handleMouseEnter),t.on("mouseleave",this.mousewheel.handleMouseLeave),t.on(e,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.addEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(!this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.off(e,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},se={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=s(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=s(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),n.extend(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},ae={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each((function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var p=h.eq(i),c=p.index();if(p.addClass(t.bulletActiveClass),t.dynamicBullets){for(var u=h.eq(o),v=h.eq(l),f=o;f<=l;f+=1)h.eq(f).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(c>=h.length-t.dynamicMainBullets){for(var m=t.dynamicMainBullets;m>=0;m-=1)h.eq(h.length-m).addClass(t.bulletActiveClass+"-main");h.eq(h.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(h.length,t.dynamicMainBullets+4),b=(this.pagination.bulletSize*g-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,w=e?"right":"left";h.css(this.isHorizontal()?w:"top",b+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),r.find("."+t.totalClass).text(t.formatFractionTotal(n))),"progressbar"===t.type){var y;y=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var x=(i+1)/n,T=1,E=1;"horizontal"===y?T=x:E=x,r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+T+") scaleY("+E+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),n.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},re={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(r.transform("translate3d("+d+"px, 0, 0)"),r[0].style.width=l+"px"):(r.transform("translate3d(0px, "+d+"px, 0)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout((function(){n[0].style.opacity=0,n.transition(400)}),1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,o=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbar.hide&&(i[0].style.opacity=0),n.extend(e,{trackSize:a,divider:r,moveDivider:o,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-a.offset()[this.isHorizontal()?"left":"top"]-(null!==o?o:r/2))/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(l),this.setTranslate(l),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,this.scrollbar.dragStartPos=e.target===r[0]||e.target===r?i.getPointerPosition(e)-e.target.getBoundingClientRect()[this.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.params.cssMode&&this.$wrapperEl.css("scroll-snap-type","none"),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,this.params.cssMode&&(this.$wrapperEl.css("scroll-snap-type",""),s.transition("")),t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=n.nextTick((function(){a.css("opacity",0),a.transition(400)}),1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,l))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,l))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),n.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},ne={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(null==d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,a)})),i.each((function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,n)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)}))}},oe={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!o.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=oe.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest("."+this.params.slideClass),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=oe.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(o.gestures?i.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!I.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(I.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=n.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=n.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,o=s.height*t.scale;if(!(r<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,s,a,r,n,o,l,d,h,p,c,u,v,f,m,g=this.zoom,b=this.params.zoom,w=g.gesture,y=g.image;(w.$slideEl||(w.$slideEl=this.slides.eq(this.activeIndex),w.$imageEl=w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),w.$imageWrapEl=w.$imageEl.parent("."+b.containerClass)),w.$imageEl&&0!==w.$imageEl.length)&&(w.$slideEl.addClass(""+b.zoomedSlideClass),void 0===y.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=y.touchesStart.x,i=y.touchesStart.y),g.scale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,g.currentScale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,e?(f=w.$slideEl[0].offsetWidth,m=w.$slideEl[0].offsetHeight,s=w.$slideEl.offset().left+f/2-t,a=w.$slideEl.offset().top+m/2-i,o=w.$imageEl[0].offsetWidth,l=w.$imageEl[0].offsetHeight,d=o*g.scale,h=l*g.scale,u=-(p=Math.min(f/2-d/2,0)),v=-(c=Math.min(m/2-h/2,0)),(r=s*g.scale)<p&&(r=p),r>u&&(r=u),(n=a*g.scale)<c&&(n=c),n>v&&(n=v)):(r=0,n=0),w.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),w.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+g.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(i.$slideEl=this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.on("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.on("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.on("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.on(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.on(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.off("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.off("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.off("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.off(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.off(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}}},le={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each((function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,(function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0]),i.params.autoHeight&&i.updateAutoHeight()}})),i.emit("lazyImageLoad",r[0],o[0])}))}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each((function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)}));else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},de={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new de.LinearSpline(this.slidesGrid,e.slidesGrid):new de.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof W&&n(r[o]);else r instanceof W&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&n.nextTick((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof W&&r(a[i]);else a instanceof W&&t!==a&&r(a)}},he={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop&&this.navigation){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/{{index}}/,r.index()+1))}))},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},pe={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=pe.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=pe.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter((function(e){return""!==e})),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=pe.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(pe.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},ce={onHashCange:function(){var t=e.location.hash.replace("#","");if(t!==this.slides.eq(this.activeIndex).attr("data-hash")){var i=this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===i)return;this.slideTo(i)}},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},ue={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=n.nextTick((function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),e.params.cssMode&&e.autoplay.running&&e.autoplay.run()}),i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},ve={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd((function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}}))}}},fe={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<a.length;u+=1){var v=a.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var T="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(T),d.slideShadows){var E=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=s('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(c)-90*Math.floor(Math.abs(c)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),P=d.shadowScale,z=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+P+", 1, "+z+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/z+"px) rotateX(-90deg)")}var $=j.isSafari||j.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},me={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),r=a[0].progress;this.params.flipEffect.limitRotation&&(r=Math.max(Math.min(a[0].progress,1),-1));var n=-180*r,o=0,l=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(n=-n):(d=l,l=0,o=-n,n=0),a[0].style.zIndex=-Math.abs(Math.round(r))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-r,0)),p.length&&(p[0].style.opacity=Math.max(r,0))}a.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}}))}}},ge={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,l=this.isHorizontal(),d=this.translate,h=l?e/2-d:t/2-d,p=l?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(h-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=l?p*g:0,w=l?0:p*g,y=-c*Math.abs(g),x=n.stretch;"string"==typeof x&&-1!==x.indexOf("%")&&(x=parseFloat(n.stretch)/100*m);var T=l?0:x*g,E=l?x*g:0;Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var S="translate3d("+E+"px,"+T+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(S),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var C=l?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=l?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=s('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=g>0?g:0),M.length&&(M[0].style.opacity=-g>0?-g:0)}}(o.pointerEvents||o.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=h+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},be={init:function(){var e=this.params.thumbs,t=this.constructor;e.swiper instanceof t?(this.thumbs.swiper=e.swiper,n.extend(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),n.extend(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):n.isObject(e.swiper)&&(this.thumbs.swiper=new t(n.extend({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick)},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&s(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var a;if(a=e.params.loop?parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var r=this.activeIndex;this.slides.eq(r).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,r=this.activeIndex);var n=this.slides.eq(r).prevAll('[data-swiper-slide-index="'+a+'"]').eq(0).index(),o=this.slides.eq(r).nextAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();a=void 0===n?o:void 0===o?n:o-r<r-n?o:n}this.slideTo(a)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView;if(this.realIndex!==t.realIndex){var s,a=t.activeIndex;if(t.params.loop){t.slides.eq(a).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,a=t.activeIndex);var r=t.slides.eq(a).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),n=t.slides.eq(a).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();s=void 0===r?n:void 0===n?r:n-a==a-r?a:n-a<a-r?n:r}else s=this.realIndex;t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(s)<0&&(t.params.centeredSlides?s=s>a?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:s>a&&(s=s-i+1),t.slideTo(s,e?0:void 0))}var o=1,l=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(o=this.params.slidesPerView),this.params.thumbs.multipleActiveThumbs||(o=1),o=Math.floor(o),t.slides.removeClass(l),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var d=0;d<o;d+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+d)+'"]').addClass(l);else for(var h=0;h<o;h+=1)t.slides.eq(this.realIndex+h).addClass(l)}}},we=[R,q,K,U,Z,J,te,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){n.extend(this,{mousewheel:{enabled:!1,enable:ie.enable.bind(this),disable:ie.disable.bind(this),handle:ie.handle.bind(this),handleMouseEnter:ie.handleMouseEnter.bind(this),handleMouseLeave:ie.handleMouseLeave.bind(this),animateSlider:ie.animateSlider.bind(this),releaseScroll:ie.releaseScroll.bind(this),lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[]}})},on:{init:function(){!this.params.mousewheel.enabled&&this.params.cssMode&&this.mousewheel.disable(),this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.params.cssMode&&this.mousewheel.enable(),this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){n.extend(this,{navigation:{init:se.init.bind(this),update:se.update.bind(this),destroy:se.destroy.bind(this),onNextClick:se.onNextClick.bind(this),onPrevClick:se.onPrevClick.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,i=this.navigation,a=i.$nextEl,r=i.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(r)||s(e.target).is(a)||(a?t=a.hasClass(this.params.navigation.hiddenClass):r&&(t=r.hasClass(this.params.navigation.hiddenClass)),!0===t?this.emit("navigationShow",this):this.emit("navigationHide",this),a&&a.toggleClass(this.params.navigation.hiddenClass),r&&r.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){n.extend(this,{pagination:{init:ae.init.bind(this),render:ae.render.bind(this),update:ae.update.bind(this),destroy:ae.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&(!0===this.pagination.$el.hasClass(this.params.pagination.hiddenClass)?this.emit("paginationShow",this):this.emit("paginationHide",this),this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){n.extend(this,{scrollbar:{init:re.init.bind(this),destroy:re.destroy.bind(this),updateSize:re.updateSize.bind(this),setTranslate:re.setTranslate.bind(this),setTransition:re.setTransition.bind(this),enableDraggable:re.enableDraggable.bind(this),disableDraggable:re.disableDraggable.bind(this),setDragPosition:re.setDragPosition.bind(this),getPointerPosition:re.getPointerPosition.bind(this),onDragStart:re.onDragStart.bind(this),onDragMove:re.onDragMove.bind(this),onDragEnd:re.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){n.extend(this,{parallax:{setTransform:ne.setTransform.bind(this),setTranslate:ne.setTranslate.bind(this),setTransition:ne.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i){t[i]=oe[i].bind(e)})),n.extend(e,{zoom:t});var i=1;Object.defineProperty(e.zoom,"scale",{get:function(){return i},set:function(t){if(i!==t){var s=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()},slideChange:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.params.cssMode&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){n.extend(this,{lazy:{initialImageLoaded:!1,load:le.load.bind(this),loadInSlide:le.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()},slideChange:function(){this.params.lazy.enabled&&this.params.cssMode&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){n.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:de.getInterpolateFunction.bind(this),setTranslate:de.setTranslate.bind(this),setTransition:de.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;n.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(he).forEach((function(t){e.a11y[t]=he[t].bind(e)}))},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){n.extend(this,{history:{init:pe.init.bind(this),setHistory:pe.setHistory.bind(this),setHistoryPopState:pe.setHistoryPopState.bind(this),scrollToSlide:pe.scrollToSlide.bind(this),destroy:pe.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)},slideChange:function(){this.history.initialized&&this.params.cssMode&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){n.extend(this,{hashNavigation:{initialized:!1,init:ce.init.bind(this),destroy:ce.destroy.bind(this),setHash:ce.setHash.bind(this),onHashCange:ce.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()},slideChange:function(){this.hashNavigation.initialized&&this.params.cssMode&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;n.extend(e,{autoplay:{running:!1,paused:!1,run:ue.run.bind(e),start:ue.start.bind(e),stop:ue.stop.bind(e),pause:ue.pause.bind(e),onVisibilityChange:function(){"hidden"===document.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===document.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&(this.autoplay.start(),document.addEventListener("visibilitychange",this.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},touchEnd:function(){this.params.cssMode&&this.autoplay.paused&&!this.params.autoplay.disableOnInteraction&&this.autoplay.run()},destroy:function(){this.autoplay.running&&this.autoplay.stop(),document.removeEventListener("visibilitychange",this.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){n.extend(this,{fadeEffect:{setTranslate:ve.setTranslate.bind(this),setTransition:ve.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){n.extend(this,{cubeEffect:{setTranslate:fe.setTranslate.bind(this),setTransition:fe.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){n.extend(this,{flipEffect:{setTranslate:me.setTranslate.bind(this),setTransition:me.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){n.extend(this,{coverflowEffect:{setTranslate:ge.setTranslate.bind(this),setTransition:ge.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{multipleActiveThumbs:!0,swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){n.extend(this,{thumbs:{swiper:null,init:be.init.bind(this),update:be.update.bind(this),onThumbClick:be.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===W.use&&(W.use=W.Class.use,W.installModule=W.Class.installModule),W.use(we),W}));
//# sourceMappingURL=swiper.min.js.map
"use strict";

// ==================  polyfill for method Closest  ================================
(function (ELEMENT) {
  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
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
