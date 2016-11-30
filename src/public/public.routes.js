(function(){
  'use strict';


  angular
    .module('public')
    .config(config);
      
  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config ($stateProvider, $urlRouterProvider) {
      
   $urlRouterProvider.otherwise('/');

    $stateProvider
    /*.state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })*/
     .state('home', {
      url: '/',
      templateUrl: 'src/public/home/home.html',
      controller: '',
      controllerAs: ''
    })
    .state('about', {
        url: '/about',
        templateUrl: 'src/public/about/about.html',
        controller: '',
        controllerAs: ''
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
        controller: '',
        controllerAs: ''
      })
      .state('awards', {
        url: '/awards',
        templateUrl: 'src/public/awards/awards.html',
        controller: '',
        controllerAs: ''
      });
      
    };

})();
  
 