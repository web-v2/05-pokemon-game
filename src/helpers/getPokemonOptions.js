import pokemonAPI from "@/api/pokemonAPI";
const getPokemons = () =>{
    const pokemonArr = Array.from(Array(650));
    return pokemonArr.map( (_,index) => index + 1);
}

const getPokemonOptions = async() =>{
    const mixedPokemons = getPokemons().sort( ()=> Math.random() -0.5 );
    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) );
    console.table(pokemons);
    return pokemons;
}

/*const getPokemonNames = async( [a,b,c,d] = [] ) => {
    const promiseArr = [
        pokemonAPI.get(`/${ a }`),
        pokemonAPI.get(`/${ b }`),
        pokemonAPI.get(`/${ c }`),
        pokemonAPI.get(`/${ d }`)
    ]
    const [ p1, p2, p3, p4 ] = await Promise.all( promiseArr )
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p4.data.name, id: p3.data.id },
        { name: p3.data.name, id: p4.data.id },
    ]
}
*/

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