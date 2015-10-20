import angular from 'angular';
import { HomeController } from './homeController';

var module = angular.module('app.homeModule', []);
module.controller('HomeCtrl', HomeController);

export default module;