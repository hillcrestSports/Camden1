(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./f/card-add-to-cart */ "./assets/js/theme/f/card-add-to-cart.js");
/* harmony import */ var _f_side_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./f/side-cart */ "./assets/js/theme/f/side-cart.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./f/grid-list-switcher */ "./assets/js/theme/f/grid-list-switcher.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }










var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);

  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Category.prototype;

  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    if (this.context.enableSideCart) {
      Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_5__["default"])();
    }

    Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
    this.highlightPageCount();
  };

  _proto.highlightPageCount = function highlightPageCount() {
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);

    if (url.query.limit) {
      $(".productCount [data-count=" + url.query.limit + "]").addClass('productCount__item--active');
    } else if (this.context.categoryProductsPerPage) {
      $(".productCount [data-count=" + this.context.categoryProductsPerPage + "]").addClass('productCount__item--active');
    }
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this = this;

    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $headerTitleContainer = $('#headerTitleContainer');
    var $itemsPerPageCounter = $('.js-product-count');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'f/category/product-listing',
        sidebar: 'category/sidebar',
        headerTitle: 'f/category/header-title',
        itemsPerPage: 'f/category/show-amount'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $headerTitleContainer.html(content.headerTitle);
      $itemsPerPageCounter.html(content.itemsPerPage);
      $('html, body').animate({
        scrollTop: 0
      }, 100);

      if (_this.context.enableSideCart) {
        Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_5__["default"])();
      }

      Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_4__["default"])();
      Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_7__["default"])(_this.context);

      _this.highlightPageCount();
    });
  };

  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiZW5hYmxlU2lkZUNhcnQiLCJzaWRlQ2FydCIsImNhcmRBZGRUb0NhcnQiLCJncmlkU3dpdGNoZXIiLCJoaWdobGlnaHRQYWdlQ291bnQiLCJ1cmwiLCJVcmwiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInF1ZXJ5IiwibGltaXQiLCJhZGRDbGFzcyIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkaGVhZGVyVGl0bGVDb250YWluZXIiLCIkaXRlbXNQZXJQYWdlQ291bnRlciIsInByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImhlYWRlclRpdGxlIiwiaXRlbXNQZXJQYWdlIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxROzs7Ozs7Ozs7U0FDakJDLE8sR0FBQSxtQkFBVTtBQUNOQyw0RUFBZSxDQUFDLEtBQUtDLE9BQUwsQ0FBYUMsSUFBZCxDQUFmOztBQUVBLFFBQUlDLENB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ZW1lLWJ1bmRsZS5jaHVuay4xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xyXG5pbXBvcnQgY2FyZEFkZFRvQ2FydCBmcm9tICcuL2YvY2FyZC1hZGQtdG8tY2FydCc7XHJcbmltcG9ydCBzaWRlQ2FydCBmcm9tICcuL2Yvc2lkZS1jYXJ0JztcclxuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xyXG5pbXBvcnQgZ3JpZFN3aXRjaGVyIGZyb20gJy4vZi9ncmlkLWxpc3Qtc3dpdGNoZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XHJcblxyXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVuYWJsZVNpZGVDYXJ0KSB7XHJcbiAgICAgICAgICAgIHNpZGVDYXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXJkQWRkVG9DYXJ0KCk7XHJcblxyXG4gICAgICAgIGdyaWRTd2l0Y2hlcih0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLmhpZ2hsaWdodFBhZ2VDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZ2hsaWdodFBhZ2VDb3VudCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xyXG4gICAgICAgIGlmICh1cmwucXVlcnkubGltaXQpIHtcclxuICAgICAgICAgICAgJChgLnByb2R1Y3RDb3VudCBbZGF0YS1jb3VudD0ke3VybC5xdWVyeS5saW1pdH1dYCkuYWRkQ2xhc3MoJ3Byb2R1Y3RDb3VudF9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UpIHtcclxuICAgICAgICAgICAgJChgLnByb2R1Y3RDb3VudCBbZGF0YS1jb3VudD0ke3RoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZX1dYCkuYWRkQ2xhc3MoJ3Byb2R1Y3RDb3VudF9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgJGhlYWRlclRpdGxlQ29udGFpbmVyID0gJCgnI2hlYWRlclRpdGxlQ29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgJGl0ZW1zUGVyUGFnZUNvdW50ZXIgPSAkKCcuanMtcHJvZHVjdC1jb3VudCcpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnZi9jYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxyXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyVGl0bGU6ICdmL2NhdGVnb3J5L2hlYWRlci10aXRsZScsXHJcbiAgICAgICAgICAgICAgICBpdGVtc1BlclBhZ2U6ICdmL2NhdGVnb3J5L3Nob3ctYW1vdW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcclxuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG4gICAgICAgICAgICAkaGVhZGVyVGl0bGVDb250YWluZXIuaHRtbChjb250ZW50LmhlYWRlclRpdGxlKTtcclxuICAgICAgICAgICAgJGl0ZW1zUGVyUGFnZUNvdW50ZXIuaHRtbChjb250ZW50Lml0ZW1zUGVyUGFnZSk7XHJcblxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVuYWJsZVNpZGVDYXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBzaWRlQ2FydCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXJkQWRkVG9DYXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBncmlkU3dpdGNoZXIodGhpcy5jb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0UGFnZUNvdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==