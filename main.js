var gameData = {
  pixels: 0,
  pixelsPerClick: 1,
  pixelsPerClickCost: 10,
  percupgr: 0,
  colorpix: 0,
  r: 1,
  g: 1,
  b: 1
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
	  elem.innerHTML = 100 + '%';
    } 
	else {
      elem.style.width = gameData.percupgr + '%'; 
	  elem.innerHTML = Math.round(gameData.percupgr * 100) / 100 + '%';
    }
  
}






    var image = new Image();

function updatescreen(){




	// create an offscreen canvas
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    // size the canvas to your desired image
    canvas.width = 480;
    canvas.height = 300;

    // get the imageData and pixel array from the canvas
    var imgData = ctx.getImageData(0, 0, 480, 300);
    var data = imgData.data;

    // manipulate some pixel elements
    for (var i = 0; i < data.length; i += 4) {
        data[i] = gameData.r; // set every red pixel element
		data[i + 1] = gameData.g;
		data[i + 2] = gameData.b;
        data[i + 3] = 255; // make this pixel opaque
		
		
	}

    // put the modified pixels back on the canvas
    ctx.putImageData(imgData, 0, 0);

    // create a new img object


    // set the img.src to the canvas data url
    image.src = canvas.toDataURL();


    
}





























var mainGameLoop = window.setInterval(function() {
 gameData.r++;
 gameData.g++;
 gameData.b++;
 updatescreen()
 //tym renderuje screena
 document.body.appendChild(image);
 
 renderpixels()
 move()
 
}, 100)


