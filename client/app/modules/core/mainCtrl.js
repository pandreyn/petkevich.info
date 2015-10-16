/**
 * Created by apetkevich on 16.10.2015.
 */

'use strict';

function MainController($scope, $timeout, $mdSidenav) {
  $scope.toggleRight = function() {
    $mdSidenav('left').toggle();
  };

  $scope.menu = {};
  $scope.menu.pages = [
    {"url": "/", "discription":"Главная"},
    {"url": "/sites", "discription":"Полезные ссылки"}

  ];

  $scope.menu.isPageSelected = function(page) {
    return ($scope.menu.currentPage === page);
  };

  $scope.menu.toggleSelectPage = function(page) {
    $scope.menu.currentPage = page;
  };
}


module.exports = MainController;