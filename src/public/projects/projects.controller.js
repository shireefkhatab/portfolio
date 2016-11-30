
(function(){
	'use strict';

angular.module('public')
  .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['projectsService'];
    function ProjectsController (projectsService) {
    	var projectsCtrl = this;

    	projectsCtrl.projects = projectsService;

    	projectsCtrl.tab = 0;
    	projectsCtrl.category = '';
    	projectsCtrl.selectedTab = function(tapNum){
    		projectsCtrl.tab = tapNum;

    		if (tapNum === 0){
    			projectsCtrl.category = '';
    		} else if (tapNum === 1){
    			projectsCtrl.category = 'favorite';
    		} else if (tapNum === 2){
    			projectsCtrl.category = 'website';
    		} else if (tapNum === 3){
    			projectsCtrl.category = 'app';
    		} else if (tapNum === 4){
    			projectsCtrl.category = 'game';
    		} else if (tapNum === 5){
    			projectsCtrl.category = 'animation';
    		}
    	};
    	projectsCtrl.isActiveTab = function(checkTabNum){
    		return (projectsCtrl.tab === checkTabNum);
    	};

    }


})();

