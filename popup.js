let changeColor = document.getElementById('changeColor');

// grabs color set by background.js and sets the button color in the popup
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

// on click of button on toolbar button, changes background color of 
// website to designated 'color' value
// does so by way of programmatic injection, not code injection
// tabs.executeScript injects js/css code into a page
changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};
