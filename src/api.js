import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL
const apiToken = process.env.REACT_APP_TOKEN

export const getMovie = async() =>{
    const movie = await axios.get(
        `${baseUrl}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}
export const getTrendingDay = async() =>{
    const movie = await axios.get(
        `${baseUrl}/trending/movie/day?language=en-US&api_key=${apiKey}`)
    return movie.data.results
    
}
export const getTrendingWeek = async() =>{
    const movie = await axios.get(
        `${baseUrl}/trending/movie/week?language=en-US&api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovie = async(q) =>{
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}