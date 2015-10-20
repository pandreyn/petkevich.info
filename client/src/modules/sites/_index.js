import angular from 'angular';
import { SitesController } from './sitesController';
import { SitesService } from './sitesService';

var module = angular.module('app.sitesModule', []);
module
    .controller('SitesCtrl', SitesController)
    .service('SitesService', SitesService);

export default module;