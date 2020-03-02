/*------------------------------------------------------------------
* Bootstrap Responsive Web Application Template
* Email: heyalexluna@gmail.com
* Version: 1.1
* Last change: 2020-03-02
* Author: Alexis Luna
* Copyright 2019 Alexis Luna
* Website: https://github.com/mralexisluna/bootstrap-responsive-web-application-template
-------------------------------------------------------------------*/
// Main JavaScripts
(function ($) {
	'use strict';
	
	// Side Nav
	function sideNav() {
		$('.side-nav .side-nav-menu li a').on('click', function(e) {
			if ($(this).parent().hasClass("open")) {

				$(this).parent().children('.dropdown-menu').slideUp(200, function() {
					$(this).parent().removeClass("open");
				});

			} else {
				$(this).parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);
				$(this).parent().parent().children('li.open').children('a').removeClass('open');
				$(this).parent().parent().children('li.open').removeClass("open");
				$(this).parent().children('.dropdown-menu').slideDown(200, function() {
					$(this).parent().addClass("open");
				});
			}
		});
	}	
	
	// Side Nav Toogle
	function sideNavToggle() {
		$('.side-nav-toggle').on('click', function(e) {
	        $('.app').toggleClass("is-collapsed");
	        e.preventDefault();
	    });
	}	

	// Side Panel Toogle
	function sidePanelToggle() {
		$('.side-panel-toggle').on('click', function(e) {
	        $('.side-panel').toggleClass("side-panel-open");
	        e.preventDefault();
	    });
	}	

	// Chat Toggle
	function chatToggle() {
		$('.chat-toggle').on('click', function(e) {
	        $('.chat').toggleClass("open");
	        e.preventDefault();
	    });
	}	

	// Todo Toggle
	function todoToggle() {
		$('.todo-toggle').on('click', function(e) {
	        $('.todo-wrapper').toggleClass("open");
	        e.preventDefault();
	    });
	}	

	// Search Toggle 
	function searchToggle() {
		$('.search-toggle').on('click', function(e) {
			$('.search-box, .search-input').toggleClass("active");
			$('.search-input input').focus();
			e.preventDefault();
		});
	}	

	// Advance Search
	function advanceSearch() {
		$('.search-input input').on('keyup',function(){
			if($(this).val().length > 0) {
				$('.advanced-search').addClass("active");
			} 
			else {
		       $('.advanced-search').removeClass("active");
		    }
		    $('.serach-text-bind').html($(this).val());
		})	
	} 

	// Perfect Scroll Bar
	function perfectSB() {
		$('.scrollable').perfectScrollbar();
	}

	//Card Portlet Refresh
	function cardPortletCtrl() {
		//card refresh
		$('[data-toggle=card-refresh]').on('click',function(e) {
			var cardRefreshSelector = $(this).parents('.card');
		    cardRefreshSelector.addClass('card-refresh');
		    window.setTimeout(function () {
		        cardRefreshSelector.removeClass('card-refresh');
		    }, 2000);
		    e.preventDefault();
		    e.stopPropagation();
		});

		//card delete
		$('[data-toggle=card-delete]').on('click',function(e) {
			var cardDeleteSelector = $(this).parents('.card');
		    cardDeleteSelector.addClass('animated zoomOut');
		    cardDeleteSelector.bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function () {
		        cardDeleteSelector.remove();
		    });
		    e.preventDefault();
		    e.stopPropagation();
		});
	}

	function getYear() {
		var d = new Date();
		var y = d.getFullYear();
		document.getElementById("year").innerHTML = y;
	}

	function init() {
	    sideNav();
	    sideNavToggle();
	    sidePanelToggle();
	    chatToggle();
	    todoToggle();
	    searchToggle();
	    advanceSearch();
	    perfectSB();
	    cardPortletCtrl();
		getYear();
	}
	init();
})(jQuery);