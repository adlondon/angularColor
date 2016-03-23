angular
  .module('angularColor')
  .controller('HomeController', function($scope, ColorService, $route){
    ColorService.getColor().then(function(data){
      console.log("data", data);
      $scope.name = data.data.colors[0].tags[0].name;
      $scope.hex = data.data.colors[0].hex;
      $scope.reloadRoute = function() {
       $route.reload();
      }
      angular.element(document).find('body').css('background-color', "#" + $scope.hex);

    });



  })
  .controller('SchemeController', function($scope, SchemeService){
    SchemeService.getScheme().then(function(data){
      console.log("data", data);
      $scope.schemeName = data.data.schemes[0].tags[0].name;
      $scope.schemeHex = data.data.schemes[0].colors;
      angular.element(document).find('article').css('background-color', $scope.hex);
    })

  })
