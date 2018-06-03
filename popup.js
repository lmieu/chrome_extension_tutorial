let changeColor = document.getElementById('changeColor');

// grabs color set by background.js and sets the button color in the popup
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
