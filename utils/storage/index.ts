let CartEvents = {
  add: (object: any) => {
    let cartList = CartEvents.get();
    let temp: any[] = [];
    if (cartList) {
      console.log("CART", JSON.parse(cartList));
      temp = JSON.parse(cartList);
      temp.push(object);
    } else {
      temp.push(object);
    }

    localStorage.setItem("managerCart", JSON.stringify(temp));
  },
  get: () => {
    return localStorage.getItem("managerCart");
  },
  delete: () => {
    return localStorage.removeItem("managerCart");
  },
};

export default CartEvents;
