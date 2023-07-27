chrome.devtools.panels.elements.createSidebarPane("GD Styles", (pane) => {
  chrome.devtools.panels.elements.onSelectionChanged.addListener(() => {
    chrome.devtools.inspectedWindow.eval("parseDOM($0)", {
      useContentScriptContext: true,
    });
  });
  pane.setPage("pane/pane.html");
});
