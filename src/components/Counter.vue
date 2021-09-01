
<template>
    <h2>Counter - VUE</h2>
    <h2> Direct access: {{ $store.state.count }} </h2>
    <h2>Computed: {{ countComputed }}</h2>

    <h1>mapState</h1>
    <h2>mapState : {{ count }}</h2>
    <h2>mapState segunda propiedad : {{ lastMutation }}</h2>


    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomInt" :disabled="isLoading">Random</button>

</template>

<script>

import { mapState, mapActions } from "vuex";

export default {

    computed:{
        // Usando propiedades computadas

        countComputed(){
            return this.$store.state.count
        },
        // 1 forma de usarlo
        ...mapState(['count', 'lastMutation', 'isLoading'])
        // Otra forma usando un nombre
        // ...mapState({
        //     contador: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },
    methods: {
        increment (){
            // El commit llama la mutacion por el nombre que tenga
            this.$store.commit('incrementar_1')
        },
        incrementBy (){
            //se puede mandar un objeto ( incremetarBy, {name: 'Dario' age: 47} )
            this.$store.commit('incremetarBy', 5)
        },

        // incrementRandomInt(){
        //     // Llama a las actions
        //     this.$store.dispatch( 'incrementrandomInt' )
        // },
        //Tambien se pueden llamar actions asi
        // ...mapActions([ 'incrementrandomInt' ])

        // o con nombre
        ...mapActions({
            randomInt: 'incrementrandomInt',
        }),


    }

}
</script>
