let formatEvents = {
  priceVND: (price: number) => {
    let result = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price);
    return result;
  },
};
export default formatEvents;
