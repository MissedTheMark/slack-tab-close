// check for a Slack 'Redirecting… | Slack' title with a xyz.slack.com url, wait 5 seconds and then close the tab

const regex = /^((http[s]?):\/)?\/?((\/\w+)*)(.*)(\.slack\.com)(.*)/;
const title = "Redirecting… | Slack";
const delay = 5000;

function closeSlackTab(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        if (regex.test(changeInfo.url) && changeInfo.title === title) {
            setTimeout(() => browser.tabs.remove(tabId), delay);
        }
    }
}

browser.tabs.onUpdated.addListener(closeSlackTab);
