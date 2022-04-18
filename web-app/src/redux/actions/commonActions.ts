import axios from "axios";
const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://digital-business-card-app.herokuapp.com/";

export const getQuery = async (path: string, cb: any) => {
  try {
    const { data } = await axios.get(`${API_URL}/${path}`);
    if (data) {
      cb(data);
    }
  } catch (error) {
    console.error(error);
  }
};
