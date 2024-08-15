import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "b5fdcf1ed5a547ca815fa4b5f0dcebed"
    }
})