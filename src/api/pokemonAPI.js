import axios from 'axios'

const pokemonAPI = axios.get({
    baseUrl: 'https://pokeapi.co/api/v2/pokemon'
})

export default pokemonAPI