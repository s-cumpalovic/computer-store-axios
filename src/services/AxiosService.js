import axios from "axios"

class AxiosService{
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://jsonplaceholder.typicode.com',
        })
    }
}

export const axiosObj = new AxiosService().axiosInstance;
