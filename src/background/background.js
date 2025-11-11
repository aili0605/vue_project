chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "addItem" && message.url) {
    const newItem = {
      id: Date.now(),
      url: message.url,
    };

    chrome.storage.local.get({ wishlist: [] }, (data) => {
      const exists = data.wishlist.find((item) => item.url === message.url);
      if (exists) {
        sendResponse({ success: false, error: "Уже есть в списке" });
        return;
      }

      const updated = [...data.wishlist, newItem];
      chrome.storage.local.set({ wishlist: updated }, () => {
        console.log("✅ Ссылка сохранена:", newItem.url);
        sendResponse({ success: true });
      });
    });

    return true; // нужно, чтобы sendResponse работал асинхронно
  }
});
