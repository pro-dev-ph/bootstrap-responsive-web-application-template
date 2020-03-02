// Progress & Slider JavaScripts

(function ($) {
	'use strict';

	var horizonDefault = document.getElementById('horizon-default');
	var horizonPrimary = document.getElementById('horizon-primary');
	var horizonSuccess = document.getElementById('horizon-success');
	var horizonInfo = document.getElementById('horizon-info');
	var horizonWarning = document.getElementById('horizon-warning');
	var horizonDanger = document.getElementById('horizon-danger');

	var verticalDefault = document.getElementById('vertical-default');
	var verticalPrimary = document.getElementById('vertical-primary');
	var verticalSuccess = document.getElementById('vertical-success');
	var verticalInfo = document.getElementById('vertical-info');
	var verticalWarning = document.getElementById('vertical-warning');
	var verticalDanger = document.getElementById('vertical-danger');

	var rangeSlider = document.getElementById('range-slider');
	var dragSlider = document.getElementById('drag-slider');
	var stepSlider = document.getElementById('step-slider');

	noUiSlider.create(horizonDefault, {
		start: 30,
		connect: "lower",
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(horizonPrimary, {
		start: 60,
		connect: "lower",
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(horizonSuccess, {
		start: 50,
		connect: "lower",
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(horizonInfo, {
		start: 80,
		connect: "lower",
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(horizonWarning, {
		start: 20,
		connect: "lower",
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(horizonDanger, {
		start: 50,
		connect: "lower",
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(verticalDefault, {
		start: 30,
		connect: "lower",
		orientation: 'vertical',
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(verticalPrimary, {
		start: 60,
		connect: "lower",
		orientation: 'vertical',
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(verticalSuccess, {
		start: 50,
		connect: "lower",
		orientation: 'vertical',
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(verticalInfo, {
		start: 80,
		connect: "lower",
		orientation: 'vertical',
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(verticalWarning, {
		start: 20,
		connect: "lower",
		orientation: 'vertical',
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(verticalDanger, {
		start: 50,
		connect: "lower",
		orientation: 'vertical',
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(rangeSlider, {
		connect: true,
		behaviour: 'tap',
		start: [ 300, 800 ],
		range: {
			'min': [ 0 ],
			'max': [ 1000 ]
		}
	});

	var nodes = [
		document.getElementById('range-min'), // 0
		document.getElementById('range-max')  // 1
	];

	// Display the slider value and how far the handle moved
	// from the left edge of the slider.
	rangeSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
		nodes[handle].innerHTML = '$' + values[handle] ;
	});

	noUiSlider.create(dragSlider, {
		connect: true,
		behaviour: 'tap',
		start: [ 200, 500 ],
		behaviour: 'drag',
		range: {
			'min': [ 0 ],
			'max': [ 1000 ]
		}
	});

	var dragNodes = [
		document.getElementById('drag-min'), // 0
		document.getElementById('drag-max')  // 1
	];

	// Display the slider value and how far the handle moved
	// from the left edge of the slider.
	dragSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
		dragNodes[handle].innerHTML = '$' + values[handle] ;
	});

	noUiSlider.create(stepSlider, {
		start: 20,
		connect: "lower",
		range: {
			min: 0,
			max: 100
		},
		pips: {
			mode: 'values',
			values: [0,10,20,30,40,50,60,70,80,90,100],
			density: 10
		}
	});

})(jQuery);