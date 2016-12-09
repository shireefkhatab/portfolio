(function(){
	'use strict';	


	angular
	  .module('public')
	  .service('awardsService', awardsService);


		function awardsService () {
			var awards = [
				
				{
					title: 'HTML',
					site: 'https://www.sololearn.com',
					image_src: 'images/awards/resized/solo-html.jpg',
					full_image_src: 'images/awards/full/solo-html.jpg',
					category: 'html' 
				},
				{
					title: 'HTML5',
					site: 'https://www.coursera.org',
					image_src: 'images/awards/resized/c-html5.jpg',
					full_image_src: 'images/awards/full/c-html5.jpg',
					category: 'html' 
				},
				{
					title: 'CSS',
					site: 'https://www.sololearn.com',
					image_src: 'images/awards/resized/solo-css.jpg',
					full_image_src: 'images/awards/full/solo-css.jpg',
					category: 'css' 
				},
				{
					title: 'CSS3',
					site: 'https://www.coursera.org/',
					image_src: 'images/awards/resized/c-css3.jpg',
					full_image_src: 'images/awards/full/c-css3.jpg',
					category: 'css' 
				},
				{
					title: 'HTML-CSS',
					site: 'https://www.codecademy.com/',
					image_src: 'images/awards/resized/cc-html-css.jpg',
					full_image_src: 'images/awards/full/cc-html-css.jpg',
					category: 'html css' 
				},
				{
					title: 'Javascript',
					site: 'https://www.codecademy.com/',
					image_src: 'images/awards/resized/cc-js.jpg',
					full_image_src: 'images/awards/full/cc-js.jpg',
					category: 'Javascript'
				},
				{
					title: 'Javascript',
					site: 'https://www.sololearn.com',
					image_src: 'images/awards/resized/solo-js.jpg',
					full_image_src: 'images/awards/full/solo-js.jpg',
					category: 'Javascript' 
				},
				{
					title: 'Javascript',
					site: 'https://www.udemy.com/',
					image_src: 'images/awards/resized/u-js.jpg',
					full_image_src: 'images/awards/full/u-js.jpg',
					category: 'Javascript'
				},
				{
					title: 'Javascript',
					site: 'https://www.udemy.com/',
					image_src: 'images/awards/resized/u-tennisGame.jpg',
					full_image_src: 'images/awards/full/u-tennisGame.jpg',
					category: 'Javascript'
				},
				{
					title: 'Javascript',
					site: 'https://www.coursera.org/',
					image_src: 'images/awards/resized/c-js.jpg',
					full_image_src: 'images/awards/full/c-js.jpg',
					category: 'Javascript'
				},
				{
					title: 'HTML-CSS-Javascript',
					site: 'https://www.codecademy.com/',
					image_src: 'images/awards/resized/cc-html-css-js.jpg',
					full_image_src: 'images/awards/full/cc-html-css-js.jpg',
					category: 'html css js' 
				},
				{
					title: 'HTML-CSS-Javascript',
					site: 'https://www.coursera.org/',
					image_src: 'images/awards/resized/c-html-css-js-jaa.jpg',
					full_image_src: 'images/awards/full/c-html-css-js-jaa.jpg',
					category: 'html css js' 
				},
				{
					title: 'HTML-CSS-Javascript',
					site: 'https://www.coursera.org/',
					image_src: 'images/awards/resized/c-html-css-js.jpg',
					full_image_src: 'images/awards/full/c-html-css-js.jpg',
					category: 'html css js' 
				},
				{
					title: 'Jquery',
					site: 'https://www.codeschool.com/',
					image_src: 'images/awards/resized/cs-jquery.jpg',
					full_image_src: 'images/awards/full/cs-jquery.jpg',
					category: 'jquery' 
				},
				{
					title: 'Jquery',
					site: 'https://www.codeschool.com/',
					image_src: 'images/awards/resized/cs-jquery-part2.jpg',
					full_image_src: 'images/awards/full/cs-jquery-part2.jpg',
					category: 'jquery' 
				},
				{
					title: 'AngularJs 1',
					site: 'https://www.codeschool.com/',
					image_src: 'images/awards/resized/cs-angular.jpg',
					full_image_src: 'images/awards/full/cs-angular.jpg',
					category: 'angular' 
				},
				{
					title: 'AngularJs 1',
					site: 'https://www.codeschool.com/',
					image_src: 'images/awards/resized/cs-angular-part2.jpg',
					full_image_src: 'images/awards/full/cs-angular-part2.jpg',
					category: 'angular' 
				},
				{
					title: 'AngularJs 1',
					site: 'https://www.udemy.com/',
					image_src: 'images/awards/resized/u-angular-0.jpg',
					full_image_src: 'images/awards/full/u-angular-0.jpg',
					category: 'angular' 
				},
				{
					title: 'AngularJs 1',
					site: 'https://www.coursera.org/',
					image_src: 'images/awards/resized/c-angular.jpg',
					full_image_src: 'images/awards/full/c-angular.jpg',
					category: 'angular' 
				},
				{
					title: 'AngularJs 1',
					site: 'https://www.coursera.org/',
					image_src: 'images/awards/resized/c-angular-spa.jpg',
					full_image_src: 'images/awards/full/c-angular-spa.jpg',
					category: 'angular' 
				},
				{
					title: 'PHP',
					site: 'https://www.sololearn.com',
					image_src: 'images/awards/resized/solo-php.jpg',
					full_image_src: 'images/awards/full/solo-php.jpg',
					category: 'programming'
				},
				{
					title: 'SQL',
					site: 'https://www.sololearn.com',
					image_src: 'images/awards/resized/solo-sql.jpg',
					full_image_src: 'images/awards/full/solo-sql.jpg',
					category: 'programming' 
				},
				{
					title: 'Hour-of-code',
					site: 'https://code.org',
					image_src: 'images/awards/resized/hour-of-code.jpg',
					full_image_src: 'images/awards/full/hour-of-code.jpg',
					category: 'programming' 
				},
				{
					title: 'wordpress',
					site: 'https://www.udemy.com/',
					image_src: 'images/awards/resized/u-wp.jpg',
					full_image_src: 'images/awards/full/u-wp.jpg',
					category: 'programming'
				},
				{
					title: 'C',
					site: 'https://alison.com',
					image_src: 'images/awards/resized/alison-c.jpg',
					full_image_src: 'images/awards/full/alison-c.jpg',
					category: 'programming' 
				},
				{
					title: 'C++',
					site: 'https://www.sololearn.com',
					image_src: 'images/awards/resized/solo-c++.jpg',
					full_image_src: 'images/awards/full/solo-c++.jpg',
					category: 'programming' 
				}
			];

			return awards;
		 }


	})();

	


	