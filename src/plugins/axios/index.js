import axios from "axios";
// import interceptors from "./interceptors";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/comments",
});

// interceptors(instance);

export default instance;
