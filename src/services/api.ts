import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend URL
});

export const fetchAnalogy = async (concept: string) => {
  const response = await API.post("/generate-analogy", { concept });
  return response.data;
};
