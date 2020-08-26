(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/compare.js":
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Compare; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var Compare = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Compare, _PageManager);

  function Compare() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Compare.prototype;

  _proto.onReady = function onReady() {
    var _this = this;

    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    var message = this.context.compareRemoveMessage;
    $('body').on('click', '[data-comparison-remove]', function (event) {
      if (_this.context.comparisons.length <= 2) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])(message);
        event.preventDefault();
      }
    });
  };

  return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");




function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var products;
  var $checked = $('body').find('input[name="products\[\]"]:checked');
  var $compareLink = $('a[data-compare-nav]');

  if ($checked.length !== 0) {
    products = lodash_map__WEBPACK_IMPORTED_MODULE_1___default()($checked, function (element) {
      return element.value;
    });
    updateCounterNav(products, $compareLink, urlContext);
  }

  var compareCounter = products || [];
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9tYXAuanMiXSwibmFtZXMiOlsiQ29tcGFyZSIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsIm1lc3NhZ2UiLCJjb21wYXJlUmVtb3ZlTWVzc2FnZSIsIiQiLCJvbiIsImV2ZW50IiwiY29tcGFyaXNvbnMiLCJsZW5ndGgiLCJzaG93QWxlcnRNb2RhbCIsInByZXZlbnREZWZhdWx0IiwiUGFnZU1hbmFnZXIiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybENvbnRleHQiLCJpcyIsImFkZENsYXNzIiwiYXR0ciIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsInByb2R1Y3RzIiwiJGNoZWNrZWQiLCIkY29tcGFyZUxpbmsiLCJlbGVtZW50IiwidmFsdWUiLCJjb21wYXJlQ291bnRlciIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7Ozs7O1NBQ2pCQyxPLEdBQUEsbUJBQVU7QUFBQTs7QUFDTkMsNEVBQWUsQ0FBQyxLQUFLQyxPQUFMLENBQWFDLElBQWQsQ0FBZjtBQUVBLFFBQU1DLE9BQU8sR0FBRyxLQUFLRixPQUFMLENBQWFH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QWxCLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsd0JBQXZCLEVBQWlELFVBQUFDLEtBQUssRUFBSTtBQUN0RCxRQUFNbUMsS0FBSyxHQUFHckMsQ0FBQyxDQUFDRSxLQUFLLENBQUNnQyxhQUFQLENBQWY7QUFDQSxRQUFNSSxpQkFBaUIsR0FBR0QsS0FBSyxDQUFDYixJQUFOLENBQVcsb0NBQVgsQ0FBMUI7O0FBRUEsUUFBSWMsaUJBQWlCLENBQUNsQyxNQUFsQixJQUE0QixDQUFoQyxFQUFtQztBQUMvQkMsbUVBQWMsQ0FBQyxrREFBRCxDQUFkO0FBQ0FILFdBQUssQ0FBQ0ksY0FBTjtBQUNIO0FBQ0osR0FSRDtBQVVBTixHQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLHFCQUF0QixFQUE2QyxZQUFNO0FBQy9DLFFBQU1zQyxvQkFBb0IsR0FBR3ZDLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXdCLElBQVYsQ0FBZSxvQ0FBZixDQUE3Qjs7QUFFQSxRQUFJZSxvQkFBb0IsQ0FBQ25DLE1BQXJCLElBQStCLENBQW5DLEVBQXNDO0FBQ2xDQyxtRUFBYyxDQUFDLGtEQUFELENBQWQ7QUFDQSxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBUEQ7QUFRSCxDOzs7Ozs7Ozs7Ozs7QUN4RUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBhcmUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmNvbnRleHQuY29tcGFyZVJlbW92ZU1lc3NhZ2U7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyaXNvbi1yZW1vdmVdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmNvbXBhcmlzb25zLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xyXG5cclxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XHJcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybENvbnRleHQpIHtcclxuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xyXG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xyXG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmxDb250ZXh0KSB7XHJcbiAgICBsZXQgcHJvZHVjdHM7XHJcblxyXG4gICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcclxuXHJcbiAgICBpZiAoJGNoZWNrZWQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgcHJvZHVjdHMgPSBfLm1hcCgkY2hlY2tlZCwgZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKTtcclxuXHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihwcm9kdWN0cywgJGNvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb21wYXJlQ291bnRlciA9IHByb2R1Y3RzIHx8IFtdO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybENvbnRleHQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnW2RhdGEtcHJvZHVjdC1jb21wYXJlXScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=