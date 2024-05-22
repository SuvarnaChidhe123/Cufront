import axios from "axios";

export const BASE_URL = "http://localhost:9090/api/v1/employees";

export const myAxious = axios.create({
    baseURL: BASE_URL
});

