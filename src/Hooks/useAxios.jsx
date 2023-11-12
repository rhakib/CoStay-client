import axios from "axios";

const instance = axios.create({
  baseURL: 'https://costay-11-server.vercel.app',
  withCredentials: true
});

const useAxios = () => {
  return instance;
};

export default useAxios;