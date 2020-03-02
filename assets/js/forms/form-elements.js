/*------------------------------------------------------------------
* Bootstrap Responsive Web Application Template
* Email: heyalexluna@gmail.com
* Version: 1.1
* Last change: 2020-03-02
* Author: Alexis Luna
* Copyright 2019 Alexis Luna
* Website: https://github.com/mralexisluna/bootstrap-responsive-web-application-template
-------------------------------------------------------------------*/
// Form Elements JavaScripts

(function ($) {
	'use strict';
    
	$('#selectize-dropdown').selectize({
		create: false,
		sortField: {
			field: 'text',
			direction: 'asc'
		},
		dropdownParent: 'body'
	});

	$('#selectize-tags-1').selectize({
	    delimiter: ',',
	    persist: false,
	    create: function(input) {
	        return {
	            value: input,
	            text: input
	        }
	    }
	});

	$('#selectize-tags-2').selectize({
	    delimiter: ',',
	    persist: false,
	    create: function(input) {
	        return {
	            value: input,
	            text: input
	        }
	    }
	});

	$('#selectize-group').selectize({
	    sortField: 'text'
	});

	$('.datepicker-1').datepicker();
	$('.datepicker-2').datepicker();

	$('#date-range-picker').daterangepicker();

	$("#summernote-usage").summernote({
	    height: 200,
	});

})(jQuery);
