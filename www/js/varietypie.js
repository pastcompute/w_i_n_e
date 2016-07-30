function makeVarietyPieData() { return {
	"header": {
		"title": {
			"text": "Australian Grape Varieties",
			"fontSize": 34,
			"font": "courier"
		},
		"subtitle": {
			"text": "Summary of top 10 Grape Varieties grown in Australia, hectares",
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"location": "top-left",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "Footer",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "95%",
		"pieOuterRadius": "70%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Spiders",
				"value": 2,
				"color": "#333333"
			},
			{
				"label": "Mother-in-laws",
				"value": 10,
				"color": "#444444"
			},
			{
				"label": "Sharks",
				"value": 8,
				"color": "#555555"
			},
			{
				"label": "Alien invasion",
				"value": 8,
				"color": "#666666"
			},
			{
				"label": "Learning Objective-C",
				"value": 5,
				"color": "#777777"
			},
			{
				"label": "Public speaking",
				"value": 3,
				"color": "#888888"
			},
			{
				"label": "Donald Rumsfeld",
				"value": 4,
				"color": "#999999"
			},
			{
				"label": "The Zombie Apocalypse",
				"value": 4,
				"color": "#cb2121"
			},
			{
				"label": "The City of Winnipeg *",
				"value": 3,
				"color": "#830909"
			},
			{
				"label": "IE 6",
				"value": 2,
				"color": "#923e99"
			},
			{
				"label": "Planes with/out snakes",
				"value": 5,
				"color": "#ae83d5"
			},
			{
				"label": "Off-by-one errors",
				"value": 3,
				"color": "#111111"
			},
			{
				"label": "Chickadees",
				"value": 4,
				"color": "#050505"
			},
			{
				"label": "A never-ending Harper Government",
				"value": 1,
				"color": "#646464"
			},
			{
				"label": "Canada",
				"value": 4,
				"color": "#747474"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
} };