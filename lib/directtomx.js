Email = {
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