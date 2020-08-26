(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brand; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./f/card-add-to-cart */ "./assets/js/theme/f/card-add-to-cart.js");
/* harmony import */ var _f_side_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./f/side-cart */ "./assets/js/theme/f/side-cart.js");
/* harmony import */ var _f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./f/grid-list-switcher */ "./assets/js/theme/f/grid-list-switcher.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }









var Brand = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brand, _CatalogPage);

  function Brand() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Brand.prototype;

  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_4__["default"])();

    if (this.context.enableSideCart) {
      Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_5__["default"])();
    }

    Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_6__["default"])(this.context);
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this = this;

    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'f/brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('html, body').animate({
        scrollTop: 0
      }, 100);

      if (_this.context.enableSideCart) {
        Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_5__["default"])();
      }

      Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_4__["default"])();
      Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.context);
    });
  };

  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmQuanMiXSwibmFtZXMiOlsiQnJhbmQiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiY2FyZEFkZFRvQ2FydCIsImVuYWJsZVNpZGVDYXJ0Iiwic2lkZUNhcnQiLCJncmlkU3dpdGNoZXIiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImJyYW5kUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImNvbmZpZyIsInNob3BfYnlfYnJhbmQiLCJicmFuZCIsInByb2R1Y3RzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiQ2F0YWxvZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsSzs7Ozs7Ozs7O1NBQ2pCQyxPLEdBQUEsbUJBQVU7QUFDTkMsNEVBQWUsQ0FBQyxLQUFLQyxPQUFMLENBQWFDLElBQWQsQ0FBZjs7QUFFQSxRQUFJQyxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBakMsRUFBb0M7QUFDaEMsV0FBS0MsaUJBQUw7QUFDSCxLQUZELE1BRU87QUFDSCxXQUFLQyxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0FDLHNFQUFLLENBQUNDLEVBQU4sQ0FBUyxrQkFBVCxFQUE2QixLQUFLSCxjQUFsQztBQUNIOztBQUNESSx1RUFBYTs7QUFFYixRQUFJLEtBQUtULE9BQUwsQ0FBYVUsY0FBakIsRUFBaUM7QUFDN0JDLGtFQUFRO0FBQ1g7O0FBRURDLHlFQUFZLENBQUMsS0FBS1osT0FBTixDQUFaO0FBQ0gsRzs7U0FFREksaUIsR0FBQSw2QkFBb0I7QUFBQTs7QUFDaEIsUUFBTVMsd0JBQXdCLEdBQUdYLENBQUMsQ0FBQyw0QkFBRCxDQUFsQztBQUNBLFFBQU1ZLHVCQUF1QixHQUFHWixDQUFDLENBQUMsMkJBQUQsQ0FBakM7QUFDQSxRQUFNYSxlQUFlLEdBQUcsS0FBS2YsT0FBTCxDQUFhZ0Isb0JBQXJDO0FBQ0EsUUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxjQUFRLEVBQUU7QUFDTkMsc0JBQWMsRUFBRSx5QkFEVjtBQUVOQyxlQUFPLEVBQUU7QUFGSCxPQURTO0FBS25CQyxZQUFNLEVBQUU7QUFDSkMscUJBQWEsRUFBRSxJQURYO0FBRUpDLGFBQUssRUFBRTtBQUNIQyxrQkFBUSxFQUFFO0FBQ05DLGlCQUFLLEVBQUVWO0FBREQ7QUFEUDtBQUZILE9BTFc7QUFhbkJXLGNBQVEsRUFBRTtBQWJTLEtBQXZCO0FBZ0JBLFNBQUtDLGFBQUwsR0FBcUIsSUFBSUMsOERBQUosQ0FBa0JYLGNBQWxCLEVBQWtDLFVBQUNZLE9BQUQsRUFBYTtBQUNoRWhCLDhCQUF3QixDQUFDaUIsSUFBekIsQ0FBOEJELE9BQU8sQ0FBQ1YsY0FBdEM7QUFDQUwsNkJBQXVCLENBQUNnQixJQUF4QixDQUE2QkQsT0FBTyxDQUFDVCxPQUFyQztBQUVBbEIsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjZCLE9BQWhCLENBQXdCO0FBQ3BCQyxpQkFBUyxFQUFFO0FBRFMsT0FBeEIsRUFFRyxHQUZIOztBQUlBLFVBQUksS0FBSSxDQUFDaEMsT0FBTCxDQUFhVSxjQUFqQixFQUFpQztBQUM3QkMsb0VBQVE7QUFDWDs7QUFDREYseUVBQWE7QUFDYkcsMkVBQVksQ0FBQyxLQUFJLENBQUNaLE9BQU4sQ0FBWjtBQUNILEtBYm9CLENBQXJCO0FBY0gsRzs7O0VBckQ4QmlDLGdEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xyXG5pbXBvcnQgY2FyZEFkZFRvQ2FydCBmcm9tICcuL2YvY2FyZC1hZGQtdG8tY2FydCc7XHJcbmltcG9ydCBzaWRlQ2FydCBmcm9tICcuL2Yvc2lkZS1jYXJ0JztcclxuaW1wb3J0IGdyaWRTd2l0Y2hlciBmcm9tICcuL2YvZ3JpZC1saXN0LXN3aXRjaGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xyXG5cclxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXJkQWRkVG9DYXJ0KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZW5hYmxlU2lkZUNhcnQpIHtcclxuICAgICAgICAgICAgc2lkZUNhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdyaWRTd2l0Y2hlcih0aGlzLmNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdmL2JyYW5kL3Byb2R1Y3QtbGlzdGluZycsXHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnYnJhbmQvc2lkZWJhcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJyYW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01vcmU6ICdicmFuZC9zaG93LW1vcmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcclxuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG5cclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lbmFibGVTaWRlQ2FydCkge1xyXG4gICAgICAgICAgICAgICAgc2lkZUNhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXJkQWRkVG9DYXJ0KCk7XHJcbiAgICAgICAgICAgIGdyaWRTd2l0Y2hlcih0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=