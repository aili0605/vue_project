export const notificationService = {
  sendSuccess: (message) => {
    console.log(`[NOTIFY]: ${message}`);
    // здесь позже можно добавить отправку email / Telegram / push
  },
};
