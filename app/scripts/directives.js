'use strict';

angular.module('portfolioApp')
	.directive('lazyLoad', function(){
		return function(scope, element, attrs){
			var returnImage = '';
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				returnImage = attrs.srcMobile;
			}
			else{
				returnImage = attrs.srcDesktop;
			}
			element.parent().attr('data-src', attrs.srcDesktop);
			element.attr('src', returnImage).addClass('lazy-loaded');
		};
});