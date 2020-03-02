/*------------------------------------------------------------------
* Bootstrap Responsive Web Application Template
* Email: heyalexluna@gmail.com
* Version: 1.1
* Last change: 2020-03-02
* Author: Alexis Luna
* Copyright 2019 Alexis Luna
* Website: https://github.com/mralexisluna/bootstrap-responsive-web-application-template
-------------------------------------------------------------------*/
// Spakline Chart JavaScripts

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
		dark = '#515365';

	var sparklineBarData1 = [8, 10, 8, 10, 9, 10, 8, 9, 10, 10, 7, 10, 9, 7, 8, 8];
    var sparklineBarData2 = [0, 8, 10, 8, 10, 9, 10, 8,10, 10, 7, 10, 9,];
    var sparklineLineData1 = [32, 38, 36, 35, 38, 37, 35, 34, 36, 38, 36, 37, 35, 34, 37, 38, 38];
    var sparklineLineData2 = [7, 8, 10, 8, 10, 9, 10, 8,10, 10, 9, 10, 9,];
    var sparklinePieData1 = [4, 3, 2, 1];
    var sparklineTristateData1 = [1,1,0,1,-1,-1,1,-1,0,0,1,1 ];

	$("#bar-option-1").sparkline(sparklineBarData1,  
    {
		type: 'bar',
		height: '60',
		barWidth: 7,
		barSpacing: 5,
		barColor: info
    });

    $("#bar-option-2").sparkline( sparklineBarData2,  
    {
		type: 'bar',
        height: '100',
        barWidth: 7,
        barSpacing: 5,
        barColor: success
    });

    $("#line-option-1").sparkline( sparklineLineData1,  
    {
		type: 'line',
        width: '130',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor:false,
        lineWidth: 1,
        height: '50',
        fillColor: primaryInverse,
        lineColor: primary,
        highlightLineColor: 'rgba(0,0,0,.09)',
        highlightSpotColor: 'rgba(0,0,0,.21)',
    });

    $("#line-option-2").sparkline( sparklineLineData2,  
    {
		type: 'line',
        width: '130',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor:false,
        lineWidth: 1,
        height: '50',
        fillColor: successInverse,
        lineColor: success,
        highlightLineColor: 'rgba(0,0,0,.09)',
        highlightSpotColor: 'rgba(0,0,0,.21)',
    });

    $("#line-option-3").sparkline( sparklineLineData1,  
    {
		type: 'line',
        width: '130',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor:false,
        lineWidth: 1,
        height: '50',
        fillColor: primaryInverse,
        lineColor: primary,
        highlightLineColor: 'rgba(0,0,0,.09)',
        highlightSpotColor: 'rgba(0,0,0,.21)',
    });

    $("#line-option-4").sparkline( sparklineLineData2,  
    {
		type: 'line',
        width: '130',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor:false,
        lineWidth: 1,
        height: '50',
        fillColor: successInverse,
        lineColor: success,
        highlightLineColor: 'rgba(0,0,0,.09)',
        highlightSpotColor: 'rgba(0,0,0,.21)',
    });

    $("#line-option-5").sparkline( sparklineLineData1,  
    {
		type: 'line',
        width: '130',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor:false,
        lineWidth: 1,
        height: '50',
        fillColor: primaryInverse,
        lineColor: primary,
        highlightLineColor: 'rgba(0,0,0,.09)',
        highlightSpotColor: 'rgba(0,0,0,.21)',
    });

    $("#line-option-6").sparkline( sparklineLineData2,  
    {
		type: 'line',
        width: '130',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor:false,
        lineWidth: 1,
        height: '50',
        fillColor: successInverse,
        lineColor: success,
        highlightLineColor: 'rgba(0,0,0,.09)',
        highlightSpotColor: 'rgba(0,0,0,.21)',
    });

    $("#pie-option").sparkline( sparklinePieData1,  
    {
		type: 'pie',
        height: '100',
        sliceColors: [danger, success, info, warning]
    });

    $("#line-option-7").sparkline( sparklineLineData2,  
    {
		type: 'line',
        width: '130',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor:false,
        lineWidth: 1,
        height: '100',
        fillColor: 'rgba(0,0,0,0)',
        lineColor: warning,
        highlightLineColor: 'rgba(0,0,0,.09)',
        highlightSpotColor: 'rgba(0,0,0,.21)',
    });

    $("#discrete-option").sparkline( sparklineLineData1,  
    {
		type: 'discrete',
        width: '130',
        lineColor: primary,
        height: '100',
        lineHeight: 60
    });

    $("#tristate-option").sparkline( sparklineTristateData1,  
    {
		type: 'tristate',
        width: '130',
        height: '100', 
        posBarColor: success,
        negBarColor: danger,
        barWidth: 7,
        barSpacing: 1
    });

    $("#line-option-8").sparkline( sparklineLineData1,  
    {
		type: 'line',
        width: '130',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor:false,
        lineWidth: 1,
        height: '100',
        fillColor: dangerInverse,
        lineColor: danger,
        highlightLineColor: 'rgba(0,0,0,.09)',
        highlightSpotColor: 'rgba(0,0,0,.21)',
    });


})(jQuery);