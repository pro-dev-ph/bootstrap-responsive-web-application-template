/*------------------------------------------------------------------
* Bootstrap Responsive Web Application Template
* Email: heyalexluna@gmail.com
* Version: 1.1
* Last change: 2020-03-02
* Author: Alexis Luna
* Copyright 2019 Alexis Luna
* Website: https://github.com/mralexisluna/bootstrap-responsive-web-application-template
-------------------------------------------------------------------*/
// Charjs JavaScripts

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

    //Pie Chart
	var pieChart = document.getElementById("pie-chart");
    var pieCtx = pieChart.getContext('2d');
    var pieData = {
        labels: ["Chrome", "IE", "FireFox"],
          datasets: [
            {
                fill: true,
                backgroundColor: [success, info, primary],
                data: [6, 2, 5]
            }
        ]
    };

    var pieConfig = new Chart(pieCtx, {
        type: 'pie',
        data: pieData,
        options: {
            maintainAspectRatio: false,
            hover: {mode: null},
            legend: {
                display: false
            },
        }
    });

    //Donut Chart
    var donutChart = document.getElementById("donut-chart");
    var donutCtx = donutChart.getContext('2d');
    var donutData = {
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
          datasets: [
            {
                fill: true,
                backgroundColor: [info, dark, success],
                data: [300, 500, 100]
            }
        ]
    };

    var donutConfig = new Chart(donutCtx, {
        type: 'doughnut',
        data: donutData,
        options: {
            maintainAspectRatio: false,
            hover: {mode: null},
            legend: {
                display: false
            },
            cutoutPercentage: 75
        }
    });

    //Radar Chart
    var radarChart = document.getElementById("radar-chart");
    var radarCtx = radarChart.getContext('2d');

    var radarConfig = new Chart(radarCtx, {
        type: 'radar',
        data: {
        labels: ["Cooking", "Drinking", "Sleeping", "Singing", "Walking", "Jogging", "Swimming"],
        datasets: [{
            label: 'label1',
            backgroundColor: successInverse,
            borderColor: success,
            pointBackgroundColor: success,
            data: [65, 59, 90, 81, 56, 55, 40]
        }, {
            label: 'label2',
            backgroundColor: warningInverse,
            borderColor: warning,
            pointBackgroundColor: warning,
            data: [28, 48, 40, 19, 96, 27, 100]
        }]
      },
        
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        }
    });

    //Polar Chart
    var polarChart = document.getElementById("polar-chart");
    var polarCtx = polarChart.getContext('2d');
    var polarData = {
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
          datasets: [
            {
                fill: true,
                backgroundColor: [success, info, warning, primary, danger],
                data: [300, 400, 100, 200, 100]
            }
        ]
    };

    var polarConfig = new Chart(polarCtx, {
        type: 'polarArea',
        data: polarData,
        options: {
            maintainAspectRatio: false,
            hover: {mode: null},
            legend: {
                display: false
            }
        }
    });

    //Line Chart
    var lineChart = document.getElementById("line-chart");
    var lineCtx = lineChart.getContext('2d');
    lineChart.height = 80;
    var lineConfig = new Chart(lineCtx, {
        type: 'line',
        data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: 'Series A',
            backgroundColor: infoInverse,
            borderColor: info,
            pointBackgroundColor: info,
            borderWidth: 2,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Series B',
            backgroundColor: successInverse,
            borderColor: success,
            pointBackgroundColor: success,
            borderWidth: 2,
            data: [28, 48, 40, 19, 86, 27, 90]
            }]
        },
        
        options: {
            legend: {
                display: false
            }
        }
    });

    //Bar Chart
    var barChart = document.getElementById("bar-chart");
    var barCtx = barChart.getContext('2d');
    barChart.height = 80;
    var barConfig = new Chart(barCtx, {
        type: 'bar',
        data: {
        labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: 'Series A',
            backgroundColor: infoInverse,
            borderColor: info,
            pointBackgroundColor: info,
            borderWidth: 2,
            data: [65, 59, 80, 81, 56, 55, 40, 37, 54, 76, 63, 62]
        },
        {
            label: 'Series B',
            backgroundColor: dangerInverse,
            borderColor: danger,
            pointBackgroundColor: danger,
            borderWidth: 2,
            data: [28, 48, 40, 19, 86, 27, 90, 43, 65 ,76, 87, 85]
            }]
        },
        
        options: {
            legend: {
                display: false
            }
        }
    });

})(jQuery);