import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-app-burger-96fd4-default-rtdb.firebaseio.com/",
});

export default instance;