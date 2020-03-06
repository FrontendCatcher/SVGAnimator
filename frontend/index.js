var svg = document.getElementById("cups");
var s = Snap(svg);

var teambubble = Snap.select('#team');
var humanbubble = Snap.select('#human');
var careerbubble = Snap.select('#career');
var workbubble = Snap.select('#work');

var teamtext = Snap.select('#text-team');
var humantext = Snap.select('#text-human');
var careertext = Snap.select('#text-career');
var worktext = Snap.select('#text-work');

var wholeBrain = Snap.select('#whole-brain');

var teambubblePoints = teambubble.node.getAttribute('d');
var wholeBrainPoints = wholeBrain.node.getAttribute('d');

var teamcontent = document.getElementById("teamcontent");

/* 
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
 */
// animationfunctions

showTeams = function(){
	teambubble.animate({ d: wholeBrainPoints }, 1000, mina.backout, function(){});
	workbubble.attr('display', 'none');
	careerbubble.attr('display', 'none');
	humanbubble.attr('display', 'none');
	
	humantext.attr('display', 'none');
	careertext.attr('display', 'none');
	worktext.attr('display', 'none');
	
	
	teambubble.unclick(showTeams);
	teambubble.click(goBack);

	teamcontent.classList.add("show");
}

goBack = function () {
	
    teambubble.animate({ d: teambubblePoints }, 200, mina.linear, function(){
		
	workbubble.attr('display', undefined);
	careerbubble.attr('display', undefined);
	humanbubble.attr('display', undefined);
	
	humantext.attr('display', undefined);
	careertext.attr('display', undefined);
	worktext.attr('display', undefined);
		
	}); 
	
	teamcontent.classList.remove("show");
	


	teambubble.unclick(goBack);
	teambubble.click(showTeams);
	
}


// init handlers
teambubble.click(showTeams);


// toSimple();

// click handlers