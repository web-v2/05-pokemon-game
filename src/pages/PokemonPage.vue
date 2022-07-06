<template>
  <div>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
      <h1>¿Quién es este pokémon?</h1>
      <PokemonPictureVue :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
      <PokemonOptionsVue :pokemons="pokemonArr" @selectionPokemon="checkAnswer"/>    

      <template v-if="showAnswer">
        <h2 v-if="verify" class="fade-in resp-tru">{{ message }}</h2>
        <h2 v-else class="fade-in resp-false">{{ message }}</h2>
        <button @click="newGame" class="btn-newGame">Nuevo Juego</button>
      </template>
      <h3>Desarrollado por Samir V2.</h3>
    </div>
  </div>
</template>

<script>
import PokemonPictureVue from '@/components/PokemonPicture.vue'
import PokemonOptionsVue from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'


export default {
  components: { PokemonPictureVue, PokemonOptionsVue },
  data(){
    return{
        pokemonArr:   [],
        pokemon:      null,
        showPokemon:  false,
        showAnswer:   false,
        message:      '',
        verify:       false
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
        this.verify = true
        this.message = `Correcto, es ${this.pokemon.name}`
      }else{
        this.verify = false
        this.message = `Oops, era ${this.pokemon.name}`
      }

    },
    newGame(){
      this.showPokemon  = false
      this.showAnswer   = false
      this.pokemonArr   = []
      this.pokemon      = null
      this.mixPokemonsArray()
    }
  },
  mounted(){
    this.mixPokemonsArray()
  }
}
</script>

<style scoped>
.btn-newGame {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
}
.resp-tru{
  color:#3d9640;
  text-align: center;
  font-weight: bold;
}
.resp-false{
  color:#e91644;
  text-align: center;
}
</style>