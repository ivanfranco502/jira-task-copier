async function getActiveTab() {
    const tabs = await browser.tabs.query({ currentWindow: true, active: true });
    return tabs[0];
  }
  
  function getIssueKey(pathname) {
    const match = pathname.match(/^\/browse\/(\w+-\d+)/);
    return match ? match[1] : null;
  }
  
  async function getTicketType(issueKey) {
    const response = await fetch(`https://your-jira-domain.atlassian.net/rest/api/2/issue/${issueKey}`);
    const data = await response.json();
    const priorityText = data.fields.priority.name;
    const issueTypeText = data.fields.issuetype.name;
    if (issueTypeText === "Bug") {
      if (["Blocker", "P1", "Sev A", "Reg A", "Reg B", "Critical", "Urgent"].includes(priorityText)) {
        return "hotfix";
      } else {
        return "bugfix";
      }
    } else {
      return "feature";
    }
  }
  
  async function generateBranchName() {
    const tab = await getActiveTab();
    const url = new URL(tab.url);
    const issueKey = getIssueKey(url.pathname);
    const ticketNumber = issueKey;
    const ticketType = await getTicketType(issueKey);
    const branchName = `${ticketType}/${ticketNumber}`;
    navigator.clipboard.writeText(branchName);
    document.getElementById("branchName").textContent = `Copied ${branchName} to clipboard!`;
  }
  
  document.getElementById("generateButton").addEventListener("click", generateBranchName);
  