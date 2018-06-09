// grabs div from options.html
let page = document.getElementById('buttonDiv');
// provides several color options to color background
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
// for each item in the above const var, create a button that on click will
// change the color stored in the storage api that is used to color
// the background of the chrome dev site
// and report the change to the web console
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonColors);
