import axios from "axios";

function useAxios() {
  axios.defaults.baseURL = "http://localhost:8080";
  axios.defaults.withCredentials = true;
}

export default useAxios;
