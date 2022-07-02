import axios from 'axios'

const pokemonAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default pokemonAPI