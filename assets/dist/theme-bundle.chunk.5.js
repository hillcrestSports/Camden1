(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");












var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */

function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName; // Input can be text/checkbox/radio etc...

  if (tagName === 'input') {
    var inputType = $input.prop('type');

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_9___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_8___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_7___default()(inputType);
    }
  } // Apply class modifier


  return $formField.addClass(className).addClass(specificClassName);
}
/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */


function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }

  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', ')); // Obtain options

  var _options = options,
      _options$formFieldCla = _options.formFieldClass,
      formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla; // Classify each input in a form

  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}
/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */

function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);

  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }

  return '';
}
/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */


function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}

var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_11__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },

  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength; // If optional and nothing entered, it is valid

        if (isOptional && val.length === 0) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },

  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
        fieldsetSelector = selectors.fieldsetSelector,
        formSelector = selectors.formSelector,
        maxPriceSelector = selectors.maxPriceSelector,
        minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class

    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },

  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },

  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },

  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },

  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/f/selected-option.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/f/selected-option.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = (function () {
  var $src = $('.show-selected-option input');
  var $selected = $('.show-selected-option input[checked]');
  var $selectedOptionLabel;
  var $selectedOption;

  function changeLabel() {
    $selectedOptionLabel = $(this).siblings().children('span[data-option-value]');
    $selectedOption = $(this).attr('data-option-label');
    $selectedOptionLabel.text($selectedOption);
  }

  $selected.each(changeLabel);
  $src.on('click', changeLabel);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _f_selected_option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./f/selected-option */ "./assets/js/theme/f/selected-option.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*
 Import all product specific js
 */








var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);

  function Product(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    return _this;
  }

  var _proto = Product.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator; // Init collapsible

    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }

      return false;
    });

    if (this.context.enableSelectedOptionLabel) {
      Object(_f_selected_option__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }

    var Sticky = __webpack_require__(/*! sticky-js */ "./node_modules/sticky-js/index.js");

    var sticky = new Sticky('.sticky-product'); // eslint-disable-line no-unused-vars

    this.productReviewHandler();
  };

  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };

  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");





var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }
  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */


  var _proto = _default.prototype;

  _proto.initLinkBind = function initLinkBind() {
    var _this = this;

    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
      }
    });
  };

  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    } // force collapse on page load


    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
  }
  /**
   * Inject ID into the pagination link
   */
  ;

  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);

    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }

    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };

  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };

  _proto.validate = function validate() {
    return this.validator.performCheck();
  };

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);

