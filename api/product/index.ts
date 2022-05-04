import axios from "../axios.interceptor";
const API_URL = "/product/";

let Product_API = {
  fetch: async () => {
    console.log("FETCH CALL", API_URL);
    return await axios({
      url: API_URL,
      method: "GET",
    });
  },
  fetchHotProducts: async () => {
    return await axios({
      url: API_URL + "hot",
      method: "POST",
    });
  },
  fetchFeatureProducts: async () => {
    return await axios({
      url: API_URL + "feature",
      method: "POST",
    });
  },
  fetchProductByID: async (id: string) => {
    return await axios({
      // /site/siteDashboard/:id
      url: API_URL + id,
      method: "GET",
    });
    // product
  },
};
export { Product_API };
