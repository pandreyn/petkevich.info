/**
 * Created by apetkevich on 16.10.2015.
 */

'use strict';

/**
 * @ngInject
 */
function LeftController($scope, $timeout, $mdSidenav) {
  $scope.close = function() {
    $mdSidenav('left').close();
  };
}

module.exports = LeftController;
