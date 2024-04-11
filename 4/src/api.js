import axios from "axios"

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID XHsHHtG_Q-JvpbIHSstaiptmNuQwWsJzoE4_2M9Frno"
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

const searchFilms = async (term) => {
    const response = await axios.get("http://www.omdbapi.com", {
        params: {
            apikey: "bdfb413f",
            t: term
        }
    });

    return response.data;
}

export {searchImages, searchFilms};