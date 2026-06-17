import axios from "axios"

export const getAPI = async () => {
    try {
        const apiKey = import.meta.env.VITE_mockapi
        
        const data = await axios.get(`https://${apiKey}.mockapi.io/post`)
        return data.data

    } catch(error) {
        return error
    }
}