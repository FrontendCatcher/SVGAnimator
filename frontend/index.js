var svg = document.getElementById("cups");
var s = Snap(svg);

var teambubble = Snap.select('#team');
var teambubble = Snap.select('#team');
var teambubble = Snap.select('#team');
var teambubble = Snap.select('#team');

var wholeBrain = Snap.select('#whole-brain');

var teambubblePoints = teambubble.node.getAttribute('d');
var wholeBrainPoints = wholeBrain.node.getAttribute('d');


var toFancy = function(){
  window.setTimeout(function(){
    simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple)
  }
    , 3000)
  ;  
}

var toSimple = function(){
  
  window.setTimeout(function(){
    simpleCup.animate({ d: simpleCupPoints }, 400, mina.linear, toFancy); 
  }
    , 3000)
  ;  
  
}

// animationfunctions

showTeams = function(){
	teambubble.animate({ d: wholeBrainPoints }, 1000, mina.backout, toSimple)
}

goBack = function () {
	
    teambubble.animate({ d: teambubblePoints }, 400, mina.linear, toFancy); 
}

toSimple();

// click handlers