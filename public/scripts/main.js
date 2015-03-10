angular
  .module('products', [])
  .controller('ProductsCtrl', function ($scope, $http) {
    //get searchTerm from the input
    $scope.getURL = function () {
      var searchTerm = $scope.searchTerm;
      $scope.searchTerm = null;

      var searchURL = 'https://api.remix.bestbuy.com/v1/products((search='
                      + searchTerm
                      + ')&customerTopRated=true&bestSellingRank>1000)?show=name,image,url,sku,features.feature,salePrice,customerReviewCount,customerReviewAverage&format=json&apiKey=szmzgqs95pa36ns6a5jnfe6x';

      var searchURLp = searchURL + '$callback=JSON_CALLBACK';

      var req = {
        method: 'jsonp',
        url: searchURLp,
        responseType: 'json'
      }

      $http.get(searchURL)
        .success(function(data, status, headers, config) {
          console.log(data);
        })
        .error(function(data, status, headers, config) {
          console.log('error in get searchURL ' + data + status + headers + config);
        });
    };
  });
