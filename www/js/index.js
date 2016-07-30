// Load this js before the frontpie

var FrontPie;

var Screens = {
  INITIAL: 'initial'
};

var data = {
  screen: Screens.INITIAL,
};

var Router = function() {};

Router.prototype.handleTopWedge = function(url) {
  // This is just an id actually
  console.log(url);
  $('.whole').show();
  $(url).show();
  $('#mainpie').hide();
};

var router = new Router();

function goHome() {
  data.screen = Screens.INITIAL;
}

$(document).ready(function() {
  console.log(1);
  $('.pageover').removeAttr('hidden').hide();
  $('.whole').removeAttr('hidden').hide();
  $('.pageover').on('click', function(e) { $('.pageover').hide(); $('.whole').hide(); $('#mainpie').show();});
});

console.log(0);
