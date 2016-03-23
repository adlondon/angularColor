angular
  .module('angularColor')
  .service('ColorService', function($http) {
    function getColor() {
      return $http.get('http://www.colr.org/json/color/random')
    }
    return {
      getColor: getColor,
    }
  })
  .service('SchemeService', function($http) {
    function getScheme() {
      return $http.get('http://www.colr.org/json/schemes/random/')
    }
    return {
      getScheme: getScheme,
    }
  })


  // api url: http://www.colr.org/json/color/random
