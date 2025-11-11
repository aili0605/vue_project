export const formatPrice = (price) => {
  return Number(price).toLocaleString("ru-RU", {
    style: "currency",
    currency: "KZT",
  });
};
