'use strict';

angular.module('portfolioApp')
	.controller('LeadershipCtrl', function ($scope) {

	$scope.books = [
		{title: 'This is Service Design Thinking: Basics-Tools-Cases', url: 'https://www.amazon.com/gp/product/B00BAVJW8Y/ref=kinw_myk_ro_title', cover:'servicedesign.jpg'},
		{title: 'The Personal MBA: Master the Art of Business', url: 'https://www.amazon.com/gp/product/B0046ECJ8M/ref=kinw_myk_ro_title" class="list-group-item', cover:'personalmba.jpg'},
		{title: 'Pervasive Information Architecture: Designing Cross-Channel User Experiences', url: 'https://www.amazon.com/gp/product/B004W7D2T8/ref=kinw_myk_ro_title', cover:'pervasive.jpg'},
		{title: 'Rework', url: 'https://www.amazon.com/gp/product/B002MUAJ2A/ref=kinw_myk_ro_title', cover:'rework.jpg'},
		{title: 'Seductive Interaction Design: Creating Playful, Fun, and Effective User Experiences', url: 'https://www.amazon.com/gp/product/B0056A8VO6/ref=kinw_myk_ro_title', cover:'seductive.jpg'},
		{title: 'Redesigning Leadership (Simplicity: Design, Technology, Business, Life)', url: 'https://www.amazon.com/gp/product/B005HJAOO6/ref=kinw_myk_ro_title', cover:'redesigningleadership.jpg'},
		{title: 'The Innovator\'s DNA: Mastering the Five Skills of Disruptive Innovators', url: 'https://www.amazon.com/gp/product/B0054KBLRC/ref=kinw_myk_ro_title', cover:'theinnovatorsdna.jpg'},
		{title: 'Change the Culture, Change the Game', url: 'https://www.amazon.com/gp/product/B0046ECJ3M/ref=kinw_myk_ro_title', cover:'changetheculture.jpg'},
		{title: 'Inspired: How To Create Products Customers Love', url: 'https://www.amazon.com/gp/product/B001AQ95UY/ref=kinw_myk_ro_title', cover:'inspired.jpg'},
		{title: 'Predictably Irrational, Revised and Expanded Edition: The Hidden Forces That Shape Our Decisions', url: 'https://www.amazon.com/gp/product/B002C949KE/ref=kinw_myk_ro_title', cover:'predictably.jpg'},
		{title: 'Practically Radical: Not-So-Crazy Ways to Transform Your Company, Shake Up Your Industry, and Challenge Yourself', url: 'https://www.amazon.com/gp/product/B0047DVI4I/ref=kinw_myk_ro_title', cover:'practicallyradical.jpg'},
		{title: 'Good Boss, Bad Boss: How to Be the Best... and Learn from the Worst', url: 'https://www.amazon.com/gp/product/B003JTHXJK/ref=kinw_myk_ro_title', cover:'goodboss.jpg'},
		{title: 'Where Good Ideas Come From', url: 'https://www.amazon.com/gp/product/B003ZK58TA/ref=kinw_myk_ro_title', cover:'wheregoodideas.jpg'},
		{title: 'Hacking Work: Breaking Stupid Rules for Smart Results', url: 'https://www.amazon.com/gp/product/B003XQEVL2/ref=kinw_myk_ro_title', cover:'hackingwork.jpg'},
		{title: 'Gamestorming: A Playbook for Innovators, Rulebreakers, and Changemakers', url: 'https://www.amazon.com/gp/product/B003XDUCLS/ref=kinw_myk_ro_title', cover:'gamestorming.jpg'},
		{title: 'Chief Culture Officer: How to Create a Living, Breathing Corporation', url: 'https://www.amazon.com/gp/product/B002TJLF86/ref=kinw_myk_ro_title', cover:'chiefcultureofficer.jpg'},
		{title: 'Switch: How to Change Things When Change Is Hard', url: 'https://www.amazon.com/gp/product/B0030DHPGQ/ref=kinw_myk_ro_title', cover:'switch.jpg'}
	];


});
