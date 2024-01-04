import APIClient from "./apiClient"
export interface User {
    id: number
    name: string
    username: string
    email: string
}
export default new APIClient<User>("users")
