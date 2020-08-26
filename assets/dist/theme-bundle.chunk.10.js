(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");






function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }








var Cart = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Cart, _PageManager);

  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Cart.prototype;

  _proto.onReady = function onReady() {
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components
    // Classes

    this.classRow = '.cart-item-title';
    this.classResultMessage = '.list-feedback'; // Class names

    this.classNameRowError = 'list-add__row--error'; // Functional assignments

    this.$form = $('.cart-list-form');
    this.$newList = $('.add-new-list');
    this.$addingOverlay = $('.loading-overlay');
    this.$document = $(document);
    this.resetState();
    this.bindEvents();
  };

  _proto.resetState = function resetState() {
    this.items = [];
    this.errors = [];
    this.currentLoop = 0;
  } // Run AJAX calls one by one
  ;

  _proto.handleAjax = function handleAjax() {
    var _this = this;

    if (this.currentLoop < this.items.length) {
      $(this.classResultMessage).html("Saving<br> " + this.items[this.currentLoop].pname + "<br> to your list");
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.getPage(this.items[this.currentLoop].url, {
        template: 'f/b2b/add-to-list-response'
      }, function (err) {
        if (err) {
          throw new Error(err);
        } // Increment 'current' and run AJAX call again


        _this.currentLoop++;

        _this.handleAjax();
      });
    } // Last attempt, redirect only


    if (this.currentLoop === this.items.length) {
      this.$addingOverlay.hide();

      if (this.listTarget !== '' && this.listTarget !== undefined) {
        document.location.href = "/wishlist.php?action=viewwishlistitems" + this.listTarget;
      } else {
        document.location.href = '/wishlist.php';
      } // $('.multi_add__cart-button').css('display', 'inline-block');
      // $('.multi-add__row[data-status=success]').remove();

    }
  };

  _proto.processForm = function processForm(event, form) {
    var _this2 = this;

    event.preventDefault();
    this.$addingOverlay.show();
    var allRows = $(form).find(this.classRow);
    var allMessages = allRows.find(this.classResultMessage);
    this.resetState(); // For each row, add the URL and target to the items array

    allRows.each(function (index, row) {
      var target = $(row);
      var pid = target.find('[data-pid]').val();
      var pname = target.find('.cart-item-name').attr('data-pname');
      _this2.listTarget = $('#list-id').val();

      if (_this2.listTarget !== '' && _this2.listTarget !== undefined) {
        _this2.listTarget = "&wishlistid=" + _this2.listTarget;
      } else {
        _this2.listTarget = '';
      }

      var url = "/wishlist.php?action=add&product_id=" + pid + _this2.listTarget;

      _this2.items.push({
        url: url,
        target: target,
        pname: pname
      });
    }); // To add lang string

    allMessages.text('Saving to list...').show();
    this.handleAjax();
  };

  _proto.openAddList = function openAddList(event) {
    event.preventDefault();
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_9__["defaultModal"])();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.getPage('/cart.php', {
      template: 'f/cart/add-list-form'
    }, function (err, response) {
      if (err) {
        throw new Error(err);
      }

      if (response.length) {
        modal.updateContent(response);
        $('#wishlistname').select();
      }
    });
    modal.open();
  };

  _proto.addNewList = function addNewList(event) {
    event.preventDefault();
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_9__["defaultModal"])();
    var listName = $('#wishlistname').val();
    var sharedList = $('#publicwishlist').val();
    var targetUrl = '/wishlist.php?action=addwishlist&product_id=';
    $.ajax({
      method: 'POST',
      url: targetUrl,
      data: {
        wishlistname: listName,
        publicwishlist: sharedList,
        submit: null
      }
    }).done(function () {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.getPage('/wishlist.php', {
        template: 'f/b2b/list-added-response'
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        if (response.length) {
          // replace contents of '.list-selector' with response
          $('.list-selector').html(response);
        }

        modal.close();
      });
    });
  };

  _proto.cartUpdate = function cartUpdate($target) {
    var _this3 = this;

    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantity-max'), 10);
    var minQty = parseInt($el.data('quantity-min'), 10);
    var minError = $el.data('quantity-min-error');
    var maxError = $el.data('quantity-max-error');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1; // Does not qualify for min/max quantity

    if (newQty < minQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
        text: maxError,
        type: 'error'
      });
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this3.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;

        _this3.refreshContent(remove);
      } else {
        $el.val(oldQty);
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };

  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this4 = this;

    if (preVal === void 0) {
      preVal = null;
    }

    var itemId = $target.data('cart-itemid');
    var $el = $("#qty-" + itemId);
    var minQty = parseInt($el.data('quantity-min'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry; // Does not quality for min/max quantity

    if (newQty < 0 || Number.isNaN(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
        text: invalidEntry + " is not a valid entry",
        type: 'error'
      });
    } else {
      this.$overlay.show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
        _this4.$overlay.hide();

        if (response.data.status === 'succeed') {
          // if the quantity is changed "1" from "0", we have to remove the row.
          var remove = newQty === 0;

          _this4.refreshContent(remove);
        } else {
          $el.val(oldQty);
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    }
  };

  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this5 = this;

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this5.refreshContent(true);
      } else {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        }).then(function () {
          _this5.refreshContent(true);
        });
      }
    });
  };

  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this6 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_9__["defaultModal"])();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);

      _this6.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', function (event, option) {
      var $changedOption = $(option);
      var $form = $changedOption.parents('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      var item = $('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};

        if (err) {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
            text: err,
            type: 'error'
          });
          return false;
        }

        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }

        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };

  _proto.refreshContent = function refreshContent(remove) {
    var _this7 = this;

    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show(); // Remove last item from cart? Reload

    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
      _this7.$cartContent.html(response.content);

      _this7.$cartTotals.html(response.totals);

      _this7.$cartMessages.html(response.statusMessages);

      $cartPageTitle.replaceWith(response.pageTitle);

      _this7.bindEvents();

      _this7.$overlay.hide();

      var quantity = $('[data-cart-quantity]', _this7.$cartContent).data('cart-quantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
    });
  };

  _proto.bindCartEvents = function bindCartEvents() {
    var _this8 = this;

    var debounceTimeout = 400;

    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_4___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.cartUpdate, debounceTimeout), this);

    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_4___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);

    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_4___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.cartRemoveItem, debounceTimeout), this);

    var preVal; // cart update

    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdate($target);
    }); // cart qty manually updates

    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();
      event.stopImmediatePropagation(); // update cart quantity

      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      event.stopImmediatePropagation();
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
        text: string,
        type: 'warning',
        showCancelButton: true
      }).then(function () {
        // remove item from cart
        cartRemoveItem(itemId);
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      event.preventDefault(); // edit item in cart

      _this8.cartEditOptions(itemId);
    });
  };

  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this9 = this;

    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault(); // Empty code

      if (!code) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
          text: $codeInput.data('error'),
          type: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this9.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this10 = this;

    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();

      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_7__["default"])(code)) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
          text: $certInput.data('error'),
          type: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this10.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
            text: resp.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this11 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_9__["defaultModal"])();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);

        _this11.bindGiftWrappingForm();
      });
    });
  };

  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');

      if (!id) {
        return;
      }

      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();

      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');

    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');

      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }

    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };

  _proto.bindEvents = function bindEvents() {
    var _this12 = this;

    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();
    this.$form.on('click', '[data-save-cart]', function (event) {
      _this12.processForm(event, _this12.$form[0]);
    });
    this.$newList.on('click', function (event) {
      _this12.openAddList(event);
    });
    this.$document.on('click', '.add-new-list-form .button', function (event) {
      _this12.addNewList(event);
    }); // initiate shipping estimator module

    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_8__["default"]($('[data-shipping-estimator]'));
  };

  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_6__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingEstimator; });
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");









