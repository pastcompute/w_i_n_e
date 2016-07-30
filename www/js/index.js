// Load this js before the frontpie

var FrontPie;

_.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };

//var TP_REGION = _.template("<a href='{{xref}}'><img src='{{url}}' data-title='{{title}}' data-description='{{desc}}'></img></a>");

var Screens = {
  INITIAL: 'initial'
};

var data = {
  screen: Screens.INITIAL,
  stateLayers: {},
  bbox: {},
  vp: null,
  map: null
};

var Styles = {
  states: {
    weight: 1,
    opacity: 1,
    color: 'yellow',
    fillOpacity: 0.1
  }
};

var featureOnState = {
  click : onStateClick,
};

var Router = function() {};

var colours = [ "green", "blue", "lime", "olive", "teal", "darkgreen", "darkseagreen"];

Router.prototype.handleTopWedge = function(url) {
  // This is just an id actually
  console.log(url);
  $('.whole').show();
  $(url).show();
  $('#mainpie').hide();


  if (url === '#varieties') {
    if (data.vp == null) {
      var vdata = makeVarietyPieData();
      var list = [];
      var x = 0;
      for (var grape in data.audata) {
        var colour = colours[x++]; if (x > 7) { x = 0; }
        var count = data.audata[grape];
        //console.log(d);
        list.push({label:grape, value:count, color:colour});
      }

      var sorted = _.sortBy(list, 'value');
      vdata.data.content = [];
      for (var n=0; n < 10; n++) {
        if (n < sorted.length)
        vdata.data.content.push(sorted[n]);
      }


      data.vp = new d3pie('variety-pie', vdata);
    }
  }

  if (url === '#regions') {
    var bbox = data.bbox['AUS'].geometry.coordinates[0];
    console.log('Show map ' + bbox[0] + ';' + bbox[2]);
    data.map.fitBounds([ [bbox[0][1], bbox[0][0]], [bbox[2][1], bbox[2][0]] ]); // ffs why is the map lat lon backwards from geojson
  }
};

var router = new Router();

function goHome() {
  data.screen = Screens.INITIAL;
}

function onRegionVarieties(x)
{
  // console.log(JSON.stringify(x));
  data.regionCount = 0;
  data.rvdata = x;
  for (var region in x) {
    if (region === 'Australia Total') {
      // au = x[region];
      // continue;
      data.audata = x[region];
    } else {
      data.regionCount ++;
    }
  }
  $('.pageover').on('click', function(e) { $('.pageover').hide(); $('.whole').hide(); $('#mainpie').show();});
}

function onStateClick(e) {
}

function onCountry(json) {
  var country = json.features[0].id;
  console.log(country);
  var item = L.geoJson(json, {
    onEachFeature: function (feature, layer) { },
    style : function (feature) { return Styles['country_' + country]; }
  }).addTo(data.map);
  data.bbox[country] = turf.envelope(json);
  console.log(JSON.stringify(data.bbox[country]));
  var bbox = data.bbox[country].geometry.coordinates[0];
  console.log(bbox[0] + ';' + bbox[2]);
  //data.map.fitBounds([ [bbox[0][1], bbox[0][0]], [bbox[2][1], bbox[2][0]] ]); // ffs why is the map lat lon backwards from geojson
}


function onStates(json) {
  console.log('states');
  var item = L.geoJson(json, {
    onEachFeature: function (feature, layer) {
      data.stateLayers[feature.properties.STATE_CODE] = layer;
      var x = data.bbox[feature.properties.STATE_CODE] = turf.envelope(feature);
      console.log(JSON.stringify(x));
      layer.on(featureOnState);
    }, // called once for each state
    style : function (feature) { return Styles['states']; }
  });
  data.statesItem = item;
  data.map.addLayer(data.statesItem);
}

  var map = data.map = L.map('region-map', {
      dragging: false,
      touchZoom: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      keyboard: false,
      zoomControl: false,
    });
  var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a  href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }).addTo(map);

var p0 = new Promise(function(resolve, reject) { d3.json('assets/AUS.geo.json', function(json) { onCountry(json); resolve(); }); });
var p1 = new Promise(function(resolve, reject) { d3.json('assets/states.geojson', function(json) { onStates(json); resolve(); }); });
var p = new Promise(function(resolve, reject) { console.log(5); d3.json('assets/au-region-variety.json', function(json) { onRegionVarieties(json); resolve(); }); });

$(document).ready(function() {
  console.log(1);
  $('.pageover').removeAttr('hidden').hide();
  $('.whole').removeAttr('hidden').hide();
});

console.log(0);