import axios from "axios"

export const postAPI = async (object) => {
    try {
        const apiKey = import.meta.env.VITE_mockapi
        
        const data = await axios.post(`https://${apiKey}.mockapi.io/post`, object)
        console.log(data)
        return data.data

    } catch(error) {
        return error
    }
}