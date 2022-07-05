<template>
  <div>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
      <h1>¿Quién es este pokémon?</h1>
      <PokemonPictureVue :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
      <PokemonOptionsVue :pokemons="pokemonArr" @selection="checkAnswer"/>    
      <template v-if="showAnswer">
        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame">Nuevo Juego</button>
      </template>
    </div>
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
        pokemonArr:   [],
        pokemon:      null,
        showPokemon:  false,
        showAnswer:   false,
        message:      ''
    }
  },
  methods: { 
    async mixPokemonsArray(){
      this.pokemonArr = await getPokemonOptions(); 
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    }, 
    checkAnswer(id){
      this.showPokemon = true;
      this.showAnswer = true;

      if(id === this.pokemon.id){
        this.message = `Correcto, es ${this.pokemon.name}`
      }else{
        this.message = `Oops, era ${this.pokemon.name}`
      }

    },
    newGame(){
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.mixPokemonsArray()
    }
  },
  mounted(){
    this.mixPokemonsArray()
    //console.log('Mounted');
  }
}
</script>