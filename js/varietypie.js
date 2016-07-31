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
		"text": "",
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
			"color": "#black",
			"fontSize": 12
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