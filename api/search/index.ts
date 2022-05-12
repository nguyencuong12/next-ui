import axios from "../axios.interceptor";

let url = "/search";
const SearchAPI = {
  search: (searchField: string) => {
    return axios({
      url: url,
      method: "GET",
      params: { searchField },
    });
  },
};
export default SearchAPI;
