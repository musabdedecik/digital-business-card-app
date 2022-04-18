import axios from "axios";
const API_URL = "http://localhost:3000";


export const getQuery = async (path: string, cb: any) => {
    try {
        const { data } = await axios.get(`${API_URL}/${path}`);
        if (data) {
            cb(data)
        }
    }
    catch (error) {
        console.error(error)
    }
}