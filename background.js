chrome.contextMenus.create({
    id: "wrapText",
    title: "Wrap Selected Text",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "wrapText") {
      chrome.tabs.sendMessage(tab.id, { action: "wrapText", color: "red" });
    }
  });
  
  chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var tab = tabs[0];
      var color = "";
      if (command === "wrap-red") {
        color = "red";
      } else if (command === "wrap-green") {
        color = "green";
      } else if (command === "wrap-blue") {
        color = "blue";
      }
      chrome.tabs.sendMessage(tab.id, { action: "wrapText", color: color });
    });
  });