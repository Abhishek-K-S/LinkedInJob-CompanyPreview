const companyFrame = document.querySelector("#company-frame");

chrome.runtime.onMessage.addListener((message) => {
  if (message.type !== "show-company") {
    return;
  }

  if (!message.company?.url) {
    return;
  }

  companyFrame.src = message.company.url;
});