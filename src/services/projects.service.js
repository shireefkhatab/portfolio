(function(){
	'use strict';	


	angular
	  .module('public')
	  .service('projectsService', projectsService);


		function projectsService () {
			var projects = [
				{
					title: 'Chinese restaurant template',
					tech: 'AngularJs and bootstrap',
					image_src: 'images/projects/resized/restaurant.jpg',
					full_image_src: 'images/projects/resized/restaurant.jpg',
					code_url: 'https://github.com/shireefkhatab/coursera-ng/tree/master/module-5-assignment',
					view_url: 'https://shireefkhatab.github.io/coursera-ng/module-5-assignment/',
					category: 'website' 
				},
				{
					title: 'Indian restaurant template',
					tech: 'AngularJs and bootstrap',
					image_src: 'images/projects/resized/confusion.jpg',
					full_image_src: 'images/projects/resized/confusion.jpg',
					code_url: 'https://github.com/shireefkhatab/indian-restaurant-template/',
					view_url: 'https://shireefkhatab.github.io/indian-restaurant-template',
					category: 'website favorite' 
				},
				{
					title: 'BBC clone website',
					tech: 'HTML & CSS',
					image_src: 'images/projects/resized/bbc.jpg',
					full_image_src: 'images/projects/resized/bbc.jpg',
					code_url: 'https://github.com/shireefkhatab/bbc',
					view_url: 'https://shireefkhatab.github.io/bbc/',
					category: 'website' 
				},
				{
					title: 'My portfolio website',
					tech: 'Bootstrap & AngularJs',
					image_src: 'images/projects/resized/myPortfolio.jpg',
					full_image_src: 'images/projects/resized/myPortfolio.jpg',
					code_url: 'https://github.com/shireefkhatab/portfolio',
					view_url: 'https://shireefkhatab.github.io/portfolio/',
					category: 'website favorite'
				},
				{
					title: 'Science quiz for children',
					tech: 'jQuery & bootstrap',
					image_src: 'images/projects/resized/quiz.jpg',
					full_image_src: 'images/projects/resized/quiz.jpg',
					code_url: 'https://github.com/shireefkhatab/quiz',
					view_url: 'https://shireefkhatab.github.io/quiz',
					category: 'app favorite' 
				},
				{
					title: 'Weather application',
					tech: 'Bootstrap & AngularJs',
					image_src: 'images/projects/resized/weather-forecast.jpg',
					full_image_src: 'images/projects/resized/weather-forecast.jpg',
					code_url: 'https://github.com/shireefkhatab/weather',
					view_url: 'https://shireefkhatab.github.io/weather',
					category: 'app favorite' 
				},
				{
					title: 'Code-editor for HTML, CSS, JS',
					tech: 'Javascript',
					image_src: 'images/projects/resized/code-editor.jpg',
					full_image_src: 'images/projects/resized/code-editor.jpg',
					code_url: 'https://github.com/shireefkhatab/editor/',
					view_url: 'https://shireefkhatab.github.io/editor/',
					category: 'app favorite' 
				},
				{
					title: 'Location finder',
					tech: 'Javascript',
					image_src: 'images/projects/resized/finder.jpg',
					full_image_src: 'images/projects/resized/finder.jpg',
					code_url: 'https://github.com/shireefkhatab/finder/',
					view_url: 'https://shireefkhatab.github.io/finder/',
					category: 'app favorite' 
				},
				{
					title: 'Reaction speed game',
					tech: 'Javascript',
					image_src: 'images/projects/resized/reaction.jpg',
					full_image_src: 'images/projects/resized/reaction.jpg',
					code_url: 'https://github.com/shireefkhatab/reaction/',
					view_url: 'https://shireefkhatab.github.io/reaction/',
					category: 'game' 
				},
				{
					title: 'Animation',
					tech: 'Javascript OOP',
					image_src: 'images/projects/resized/animated-car.jpg',
					full_image_src: 'images/projects/resized/animated-car.jpg',
					code_url: 'https://github.com/shireefkhatab/animated_car/',
					view_url: 'https://shireefkhatab.github.io/animated_car/',
					category: 'animation' 
				},
				{
					title: 'Animation',
					tech: 'CSS',
					image_src: 'images/projects/resized/css-car.jpg',
					full_image_src: 'images/projects/resized/css-car.jpg',
					code_url: 'https://github.com/shireefkhatab/css_animated_car/',
					view_url: 'https://shireefkhatab.github.io/css_animated_car/',
					category: 'animation' },
				{
					title: 'Animation',
					tech: 'processingJs',
					image_src: 'images/projects/resized/animation.jpg',
					full_image_src: 'images/projects/resized/animation.jpg',
					code_url: 'https://github.com/shireefkhatab/processingJs_projects/blob/master/animated_balls.html',
					view_url: 'https://shireefkhatab.github.io/processingJs_projects/animated_balls.html',
					category: 'animation' },
				{
					title: 'Table tennis game',
					tech: 'Javascript',
					image_src: 'images/projects/resized/tennis.jpg',
					full_image_src: 'images/projects/resized/tennis.jpg',
					code_url: 'https://github.com/shireefkhatab/table_tennis_game/',
					view_url: 'https://shireefkhatab.github.io/table_tennis_game/',
					category: 'game' 
				},
				{
					title: 'Ball catch game',
					tech: 'processingJs',
					image_src: 'images/projects/resized/ball-catch.jpg',
					full_image_src: 'images/projects/resized/ball-catch.jpg',
					code_url: 'https://github.com/shireefkhatab/processingJs_projects/blob/master/ball_catch.html',
					view_url: 'https://shireefkhatab.github.io/processingJs_projects/ball_catch.html',
					category: 'game' 
				},
				{
					title: 'Matching game',
					tech: 'Javascript',
					image_src: 'images/projects/resized/matching.jpg',
					full_image_src: 'images/projects/resized/matching.jpg',
					code_url: 'https://github.com/shireefkhatab/matching_game/',
					view_url: 'https://shireefkhatab.github.io/matching_game/',
					category: 'game'
				}
			];

			return projects;
		 }


	})();

	


	