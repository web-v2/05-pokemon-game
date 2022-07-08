import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
    test('Debe regresar un arreglo de numeros ', () => {
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[649]).toBe(650)
    });
    test('Debe retornar un arrglo de 4 pokemons ', async () => {
        const pokemons = await getPokemonNames([1,2,3,4])
        //console.table(pokemons);
        //console.log(pokemons);
        expect(pokemons[0].name).toBe('bulbasaur')
        expect(pokemons[3].name).toBe('charmander')
        expect(pokemons).toStrictEqual([{ name: 'bulbasaur', id: 1 },{ name: 'ivysaur', id: 2 },{ name: 'venusaur', id: 3 },{ name: 'charmander', id: 4 }])
    });
    test('getPokemonOptions debe retornar un arreglo mezclado', async () => {
        const pokemons = await getPokemonOptions()
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([{ 
                name: expect.any(String), 
                id:   expect.any(Number) 
            },{ 
                name: expect.any(String), 
                id:   expect.any(Number) 
            },{ 
                name: expect.any(String), 
                id:   expect.any(Number) 
            },{ 
                name: expect.any(String), 
                id:   expect.any(Number) 
        }])
    });
});