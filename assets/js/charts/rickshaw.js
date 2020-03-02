/*------------------------------------------------------------------
* Bootstrap Responsive Web Application Template
* Email: heyalexluna@gmail.com
* Version: 1.1
* Last change: 2020-03-02
* Author: Alexis Luna
* Copyright 2019 Alexis Luna
* Website: https://github.com/mralexisluna/bootstrap-responsive-web-application-template
-------------------------------------------------------------------*/
// Rickshaw Chart  JavaScripts

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

	//Real Time Chart
    var seriesData = [
        [],
        []
    ];
    var random = new Rickshaw.Fixtures.RandomData(50);
    for (var i = 0; i < 50; i++) {
        random.addData(seriesData);
    }
    var graph = new Rickshaw.Graph({
        element: document.querySelector('#rickshaw-realtime'),
        renderer: 'area',
        height: 400,
        padding: {
            top: 0.5
        },
        series: [{
            data: seriesData[0],
            color: successInverse, 
            name: 'DB Server'
        }, {
            data: seriesData[1],
            color: infoInverse, 
            name: 'Web Server'
        }]
    });
 	
    var yAxis = new Rickshaw.Graph.Axis.Y({
	    graph: graph
	});

	yAxis.render();

    setInterval(function() {
        random.removeData(seriesData);
        random.addData(seriesData);
        graph.update();
    }, 1000);

    $('#rickshaw-realtime').data('chart', graph);


    // Stacked Bar Chart
    var stackedBarSeriesData = [
        [],
        []
    ];
    var stackedbar = new Rickshaw.Fixtures.RandomData(40);
    for (var i = 0; i < 40; i++) {
        random.addData(stackedBarSeriesData);
    }

    var stackedBarGraph = new Rickshaw.Graph({
        renderer: 'bar',
        height: 400,
        element: document.querySelector('#rickshaw-stacked-bar'),
        series: [{
            data: stackedBarSeriesData[0],
            color: primary,
            name: "New users"
        }, {
            data: stackedBarSeriesData[1],
            color: gray,
            name: "Returning users"

        }]

    });
    stackedBarGraph.render();

    var stackedBaryAxis = new Rickshaw.Graph.Axis.Y({
	    graph: stackedBarGraph
	});

	stackedBaryAxis.render();

    $('#rickshaw-stacked-bar').data('chart', stackedBarGraph);


})(jQuery);