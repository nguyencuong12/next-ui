import { objectTraps } from "immer/dist/internal";
import CartInterface from "../../interfaces/cart";

interface updateInterface {
  amount: number;
  id: string;
}

let CartEvents = {
  add: (object: any) => {
    let cartList = CartEvents.get();
    let temp: any[] = [];
    if (cartList) {
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
  update: (object: updateInterface) => {
    let cartList = JSON.parse(CartEvents.get()!);
    let temp: any[] = [];
    temp = cartList;
    let obj = temp.find((data: any) => data.id === object.id);
    obj.amount = object.amount;
    localStorage.setItem("managerCart", JSON.stringify(temp));
    window.dispatchEvent(new Event("storage"));

    // console.log("found", obj);
  },
  deleteItem: (id: string) => {
    console.log("OBJECT ID", id);
    let cartList = JSON.parse(CartEvents.get()!);
    let temp: any[] = [];
    temp = cartList;
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp.splice(i, 1);
      }
    }
    localStorage.setItem("managerCart", JSON.stringify(temp));
    window.dispatchEvent(new Event("storage"));
  },
};

export default CartEvents;
