(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./assets/js/theme/f/multiadd.js":
/*!***************************************!*\
  !*** ./assets/js/theme/f/multiadd.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_4__);



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var Page = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Page, _PageManager);

  function Page() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Page.prototype;

  _proto.onReady = function onReady() {
    // Classes
    this.classRow = '.multi-add__row';
    this.classResultMessage = '.multi-add__result';
    this.classAddButton = '.multi-add__add-button';
    this.classRemoveButton = '.multi-add__remove-button'; // Class names

    this.classNameRowError = 'multi-add__row--error'; // Functional assignments

    this.$form = $('.multi-add');
    this.$file = $('.csv-file');
    this.snippet = $(this.classRow)[0].outerHTML;
    this.lines = 1;
    this.searchTerms = [];
    this.resetState();
    this.bindEvents();
  };

  _proto.resetState = function resetState() {
    this.items = [];
    this.errors = [];
    this.currentLoop = 0;
  } // Loop errors, add class and change text
  ;

  _proto.handleErrors = function handleErrors() {
    var _this2 = this;

    $(this.errors).each(function (i, element) {
      element.addClass(_this2.classNameRowError); // To add lang string

      element.children(_this2.classResultMessage).text('Please complete the SKU and Quantity fields');
    });
  } // Run AJAX calls one by one
  ;

  _proto.handleAjax = function handleAjax() {
    var _this3 = this;

    if (this.currentLoop < this.items.length) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(this.items[this.currentLoop].url, {
        template: 'f/b2b/quick-add-response'
      }, function (err, response) {
        var scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        var cleanResponse = response.replace(scriptRegex, '').trim();

        if (err) {
          throw new Error(err);
        }

        if (cleanResponse.length) {
          _this3.items[_this3.currentLoop].target.children(_this3.classResultMessage).text(cleanResponse);

          $(_this3.items[_this3.currentLoop].target).addClass('multi-add__row--advisory');
        } else {
          _this3.items[_this3.currentLoop].target.children(_this3.classResultMessage).text($('.multi-add__submit-button').data('message'));

          $(_this3.items[_this3.currentLoop].target).attr('data-status', 'success').addClass('multi-add__row--success');
        } // Increment 'current' and run AJAX call again


        _this3.currentLoop++;

        _this3.handleErrors();

        _this3.handleAjax();
      });
    } // Last attempt, redirect only


    if (this.currentLoop === this.items.length) {
      // document.location.href = '/cart.php';
      this.fetchCounter();
      $('.multi_add__cart-button').css('display', 'inline-block');
    }
  };

  _proto.fetchCounter = function fetchCounter() {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent({
      template: 'f/cart/item-count'
    }, function (err, response) {
      if (response > 0) {
        $('body').trigger('cart-quantity-update', response);
      }
    });
  };

  _proto.handleButtonDisplay = function handleButtonDisplay() {
    var rows = this.$form.children(this.classRow);
    var removeButtons = rows.find(this.classRemoveButton);
    var addButtons = rows.find(this.classAddButton);
    var lastAddButton = $(rows[this.lines - 1]).find(this.classAddButton);

    if (this.lines > 1) {
      removeButtons.removeClass('multi-add__remove-button--last').removeAttr('disabled');
      addButtons.removeClass('multi-add__add-button--disabled').removeAttr('disabled', 'disabled');
      addButtons.not(lastAddButton).addClass('multi-add__add-button--disabled').attr('disabled', 'disabled');
    } else {
      removeButtons.addClass('multi-add__remove-button--last').attr('disabled', 'disabled');
      addButtons.removeClass('multi-add__add-button--disabled').removeAttr('disabled');
    }
  };

  _proto.handleAddLine = function handleAddLine(sku, qty) {
    var newLine = $(this.snippet).clone();

    if (sku && qty) {
      $(newLine[0].children[0]).val(sku);
      $(newLine[0].children[1]).val(qty);
    }

    $('.multi-add__submit-button').before(newLine);
    this.lines++;
    this.handleButtonDisplay();
  };

  _proto.handleRemoveLine = function handleRemoveLine(line) {
    if (line.is(':only-of-type')) {
      return;
    }

    line.remove();
    this.lines--;
    this.handleButtonDisplay();
  };

  _proto.handleItemSelect = function handleItemSelect(event, override) {
    var self = event ? $(event.target) : override;
    var relativeRow = self.parents('.multi-add__row');
    var rowIndex = relativeRow.index() - 1;
    var selectedSku = $.trim(self.text());
    var relativeInput = relativeRow.find('[data-multi-sku]');
    relativeInput[0].value = selectedSku;
    this.searchTerms[rowIndex] = selectedSku;
  };

  _proto.processForm = function processForm(event, form) {
    var _this4 = this;

    event.preventDefault();
    var allRows = $(form).children(this.classRow);
    var allMessages = allRows.find(this.classResultMessage);
    this.resetState(); // For each row, add the URL and target to the items array

    allRows.each(function (index, row) {
      var target = $(row);
      var sku = target.find('[data-multi-sku]').val();
      var qty = target.find('[data-multi-qty]').val();

      if (!sku || !qty) {
        _this4.errors.push(target);

        return;
      }

      var url = "/cart.php?action=add&sku=" + sku + "&qty=" + qty;

      _this4.items.push({
        url: url,
        target: target
      });
    }); // To add lang string

    allMessages.text('Adding to basket');
    this.handleAjax();
  };

  _proto.parseCSV = function parseCSV(event, _this) {
    $('.alertBox-message span').text('');
    $('.alertBox').hide();
    var file = event.target.files[0];
    var noSku;
    var noQty;
    Object(papaparse__WEBPACK_IMPORTED_MODULE_4__["parse"])(file, {
      preview: 1,
      complete: function complete(results) {
        if (results.data[0].indexOf('sku') === -1) {
          noSku = true;
        }

        if (results.data[0].indexOf('qty') === -1) {
          noQty = true;
        }

        if (noQty || noSku) {
          if (noSku) {
            $('.alertBox-message span').append(' Please ensure you have a heading labeled "sku" in row 1.');
          }

          if (noQty) {
            $('.alertBox-message span').append(' Please ensure you have a heading labeled "qty" in row 1.');
          }

          $('.alertBox').show();
        } else {
          Object(papaparse__WEBPACK_IMPORTED_MODULE_4__["parse"])(file, {
            header: true,
            dynamicTyping: false,
            skipEmptyLines: true,
            step: function step(row) {
              var sku = row.data[0].sku;
              var qty = row.data[0].qty;

              _this.handleAddLine(sku, qty);
            }
          });
        }
      }
    });
  } // Bind event handlers
  ;

  _proto.bindEvents = function bindEvents() {
    var _this5 = this;

    this.$form.on('click', this.classAddButton, function () {
      _this5.handleAddLine();
    });
    this.$form.on('click', this.classRemoveButton, function (event) {
      _this5.handleRemoveLine($(event.target).parent());
    });
    this.$form.on('change', '[data-multi-sku]', function (event) {
      var self = $(event.target);

      if (self.val()) {
        self.siblings(_this5.classResultMessage).text('');
        self.parent().removeClass(_this5.classNameRowError);
      }
    });
    this.$form.on('submit', function (event) {
      _this5.processForm(event, _this5.$form[0]);
    });
    this.$file.on('change', function (event) {
      _this5.parseCSV(event, _this5);
    });
  };

  return Page;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZi9tdWx0aWFkZC5qcyJdLCJuYW1lcyI6WyJQYWdlIiwib25SZWFkeSIsImNsYXNzUm93IiwiY2xhc3NSZXN1bHRNZXNzYWdlIiwiY2xhc3NBZGRCdXR0b24iLCJjbGFzc1JlbW92ZUJ1dHRvbiIsImNsYXNzTmFtZVJvd0Vycm9yIiwiJGZvcm0iLCIkIiwiJGZpbGUiLCJzbmlwcGV0Iiwib3V0ZXJIVE1MIiwibGluZXMiLCJzZWFyY2hUZXJtcyIsInJlc2V0U3RhdGUiLCJiaW5kRXZlbnRzIiwiaXRlbXMiLCJlcnJvcnMiLCJjdXJyZW50TG9vcCIsImhhbmRsZUVycm9ycyIsImVhY2giLCJpIiwiZWxlbWVudCIsImFkZENsYXNzIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiaGFuZGxlQWpheCIsImxlbmd0aCIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsInVybCIsInRlbXBsYXRlIiwiZXJyIiwicmVzcG9uc2UiLCJzY3JpcHRSZWdleCIsImNsZWFuUmVzcG9uc2UiLCJyZXBsYWNlIiwidHJpbSIsIkVycm9yIiwidGFyZ2V0IiwiZGF0YSIsImF0dHIiLCJmZXRjaENvdW50ZXIiLCJjc3MiLCJjYXJ0IiwiZ2V0Q29udGVudCIsInRyaWdnZXIiLCJoYW5kbGVCdXR0b25EaXNwbGF5Iiwicm93cyIsInJlbW92ZUJ1dHRvbnMiLCJmaW5kIiwiYWRkQnV0dG9ucyIsImxhc3RBZGRCdXR0b24iLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJub3QiLCJoYW5kbGVBZGRMaW5lIiwic2t1IiwicXR5IiwibmV3TGluZSIsImNsb25lIiwidmFsIiwiYmVmb3JlIiwiaGFuZGxlUmVtb3ZlTGluZSIsImxpbmUiLCJpcyIsInJlbW92ZSIsImhhbmRsZUl0ZW1TZWxlY3QiLCJldmVudCIsIm92ZXJyaWRlIiwic2VsZiIsInJlbGF0aXZlUm93IiwicGFyZW50cyIsInJvd0luZGV4IiwiaW5kZXgiLCJzZWxlY3RlZFNrdSIsInJlbGF0aXZlSW5wdXQiLCJ2YWx1ZSIsInByb2Nlc3NGb3JtIiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiYWxsUm93cyIsImFsbE1lc3NhZ2VzIiwicm93IiwicHVzaCIsInBhcnNlQ1NWIiwiX3RoaXMiLCJoaWRlIiwiZmlsZSIsImZpbGVzIiwibm9Ta3UiLCJub1F0eSIsInBhcnNlIiwicHJldmlldyIsImNvbXBsZXRlIiwicmVzdWx0cyIsImluZGV4T2YiLCJhcHBlbmQiLCJzaG93IiwiaGVhZGVyIiwiZHluYW1pY1R5cGluZyIsInNraXBFbXB0eUxpbmVzIiwic3RlcCIsIm9uIiwicGFyZW50Iiwic2libGluZ3MiLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7Ozs7OztTQUNqQkMsTyxHQUFBLG1CQUFVO0FBQ047QUFDQSxTQUFLQyxRQUFMLEdBQWdCLGlCQUFoQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLG9CQUExQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0Isd0JBQXRCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsMkJBQXpCLENBTE0sQ0FPTjs7QUFDQSxTQUFLQyxpQkFBTCxHQUF5Qix1QkFBekIsQ0FSTSxDQVVOOztBQUNBLFNBQUtDLEtBQUwsR0FBYUMsQ0FBQyxDQUFDLFlBQUQsQ0FBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUQsQ0FBQyxDQUFDLFdBQUQsQ0FBZDtBQUNBLFNBQUtFLE9BQUwsR0FBZUYsQ0FBQyxDQUFDLEtBQUtOLFFBQU4sQ0FBRCxDQUFpQixDQUFqQixFQUFvQlMsU0FBbkM7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFFQSxTQUFLQyxVQUFMO0FBQ0EsU0FBS0MsVUFBTDtBQUNILEc7O1NBRURELFUsR0FBQSxzQkFBYTtBQUNULFNBQUtFLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxT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S0MsS0FBTCxDQUFXaUcsRUFBWCxDQUFjLFFBQWQsRUFBd0IsVUFBQW5DLEtBQUssRUFBSTtBQUM3QixZQUFJLENBQUNVLFdBQUwsQ0FBaUJWLEtBQWpCLEVBQXdCLE1BQUksQ0FBQzlELEtBQUwsQ0FBVyxDQUFYLENBQXhCO0FBQ0gsS0FGRDtBQUlBLFNBQUtFLEtBQUwsQ0FBVytGLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLFVBQUFuQyxLQUFLLEVBQUk7QUFDN0IsWUFBSSxDQUFDaUIsUUFBTCxDQUFjakIsS0FBZCxFQUFxQixNQUFyQjtBQUNILEtBRkQ7QUFHSCxHOzs7RUExTzZCc0MscUQiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAncGFwYXBhcnNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIC8vIENsYXNzZXNcclxuICAgICAgICB0aGlzLmNsYXNzUm93ID0gJy5tdWx0aS1hZGRfX3Jvdyc7XHJcbiAgICAgICAgdGhpcy5jbGFzc1Jlc3VsdE1lc3NhZ2UgPSAnLm11bHRpLWFkZF9fcmVzdWx0JztcclxuICAgICAgICB0aGlzLmNsYXNzQWRkQnV0dG9uID0gJy5tdWx0aS1hZGRfX2FkZC1idXR0b24nO1xyXG4gICAgICAgIHRoaXMuY2xhc3NSZW1vdmVCdXR0b24gPSAnLm11bHRpLWFkZF9fcmVtb3ZlLWJ1dHRvbic7XHJcblxyXG4gICAgICAgIC8vIENsYXNzIG5hbWVzXHJcbiAgICAgICAgdGhpcy5jbGFzc05hbWVSb3dFcnJvciA9ICdtdWx0aS1hZGRfX3Jvdy0tZXJyb3InO1xyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbmFsIGFzc2lnbm1lbnRzXHJcbiAgICAgICAgdGhpcy4kZm9ybSA9ICQoJy5tdWx0aS1hZGQnKTtcclxuICAgICAgICB0aGlzLiRmaWxlID0gJCgnLmNzdi1maWxlJyk7XHJcbiAgICAgICAgdGhpcy5zbmlwcGV0ID0gJCh0aGlzLmNsYXNzUm93KVswXS5vdXRlckhUTUw7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IDE7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExvb3AgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvb3AgZXJyb3JzLCBhZGQgY2xhc3MgYW5kIGNoYW5nZSB0ZXh0XHJcbiAgICBoYW5kbGVFcnJvcnMoKSB7XHJcbiAgICAgICAgJCh0aGlzLmVycm9ycykuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKHRoaXMuY2xhc3NOYW1lUm93RXJyb3IpO1xyXG4gICAgICAgICAgICAvLyBUbyBhZGQgbGFuZyBzdHJpbmdcclxuICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbih0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSkudGV4dCgnUGxlYXNlIGNvbXBsZXRlIHRoZSBTS1UgYW5kIFF1YW50aXR5IGZpZWxkcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJ1biBBSkFYIGNhbGxzIG9uZSBieSBvbmVcclxuICAgIGhhbmRsZUFqYXgoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvb3AgPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh0aGlzLml0ZW1zW3RoaXMuY3VycmVudExvb3BdLnVybCwge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdmL2IyYi9xdWljay1hZGQtcmVzcG9uc2UnLFxyXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyaXB0UmVnZXggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuUmVzcG9uc2UgPSByZXNwb25zZS5yZXBsYWNlKHNjcmlwdFJlZ2V4LCAnJykudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYW5SZXNwb25zZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW3RoaXMuY3VycmVudExvb3BdLnRhcmdldC5jaGlsZHJlbih0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSkudGV4dChjbGVhblJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0udGFyZ2V0KS5hZGRDbGFzcygnbXVsdGktYWRkX19yb3ctLWFkdmlzb3J5Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0udGFyZ2V0LmNoaWxkcmVuKHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlKS50ZXh0KCQoJy5tdWx0aS1hZGRfX3N1Ym1pdC1idXR0b24nKS5kYXRhKCdtZXNzYWdlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRMb29wXS50YXJnZXQpLmF0dHIoJ2RhdGEtc3RhdHVzJywgJ3N1Y2Nlc3MnKS5hZGRDbGFzcygnbXVsdGktYWRkX19yb3ctLXN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgJ2N1cnJlbnQnIGFuZCBydW4gQUpBWCBjYWxsIGFnYWluXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMb29wKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBamF4KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTGFzdCBhdHRlbXB0LCByZWRpcmVjdCBvbmx5XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvb3AgPT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnL2NhcnQucGhwJztcclxuICAgICAgICAgICAgdGhpcy5mZXRjaENvdW50ZXIoKTtcclxuICAgICAgICAgICAgJCgnLm11bHRpX2FkZF9fY2FydC1idXR0b24nKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQ291bnRlcigpIHtcclxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KHsgdGVtcGxhdGU6ICdmL2NhcnQvaXRlbS1jb3VudCcgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQnV0dG9uRGlzcGxheSgpIHtcclxuICAgICAgICBjb25zdCByb3dzID0gdGhpcy4kZm9ybS5jaGlsZHJlbih0aGlzLmNsYXNzUm93KTtcclxuICAgICAgICBjb25zdCByZW1vdmVCdXR0b25zID0gcm93cy5maW5kKHRoaXMuY2xhc3NSZW1vdmVCdXR0b24pO1xyXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbnMgPSByb3dzLmZpbmQodGhpcy5jbGFzc0FkZEJ1dHRvbik7XHJcbiAgICAgICAgY29uc3QgbGFzdEFkZEJ1dHRvbiA9ICQocm93c1t0aGlzLmxpbmVzIC0gMV0pLmZpbmQodGhpcy5jbGFzc0FkZEJ1dHRvbik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVzID4gMSkge1xyXG4gICAgICAgICAgICByZW1vdmVCdXR0b25zLnJlbW92ZUNsYXNzKCdtdWx0aS1hZGRfX3JlbW92ZS1idXR0b24tLWxhc3QnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICBhZGRCdXR0b25zLnJlbW92ZUNsYXNzKCdtdWx0aS1hZGRfX2FkZC1idXR0b24tLWRpc2FibGVkJykucmVtb3ZlQXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgYWRkQnV0dG9ucy5ub3QobGFzdEFkZEJ1dHRvbikuYWRkQ2xhc3MoJ211bHRpLWFkZF9fYWRkLWJ1dHRvbi0tZGlzYWJsZWQnKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbnMuYWRkQ2xhc3MoJ211bHRpLWFkZF9fcmVtb3ZlLWJ1dHRvbi0tbGFzdCcpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbnMucmVtb3ZlQ2xhc3MoJ211bHRpLWFkZF9fYWRkLWJ1dHRvbi0tZGlzYWJsZWQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBZGRMaW5lKHNrdSwgcXR5KSB7XHJcbiAgICAgICAgY29uc3QgbmV3TGluZSA9ICQodGhpcy5zbmlwcGV0KS5jbG9uZSgpO1xyXG5cclxuICAgICAgICBpZiAoc2t1ICYmIHF0eSkge1xyXG4gICAgICAgICAgICAkKG5ld0xpbmVbMF0uY2hpbGRyZW5bMF0pLnZhbChza3UpO1xyXG4gICAgICAgICAgICAkKG5ld0xpbmVbMF0uY2hpbGRyZW5bMV0pLnZhbChxdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLm11bHRpLWFkZF9fc3VibWl0LWJ1dHRvbicpLmJlZm9yZShuZXdMaW5lKTtcclxuICAgICAgICB0aGlzLmxpbmVzKys7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQnV0dG9uRGlzcGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlbW92ZUxpbmUobGluZSkge1xyXG4gICAgICAgIGlmIChsaW5lLmlzKCc6b25seS1vZi10eXBlJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGluZS5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmxpbmVzLS07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQnV0dG9uRGlzcGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1TZWxlY3QoZXZlbnQsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IChldmVudCkgPyAkKGV2ZW50LnRhcmdldCkgOiBvdmVycmlkZTtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVJvdyA9IHNlbGYucGFyZW50cygnLm11bHRpLWFkZF9fcm93Jyk7XHJcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSByZWxhdGl2ZVJvdy5pbmRleCgpIC0gMTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRTa3UgPSAkLnRyaW0oc2VsZi50ZXh0KCkpO1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlSW5wdXQgPSByZWxhdGl2ZVJvdy5maW5kKCdbZGF0YS1tdWx0aS1za3VdJyk7XHJcblxyXG4gICAgICAgIHJlbGF0aXZlSW5wdXRbMF0udmFsdWUgPSBzZWxlY3RlZFNrdTtcclxuICAgICAgICB0aGlzLnNlYXJjaFRlcm1zW3Jvd0luZGV4XSA9IHNlbGVjdGVkU2t1O1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NGb3JtKGV2ZW50LCBmb3JtKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxsUm93cyA9ICQoZm9ybSkuY2hpbGRyZW4odGhpcy5jbGFzc1Jvdyk7XHJcbiAgICAgICAgY29uc3QgYWxsTWVzc2FnZXMgPSBhbGxSb3dzLmZpbmQodGhpcy5jbGFzc1Jlc3VsdE1lc3NhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gRm9yIGVhY2ggcm93LCBhZGQgdGhlIFVSTCBhbmQgdGFyZ2V0IHRvIHRoZSBpdGVtcyBhcnJheVxyXG4gICAgICAgIGFsbFJvd3MuZWFjaCgoaW5kZXgsIHJvdykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHJvdyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNrdSA9IHRhcmdldC5maW5kKCdbZGF0YS1tdWx0aS1za3VdJykudmFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHF0eSA9IHRhcmdldC5maW5kKCdbZGF0YS1tdWx0aS1xdHldJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNrdSB8fCAhcXR5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAvY2FydC5waHA/YWN0aW9uPWFkZCZza3U9JHtza3V9JnF0eT0ke3F0eX1gO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRvIGFkZCBsYW5nIHN0cmluZ1xyXG4gICAgICAgIGFsbE1lc3NhZ2VzLnRleHQoJ0FkZGluZyB0byBiYXNrZXQnKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUFqYXgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUNTVihldmVudCwgX3RoaXMpIHtcclxuICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZSBzcGFuJykudGV4dCgnJyk7XHJcbiAgICAgICAgJCgnLmFsZXJ0Qm94JykuaGlkZSgpO1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgbGV0IG5vU2t1O1xyXG4gICAgICAgIGxldCBub1F0eTtcclxuXHJcbiAgICAgICAgcGFyc2UoZmlsZSwge1xyXG4gICAgICAgICAgICBwcmV2aWV3OiAxLFxyXG4gICAgICAgICAgICBjb21wbGV0ZShyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5kYXRhWzBdLmluZGV4T2YoJ3NrdScpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vU2t1ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5kYXRhWzBdLmluZGV4T2YoJ3F0eScpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vUXR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm9RdHkgfHwgbm9Ta3UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9Ta3UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2Ugc3BhbicpLmFwcGVuZCgnIFBsZWFzZSBlbnN1cmUgeW91IGhhdmUgYSBoZWFkaW5nIGxhYmVsZWQgXCJza3VcIiBpbiByb3cgMS4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vUXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlIHNwYW4nKS5hcHBlbmQoJyBQbGVhc2UgZW5zdXJlIHlvdSBoYXZlIGEgaGVhZGluZyBsYWJlbGVkIFwicXR5XCIgaW4gcm93IDEuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5hbGVydEJveCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2UoZmlsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNUeXBpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcChyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNrdSA9IHJvdy5kYXRhWzBdLnNrdTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF0eSA9IHJvdy5kYXRhWzBdLnF0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUFkZExpbmUoc2t1LCBxdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJpbmQgZXZlbnQgaGFuZGxlcnNcclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4kZm9ybS5vbignY2xpY2snLCB0aGlzLmNsYXNzQWRkQnV0dG9uLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRkTGluZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRmb3JtLm9uKCdjbGljaycsIHRoaXMuY2xhc3NSZW1vdmVCdXR0b24sIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVMaW5lKCQoZXZlbnQudGFyZ2V0KS5wYXJlbnQoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGZvcm0ub24oJ2NoYW5nZScsICdbZGF0YS1tdWx0aS1za3VdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxmID0gJChldmVudC50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2libGluZ3ModGhpcy5jbGFzc1Jlc3VsdE1lc3NhZ2UpLnRleHQoJycpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wYXJlbnQoKS5yZW1vdmVDbGFzcyh0aGlzLmNsYXNzTmFtZVJvd0Vycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRmb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Zvcm0oZXZlbnQsIHRoaXMuJGZvcm1bMF0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRmaWxlLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VDU1YoZXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=