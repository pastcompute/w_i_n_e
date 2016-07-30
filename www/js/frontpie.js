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
		"text": "https://2016.hackerspace.govhack.org/content/wine",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieOuterRadius": "90%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "Grape Varieties",
				"value": 100,
				"color": "#043a00",
        "url"  : "#varieties"
			},
			{
				"label": "Wine Regions",
				"value": 100,
				"color": "#0f4904",
        "url": "#regions"
			},
			{
				"label": "Competitors",
				"value": 100,
				"color": "#155d07",
        "url" : "#competition"
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
				"color": "#2ea217",
        "url": "#resources"
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
			"color": "#c1a423",
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