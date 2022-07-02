import pokemonAPI from "@/api/pokemonAPI";
const getPokemon = () =>{
    const pokemonArr = Array.from(Array(650));
    return pokemonArr.map( (_,index) => index + 1);
}

const getPokemonOptions = async() =>{
    const mixedPokemons = getPokemon().sort( ()=> Math.random() -0.5 )
    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) );
    console.table(pokemons);
    return pokemons;
}

const getPokemonNames = async(pokemons = []) =>{
    const promesas = pokemons.map((id) => {
      return pokemonAPI.get(`/${id}`);
    }); 

    const respuestas = await Promise.all(promesas);
    const retorno = respuestas.map((rta) => {
      return {
        name: rta.data.name,
        id: rta.data.id,
      };
    });
    return retorno;  
}

export default getPokemonOptions;