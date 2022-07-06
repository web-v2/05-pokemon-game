<template>
  <div class="card">
    <div class="container">
      <h1 v-if="!pokemon">Espere por favor...</h1>
      <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        <PokemonPictureVue :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOptionsVue :pokemons="pokemonArr" @selectionPokemon="checkAnswer"/>    
        <p>Acertados: <strong>{{ganados}}</strong> Errados: <strong>{{perdidos}}</strong></p>
        <template v-if="showAnswer">
          <h2 v-if="verify" class="fade-in resp-tru">{{resultado}}{{ message }}</h2>
          <h2 v-else class="fade-in resp-false">{{resultado}}{{ message }}</h2>
          <button @click="newGame" class="btn-newGame">Nuevo Juego</button>
        </template>
        <h3>Desarrollado por Samir V2 del Curso de Vue.js de <a href="https://fernando-herrera.com/#/" target="_blank">Fernando Herrera</a>.</h3>
      </div>
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
        resultado:    '',
        verify:       false,
        ganados:      0,
        perdidos:     0
    }
  },
  methods: { 
    async mixPokemonsArray(){
      this.pokemonArr = await getPokemonOptions(); 
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    verificarPutuacion (){
      if(this.perdidos >= 5){
        this.perdidos = 0
        this.ganados  = 0
      } 
      if(this.ganados >= 5){
        this.ganados  = 0
        this.perdidos = 0
      }
    },
    checkAnswer(id){
      this.showPokemon = true;
      this.showAnswer = true;

      if(id === this.pokemon.id){
        this.verify = true
        this.ganados++;
        this.message = ` Correcto, es ${this.pokemon.name}`
        if(this.ganados == 5){
          this.resultado = `***Ganastes*** -`
        }else{
          this.resultado = ''
        }
      }else{
        this.verify = false
        this.perdidos++;
        this.message = ` Oops, era ${this.pokemon.name}`
        if(this.perdidos == 5){
          this.resultado = `Perdistes, reiniciar juego! -`
        }else{
          this.resultado = ''
        }  
      }
    },
    newGame(){
      this.showPokemon  = false
      this.showAnswer   = false
      this.pokemonArr   = []
      this.pokemon      = null
      this.mixPokemonsArray()
      this.verificarPutuacion()
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
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 60%;
  border-radius: 15px; 
  text-align: center;
  width: 75vw;
  margin-left: 12vw;
}

a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 4px 16px;
}
</style>