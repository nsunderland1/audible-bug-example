chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({audible: true}, (tabs) => {
    console.log("There are "+tabs.length+" audible tabs.");
  });
});
