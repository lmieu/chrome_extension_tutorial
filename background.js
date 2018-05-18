// onInstalled - fires when extension is first installed, updates to a new version, and when Chrome updates to a new version
// INFO: https://developer.chrome.com/apps/runtime#event-onInstalled
chrome.runtime.onInstalled.addListener(function() {
  // storage - API locally stores user data which can be accessed by content scripts
  // doesn't require a background page, but requires storage permission in manifest.json
  // performs asynchronous bulk read/write ops
  // in this instance, sets a hash object in local storage of chrome with a hexcode for a shade of green
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});
