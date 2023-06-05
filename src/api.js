import axios from "axios";

const api = axios.create(
    {
        baseURL: "http://3.222.160.241"
    }
)

export default api;