// Load this js before the frontpie

var FrontPie;

_.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };

//var TP_REGION = _.template("<a href='{{xref}}'><img src='{{url}}' data-title='{{title}}' data-description='{{desc}}'></img></a>");

var Screens = {
  INITIAL: 'initial'
};

var data = {
  screen: Screens.INITIAL,
};

var Router = function() {};

var vp = null;

var colours = [ "green", "blue", "lime", "olive", "teal", "darkgreen", "darkseagreen"];

Router.prototype.handleTopWedge = function(url) {
  // This is just an id actually
  console.log(url);
  $('.whole').show();
  $(url).show();
  $('#mainpie').hide();
  
  
  if (url === '#varieties') {
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
    
    
    vp = new d3pie('variety-pie', vdata);
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
  
  //var html = IMG_FRAGMENT({ xref : v.Image, url: v.Image, title : v.Title, desc: v.Description });
  //var img = $(html);
  //$('#carousel').append(img);

  // Build a pie chart of Australia region varieties
  
  $('.pageover').on('click', function(e) { $('.pageover').hide(); $('.whole').hide(); $('#mainpie').show();});
}

var p1 = new Promise(function(resolve, reject) { console.log(5); d3.json('assets/au-region-variety.json', function(json) { onRegionVarieties(json); resolve(); }); });

$(document).ready(function() {
  console.log(1);
  $('.pageover').removeAttr('hidden').hide();
  $('.whole').removeAttr('hidden').hide();
});

console.log(0);
