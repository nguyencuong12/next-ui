import axios from "../axios.interceptor";
import { orderProducts } from "../../interfaces/orderProducts";

let url = "/guest/orders";

let orderProductsAPI = {
  order: (info: orderProducts) => {
    return axios({
      method: "post",
      url: url,
      data: info,
    });
  },
};

export default orderProductsAPI;
