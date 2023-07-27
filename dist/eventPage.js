"use strict";
chrome.contextMenus.create({
    id: "GD Styles",
    title: "Get Tailwind styles",
    contexts: ["all"],
});
const getStyles = (info, tab) => {
    let msg = {
        type: "getstyles",
    };
    chrome.tabs.sendMessage(tab.id, msg, () => {
        console.log("Message sent");
    });
};
chrome.contextMenus.onClicked.addListener((info, tab) => {
    getStyles(info, tab);
});
