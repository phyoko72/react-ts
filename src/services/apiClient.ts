import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

class APIClient<T> {
    constructor(public endpoint: string) {}
    getAll = async () => {
        const res = await axiosInstance.get<T[]>(this.endpoint)
        return res.data
    }
    post = async (data: T) => {
        const res = await axiosInstance.post<T>(this.endpoint, data)
        return res.data
    }
}

export default APIClient