var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }

  var _proto = VideoGallery.prototype;

  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };

  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };

  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };

  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

    if (isInitialized) {
      return;
    }

    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tb2RlbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2Yvc2VsZWN0ZWQtb3B0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJpbnB1dFRhZ05hbWVzIiwiY2xhc3NpZnlJbnB1dCIsImlucHV0IiwiZm9ybUZpZWxkQ2xhc3MiLCIkaW5wdXQiLCIkIiwiJGZvcm1GaWVsZCIsInBhcmVudCIsInRhZ05hbWUiLCJwcm9wIiwidG9Mb3dlckNhc2UiLCJjbGFzc05hbWUiLCJzcGVjaWZpY0NsYXNzTmFtZSIsImlucHV0VHlwZSIsImFkZENsYXNzIiwiY2xhc3NpZnlGb3JtIiwiZm9ybVNlbGVjdG9yIiwib3B0aW9ucyIsIiRmb3JtIiwiJGlucHV0cyIsImZpbmQiLCJqb2luIiwiZWFjaCIsIl9fIiwiZ2V0RmllbGRJZCIsIiRmaWVsZCIsImZpZWxkSWQiLCJtYXRjaCIsImxlbmd0aCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCIkc3RhdGVGaWVsZCIsInN0YXRlRmllbGRBdHRycyIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhZnRlciIsIlZhbGlkYXRvcnMiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJ2YWxpZGF0b3IiLCJmaWVsZCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInZhbCIsInJlc3VsdCIsImZvcm1zIiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJyZXF1aXJlbWVudHMiLCJpc09wdGlvbmFsIiwiJHBhc3N3b3JkIiwicGFzc3dvcmRWYWxpZGF0aW9ucyIsIlJlZ0V4cCIsImFscGhhIiwibnVtZXJpYyIsIm1pbmxlbmd0aCIsImVycm9yIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsImNvbmZpZ3VyZSIsImZvcm0iLCJwcmV2ZW50U3VibWl0Iiwic3VjY2Vzc0NsYXNzIiwic2V0TWVzc2FnZU9wdGlvbnMiLCJlcnJvclNwYW4iLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsIiRmaWVsZENsYXNzRWxlbWVudCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwibm9kIiwiY2xhc3NlcyIsImZvckVhY2giLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwicmUiLCJ0ZXN0IiwicGFzc3dvcmQiLCJub3RFbXB0eSIsIiRzcmMiLCIkc2VsZWN0ZWQiLCIkc2VsZWN0ZWRPcHRpb25MYWJlbCIsIiRzZWxlY3RlZE9wdGlvbiIsImNoYW5nZUxhYmVsIiwic2libGluZ3MiLCJjaGlsZHJlbiIsImF0dHIiLCJ0ZXh0Iiwib24iLCJQcm9kdWN0IiwiY29udGV4dCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwib25SZWFkeSIsImRvY3VtZW50IiwiaW5kZXhPZiIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInBhdGhuYW1lIiwiY29sbGFwc2libGVGYWN0b3J5IiwicHJvZHVjdERldGFpbHMiLCJQcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInNldFByb2R1Y3RWYXJpYW50IiwidmlkZW9HYWxsZXJ5IiwiJHJldmlld0Zvcm0iLCJyZXZpZXciLCJSZXZpZXciLCJyZWdpc3RlclZhbGlkYXRpb24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJlbmFibGVTZWxlY3RlZE9wdGlvbkxhYmVsIiwic2VsZWN0ZWRPcHRpb24iLCJTdGlja3kiLCJyZXF1aXJlIiwic3RpY2t5IiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCJ0cmlnZ2VyIiwiUGFnZU1hbmFnZXIiLCJzdWJtaXQiLCIkcmV2aWV3c0NvbnRlbnQiLCIkY29sbGFwc2libGUiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsIiRjb250ZW50IiwiQ29sbGFwc2libGVFdmVudHMiLCJjbGljayIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJyZXZpZXdSYXRpbmciLCJyZXZpZXdTdWJqZWN0IiwicmV2aWV3Q29tbWVudCIsInJldmlld0VtYWlsIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJpbmRleCIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNsQixPQURrQixFQUVsQixRQUZrQixFQUdsQixVQUhrQixDQUF0QjtBQU1BOzs7Ozs7O0FBTUEsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLGNBQTlCLEVBQThDO0FBQzFDLE1BQU1DLE1BQU0sR0FBR0MsQ0FBQyxDQUFDSCxLQUFELENBQWhCO0FBQ0EsTUFBTUksVUFBVSxHQUFHRixNQUFNLENBQUNHLE1BQVAsT0FBa0JKLGNBQWxCLENBQW5CO0FBQ0EsTUFBTUssT0FBTyxHQUFHSixNQUFNLENBQUNLLElBQVAsQ0FBWSxTQUFaLEVBQXVCQyxXQUF2QixFQUFoQjtBQUVBLE1BQUlDLFNBQVMsR0FBTVIsY0FBTixVQUF5QkssT0FBdEM7QUFDQSxNQUFJSSxpQkFBSixDQU4wQyxDQVExQzs7QUFDQSxNQUFJSixPQUFPLEtBQUssT0FBaEIsRUFBeUI7QUFDckIsUUFBTUssU0FBUyxHQUFHVCxNQUFNLENBQUNLLElBQVAsQ0FBWSxNQUFaLENBQWxCOztBQUVBLFFBQUksdURBQVcsQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixRQUF0QixDQUFYLEVBQTRDSSxTQUE1QyxDQUFKLEVBQTREO0FBQ3hEO0FBQ0FGLGVBQVMsR0FBTVIsY0FBTixVQUF5Qix3REFBWVUsU0FBWixDQUFsQztBQUNILEtBSEQsTUFHTztBQUNIO0FBQ0FELHVCQUFpQixRQUFNRCxTQUFOLEdBQWtCLHlEQUFhRSxTQUFiLENBQW5DO0FBQ0g7QUFDSixHQW5CeUMsQ0FxQjFDOzs7QUFDQSxTQUFPUCxVQUFVLENBQ1pRLFFBREUsQ0FDT0gsU0FEUCxFQUVGRyxRQUZFLENBRU9GLGlCQUZQLENBQVA7QUFHSDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJPLFNBQVNHLFlBQVQsQ0FBc0JDLFlBQXRCLEVBQW9DQyxPQUFwQyxFQUFrRDtBQUFBLE1BQWRBLE9BQWM7QUFBZEEsV0FBYyxHQUFKLEVBQUk7QUFBQTs7QUFDckQsTUFBTUMsS0FBSyxHQUFHYixDQUFDLENBQUNXLFlBQUQsQ0FBZjtBQUNBLE1BQU1HLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxJQUFOLENBQVdwQixhQUFhLENBQUNxQixJQUFkLENBQW1CLElBQW5CLENBQVgsQ0FBaEIsQ0FGcUQsQ0FJckQ7O0FBSnFELGlCQUtYSixPQUxXO0FBQUEsdUNBSzdDZCxjQUw2QztBQUFBLE1BSzdDQSxjQUw2QyxzQ0FLNUIsWUFMNEIsMEJBT3JEOztBQUNBZ0IsU0FBTyxDQUFDRyxJQUFSLENBQWEsVUFBQ0MsRUFBRCxFQUFLckIsS0FBTCxFQUFlO0FBQ3hCRCxpQkFBYSxDQUFDQyxLQUFELEVBQVFDLGNBQVIsQ0FBYjtBQUNILEdBRkQ7QUFJQSxTQUFPZSxLQUFQO0FBQ0g7QUFFRDs7Ozs7O0FBS0EsU0FBU00sVUFBVCxDQUFvQkMsTUFBcEIsRUFBNEI7QUFDeEIsTUFBTUMsT0FBTyxHQUFHRCxNQUFNLENBQUNoQixJQUFQLENBQVksTUFBWixFQUFvQmtCLEtBQXBCLENBQTBCLFVBQTFCLENBQWhCOztBQUVBLE1BQUlELE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxNQUFSLEtBQW1CLENBQWxDLEVBQXFDO0FBQ2pDLFdBQU9GLE9BQU8sQ0FBQyxDQUFELENBQWQ7QUFDSDs7QUFFRCxTQUFPLEVBQVA7QUFDSDtBQUVEOzs7Ozs7QUFJQSxTQUFTRyxzQkFBVCxDQUFnQ0MsV0FBaEMsRUFBNkM7QUFDekMsTUFBTUosT0FBTyxHQUFHRixVQUFVLENBQUNNLFdBQUQsQ0FBMUI7QUFDQSxNQUFNQyxlQUFlLEdBQUc7QUFDcEJDLFFBQUksRUFBRSxRQURjO0FBRXBCQyxRQUFJLHNCQUFvQlAsT0FGSjtBQUdwQlEsU0FBSyxFQUFFO0FBSGEsR0FBeEI7QUFNQUosYUFBVyxDQUFDSyxLQUFaLENBQWtCOUIsQ0FBQyxDQUFDLFdBQUQsRUFBYzBCLGVBQWQsQ0FBbkI7QUFDSDs7QUFFRCxJQUFNSyxVQUFVLEdBQUc7QUFDZjs7Ozs7QUFLQUMsb0JBQWtCLEVBQUUsNEJBQUNDLFNBQUQsRUFBWUMsS0FBWixFQUFzQjtBQUN0QyxRQUFJQSxLQUFKLEVBQVc7QUFDUEQsZUFBUyxDQUFDRSxHQUFWLENBQWM7QUFDVkMsZ0JBQVEsRUFBRUYsS0FEQTtBQUVWRyxnQkFBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUNuQixjQUFNQyxNQUFNLEdBQUdDLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUgsR0FBWixDQUFmO0FBRUFELFlBQUUsQ0FBQ0UsTUFBRCxDQUFGO0FBQ0gsU0FOUztBQU9WRyxvQkFBWSxFQUFFO0FBUEosT0FBZDtBQVNIO0FBQ0osR0FsQmM7O0FBb0JmOzs7Ozs7OztBQVFBQyx1QkFBcUIsRUFBRSwrQkFBQ1gsU0FBRCxFQUFZWSxnQkFBWixFQUE4QkMsaUJBQTlCLEVBQWlEQyxZQUFqRCxFQUErREMsVUFBL0QsRUFBOEU7QUFDakcsUUFBTUMsU0FBUyxHQUFHakQsQ0FBQyxDQUFDNkMsZ0JBQUQsQ0FBbkI7QUFDQSxRQUFNSyxtQkFBbUIsR0FBRyxDQUN4QjtBQUNJZCxjQUFRLEVBQUVTLGdCQURkO0FBRUlSLGNBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDbkIsWUFBTUMsTUFBTSxHQUFHRCxHQUFHLENBQUNoQixNQUFuQjs7QUFFQSxZQUFJeUIsVUFBSixFQUFnQjtBQUNaLGlCQUFPVixFQUFFLENBQUMsSUFBRCxDQUFUO0FBQ0g7O0FBRURBLFVBQUUsQ0FBQ0UsTUFBRCxDQUFGO0FBQ0gsT0FWTDtBQVdJRyxrQkFBWSxFQUFFO0FBWGxCLEtBRHdCLEVBY3hCO0FBQ0lQLGNBQVEsRUFBRVMsZ0JBRGQ7QUFFSVIsY0FBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUNuQixZQUFNQyxNQUFNLEdBQUdELEdBQUcsQ0FBQ2pCLEtBQUosQ0FBVSxJQUFJNkIsTUFBSixDQUFXSixZQUFZLENBQUNLLEtBQXhCLENBQVYsS0FDUmIsR0FBRyxDQUFDakIsS0FBSixDQUFVLElBQUk2QixNQUFKLENBQVdKLFlBQVksQ0FBQ00sT0FBeEIsQ0FBVixDQURRLElBRVJkLEdBQUcsQ0FBQ2hCLE1BQUosSUFBY3dCLFlBQVksQ0FBQ08sU0FGbEMsQ0FEbUIsQ0FLbkI7O0FBQ0EsWUFBSU4sVUFBVSxJQUFJVCxHQUFHLENBQUNoQixNQUFKLEtBQWUsQ0FBakMsRUFBb0M7QUFDaEMsaUJBQU9lLEVBQUUsQ0FBQyxJQUFELENBQVQ7QUFDSDs7QUFFREEsVUFBRSxDQUFDRSxNQUFELENBQUY7QUFDSCxPQWJMO0FBY0lHLGtCQUFZLEVBQUVJLFlBQVksQ0FBQ1E7QUFkL0IsS0Fkd0IsRUE4QnhCO0FBQ0luQixjQUFRLEVBQUVVLGlCQURkO0FBRUlULGNBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDbkIsWUFBTUMsTUFBTSxHQUFHRCxHQUFHLENBQUNoQixNQUFuQjs7QUFFQSxZQUFJeUIsVUFBSixFQUFnQjtBQUNaLGlCQUFPVixFQUFFLENBQUMsSUFBRCxDQUFUO0FBQ0g7O0FBRURBLFVBQUUsQ0FBQ0UsTUFBRCxDQUFGO0FBQ0gsT0FWTDtBQVdJRyxrQkFBWSxFQUFFO0FBWGxCLEtBOUJ3QixFQTJDeEI7QUFDSVAsY0FBUSxFQUFFVSxpQkFEZDtBQUVJVCxjQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQ25CLFlBQU1DLE1BQU0sR0FBR0QsR0FBRyxLQUFLVSxTQUFTLENBQUNWLEdBQVYsRUFBdkI7QUFFQUQsVUFBRSxDQUFDRSxNQUFELENBQUY7QUFDSCxPQU5MO0FBT0lHLGtCQUFZLEVBQUU7QUFQbEIsS0EzQ3dCLENBQTVCO0FBc0RBVixhQUFTLENBQUNFLEdBQVYsQ0FBY2UsbUJBQWQ7QUFDSCxHQXJGYzs7QUF1RmY7Ozs7Ozs7Ozs7QUFVQU0sMEJBQXdCLEVBQUUsa0NBQUN2QixTQUFELEVBQVl3QixTQUFaLEVBQTBCO0FBQUEsUUFFNUNDLGFBRjRDLEdBTzVDRCxTQVA0QyxDQUU1Q0MsYUFGNEM7QUFBQSxRQUc1Q0MsZ0JBSDRDLEdBTzVDRixTQVA0QyxDQUc1Q0UsZ0JBSDRDO0FBQUEsUUFJNUNoRCxZQUo0QyxHQU81QzhDLFNBUDRDLENBSTVDOUMsWUFKNEM7QUFBQSxRQUs1Q2lELGdCQUw0QyxHQU81Q0gsU0FQNEMsQ0FLNUNHLGdCQUw0QztBQUFBLFFBTTVDQyxnQkFONEMsR0FPNUNKLFNBUDRDLENBTTVDSSxnQkFONEM7QUFTaEQ1QixhQUFTLENBQUM2QixTQUFWLENBQW9CO0FBQ2hCQyxVQUFJLEVBQUVwRCxZQURVO0FBRWhCcUQsbUJBQWEsRUFBRSxJQUZDO0FBR2hCQyxrQkFBWSxFQUFFLEdBSEUsQ0FHRzs7QUFISCxLQUFwQjtBQU1BaEMsYUFBUyxDQUFDRSxHQUFWLENBQWM7QUFDVlEsa0JBQVksRUFBRSx5Q0FESjtBQUVWUCxjQUFRLEVBQUV5QixnQkFGQTtBQUdWeEIsY0FBUSxlQUFhd0IsZ0JBQWIsU0FBaUNEO0FBSC9CLEtBQWQ7QUFNQTNCLGFBQVMsQ0FBQ0UsR0FBVixDQUFjO0FBQ1ZRLGtCQUFZLEVBQUUseUNBREo7QUFFVlAsY0FBUSxFQUFFd0IsZ0JBRkE7QUFHVnZCLGNBQVEsZUFBYXdCLGdCQUFiLFNBQWlDRDtBQUgvQixLQUFkO0FBTUEzQixhQUFTLENBQUNFLEdBQVYsQ0FBYztBQUNWUSxrQkFBWSxFQUFFLHlCQURKO0FBRVZQLGNBQVEsRUFBRXdCLGdCQUZBO0FBR1Z2QixjQUFRLEVBQUU7QUFIQSxLQUFkO0FBTUFKLGFBQVMsQ0FBQ0UsR0FBVixDQUFjO0FBQ1ZRLGtCQUFZLEVBQUUseUJBREo7QUFFVlAsY0FBUSxFQUFFeUIsZ0JBRkE7QUFHVnhCLGNBQVEsRUFBRTtBQUhBLEtBQWQ7QUFNQUosYUFBUyxDQUFDRSxHQUFWLENBQWM7QUFDVlEsa0JBQVksRUFBRSwrQkFESjtBQUVWUCxjQUFRLEVBQUUsQ0FBQ3lCLGdCQUFELEVBQW1CRCxnQkFBbkIsQ0FGQTtBQUdWdkIsY0FBUSxFQUFFO0FBSEEsS0FBZDtBQU1BSixhQUFTLENBQUNpQyxpQkFBVixDQUE0QjtBQUN4QjlCLGNBQVEsRUFBRSxDQUFDeUIsZ0JBQUQsRUFBbUJELGdCQUFuQixDQURjO0FBRXhCMUQsWUFBTSxFQUFFeUQsZ0JBRmdCO0FBR3hCUSxlQUFTLEVBQUVUO0FBSGEsS0FBNUI7QUFLSCxHQW5KYzs7QUFxSmY7Ozs7O0FBS0FVLDJCQUF5QixFQUFFLG1DQUFDbkMsU0FBRCxFQUFZQyxLQUFaLEVBQXNCO0FBQzdDLFFBQUlBLEtBQUosRUFBVztBQUNQRCxlQUFTLENBQUNFLEdBQVYsQ0FBYztBQUNWQyxnQkFBUSxFQUFFRixLQURBO0FBRVZHLGdCQUFRLEVBQUUsVUFGQTtBQUdWTSxvQkFBWSxFQUFFO0FBSEosT0FBZDtBQUtIO0FBQ0osR0FsS2M7O0FBb0tmOzs7O0FBSUEwQix3QkFBc0IsRUFBRSxnQ0FBQ25DLEtBQUQsRUFBVztBQUMvQixRQUFNb0Msa0JBQWtCLEdBQUd0RSxDQUFDLG1CQUFpQmtDLEtBQUssQ0FBQ3FDLElBQU4sQ0FBVyxXQUFYLENBQWpCLFNBQTVCO0FBRUFDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZQyw2Q0FBRyxDQUFDQyxPQUFoQixFQUF5QkMsT0FBekIsQ0FBaUMsVUFBQy9DLEtBQUQsRUFBVztBQUN4QyxVQUFJeUMsa0JBQWtCLENBQUNPLFFBQW5CLENBQTRCSCw2Q0FBRyxDQUFDQyxPQUFKLENBQVk5QyxLQUFaLENBQTVCLENBQUosRUFBcUQ7QUFDakR5QywwQkFBa0IsQ0FBQ1EsV0FBbkIsQ0FBK0JKLDZDQUFHLENBQUNDLE9BQUosQ0FBWTlDLEtBQVosQ0FBL0I7QUFDSDtBQUNKLEtBSkQ7QUFLSDtBQWhMYyxDQUFuQjs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFBQSxJQUFNWSxLQUFLLEdBQUc7QUFDVkMsT0FEVSxpQkFDSmIsS0FESSxFQUNHO0FBQ1QsUUFBTWtELEVBQUUsR0FBRyxZQUFYO0FBQ0EsV0FBT0EsRUFBRSxDQUFDQyxJQUFILENBQVFuRCxLQUFSLENBQVA7QUFDSCxHQUpTOztBQU1WOzs7OztBQUtBb0QsVUFYVSxvQkFXRHBELEtBWEMsRUFXTTtBQUNaLFdBQU8sS0FBS3FELFFBQUwsQ0FBY3JELEtBQWQsQ0FBUDtBQUNILEdBYlM7O0FBZVY7Ozs7OztBQU1BcUQsVUFyQlUsb0JBcUJEckQsS0FyQkMsRUFxQk07QUFDWixXQUFPQSxLQUFLLENBQUNOLE1BQU4sR0FBZSxDQUF0QjtBQUNIO0FBdkJTLENBQWQ7QUEwQmVrQixvRUFBZixFOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQSx5Q0FBZSwyRUFBWTtBQUN2QixNQUFNMEMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLDZCQUFELENBQWQ7QUFDQSxNQUFNb0YsU0FBUyxHQUFHcEYsQ0FBQyxDQUFDLHNDQUFELENBQW5CO0FBQ0EsTUFBSXFGLG9CQUFKO0FBQ0EsTUFBSUMsZUFBSjs7QUFFQSxXQUFTQyxXQUFULEdBQXVCO0FBQ25CRix3QkFBb0IsR0FBR3JGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdGLFFBQVIsR0FBbUJDLFFBQW5CLENBQTRCLHlCQUE1QixDQUF2QjtBQUNBSCxtQkFBZSxHQUFHdEYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMEYsSUFBUixDQUFhLG1CQUFiLENBQWxCO0FBRUFMLHdCQUFvQixDQUFDTSxJQUFyQixDQUEwQkwsZUFBMUI7QUFDSDs7QUFFREYsV0FBUyxDQUFDbkUsSUFBVixDQUFlc0UsV0FBZjtBQUNBSixNQUFJLENBQUNTLEVBQUwsQ0FBUSxPQUFSLEVBQWlCTCxXQUFqQjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJNLE87OztBQUNqQixtQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUNBLFVBQUtDLEdBQUwsR0FBV0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUEzQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUJuRyxDQUFDLENBQUMsc0NBQUQsQ0FBcEI7QUFIaUI7QUFJcEI7Ozs7U0FFRG9HLE8sR0FBQSxtQkFBVTtBQUFBOztBQUNOO0FBQ0FwRyxLQUFDLENBQUNxRyxRQUFELENBQUQsQ0FBWVQsRUFBWixDQUFlLG9CQUFmLEVBQXFDLFlBQU07QUFDdkMsVUFBSSxNQUFJLENBQUNHLEdBQUwsQ0FBU08sT0FBVCxDQUFpQixlQUFqQixNQUFzQyxDQUFDLENBQXZDLElBQTRDLE9BQU9OLE1BQU0sQ0FBQ08sT0FBUCxDQUFlQyxZQUF0QixLQUF1QyxVQUF2RixFQUFtRztBQUMvRlIsY0FBTSxDQUFDTyxPQUFQLENBQWVDLFlBQWYsQ0FBNEIsSUFBNUIsRUFBa0NILFFBQVEsQ0FBQ0ksS0FBM0MsRUFBa0RULE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlMsUUFBbEU7QUFDSDtBQUNKLEtBSkQ7QUFNQSxRQUFJekUsU0FBSixDQVJNLENBVU47O0FBQ0EwRSx1RUFBa0I7QUFFbEIsU0FBS0MsY0FBTCxHQUFzQixJQUFJQywrREFBSixDQUFtQjdHLENBQUMsQ0FBQyxjQUFELENBQXBCLEVBQXNDLEtBQUs4RixPQUEzQyxFQUFvREUsTUFBTSxDQUFDYyxNQUFQLENBQWNDLGtCQUFsRSxDQUF0QjtBQUNBLFNBQUtILGNBQUwsQ0FBb0JJLGlCQUFwQjtBQUVBQywwRUFBWTtBQUVaLFFBQU1DLFdBQVcsR0FBR3hHLHVFQUFZLENBQUMsbUJBQUQsQ0FBaEM7QUFDQSxRQUFNeUcsTUFBTSxHQUFHLElBQUlDLHdEQUFKLENBQVdGLFdBQVgsQ0FBZjtBQUVBbEgsS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVNEYsRUFBVixDQUFhLE9BQWIsRUFBc0Isc0NBQXRCLEVBQThELFlBQU07QUFDaEUzRCxlQUFTLEdBQUdrRixNQUFNLENBQUNFLGtCQUFQLENBQTBCLE1BQUksQ0FBQ3ZCLE9BQS9CLENBQVo7QUFDSCxLQUZEO0FBSUFvQixlQUFXLENBQUN0QixFQUFaLENBQWUsUUFBZixFQUF5QixZQUFNO0FBQzNCLFVBQUkzRCxTQUFKLEVBQWU7QUFDWEEsaUJBQVMsQ0FBQ3FGLFlBQVY7QUFDQSxlQUFPckYsU0FBUyxDQUFDc0YsTUFBVixDQUFpQixPQUFqQixDQUFQO0FBQ0g7O0FBRUQsYUFBTyxLQUFQO0FBQ0gsS0FQRDs7QUFTQSxRQUFJLEtBQUt6QixPQUFMLENBQWEwQix5QkFBakIsRUFBNEM7QUFDeENDLHdFQUFjO0FBQ2pCOztBQUVELFFBQU1DLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUF0Qjs7QUFDQSxRQUFNQyxNQUFNLEdBQUcsSUFBSUYsTUFBSixDQUFXLGlCQUFYLENBQWYsQ0F2Q00sQ0F1Q3dDOztBQUU5QyxTQUFLRyxvQkFBTDtBQUNILEc7O1NBRURBLG9CLEdBQUEsZ0NBQXVCO0FBQ25CLFFBQUksS0FBSzlCLEdBQUwsQ0FBU08sT0FBVCxDQUFpQixlQUFqQixNQUFzQyxDQUFDLENBQTNDLEVBQThDO0FBQzFDLFdBQUtILFdBQUwsQ0FBaUIyQixPQUFqQixDQUF5QixPQUF6QjtBQUNIO0FBQ0osRzs7O0VBdkRnQ0MscUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHJDO0FBQ0E7QUFDQTs7O0FBR0ksb0JBQVliLFdBQVosRUFBeUI7QUFDckIsU0FBS2pGLFNBQUwsR0FBaUJ5QywyREFBRyxDQUFDO0FBQ2pCc0QsWUFBTSxFQUFFZCxXQUFXLENBQUNuRyxJQUFaLENBQWlCLHNCQUFqQjtBQURTLEtBQUQsQ0FBcEI7QUFJQSxTQUFLa0gsZUFBTCxHQUF1QmpJLENBQUMsQ0FBQyxrQkFBRCxDQUF4QjtBQUNBLFNBQUtrSSxZQUFMLEdBQW9CbEksQ0FBQyxDQUFDLG9CQUFELEVBQXVCLEtBQUtpSSxlQUE1QixDQUFyQjtBQUVBLFNBQUtFLFlBQUw7QUFDQSxTQUFLQyxvQkFBTDtBQUNBLFNBQUtDLGVBQUw7QUFDSDtBQUVEOzs7Ozs7OztTQUlBRixZLEdBQUEsd0JBQWU7QUFBQTs7QUFDWCxRQUFNRyxRQUFRLEdBQUd0SSxDQUFDLENBQUMseUJBQUQsRUFBNEIsS0FBS2lJLGVBQWpDLENBQWxCO0FBRUFqSSxLQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjRGLEVBQTdCLENBQWdDLE9BQWhDLEVBQXlDLFlBQU07QUFDM0MsVUFBSSxDQUFDMEMsUUFBUSxDQUFDekQsUUFBVCxDQUFrQixTQUFsQixDQUFMLEVBQW1DO0FBQy9CLGFBQUksQ0FBQ3FELFlBQUwsQ0FBa0JKLE9BQWxCLENBQTBCUyxxRUFBaUIsQ0FBQ0MsS0FBNUM7QUFDSDtBQUNKLEtBSkQ7QUFLSCxHOztTQUVESCxlLEdBQUEsMkJBQWtCO0FBQ2Q7QUFDQSxRQUFJckMsTUFBTSxDQUFDQyxRQUFQLENBQWdCd0MsSUFBaEIsSUFBd0J6QyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0J3QyxJQUFoQixDQUFxQm5DLE9BQXJCLENBQTZCLGtCQUE3QixNQUFxRCxDQUFqRixFQUFvRjtBQUNoRjtBQUNILEtBSmEsQ0FNZDs7O0FBQ0EsU0FBSzRCLFlBQUwsQ0FBa0JKLE9BQWxCLENBQTBCUyxxRUFBaUIsQ0FBQ0MsS0FBNUM7QUFDSDtBQUVEOzs7OztTQUdBSixvQixHQUFBLGdDQUF1QjtBQUNuQixRQUFNTSxTQUFTLEdBQUcxSSxDQUFDLENBQUMseUNBQUQsRUFBNEMsS0FBS2lJLGVBQWpELENBQW5CO0FBQ0EsUUFBTVUsU0FBUyxHQUFHM0ksQ0FBQyxDQUFDLDZDQUFELEVBQWdELEtBQUtpSSxlQUFyRCxDQUFuQjs7QUFFQSxRQUFJUyxTQUFTLENBQUNuSCxNQUFkLEVBQXNCO0FBQ2xCbUgsZUFBUyxDQUFDaEQsSUFBVixDQUFlLE1BQWYsRUFBMEJnRCxTQUFTLENBQUNoRCxJQUFWLENBQWUsTUFBZixDQUExQjtBQUNIOztBQUVELFFBQUlpRCxTQUFTLENBQUNwSCxNQUFkLEVBQXNCO0FBQ2xCb0gsZUFBUyxDQUFDakQsSUFBVixDQUFlLE1BQWYsRUFBMEJpRCxTQUFTLENBQUNqRCxJQUFWLENBQWUsTUFBZixDQUExQjtBQUNIO0FBQ0osRzs7U0FFRDJCLGtCLEdBQUEsNEJBQW1CdkIsT0FBbkIsRUFBNEI7QUFDeEIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBSzdELFNBQUwsQ0FBZUUsR0FBZixDQUFtQixDQUFDO0FBQ2hCQyxjQUFRLEVBQUUsb0JBRE07QUFFaEJDLGNBQVEsRUFBRSxVQUZNO0FBR2hCTSxrQkFBWSxFQUFFLEtBQUttRCxPQUFMLENBQWE4QztBQUhYLEtBQUQsRUFJaEI7QUFDQ3hHLGNBQVEsRUFBRSxtQkFEWDtBQUVDQyxjQUFRLEVBQUUsVUFGWDtBQUdDTSxrQkFBWSxFQUFFLEtBQUttRCxPQUFMLENBQWErQztBQUg1QixLQUpnQixFQVFoQjtBQUNDekcsY0FBUSxFQUFFLGtCQURYO0FBRUNDLGNBQVEsRUFBRSxVQUZYO0FBR0NNLGtCQUFZLEVBQUUsS0FBS21ELE9BQUwsQ0FBYWdEO0FBSDVCLEtBUmdCLEVBWWhCO0FBQ0MxRyxjQUFRLEVBQUUsZ0JBRFg7QUFFQ0MsY0FBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUNuQixZQUFNQyxNQUFNLEdBQUdDLDREQUFLLENBQUNDLEtBQU4sQ0FBWUgsR0FBWixDQUFmO0FBQ0FELFVBQUUsQ0FBQ0UsTUFBRCxDQUFGO0FBQ0gsT0FMRjtBQU1DRyxrQkFBWSxFQUFFLEtBQUttRCxPQUFMLENBQWFpRDtBQU41QixLQVpnQixDQUFuQjtBQXFCQSxXQUFPLEtBQUs5RyxTQUFaO0FBQ0gsRzs7U0FFREksUSxHQUFBLG9CQUFXO0FBQ1AsV0FBTyxLQUFLSixTQUFMLENBQWVxRixZQUFmLEVBQVA7QUFDSCxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkUsSUFBTTBCLFlBQWI7QUFDSSx3QkFBWUMsUUFBWixFQUFzQjtBQUNsQixTQUFLQyxPQUFMLEdBQWVELFFBQVEsQ0FBQ2xJLElBQVQsQ0FBYyxxQkFBZCxDQUFmO0FBQ0EsU0FBS29JLE9BQUwsR0FBZUYsUUFBUSxDQUFDbEksSUFBVCxDQUFjLG1CQUFkLENBQWY7QUFDQSxTQUFLcUksWUFBTCxHQUFvQixFQUFwQjtBQUNBLFNBQUtDLFVBQUw7QUFDSDs7QUFOTDs7QUFBQSxTQVFJQyxjQVJKLEdBUUksd0JBQWVDLENBQWYsRUFBa0I7QUFDZEEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsUUFBTUMsT0FBTyxHQUFHekosQ0FBQyxDQUFDdUosQ0FBQyxDQUFDRyxhQUFILENBQWpCO0FBRUEsU0FBS04sWUFBTCxHQUFvQjtBQUNoQk8sUUFBRSxFQUFFRixPQUFPLENBQUNsRixJQUFSLENBQWEsU0FBYixDQURZO0FBRWhCcUYsb0JBQWMsRUFBRUg7QUFGQSxLQUFwQjtBQUtBLFNBQUtJLFlBQUw7QUFDQSxTQUFLQyxjQUFMO0FBQ0gsR0FwQkw7O0FBQUEsU0FzQklELFlBdEJKLEdBc0JJLHdCQUFlO0FBQ1gsU0FBS1gsT0FBTCxDQUFheEQsSUFBYixDQUFrQixLQUFsQiwrQkFBb0QsS0FBSzBELFlBQUwsQ0FBa0JPLEVBQXRFO0FBQ0gsR0F4Qkw7O0FBQUEsU0EwQklHLGNBMUJKLEdBMEJJLDBCQUFpQjtBQUNiLFNBQUtYLE9BQUwsQ0FBYXJFLFdBQWIsQ0FBeUIsV0FBekI7QUFDQSxTQUFLc0UsWUFBTCxDQUFrQlEsY0FBbEIsQ0FBaUNuSixRQUFqQyxDQUEwQyxXQUExQztBQUNILEdBN0JMOztBQUFBLFNBK0JJNEksVUEvQkosR0ErQkksc0JBQWE7QUFDVCxTQUFLRixPQUFMLENBQWF2RCxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLEtBQUswRCxjQUFMLENBQW9CUyxJQUFwQixDQUF5QixJQUF6QixDQUF6QjtBQUNILEdBakNMOztBQUFBO0FBQUE7QUFvQ2UsU0FBUzlDLFlBQVQsR0FBd0I7QUFDbkMsTUFBTStDLFNBQVMsR0FBRyxlQUFsQjtBQUNBLE1BQU1DLGFBQWEsR0FBR2pLLENBQUMsWUFBVWdLLFNBQVYsT0FBdkI7QUFFQUMsZUFBYSxDQUFDaEosSUFBZCxDQUFtQixVQUFDaUosS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ25DLFFBQU1DLEdBQUcsR0FBR3BLLENBQUMsQ0FBQ21LLE9BQUQsQ0FBYjtBQUNBLFFBQU1FLGFBQWEsR0FBR0QsR0FBRyxDQUFDN0YsSUFBSixDQUFTeUYsU0FBVCxhQUErQmhCLFlBQXJEOztBQUVBLFFBQUlxQixhQUFKLEVBQW1CO0FBQ2Y7QUFDSDs7QUFFREQsT0FBRyxDQUFDN0YsSUFBSixDQUFTeUYsU0FBVCxFQUFvQixJQUFJaEIsWUFBSixDQUFpQm9CLEdBQWpCLENBQXBCO0FBQ0gsR0FURDtBQVVILEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcclxuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcclxuXHJcbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXHJcbiAgICAnaW5wdXQnLFxyXG4gICAgJ3NlbGVjdCcsXHJcbiAgICAndGV4dGFyZWEnLFxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gaW5wdXRcclxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1GaWVsZENsYXNzXHJcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcclxuICovXHJcbmZ1bmN0aW9uIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKSB7XHJcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcclxuICAgIGNvbnN0ICRmb3JtRmllbGQgPSAkaW5wdXQucGFyZW50KGAuJHtmb3JtRmllbGRDbGFzc31gKTtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgbGV0IGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHt0YWdOYW1lfWA7XHJcbiAgICBsZXQgc3BlY2lmaWNDbGFzc05hbWU7XHJcblxyXG4gICAgLy8gSW5wdXQgY2FuIGJlIHRleHQvY2hlY2tib3gvcmFkaW8gZXRjLi4uXHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XHJcblxyXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmFkaW8nLCAnY2hlY2tib3gnLCAnc3VibWl0J10sIGlucHV0VHlwZSkpIHtcclxuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHtfLmNhbWVsQ2FzZShpbnB1dFR5cGUpfWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XHJcbiAgICAgICAgICAgIHNwZWNpZmljQ2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSR7Xy5jYXBpdGFsaXplKGlucHV0VHlwZSl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwbHkgY2xhc3MgbW9kaWZpZXJcclxuICAgIHJldHVybiAkZm9ybUZpZWxkXHJcbiAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZSlcclxuICAgICAgICAuYWRkQ2xhc3Moc3BlY2lmaWNDbGFzc05hbWUpO1xyXG59XHJcblxyXG4vKipcclxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEJlZm9yZVxyXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cclxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XHJcbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XHJcbiAqICAgICA8L2Rpdj5cclxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XHJcbiAqICAgICAgICAgPHNlbGVjdD4uLi48L3NlbGVjdD5cclxuICogICAgIDwvZGl2PlxyXG4gKiA8L2Zvcm0+XHJcbiAqXHJcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XHJcbiAqXHJcbiAqIC8vIEFmdGVyXHJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxyXG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1zZWxlY3RcIj4uLi48L2Rpdj5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXHJcbiAqIEByZXR1cm4ge2pRdWVyeX0gRWxlbWVudCBpdHNlbGZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZvcm0oZm9ybVNlbGVjdG9yLCBvcHRpb25zID0ge30pIHtcclxuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xyXG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcclxuXHJcbiAgICAvLyBPYnRhaW4gb3B0aW9uc1xyXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAvLyBDbGFzc2lmeSBlYWNoIGlucHV0IGluIGEgZm9ybVxyXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcclxuICAgICAgICBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gJGZvcm07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgaWQgZnJvbSBnaXZlbiBmaWVsZFxyXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcclxuICAgIGNvbnN0IGZpZWxkSWQgPSAkZmllbGQucHJvcCgnbmFtZScpLm1hdGNoKC8oXFxbLipcXF0pLyk7XHJcblxyXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmllbGRJZFswXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnNlcnQgaGlkZGVuIGZpZWxkIGFmdGVyIFN0YXRlL1Byb3ZpbmNlIGZpZWxkXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRzdGF0ZUZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XHJcbiAgICBjb25zdCBzdGF0ZUZpZWxkQXR0cnMgPSB7XHJcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXHJcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxyXG4gICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICB9O1xyXG5cclxuICAgICRzdGF0ZUZpZWxkLmFmdGVyKCQoJzxpbnB1dCAvPicsIHN0YXRlRmllbGRBdHRycykpO1xyXG59XHJcblxyXG5jb25zdCBWYWxpZGF0b3JzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKi9cclxuICAgIHNldEVtYWlsVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgdmFsaWQgZW1haWwuJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSBwYXNzd29yZDJTZWxlY3RvclxyXG4gICAgICogQHBhcmFtIHJlcXVpcmVtZW50c1xyXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcclxuICAgICAqL1xyXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCBpc09wdGlvbmFsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRpb25zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5udW1lcmljKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLmxlbmd0aCA+PSByZXF1aXJlbWVudHMubWlubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvcHRpb25hbCBhbmQgbm90aGluZyBlbnRlcmVkLCBpdCBpcyB2YWxpZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsICYmIHZhbC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVtZW50cy5lcnJvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbCA9PT0gJHBhc3N3b3JkLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHZhbGlkYXRvci5hZGQocGFzc3dvcmRWYWxpZGF0aW9ucyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXHJcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0b3JzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmVycm9yU2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5mb3JtU2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWF4UHJpY2VTZWxlY3RvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXHJcbiAgICAgKi9cclxuICAgIHNldE1pbk1heFByaWNlVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgc2VsZWN0b3JzKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yLFxyXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yLFxyXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3IsXHJcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcclxuXHJcbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XHJcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcclxuICAgICAgICAgICAgcHJldmVudFN1Ym1pdDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcclxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcclxuICAgICAgICAgICAgdmFsaWRhdGU6ICdtaW4tbnVtYmVyOjAnLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YWxpZGF0b3Iuc2V0TWVzc2FnZU9wdGlvbnMoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IGZpZWxkc2V0U2VsZWN0b3IsXHJcbiAgICAgICAgICAgIGVycm9yU3BhbjogZXJyb3JTZWxlY3RvcixcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlQ291bnRyeVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGNsYXNzZXMgZnJvbSBkaXJ0eSBmb3JtIGlmIHByZXZpb3VzbHkgY2hlY2tlZFxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKi9cclxuICAgIGNsZWFuVXBTdGF0ZVZhbGlkYXRpb246IChmaWVsZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRmaWVsZENsYXNzRWxlbWVudCA9ICQoKGBbZGF0YS10eXBlPVwiJHtmaWVsZC5kYXRhKCdmaWVsZFR5cGUnKX1cIl1gKSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKG5vZC5jbGFzc2VzKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJGZpZWxkQ2xhc3NFbGVtZW50Lmhhc0NsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSkpIHtcclxuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xyXG4iLCJjb25zdCBmb3JtcyA9IHtcclxuICAgIGVtYWlsKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgcmUgPSAvXi4rQC4rXFwuLisvO1xyXG4gICAgICAgIHJldHVybiByZS50ZXN0KHZhbHVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0ZXMgYSBwYXNzd29yZCBmaWVsZFxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgcGFzc3dvcmQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub3RFbXB0eSh2YWx1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdmFsaWRhdGVzIGlmIGEgZmllbGQgaXMgZW1wdHlcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBub3RFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1zO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCAkc3JjID0gJCgnLnNob3ctc2VsZWN0ZWQtb3B0aW9uIGlucHV0Jyk7XHJcbiAgICBjb25zdCAkc2VsZWN0ZWQgPSAkKCcuc2hvdy1zZWxlY3RlZC1vcHRpb24gaW5wdXRbY2hlY2tlZF0nKTtcclxuICAgIGxldCAkc2VsZWN0ZWRPcHRpb25MYWJlbDtcclxuICAgIGxldCAkc2VsZWN0ZWRPcHRpb247XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlTGFiZWwoKSB7XHJcbiAgICAgICAgJHNlbGVjdGVkT3B0aW9uTGFiZWwgPSAkKHRoaXMpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJ3NwYW5bZGF0YS1vcHRpb24tdmFsdWVdJyk7XHJcbiAgICAgICAgJHNlbGVjdGVkT3B0aW9uID0gJCh0aGlzKS5hdHRyKCdkYXRhLW9wdGlvbi1sYWJlbCcpO1xyXG5cclxuICAgICAgICAkc2VsZWN0ZWRPcHRpb25MYWJlbC50ZXh0KCRzZWxlY3RlZE9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgJHNlbGVjdGVkLmVhY2goY2hhbmdlTGFiZWwpO1xyXG4gICAgJHNyYy5vbignY2xpY2snLCBjaGFuZ2VMYWJlbCk7XHJcbn1cclxuIiwiLypcclxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xyXG4gKi9cclxuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XHJcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcclxuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XHJcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgc2VsZWN0ZWRPcHRpb24gZnJvbSAnLi9mL3NlbGVjdGVkLW9wdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICAvLyBMaXN0ZW4gZm9yIGZvdW5kYXRpb24gbW9kYWwgY2xvc2UgZXZlbnRzIHRvIHNhbml0aXplIFVSTCBhZnRlciByZXZpZXcuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XHJcblxyXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVcclxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xyXG5cclxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oJy53cml0ZVJldmlldy1mb3JtJyk7XHJcbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lbmFibGVTZWxlY3RlZE9wdGlvbkxhYmVsKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBTdGlja3kgPSByZXF1aXJlKCdzdGlja3ktanMnKTtcclxuICAgICAgICBjb25zdCBzdGlja3kgPSBuZXcgU3RpY2t5KCcuc3RpY2t5LXByb2R1Y3QnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCRyZXZpZXdGb3JtKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICRyZXZpZXdGb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kcmV2aWV3c0NvbnRlbnQgPSAkKCcjcHJvZHVjdC1yZXZpZXdzJyk7XHJcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUgPSAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XHJcbiAgICAgICAgdGhpcy5pbmplY3RQYWdpbmF0aW9uTGluaygpO1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VSZXZpZXdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhlIHVzZXIgY2xpY2tzIG9uIFwiKDEyIFJldmlld3MpXCIgbGlua1xyXG4gICAgICogVGhlIGJyb3dzZXIganVtcHMgdG8gdGhlIHJldmlldyBwYWdlIGFuZCBzaG91bGQgZXhwYW5kIHRoZSByZXZpZXdzIHNlY3Rpb25cclxuICAgICAqL1xyXG4gICAgaW5pdExpbmtCaW5kKCkge1xyXG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJCgnI3Byb2R1Y3RSZXZpZXdzLWNvbnRlbnQnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XHJcblxyXG4gICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdMaW5rJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoISRjb250ZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VSZXZpZXdzKCkge1xyXG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjcHJvZHVjdC1yZXZpZXdzJykgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZm9yY2UgY29sbGFwc2Ugb24gcGFnZSBsb2FkXHJcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmplY3QgSUQgaW50byB0aGUgcGFnaW5hdGlvbiBsaW5rXHJcbiAgICAgKi9cclxuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xyXG4gICAgICAgIGNvbnN0ICRuZXh0TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcclxuICAgICAgICBjb25zdCAkcHJldkxpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cyAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoJG5leHRMaW5rLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkbmV4dExpbmsuYXR0cignaHJlZicsIGAkeyRuZXh0TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkcHJldkxpbmsubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxyXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3UmF0aW5nLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRpdGxlXCJdJyxcclxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdDb21tZW50LFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cImVtYWlsXCJdJyxcclxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XHJcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xyXG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXHJcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1haW5WaWRlbygpIHtcclxuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XHJcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xyXG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xyXG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcclxuXHJcbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcclxuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcclxuXHJcbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==