import axios from "../axios.interceptor";
const API_URL = "/product/";
let Product_API = {
  fetch: async (page: number) => {
    console.log("FETCH CALL", API_URL);
    return await axios({
      url: API_URL,
      method: "GET",
      params: { currentPage: page },
    });
  },
  fetchHotProducts: async () => {
    return await axios({
      url: API_URL + "hot",
      method: "POST",
    });
  },
  fetchVitaminProducts: async (page: number) => {
    return await axios({
      url: API_URL + "cat/vitamins",
      method: "POST",
      data: { currentPage: page },
    });
  },
  fetchCatFoods: async (page: number) => {
    return await axios({
      url: API_URL + "cat/foods",
      method: "POST",
      data: { currentPage: page },
    });
  },
  fetchCatBreed: async (page: number) => {
    return await axios({
      url: API_URL + "cat/breeds",
      method: "POST",
      data: { currentPage: page },
    });
  },
  fetchCatSeed: async (page: number) => {
    return await axios({
      url: API_URL + "cat/seeds",
      method: "POST",
      data: { currentPage: page },
    });
  },
  fetchCatToys: async (page: number) => {
    return await axios({
      url: API_URL + "cat/toys",
      method: "POST",
      data: { currentPage: page },
    });
  },
  fetchCatPate: async (page: number) => {
    return await axios({
      url: API_URL + "cat/pate",
      method: "POST",
      data: { currentPage: page },
    });
  },
  fetchCatClothes: async (page: number) => {
    return await axios({
      url: API_URL + "cat/clothes",
      method: "POST",
      data: { currentPage: page },
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
