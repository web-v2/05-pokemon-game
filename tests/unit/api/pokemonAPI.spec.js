import pokemonAPI from '@/api/pokemonAPI'
describe('pokemonAPI', () => {
    test('Axios debe estar configurado con la API ', () => {
        expect(pokemonAPI.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')
    });
});