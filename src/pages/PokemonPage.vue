<template>
  <div>
    <h1>¿Quién es este Pokemon?</h1>
    <PokemonPictureVue :pokemonId="250" :showPokemon="true"/>
    <PokemonOptionsVue :pokemons="pokemonArr"/>    
  </div>
</template>

<script>
import PokemonPictureVue from '@/components/PokemonPicture.vue'
import PokemonOptionsVue from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'
//console.log(getPokemonOptions());

export default {
  components: { PokemonPictureVue, PokemonOptionsVue },
  data(){
    return{
        pokemonArr: []
    }
  },
  methods: { 
    async mixPokemonsArray(){
      this.pokemonArr = await getPokemonOptions();      
    }
  },
  mounted(){
    this.mixPokemonsArray()
    //console.log('Mounted');
  }
}
</script>