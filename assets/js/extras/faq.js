/*------------------------------------------------------------------
* Bootstrap Responsive Web Application Template
* Email: heyalexluna@gmail.com
* Version: 1.1
* Last change: 2020-03-02
* Author: Alexis Luna
* Copyright 2019 Alexis Luna
* Website: https://github.com/mralexisluna/bootstrap-responsive-web-application-template
-------------------------------------------------------------------*/
// FAQ JavaScripts

(function ($) {
	'use strict';

    $('.scroll-to').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 80
        }, 300);
        return false;
    });

    $(".sticky").sticky({topSpacing:80});

})(jQuery);
