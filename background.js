let companyWindowId = null;

chrome.runtime.onMessage.addListener((message) => {
  if (message.type !== "company-selected") {
    return;
  }

  const companyUrl = message.company?.url;

  if (!companyUrl) {
    return;
  }

  openCompanyWindow(companyUrl);
});

async function openCompanyWindow(companyUrl) {
  if (companyWindowId !== null) {
    try {
      const existingWindow = await chrome.windows.get(companyWindowId);

      await chrome.tabs.update(existingWindow.tabs[0].id, {
        url: companyUrl
      });

      await chrome.windows.update(companyWindowId, {
        focused: true
      });

      return;
    } catch {
      companyWindowId = null;
    }
  }

  const newWindow = await chrome.windows.create({
    url: companyUrl,
    type: "popup",
    width: 500,
    height: 800,
    left: 1400,
    top: 100,
    focused: true
  });

  companyWindowId = newWindow.id;
}