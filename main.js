var gameData = {
  pixels: 0,
  pixelsPerClick: 1,
  pixelsPerClickCost: 10,
  percupgr: 0
  }

function renderpixels() {
  gameData.pixels += gameData.pixelsPerClick
  document.getElementById('pixelsrendered').innerHTML = gameData.pixels + " Pixels Rendered"
}

function buypixelsPerClick() {
  if (gameData.pixels >= gameData.pixelsPerClickCost) {
    gameData.pixels -= gameData.pixelsPerClickCost
    gameData.pixelsPerClick += 1
    gameData.pixelsPerClickCost *= 2
    document.getElementById("pixelsrendered").innerHTML = gameData.pixels + " Pixels Rendered"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Computer (Level " + gameData.pixelsPerClick + ") Cost : " + gameData.pixelsPerClickCost + " Pixels"
  }
}

function move() {
  var elem = document.getElementById("myBar"); 
  
    gameData.percupgr = gameData.pixels / gameData.pixelsPerClickCost;
	gameData.percupgr = gameData.percupgr * 100;
	if (gameData.percupgr >= 100) {
	  elem.style.width = 100 + '%';
    } 
	else {
      elem.style.width = gameData.percupgr + '%'; 
    }
  
}

var mainGameLoop = window.setInterval(function() {
 renderpixels()
 move()
}, 1000)