var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }

  var _proto = ShippingEstimator.prototype;

  _proto.initFormValidation = function initFormValidation() {
    var _this = this;

    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }

      if (_this.shippingValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };

  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };

  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;

    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");

        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }

        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }
  /**
   * Toggle between default shipping and ups shipping rates
   */
  ;

  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };

  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;

    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"])({
          text: err,
          type: 'error'
        });
        throw new Error(err);
      }

      var $field = $(field);

      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }

      if ($last) {
        _this3.shippingValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;

        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].cleanUpStateValidation(field);
      } // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us


      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };

  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content); // bind the select button

        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      $('.shipping-estimate-hide').show();
    });
    $('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      $('.shipping-estimate-show').show();
      $('.shipping-estimate-hide').hide();
    });
  };

  return ShippingEstimator;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  } // Add any custom gift certificate validation logic here


  return true;
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJDYXJ0Iiwib25SZWFkeSIsIiRjYXJ0Q29udGVudCIsIiQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkb3ZlcmxheSIsImhpZGUiLCJjbGFzc1JvdyIsImNsYXNzUmVzdWx0TWVzc2FnZSIsImNsYXNzTmFtZVJvd0Vycm9yIiwiJGZvcm0iLCIkbmV3TGlzdCIsIiRhZGRpbmdPdmVybGF5IiwiJGRvY3VtZW50IiwiZG9jdW1lbnQiLCJyZXNldFN0YXRlIiwiYmluZEV2ZW50cyIsIml0ZW1zIiwiZXJyb3JzIiwiY3VycmVudExvb3AiLCJoYW5kbGVBamF4IiwibGVuZ3RoIiwiaHRtbCIsInBuYW1lIiwidXRpbHMiLCJhcGkiLCJnZXRQYWdlIiwidXJsIiwidGVtcGxhdGUiLCJlcnIiLCJFcnJvciIsImxpc3RUYXJnZXQiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhyZWYiLCJwcm9jZXNzRm9ybSIsImV2ZW50IiwiZm9ybSIsInByZXZlbnREZWZhdWx0Iiwic2hvdyIsImFsbFJvd3MiLCJmaW5kIiwiYWxsTWVzc2FnZXMiLCJlYWNoIiwiaW5kZXgiLCJyb3ciLCJ0YXJnZXQiLCJwaWQiLCJ2YWwiLCJhdHRyIiwicHVzaCIsInRleHQiLCJvcGVuQWRkTGlzdCIsIm1vZGFsIiwiZGVmYXVsdE1vZGFsIiwicmVzcG9uc2UiLCJ1cGRhdGVDb250ZW50Iiwic2VsZWN0Iiwib3BlbiIsImFkZE5ld0xpc3QiLCJsaXN0TmFtZSIsInNoYXJlZExpc3QiLCJ0YXJnZXRVcmwiLCJhamF4IiwibWV0aG9kIiwiZGF0YSIsIndpc2hsaXN0bmFtZSIsInB1YmxpY3dpc2hsaXN0Iiwic3VibWl0IiwiZG9uZSIsImNsb3NlIiwiY2FydFVwZGF0ZSIsIiR0YXJnZXQiLCJpdGVtSWQiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJzd2FsIiwidHlwZSIsImNhcnQiLCJpdGVtVXBkYXRlIiwic3RhdHVzIiwicmVtb3ZlIiwicmVmcmVzaENvbnRlbnQiLCJqb2luIiwiY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UiLCJwcmVWYWwiLCJOdW1iZXIiLCJpbnZhbGlkRW50cnkiLCJpc05hTiIsImNhcnRSZW1vdmVJdGVtIiwiaXRlbVJlbW92ZSIsInRoZW4iLCJjYXJ0RWRpdE9wdGlvbnMiLCJvcHRpb25zIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJjb250ZW50IiwiYmluZEdpZnRXcmFwcGluZ0Zvcm0iLCJob29rcyIsIm9uIiwib3B0aW9uIiwiJGNoYW5nZWRPcHRpb24iLCJwYXJlbnRzIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94IiwiaXRlbSIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInByb3AiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCIkY2FydEl0ZW1zUm93cyIsIiRjYXJ0UGFnZVRpdGxlIiwidG90YWxzIiwicGFnZVRpdGxlIiwic3RhdHVzTWVzc2FnZXMiLCJ3aW5kb3ciLCJyZWxvYWQiLCJnZXRDb250ZW50IiwicmVwbGFjZVdpdGgiLCJxdWFudGl0eSIsInRyaWdnZXIiLCJiaW5kQ2FydEV2ZW50cyIsImRlYm91bmNlVGltZW91dCIsImN1cnJlbnRUYXJnZXQiLCJvblF0eUZvY3VzIiwidmFsdWUiLCJjaGFuZ2UiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzdHJpbmciLCJzaG93Q2FuY2VsQnV0dG9uIiwiYmluZFByb21vQ29kZUV2ZW50cyIsIiRjb3Vwb25Db250YWluZXIiLCIkY291cG9uRm9ybSIsIiRjb2RlSW5wdXQiLCJjb2RlIiwiYXBwbHlDb2RlIiwiYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cyIsIiRjZXJ0Q29udGFpbmVyIiwiJGNlcnRGb3JtIiwiJGNlcnRJbnB1dCIsInRvZ2dsZSIsImdpZnRDZXJ0Q2hlY2siLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsInJlc3AiLCJiaW5kR2lmdFdyYXBwaW5nRXZlbnRzIiwiZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMiLCIkc2VsZWN0IiwiaWQiLCJhbGxvd01lc3NhZ2UiLCJ0b2dnbGVWaWV3cyIsIiRzaW5nbGVGb3JtIiwiJG11bHRpRm9ybSIsInNoaXBwaW5nRXN0aW1hdG9yIiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJQYWdlTWFuYWdlciIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ1ZhbGlkYXRvciIsIm5vZCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImJpbmRWYWxpZGF0aW9uIiwiYmluZFN0YXRlVmFsaWRhdGlvbiIsImJpbmRVUFNSYXRlcyIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsImNvdW50cnlJZCIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiY29udGV4dCIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJpcyIsIlZhbGlkYXRvcnMiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicmVtb3ZlQ2xhc3MiLCIkZXN0aW1hdG9yQ29udGFpbmVyIiwiJGVzdGltYXRvckZvcm0iLCJwYXJhbXMiLCJjb3VudHJ5X2lkIiwic3RhdGVfaWQiLCJjaXR5IiwiemlwX2NvZGUiLCJnZXRTaGlwcGluZ1F1b3RlcyIsImNsaWNrRXZlbnQiLCJxdW90ZUlkIiwic3VibWl0U2hpcHBpbmdRdW90ZSIsImFkZENsYXNzIiwiY2VydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsSTs7Ozs7Ozs7O1NBQ2pCQyxPLEdBQUEsbUJBQVU7QUFDTixTQUFLQyxZQUFMLEdBQW9CQyxDQUFDLENBQUMscUJBQUQsQ0FBckI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCRCxDQUFDLENBQUMsb0JBQUQsQ0FBdEI7QUFDQSxTQUFLRSxXQUFMLEdBQW1CRixDQUFDLENBQUMsb0JBQUQsQ0FBcEI7QUFDQSxTQUFLRyxRQUFMLEdBQWdCSCxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUNYSSxJQURXLEVBQWhCLENBSk0sQ0FLTztBQUViOztBQUNBLFNBQUtDLFFBQUwsR0FBZ0Isa0JBQWhCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEIsZ0JBQTFCLENBVE0sQ0FXTjs7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixzQkFBekIsQ0FaTSxDQWNOOztBQUNBLFNBQUtDLEtBQUwsR0FBYVIsQ0FBQyxDQUFDLGlCQUFELENBQWQ7QUFDQSxTQUFLUyxRQUFMLEdBQWdCVCxDQUFDLENBQUMsZUFBRCxDQUFqQjtBQUNBLFNBQUtVLGNBQUwsR0FBc0JWLENBQUMsQ0FBQyxrQkFBRCxDQUF2QjtBQUNBLFNBQUtXLFNBQUwsR0FBaUJYLENBQUMsQ0FBQ1ksUUFBRCxDQUFsQjtBQUVBLFNBQUtDLFVBQUw7QUFFQSxTQUFLQyxVQUFMO0FBQ0gsRzs7U0FFREQsVSxHQUFBLHNCQUFhO0FBQ1QsU0FBS0UsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDSCxHLENBRUQ7OztTQUNBQyxVLEdBQUEsc0JBQWE7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SixvQkFBVSxDQUFDekssY0FBWDtBQUVBZCw0RUFBSyxDQUFDQyxHQUFOLENBQVUyRCxJQUFWLENBQWU2SCxtQkFBZixDQUFtQ0QsT0FBbkMsRUFBNEMsWUFBTTtBQUM5Q3BGLGtCQUFNLENBQUMzRixRQUFQLENBQWdCNEYsTUFBaEI7QUFDSCxXQUZEO0FBR0gsU0FSRDtBQVNILE9BYkQ7QUFjSCxLQXhCRDtBQTBCQTNILEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCdUcsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQXJFLEtBQUssRUFBSTtBQUM5Q0EsV0FBSyxDQUFDRSxjQUFOO0FBRUFwQyxPQUFDLENBQUNrQyxLQUFLLENBQUNnRyxhQUFQLENBQUQsQ0FBdUI5SCxJQUF2QjtBQUNBaU0seUJBQW1CLENBQUNELFdBQXBCLENBQWdDLGtCQUFoQztBQUNBcE0sT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJxQyxJQUE3QjtBQUNILEtBTkQ7QUFTQXJDLEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCdUcsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQXJFLEtBQUssRUFBSTtBQUM5Q0EsV0FBSyxDQUFDRSxjQUFOO0FBRUFpSyx5QkFBbUIsQ0FBQ1csUUFBcEIsQ0FBNkIsa0JBQTdCO0FBQ0FoTixPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QnFDLElBQTdCO0FBQ0FyQyxPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkksSUFBN0I7QUFDSCxLQU5EO0FBT0gsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckxMO0FBQWUseUVBQVU2TSxJQUFWLEVBQWdCO0FBQzNCLE1BQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixXQUFPLEtBQVA7QUFDSCxHQUgwQixDQUszQjs7O0FBQ0EsU0FBTyxJQUFQO0FBQ0gsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgZ2lmdENlcnRDaGVjayBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XHJcbmltcG9ydCBTaGlwcGluZ0VzdGltYXRvciBmcm9tICcuL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yJztcclxuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLiRjYXJ0Q29udGVudCA9ICQoJ1tkYXRhLWNhcnQtY29udGVudF0nKTtcclxuICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nKTtcclxuICAgICAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnRdIC5sb2FkaW5nT3ZlcmxheScpXHJcbiAgICAgICAgICAgIC5oaWRlKCk7IC8vIFRPRE86IHRlbXBvcmFyeSB1bnRpbCByb3BlciBwdWxscyBpbiBoaXMgY2FydCBjb21wb25lbnRzXHJcblxyXG4gICAgICAgIC8vIENsYXNzZXNcclxuICAgICAgICB0aGlzLmNsYXNzUm93ID0gJy5jYXJ0LWl0ZW0tdGl0bGUnO1xyXG4gICAgICAgIHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlID0gJy5saXN0LWZlZWRiYWNrJztcclxuXHJcbiAgICAgICAgLy8gQ2xhc3MgbmFtZXNcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZVJvd0Vycm9yID0gJ2xpc3QtYWRkX19yb3ctLWVycm9yJztcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb25hbCBhc3NpZ25tZW50c1xyXG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKCcuY2FydC1saXN0LWZvcm0nKTtcclxuICAgICAgICB0aGlzLiRuZXdMaXN0ID0gJCgnLmFkZC1uZXctbGlzdCcpO1xyXG4gICAgICAgIHRoaXMuJGFkZGluZ092ZXJsYXkgPSAkKCcubG9hZGluZy1vdmVybGF5Jyk7XHJcbiAgICAgICAgdGhpcy4kZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TG9vcCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUnVuIEFKQVggY2FsbHMgb25lIGJ5IG9uZVxyXG4gICAgaGFuZGxlQWpheCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9vcCA8IHRoaXMuaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQodGhpcy5jbGFzc1Jlc3VsdE1lc3NhZ2UpLmh0bWwoYFNhdmluZzxicj4gJHt0aGlzLml0ZW1zW3RoaXMuY3VycmVudExvb3BdLnBuYW1lfTxicj4gdG8geW91ciBsaXN0YCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0udXJsLCB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2YvYjJiL2FkZC10by1saXN0LXJlc3BvbnNlJyxcclxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEluY3JlbWVudCAnY3VycmVudCcgYW5kIHJ1biBBSkFYIGNhbGwgYWdhaW5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExvb3ArKztcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWpheCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExhc3QgYXR0ZW1wdCwgcmVkaXJlY3Qgb25seVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb29wID09PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLiRhZGRpbmdPdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RUYXJnZXQgIT09ICcnICYmIHRoaXMubGlzdFRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC93aXNobGlzdC5waHA/YWN0aW9uPXZpZXd3aXNobGlzdGl0ZW1zJHt0aGlzLmxpc3RUYXJnZXR9YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnL3dpc2hsaXN0LnBocCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gJCgnLm11bHRpX2FkZF9fY2FydC1idXR0b24nKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAgICAgICAgIC8vICQoJy5tdWx0aS1hZGRfX3Jvd1tkYXRhLXN0YXR1cz1zdWNjZXNzXScpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzRm9ybShldmVudCwgZm9ybSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuJGFkZGluZ092ZXJsYXkuc2hvdygpO1xyXG5cclxuICAgICAgICBjb25zdCBhbGxSb3dzID0gJChmb3JtKS5maW5kKHRoaXMuY2xhc3NSb3cpO1xyXG4gICAgICAgIGNvbnN0IGFsbE1lc3NhZ2VzID0gYWxsUm93cy5maW5kKHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XHJcblxyXG4gICAgICAgIC8vIEZvciBlYWNoIHJvdywgYWRkIHRoZSBVUkwgYW5kIHRhcmdldCB0byB0aGUgaXRlbXMgYXJyYXlcclxuICAgICAgICBhbGxSb3dzLmVhY2goKGluZGV4LCByb3cpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gJChyb3cpO1xyXG4gICAgICAgICAgICBjb25zdCBwaWQgPSB0YXJnZXQuZmluZCgnW2RhdGEtcGlkXScpLnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBwbmFtZSA9IHRhcmdldC5maW5kKCcuY2FydC1pdGVtLW5hbWUnKS5hdHRyKCdkYXRhLXBuYW1lJyk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFRhcmdldCA9ICQoJyNsaXN0LWlkJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0VGFyZ2V0ICE9PSAnJyAmJiB0aGlzLmxpc3RUYXJnZXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VGFyZ2V0ID0gYCZ3aXNobGlzdGlkPSR7dGhpcy5saXN0VGFyZ2V0fWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RUYXJnZXQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYC93aXNobGlzdC5waHA/YWN0aW9uPWFkZCZwcm9kdWN0X2lkPSR7cGlkfSR7dGhpcy5saXN0VGFyZ2V0fWA7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBwbmFtZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRvIGFkZCBsYW5nIHN0cmluZ1xyXG4gICAgICAgIGFsbE1lc3NhZ2VzLnRleHQoJ1NhdmluZyB0byBsaXN0Li4uJykuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQWpheCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5BZGRMaXN0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UoJy9jYXJ0LnBocCcsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdmL2NhcnQvYWRkLWxpc3QtZm9ybScsXHJcbiAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dpc2hsaXN0bmFtZScpLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGROZXdMaXN0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcclxuICAgICAgICBjb25zdCBsaXN0TmFtZSA9ICQoJyN3aXNobGlzdG5hbWUnKS52YWwoKTtcclxuICAgICAgICBjb25zdCBzaGFyZWRMaXN0ID0gJCgnI3B1YmxpY3dpc2hsaXN0JykudmFsKCk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VXJsID0gJy93aXNobGlzdC5waHA/YWN0aW9uPWFkZHdpc2hsaXN0JnByb2R1Y3RfaWQ9JztcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogdGFyZ2V0VXJsLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB3aXNobGlzdG5hbWU6IGxpc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgcHVibGljd2lzaGxpc3Q6IHNoYXJlZExpc3QsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKCcvd2lzaGxpc3QucGhwJywge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdmL2IyYi9saXN0LWFkZGVkLXJlc3BvbnNlJyxcclxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBjb250ZW50cyBvZiAnLmxpc3Qtc2VsZWN0b3InIHdpdGggcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgICAgICAkKCcubGlzdC1zZWxlY3RvcicpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcnRVcGRhdGUoJHRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XHJcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcGFyc2VJbnQoJGVsLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5LW1heCcpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5LW1pbicpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHktbWluLWVycm9yJyk7XHJcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHktbWF4LWVycm9yJyk7XHJcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcclxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaWZ5IGZvciBtaW4vbWF4IHF1YW50aXR5XHJcbiAgICAgICAgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG4gICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsID0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydC1pdGVtaWQnKTtcclxuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xyXG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eS1taW4nKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHByZVZhbCAhPT0gbnVsbCA/IHByZVZhbCA6IG1pblF0eTtcclxuICAgICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludChOdW1iZXIoJGVsLnZhbCgpKSwgMTApO1xyXG5cclxuICAgICAgICBsZXQgaW52YWxpZEVudHJ5O1xyXG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcclxuICAgICAgICBpZiAobmV3UXR5IDwgMCB8fCBOdW1iZXIuaXNOYU4obmV3UXR5KSkge1xyXG4gICAgICAgICAgICBpbnZhbGlkRW50cnkgPSAkZWwudmFsKCk7XHJcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBgJHtpbnZhbGlkRW50cnl9IGlzIG5vdCBhIHZhbGlkIGVudHJ5YCxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpIHtcclxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbW9kYWwub3BlbigpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXRpbHMuaG9va3Mub24oJ3Byb2R1Y3Qtb3B0aW9uLWNoYW5nZScsIChldmVudCwgb3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChvcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgY29uc3QgJHN1Ym1pdCA9ICQoJ2lucHV0LmJ1dHRvbicsICRmb3JtKTtcclxuICAgICAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcuYWxlcnRNZXNzYWdlQm94Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSAkKCdbbmFtZT1cIml0ZW1faWRcIl0nLCAkZm9ybSkuYXR0cigndmFsdWUnKTtcclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoaXRlbSwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdwLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hDb250ZW50KHJlbW92ZSkge1xyXG4gICAgICAgIGNvbnN0ICRjYXJ0SXRlbXNSb3dzID0gJCgnW2RhdGEtaXRlbS1yb3ddJywgdGhpcy4kY2FydENvbnRlbnQpO1xyXG4gICAgICAgIGNvbnN0ICRjYXJ0UGFnZVRpdGxlID0gJCgnW2RhdGEtY2FydC1wYWdlLXRpdGxlXScpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnY2FydC9jb250ZW50JyxcclxuICAgICAgICAgICAgICAgIHRvdGFsczogJ2NhcnQvdG90YWxzJyxcclxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ2NhcnQvcGFnZS10aXRsZScsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlczogJ2NhcnQvc3RhdHVzLW1lc3NhZ2VzJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxyXG4gICAgICAgIGlmIChyZW1vdmUgJiYgJGNhcnRJdGVtc1Jvd3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcnRUb3RhbHMuaHRtbChyZXNwb25zZS50b3RhbHMpO1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XHJcblxyXG4gICAgICAgICAgICAkY2FydFBhZ2VUaXRsZS5yZXBsYWNlV2l0aChyZXNwb25zZS5wYWdlVGl0bGUpO1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnQtcXVhbnRpdHknKSB8fCAwO1xyXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZENhcnRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xyXG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGUsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XHJcbiAgICAgICAgY29uc3QgY2FydFJlbW92ZUl0ZW0gPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcclxuICAgICAgICBsZXQgcHJlVmFsO1xyXG5cclxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxyXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XHJcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNhcnQgcXR5IG1hbnVhbGx5IHVwZGF0ZXNcclxuICAgICAgICAkKCcuY2FydC1pdGVtLXF0eS1pbnB1dCcsIHRoaXMuJGNhcnRDb250ZW50KS5vbignZm9jdXMnLCBmdW5jdGlvbiBvblF0eUZvY3VzKCkge1xyXG4gICAgICAgICAgICBwcmVWYWwgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIH0pLmNoYW5nZShldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XHJcbiAgICAgICAgICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5jYXJ0LXJlbW92ZScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtRGVsZXRlJyk7XHJcbiAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNhcnRcclxuICAgICAgICAgICAgICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1pdGVtLWVkaXRdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtRWRpdCcpO1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gZWRpdCBpdGVtIGluIGNhcnRcclxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kUHJvbW9Db2RlRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRjb3Vwb25Db250YWluZXIgPSAkKCcuY291cG9uLWNvZGUnKTtcclxuICAgICAgICBjb25zdCAkY291cG9uRm9ybSA9ICQoJy5jb3Vwb24tZm9ybScpO1xyXG4gICAgICAgIGNvbnN0ICRjb2RlSW5wdXQgPSAkKCdbbmFtZT1cImNvdXBvbmNvZGVcIl0nLCAkY291cG9uRm9ybSk7XHJcblxyXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcclxuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkY291cG9uRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXHJcbiAgICAgICAgICAgIGlmICghY29kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICRjb2RlSW5wdXQuZGF0YSgnZXJyb3InKSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCAkY2VydENvbnRhaW5lciA9ICQoJy5naWZ0LWNlcnRpZmljYXRlLWNvZGUnKTtcclxuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcclxuICAgICAgICBjb25zdCAkY2VydElucHV0ID0gJCgnW25hbWU9XCJjZXJ0Y29kZVwiXScsICRjZXJ0Rm9ybSk7XHJcblxyXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGUoKTtcclxuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS50b2dnbGUoKTtcclxuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRjZXJ0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdpZnRDZXJ0Q2hlY2soY29kZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY2VydElucHV0LmRhdGEoJ2Vycm9yJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUdpZnRDZXJ0aWZpY2F0ZShjb2RlLCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcC5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtR2lmdHdyYXAnKTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyhpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XHJcbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICRzZWxlY3QuZGF0YSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsb3dNZXNzYWdlID0gJHNlbGVjdC5maW5kKGBvcHRpb25bdmFsdWU9JHtpZH1dYCkuZGF0YSgnYWxsb3dNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9LSR7aWR9YCkuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0JykudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQoJ2lucHV0OnJhZGlvW25hbWUgPVwiZ2lmdHdyYXB0eXBlXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgICAgICAgICAgY29uc3QgJHNpbmdsZUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLXNpbmdsZScpO1xyXG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcclxuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcclxuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ1tuYW1lPVwiZ2lmdHdyYXB0eXBlXCJdJykub24oJ2NsaWNrJywgdG9nZ2xlVmlld3MpO1xyXG5cclxuICAgICAgICB0b2dnbGVWaWV3cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kQ2FydEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpO1xyXG5cclxuICAgICAgICB0aGlzLiRmb3JtLm9uKCdjbGljaycsICdbZGF0YS1zYXZlLWNhcnRdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NGb3JtKGV2ZW50LCB0aGlzLiRmb3JtWzBdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kbmV3TGlzdC5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkFkZExpc3QoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRkb2N1bWVudC5vbignY2xpY2snLCAnLmFkZC1uZXctbGlzdC1mb3JtIC5idXR0b24nLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3TGlzdChldmVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGluaXRpYXRlIHNoaXBwaW5nIGVzdGltYXRvciBtb2R1bGVcclxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuLi9jb21tb24vc3RhdGUtY291bnRyeSc7XHJcbmltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuLi9jb21tb24vZm9ybS11dGlscyc7XHJcbmltcG9ydCBzd2FsIGZyb20gJy4uL2dsb2JhbC9zd2VldC1hbGVydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0VzdGltYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcclxuXHJcbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nLCB0aGlzLiRlbGVtZW50KTtcclxuICAgICAgICB0aGlzLmluaXRGb3JtVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpO1xyXG4gICAgICAgIHRoaXMuYmluZEVzdGltYXRvckV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRGb3JtVmFsaWRhdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcclxuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSAuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0YCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdCcsIHRoaXMuJGVsZW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgLy8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBjb3VudHJpZXMsIHRoZSBzdGF0ZS9yZWdpb24gaXMgZHluYW1pY1xyXG4gICAgICAgICAgICAvLyBPbmx5IHBlcmZvcm0gYSBjaGVjayBmb3IgYWxsIGZpZWxkcyB3aGVuIGNvdW50cnkgaGFzIGEgdmFsdWVcclxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFyZUFsbCgndmFsaWQnKSB3aWxsIGNoZWNrIGNvdW50cnkgZm9yIHZhbGlkaXR5XHJcbiAgICAgICAgICAgIGlmICgkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWApLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYmluZFVQU1JhdGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlJZCA9IE51bWJlcih2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50cnlJZCAhPT0gMCAmJiAhTnVtYmVyLmlzTmFOKGNvdW50cnlJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ0NvdW50cnlcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWxlID0gJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVWYWwgPSAkZWxlLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcclxuICAgICAqL1xyXG4gICAgYmluZFVQU1JhdGVzKCkge1xyXG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xyXG5cclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgVVBTUmF0ZVRvZ2dsZSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcclxuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1EZWZhdWx0ID0gJCgnLmVzdGltYXRvci1mb3JtLS1kZWZhdWx0Jyk7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1VcHMudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcclxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpIHtcclxuICAgICAgICBsZXQgJGxhc3Q7XHJcblxyXG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcclxuICAgICAgICBzdGF0ZUNvdW50cnkodGhpcy4kc3RhdGUsIHRoaXMuY29udGV4dCwgeyB1c2VJZEZvclN0YXRlczogdHJ1ZSB9LCAoZXJyLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmdldFN0YXR1cyh0aGlzLiRzdGF0ZSkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSh0aGlzLiRzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGZpZWxkLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ1N0YXRlL3Byb3ZpbmNlJyk7XHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBXaGVuIHlvdSBjaGFuZ2UgYSBjb3VudHJ5LCB5b3Ugc3dhcCB0aGUgc3RhdGUvcHJvdmluY2UgYmV0d2VlbiBhbiBpbnB1dCBhbmQgYSBzZWxlY3QgZHJvcGRvd25cclxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXHJcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVtb3ZlIHRoaXMgY2xhc3Mgd2hlbiB3ZSBzd2FwIHNpbmNlIG5vZCB2YWxpZGF0aW9uIGRvZXNuJ3QgY2xlYW51cCBmb3IgdXNcclxuICAgICAgICAgICAgJCh0aGlzLnNoaXBwaW5nRXN0aW1hdG9yKS5maW5kKCcuZm9ybS1maWVsZC0tc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1zdWNjZXNzJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCAkZXN0aW1hdG9yQ29udGFpbmVyID0gJCgnLnNoaXBwaW5nLWVzdGltYXRvcicpO1xyXG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XHJcblxyXG4gICAgICAgICRlc3RpbWF0b3JGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIHN0YXRlX2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgY2l0eTogJCgnW25hbWU9XCJzaGlwcGluZy1jaXR5XCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldFNoaXBwaW5nUXVvdGVzKHBhcmFtcywgJ2NhcnQvc2hpcHBpbmctcXVvdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGJpbmQgdGhlIHNlbGVjdCBidXR0b25cclxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZUlkID0gJCgnLnNoaXBwaW5nLXF1b3RlOmNoZWNrZWQnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5zdWJtaXRTaGlwcGluZ1F1b3RlKHF1b3RlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkZXN0aW1hdG9yQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkZXN0aW1hdG9yQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zaG93Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLmhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VydCkge1xyXG4gICAgaWYgKHR5cGVvZiBjZXJ0ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==