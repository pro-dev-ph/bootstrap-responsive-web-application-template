/*------------------------------------------------------------------
* Bootstrap Responsive Web Application Template
* Email: heyalexluna@gmail.com
* Version: 1.1
* Last change: 2020-03-02
* Author: Alexis Luna
* Copyright 2019 Alexis Luna
* Website: https://github.com/mralexisluna/bootstrap-responsive-web-application-template
-------------------------------------------------------------------*/
// DashBoard JavaScripts

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

    $('#monthly-target').vectorMap({
        map: 'us_aea',
            backgroundColor: 'transparent',
            strokeWidth: 1,
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: 'transparent',
                    'stroke-width': 1,
                    'stroke': '#b5bad6',
                    'stroke-opacity': 1,
                    'cursor': 'pointer'
                },
                hover: {
                    'fill-opacity': 0.7
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

            series: {
                regions: [{
                    values: {
                        "US-FL": warning,
                        "US-NY": success,
                        "US-CA": info,
                        "US-TX": primary
                    },
                    attribute: 'fill'
                }]
            }
    });

    var allocationChart = document.getElementById("allocation-chart");
    var allocationCtx = allocationChart.getContext('2d');
    var allocationData = {
        labels: ["California", "Texas", "New York", "Florida", ],
          datasets: [
            {
                fill: true,
                backgroundColor: [info, primary, success, warning],
                data: [300, 500, 100, 200]
            }
        ]
    };

    var allocationConfig = new Chart(allocationCtx, {
        type: 'doughnut',
        data: allocationData,
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            cutoutPercentage: 75
        }
    });

    var lineChart = document.getElementById("line-chart");
    var myChart1 = new Chart(lineChart, {
        type: 'line',
        data: {
                labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                datasets: [{
                    backgroundColor: "rgba(48, 164, 255, 0.5)",
                    borderColor: "rgba(48, 164, 255, 0.8)",
                    data: ['1020', '1025', '1040','1030', '1035', '1045','1050', '1055', '1050','1054', '1057', '1059'],
                    label: '',
                    fill: true
                }]
        },
        options: {
            responsive: true,
            title: {display: false,text: 'Chart'},
            legend: {position: 'top',display: false,},
            tooltips: {mode: 'index',intersect: false,},
            hover: {mode: 'nearest',intersect: true},
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Months'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Stock Price'
                    }
                }]
            }
        }
    });

})(jQuery);