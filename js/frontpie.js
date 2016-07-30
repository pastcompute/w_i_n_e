// Very not AMD / modular hack

$(document).ready(function() {
console.log('bake pie 1');
FrontPie = new d3pie("mainpie", {
	"header": {
		"title": {
			"text": "Wine Industry National Explorer",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "Assisting economic growth for grape growers and viticulture",
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"text": "A GovHack Unleashed 2016 entry by team Innovation Generation",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 690,
		"pieOuterRadius": "95%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "Varieties",
				"value": 85,
				"color": "#043a00",
        "url"  : "#varieties"
			},
			{
				"label": "Regions",
				"value": 110,
				"color": "#0f4904",
        "url": "#regions"
			},
			{
				"label": " Competitors",
				"value": 105,
				"color": "#eeeeee",
        "url" : "#competition"
			},
			{
				"label": "Employment",
				"value": 100,
				"color": "#eeeeee",
        "url" : "#employment"
			},
			{
				"label": "Economy",
				"value": 100,
				"color": "#eeeeee",
        "url" : "#economy"
			},
			{
				"label": "Vineyards",
				"value": 100,
				"color": "#207f0e",
        "url": "#vineyards"
			},
			{
				"label": "Resources",
				"value": 100,
				"color": "#eeeeee",
        "url": "#resources"
			},
			{
				"label": "Threats",
				"value": 100,
				"color": "orange",
        "url": "#threats"
			},
			{
				"label": "In the news",
				"value": 100,
				"color": "#eeeeee",
        "url": "#news"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 32
		},
		"inner": {
			"format": "label",
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"color": "white", 
			"fontSize": 17
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
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
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	},
	"callbacks": {
    "onClickSegment": function(e) { console.log(JSON.stringify(e)); router.handleTopWedge(e.data.url); }
  }
});

});