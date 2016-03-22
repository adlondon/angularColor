angular
  .module('angularColor')
  .service('ColorService', function($http) {
    function getColor(color) {
      return $http.get('http://www.colr.org/json/color/random')
    }
    return {
      getColor: getColor,
    }
  })


  // api url: http://www.colr.org/json/color/random
