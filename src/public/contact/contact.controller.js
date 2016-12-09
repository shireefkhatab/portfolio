'use strict';

angular.module('public')
  .controller('ContactController', function () {
  	var contactCtrl = this;


  	 var myform = $("form#myform");
        myform.submit(function(event){
          event.preventDefault();

          // Change to your service ID, or keep using the default service
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

    /*contactCtrl.Email = {
		Send : function (to,from,subject,body,apikey)
			{
				if (apikey == undefined)
				{
					apikey = Email.apikey;
				}
				var nocache= Math.floor((Math.random() * 1000000) + 1);
				var strUrl = "http://directtomx.azurewebsites.net/mx.asmx/Send?";
				strUrl += "apikey=" + apikey;
				strUrl += "&from=" + from;
				strUrl += "&to=" + to;
				strUrl += "&subject=" + encodeURIComponent(subject);
				strUrl += "&body=" + encodeURIComponent(body);
				strUrl += "&cachebuster=" + nocache;
				Email.addScript(strUrl);
			},
		apikey : "70c8ce4e-c828-41af-ae3e-f8282f2d351a",
		addScript : function(src){
					var s = document.createElement( 'img' );
					s.setAttribute( 'style', 'opacity: 0.0; filter: alpha(opacity=0);' );
					s.setAttribute( 'src', src);
					document.body.appendChild( s );
			}
	};
	console.log(contactCtrl.Email.apikey)
 	contactCtrl.Email.Send("sherif_19@hotmail.co.uk","sherif_19@hotmail.co.uk","Sent from JS API","Worked!");*/
  });
