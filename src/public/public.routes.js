(function(){
  'use strict';


  angular
    .module('public')
    .config(config);
      
  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config ($stateProvider, $urlRouterProvider) {
    
   $urlRouterProvider.otherwise('/');

    $stateProvider

     .state('home', {
      url: '/',
      templateUrl: 'src/public/home/home.html',
      controller: 'HomeController',
      controllerAs: 'HomeCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'src/public/about/about.html',
        controller: 'AboutController',
        controllerAs: 'aboutCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'src/public/projects/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'projectsCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'src/public/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contactCtrl'
      })
      .state('awards', {
        url: '/awards',
        templateUrl: 'src/public/awards/awards.html',
        controller: 'AwardController',
        controllerAs: 'awardCtrl'
      });
      
    };

})();
  
 