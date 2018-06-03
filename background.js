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
  
  // declarativeContent - designates actions to be taken depending on 
  // the content of the page, without asking for permission to access content
  // in this, when the page changes, unregisters rules indiscriminately
  // since no array of rule identifiers is passed as the first argument
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // adds rules when page is changed given the condition of it being
    // the developer's chrome site, and shows the "page_action", which in 
    // this case is the popup
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
