// check for a Slack 'Redirecting… | Slack' title with a xyz.slack.com url, wait 5 seconds and then close the tab

var regex = /^((http[s]?):\/)?\/?((\/\w+)*)(.*)(\.slack\.com)(.*)/;
var title = "Redirecting… | Slack";

function closeSlackTab(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        if (regex.test(changeInfo.url) && changeInfo.title === title) {
            browser.tabs.remove(tabId);
        }
    }
}

browser.tabs.onUpdated.addListener(closeSlackTab);
