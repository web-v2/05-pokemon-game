<template>
  <div>
    <h1>¿Quién es este Pokemon?</h1>
    <PokemonPictureVue :pokemonId="250" :showPokemon="true"/>
    <PokemonOptionsVue/>    
  </div>
</template>

<script>
import PokemonPictureVue from '@/components/PokemonPicture.vue'
import PokemonOptionsVue from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'
//console.log(getPokemonOptions());

export default {
  components: { PokemonPictureVue, PokemonOptionsVue }
}
</script>