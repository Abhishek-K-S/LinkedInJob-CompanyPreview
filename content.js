let lastCompanyUrl = null;

function extractCompany() {
  const companyLink = document.querySelector(
    '[aria-label^="Company, "] p a'
  );

  console.log("[PLUGIN][content.js]", "Company link", companyLink.href);

  const companyName =
    companyLink?.textContent?.trim() ||
    document.querySelector(
      '.job-details-jobs-unified-top-card__company-name'
    )?.textContent?.trim();

  const companyUrl = companyLink?.href || null;

  console.log("[PLUGIN][content.js]", "Company name", companyName);

  if (!companyName) {
    return;
  }

  const company = {
    name: companyName,
    url: companyUrl
  };

  const key = `${company.name}:${company.url}`;

  if (key === lastCompanyUrl) {
    return;
  }

  lastCompanyUrl = key;

  chrome.runtime.sendMessage({
    type: "company-selected",
    company
  });
}

const observer = new MutationObserver(() => {
  extractCompany();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

extractCompany();
