## Description

Demonstration for a bug in Firefox's WebExtensions implementation where muted tabs do not correctly report the `audible` property.

## Steps to Reproduce

1. Clone the repository and load it as a temporary extension
from `about:debugging`
2. Open the extension console in one tab, and in another tab
open a page that plays audio, and allow the audio to play.
3. Use the extension's keyboard shortcut (`Ctrl+Shift+U` by default) to log the number of audible tabs to the extension console. The message "There are 1 audible tabs." should appear.
4. Mute the audible tab.
5. If you trigger the keyboard shortcut immediately after muting,
the extension will again report 1 audible tab.
6. If you wait a few more (3-5) seconds, the extension will report 0
audible tabs, even if the tab is still trying to play audio.

## Why this is a bug

According to [MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) and
[Chrome's docs](https://developer.chrome.com/extensions/tabs#method-query), the `audible` property should be `true`
whether the tab is muted or not, as long as it is producing
audio. When running this example in Chrome, the extension correctly reports 1 audible tab after muting.