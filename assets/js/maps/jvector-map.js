/*------------------------------------------------------------------
* Bootstrap Responsive Web Application Template
* Email: heyalexluna@gmail.com
* Version: 1.1
* Last change: 2020-03-02
* Author: Alexis Luna
* Copyright 2019 Alexis Luna
* Website: https://github.com/mralexisluna/bootstrap-responsive-web-application-template
-------------------------------------------------------------------*/
// jvector map JavaScripts

(function ($) {
	'use strict';

    var primary = '#7774e7',
        success = '#37c936',
        info = '#0f9aee',
        warning = '#ffcc00',
        danger = '#ff3c7e',
        primaryInverse = 'rgba(119, 116, 231, 0.1)',
        successInverse = 'rgba(55, 201, 54, 0.1)',
        infoInverse = 'rgba(15, 154, 238, 0.1)',
        warningInverse = 'rgba(255, 204, 0, 0.1)',
        dangerInverse = 'rgba(255, 60, 126, 0.1)',
        gray = '#f6f7fb',
        white = '#fff',
        dark = '#515365'

    $('#vector-map-opt').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        strokeWidth: 1,
        regionStyle: {
            initial: {
                fill: dark,
                'fill-opacity': 0.2,
                'cursor': 'pointer'
            },
            hover: {
                'fill-opacity': 0.3
            }
        },
        markerStyle: {
            initial: {
                fill: info,
                stroke: info,
                'fill-opacity': 1,
                'stroke-width': 8,
                'stroke-opacity': 0.3,
                'cursor': 'pointer',
                r: 5
            },
            hover: {
                r: 8,
                stroke: info,
                'stroke-width': 10
            }
        },
        markers: [{
            latLng: [4.21, 101.97],
            name: 'Malaysia (+25.17)'
        }, {
            latLng: [37.09, 95.71],
            name: 'China (-28.12)'
        }, {
            latLng: [36.20, 138.25],
            name: 'Japan (+18.84%)'
        }, {
            latLng: [-7.15, -53.67],
            name: 'Brazil (+3.34%)'
        }, {
            latLng: [40.02, -104.01],
            name: 'United State (+16.68%)'
        }, {
            latLng: [76.20, -42.23],
            name: 'Greenland (+20.13%)'
        }]
    });


})(jQuery);