var CategoryApp = angular.module('CategoryApp', ['dx']);

CategoryApp.controller('CategoryController', function CategoryController($scope) {
    $scope.searchMode = "contains";

    $scope.treeViewOptions = {
        bindingOptions: {
            searchMode: "searchMode",
        },
        items: products,
        width: 500,
        searchEnabled: true,
        onItemClick: function(e) {
              window.open("/categories/"+e.itemData.text,"_self");
          },
    };

    $scope.searchModeOptions = {
        bindingOptions: {
            value: "searchMode"
        },
    	items: ["contains", "startswith"]
    };
});
