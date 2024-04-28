chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "wrapText") {
    var selectedText = window.getSelection().toString();
    if (selectedText !== "") {
      var wrappedText = wrapText(selectedText, request.color);
      console.log("Selected text: " + selectedText);
      console.log("Wrapped text: " + wrappedText);
      insertText(wrappedText);
    }
  }
});
  
  function wrapText(text, color) {
    var wrappedText = "<color:" + color + ">" + text + "</color>";
    return wrappedText;
  }
  
  function insertText(text) {
    var activeElement = document.activeElement;
    if (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA" || activeElement.isContentEditable) {
      document.execCommand("insertText", false, text);
      console.log("Inserted wrapped text into the active element");
    } else {
      console.log("No active input field or editable element found");
    }
  }

