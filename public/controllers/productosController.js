angular.module("tiendaStore")

.constant("productListActiveClass", "btn-primary")

.controller("productosCtrl", function ($scope, $filter, productListActiveClass) {
 
    var selectedCategory = null;
 
    $scope.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
    }
 
    $scope.categoryFilterFn = function (product) {
        return selectedCategory == null || product.categoria == selectedCategory;
    }
    
    $scope.getCategoryClass = function (category) {
        return selectedCategory == category ? productListActiveClass : "";
    }
});