'use strict';

angular.module('public')
  .controller('ContactController', function () {
  	
	var contactCtrl = this;

	contactCtrl.submitForm = function(isValid) {

    // check to make sure the form is completely valid
		if (isValid) {
		  alert('our form is amazing');
		}
	}
	
	
		var myform = $("form#myform");
        myform.submit(function(event){
	        event.preventDefault();

	        // Change to your service ID, or keep using the default service
	        var userId = function (){
	        	emailjs.init("user_Pgh80D0xJvfJQkBkAMYQT");
		    };
		    userId();
	        var service_id = "default_service";
	        var template_id = "my_first_template";

	        myform.find("button").text("Sending...");
	        emailjs.sendForm(service_id,template_id,"myform")
	          .then(function(){ 
	            alert("Sent!");
	             myform.find("button").text("Send");
	          }, function(err) {
	             alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
	             myform.find("button").text("Send");
	          });
	        return false;
	    });
	 
	 
  });
