import axios from "axios";

const BASE_URL = "http://localhost:3002/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**** 
 MENU ENDPOINTS
****/
//Get all menu items
export const getMenuItems = () => {
  return api.get("/menu");
};

//POST menu items
export const uploadMenuItems = (formData) => {
  return api.post("/menu/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export default api;
