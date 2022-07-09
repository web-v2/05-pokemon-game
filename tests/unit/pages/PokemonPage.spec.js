import {shallowMount, mount} from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import { pokemonsMock } from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de llamar el mixedPokemonsArr al montar ', () => {
        const mixPokemonsArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonsArray')
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonsArraySpy).toHaveBeenCalled()
    })

    test('Debe de hacer match con el snapshot cuando carguen los pakemons', () => {
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr:   pokemonsMock,
                    pokemon:      pokemonsMock[0],
                    showPokemon:  false,
                    showAnswer:   false,
                    message:      '',
                    resultado:    '',
                    verify:       false,
                    ganados:      0,
                    perdidos:     0
                }
              }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de mostrar los components PokemonPicture y PokemonOptions', () => {
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr:   pokemonsMock,
                    pokemon:      pokemonsMock[0],
                    showPokemon:  false,
                    showAnswer:   false,
                    message:      '',
                    resultado:    '',
                    verify:       false,
                    ganados:      0,
                    perdidos:     0
                }
              }
        })
        const picture = wrapper.find('pokemon-picture-vue-stub')
        const options = wrapper.find('pokemon-options-vue-stub')

        expect(picture.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()
        expect(picture.attributes('pokemonid')).toBe('1')
        expect(options.attributes('pokemons')).toBeTruthy()

    })

    test('Pruebas con checkAnswer', async() => {
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr:   pokemonsMock,
                    pokemon:      pokemonsMock[0],
                    showPokemon:  false,
                    showAnswer:   false,
                    message:      '',
                    resultado:    '',
                    verify:       false,
                    ganados:      0,
                    perdidos:     0
                }
              }
        })
        
        await wrapper.vm.checkAnswer(1)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`Correcto, es ${pokemonsMock[0].name}`)
        await wrapper.vm.checkAnswer(15)
        expect(wrapper.vm.message).toBe(` Oops, era ${pokemonsMock[0].name}`)
    })
})