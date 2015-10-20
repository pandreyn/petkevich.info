export class LeftController{

  /*@ngInject*/
  constructor($scope, $mdSidenav){
    $scope.close = function() {
      $mdSidenav('left').close();
    };
  }

}
