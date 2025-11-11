// Получаем текущий URL
async function getCurrentTabUrl() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.url;
}

document.addEventListener("DOMContentLoaded", async () => {
  const url = await getCurrentTabUrl();
  document.getElementById("urlText").textContent = url;

  document.getElementById("saveBtn").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "addItem", url }, (response) => {
      const status = document.getElementById("status");
      if (response?.success) {
        status.textContent = "✅ Ссылка сохранена в Wishlist!";
      } else {
        status.textContent = "⚠️ Ошибка при сохранении.";
      }
    });
  });
});
