var gameData = {
  pixels: 0,
  pixelsPerClick: 1,
  pixelsPerClickCost: 10
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
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width ++; 
      elem.style.width = width + '%'; 
    }
  }
}

var mainGameLoop = window.setInterval(function() {
 renderpixels()
 move()
}, 1000)


