# JIRA Branch Name Generator
This is a Chrome extension that generates a branch name based on the JIRA issue key and priority.

## Installation

1- Clone this repository or download the source code as a ZIP file and extract it.
2- Open the Chrome browser and go to the Extensions page (chrome://extensions/).
3- Enable "Developer mode" by toggling the switch in the top-right corner of the page.
4- Click on the "Load unpacked" button in the top-left corner of the page.
5- Select the directory containing the extension's source code and click "Open".
6- The extension should now be installed and visible in the list of extensions.

## Usage
1- Open a JIRA issue in your Chrome browser.
2- Click the extension's icon in the Chrome toolbar to open the popup window.
3- Click the "Generate Branch Name" button in the popup window.
4- The branch name will be generated based on the JIRA issue key and priority, and copied to the clipboard.
5- Paste the branch name wherever you need to use it (e.g. in your Git client).

## Notes

- This extension currently only works with JIRA instances that are accessible over the internet (i.e. not behind a firewall or VPN).
- The extension requires permission to access the active tab and write to the clipboard. Please read the source code carefully before installing the extension.