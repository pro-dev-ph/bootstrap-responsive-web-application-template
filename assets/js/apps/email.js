/*------------------------------------------------------------------
* Bootstrap Responsive Web Application Template
* Email: heyalexluna@gmail.com
* Version: 1.1
* Last change: 2020-03-02
* Author: Alexis Luna
* Copyright 2019 Alexis Luna
* Website: https://github.com/mralexisluna/bootstrap-responsive-web-application-template
-------------------------------------------------------------------*/
// Email JavaScripts

(function ($) {
	'use strict';
  	
	function secSideNavToggle() {
		$('.side-nav-2-toggle').on('click', function(e) {
	        $('.email-app').toggleClass("mail-nav-active");
	        e.preventDefault();
	    });
	}

	function openMail() {
		$('.open-mail, .back-to-mailbox').on('click', function(e) {
	        $('.email-content').toggleClass("open");
	        e.preventDefault();
	    });
	}

	$('#compose-area').summernote({
		height: 400
	});

	$('#send-to').selectize({
	    delimiter: ',',
	    persist: false,
	    create: function(input) {
	        return {
	            value: input,
	            text: input
	        }
	    }
	});

	function init() {
	    secSideNavToggle();
	    openMail();
	}
	init();	

})(jQuery);
