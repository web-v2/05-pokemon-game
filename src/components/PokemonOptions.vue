<template>
  <div class="options-container">
    <ul v-if="mostrar">
        <li v-for="pk in pokemons" :key="pk.id" 
        v-on:click="inactivarOpciones"         
        @click="$emit('selectionPokemon', pk.id)">{{ pk.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            mostrar: true
        }
    },
    methods:{
         inactivarOpciones(){
            this.mostrar = false;
        }
    }
}
</script>

<style scoped>
/* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 12px;
    width: 190px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>