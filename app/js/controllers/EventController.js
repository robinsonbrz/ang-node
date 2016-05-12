'use strict';

eventsApp.controller("EventController",
	function EventController($scope){

		$scope.event = {
			name: "Angular Boot Camp",
			date:"10/05/2016",
			time:"18:52",
			location:{
				address: "Brazil",
				city: "São Paulo",
				state: "São Paulo"
			},
			imageUrl: "/img/angularjs-logo.png",
			sessions: [
	         {
	           name: 'Directives Masterclass',
	           creatorName: 'Bob Smith',
	           duration: 1,
	           level: 'Advanced',
	           abstract: 'In this session you will learn the ins and outs of directives!',
	           upVoteCount: 0
	         },
	         {
	           name: 'Scopes for fun and profit',
	           creatorName: 'John Doe',
	           duration: 2,
	           level: 'Introductory',
	           abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
	           upVoteCount: 0
	         },
	         {
	           name: 'Well Behaved Controllers',
	           creatorName: 'Jane Doe',
	           duration: 4,
	           level: 'Intermediate',
	           abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbors',
	           upVoteCount: 0
	         }
		]
		}
	}
);