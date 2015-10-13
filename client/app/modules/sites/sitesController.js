'use strict';

var controllersModule = require('./_index');

controllersModule.controller('SitesCtrl',
    [
      'SitesService',
      '$mdDialog',
      '$mdToast',
      '$q',
      function (service,
                $mdDialog,
                $mdToast,
                $q) {

        // ViewModel
        var vm = this;

        function addSite($event, editedSite) {

          $mdDialog.show({
            targetEvent: $event,
            templateUrl: 'modules/sites/newSite.html',
            controller: ['$scope', function ($scope) {
              $scope.site = {url: 'http://', isNew: true};

              if (editedSite) {
                $scope.site = editedSite;
                $scope.site.isNew = false;
              }

              $scope.ok = function () {
                $mdDialog.hide($scope.site);
              };

              $scope.cancel = function () {
                $mdDialog.cancel({title: 'new' + new Date()});
              };

            }]
          }).then(
              function (site) {
                //Task.addTask();
                //refreshTasks();
                console.log('modal succses result:', site);
                save(site);
              },
              function (result) {
                console.log('modal canceld: ', result);
              }
          );
        }

        function showSimpleToast(message) {
          $mdToast.show(
              $mdToast.simple()
                  .content(message)
                  .position('top right')
                  .hideDelay(3000)
          );
        }

        function save(site) {

          var deferred = $q.defer();

          function success(responce) {
            showSimpleToast('Successfully saved!');
            deferred.resolve(responce);
            load();
          }

          function failure(responce) {
            deferred.reject(responce);
            showSimpleToast(responce);
          }

          if (site.isNew) {
            service.save(site, success, failure);
          } else {
            service.update({id: site._id}, site, success, failure);
          }

          return deferred.promise;
        }

        function _delete(site) {
          var deferred = $q.defer();

          console.log('delete: ', site);

          service.delete({id: site._id}, function () {
            showSimpleToast('Successfully deleted!');
            load();
          }, function (responce) {
            deferred.reject(responce);
            showSimpleToast(responce);
          });

          return deferred.promise;
        }

        function deleteSite($event, deletedSite) {

          $mdDialog.show({
            targetEvent: $event,
            templateUrl: 'modules/sites/deleteSite.html',
            controller: ['$scope', function ($scope) {

              $scope.site = deletedSite;

              $scope.ok = function () {
                $mdDialog.hide($scope.site);
              };

              $scope.cancel = function () {
                $mdDialog.cancel({title: 'new' + new Date()});
              };

            }]
          }).then(
              function (site) {
                //Task.addTask();
                //refreshTasks();
                console.log('modal succses result:', site);
                _delete(site);
              },
              function (result) {
                console.log('modal canceld: ', result);
              }
          );
        }

        function load() {
          service.query(function (responce) {
            vm.sites = responce;
          });
        }

        function activate() {
          load();
        }

        vm.title = 'List of useful sites!';
        vm.addSite = addSite;
        vm.deleteSite = deleteSite;

        activate();

      }]);