(function(){

	'use strict';

	angular.module('public')
	  .controller('AwardsController', AwardsController);

	  AwardsController.$inject = ['awardsService'];
	  function AwardsController (awardsService){
    	
    	var awardsCtrl = this;

    	awardsCtrl.awards = awardsService;

    	awardsCtrl.tab = 0;
    	awardsCtrl.category = '';

    	awardsCtrl.selectedTab = function(tapNum){
    		awardsCtrl.tab = tapNum;

    		if (tapNum === 0){
    			awardsCtrl.category = '';
    		} else if (tapNum === 1){
    			awardsCtrl.category = 'html';
    		} else if (tapNum === 2){
    			awardsCtrl.category = 'css';
    		} else if (tapNum === 3){
    			awardsCtrl.category = 'Javascript';
    		} else if (tapNum === 4){
    			awardsCtrl.category = 'angular';
    		} else if (tapNum === 5){
    			awardsCtrl.category = 'jquery';
    		} else if (tapNum === 6){
                awardsCtrl.category = 'Programming';
            }
    	};
    	awardsCtrl.isActiveTab = function(checkTabNum){
    		return (awardsCtrl.tab === checkTabNum);
    	};

    }



})();
