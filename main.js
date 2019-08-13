var gameData = {
  pixels: 0,
  pixelsPerClick: 1
}

function renderpixels() {
  gameData.pixels += gameData.pixelsPerClick
  document.getElementById('pixelsrendered').innerHTML = gameData.pixels + " Pixels Rendered"
}
