// Notification JavaScripts

(function ($) {
	'use strict';

	$('.noty-selectize-config').selectize({
		create: false,
		sortField: {
			field: 'text',
			direction: 'asc'
		},
		dropdownParent: 'body'
	});

	var i = -1;
  	var msgs = ['You have successfully trigger notification', 'Second notification', 'I saw you hit 3 times!', 'Time to stop?', 'I said enough!'];

  	$('.show-noty').on('click', function () {
	    var msg = $('#noty-message').val(),
	        type = $('#noty-messenger-type').val().toLowerCase(),
	        position = $('#noty-position').val();
	    if (!msg) {
	        msg = getMessage();
	    }
	    if (!type) {
	        type = 'error';
	    }
	    noty({
	        theme: 'app-noty',
	        text: msg,
	        type: type,
	        timeout: 3000,
	        layout: position,
	        closeWith: ['button', 'click'],
	        animation: {
	        	open: 'noty-animation fadeIn',
	        	close: 'noty-animation fadeOut'
	        }
	    });
	});

  function getMessage() {
      i++;
      if (i === msgs.length) {
          i = 0;
      }
      return msgs[i];
  }

  $('.swal-simple').on('click', function () {
      swal("Here's a message!");
  });

  $('.swal-with-text').on('click', function () {
      swal("Here's a message!", "It's pretty, isn't it?")
  });

  $('.swal-success').on('click', function () {
      swal("Good job!", "You clicked the button!", "success")
  });

  $('.swal-function').on('click', function () {
      swal({
	      title: "Are you sure?",
		  text: "You will not be able to recover this imaginary file!",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "Yes, delete it!",
		  closeOnConfirm: false
	  },
	  function(){
		  swal("Deleted!", "Your imaginary file has been deleted.", "success");
	  });
  });

  $('.swal-pass-param').on('click', function () {
      swal({
		  title: "Are you sure?",
		  text: "You will not be able to recover this imaginary file!",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "Yes, delete it!",
		  cancelButtonText: "No, cancel plx!",
		  closeOnConfirm: false,
		  closeOnCancel: false
	  },
	  function(isConfirm){
		  if (isConfirm) {
		      swal("Deleted!", "Your imaginary file has been deleted.", "success");
		  } else {
		      swal("Cancelled", "Your imaginary file is safe :)", "error");
		  }
	  });
  });

})(jQuery);