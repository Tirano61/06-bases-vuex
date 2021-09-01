import { createStore } from "vuex";
import getRandomInt from "../helpers/getRandomint";

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    // Podrian verse como metodos
    mutations: {

        incrementar_1(state) {
            state.count++;
            state.lastMutation = 'incrementar 1';
        },
        incremetarBy(state, value) {
            state.count += value;
            state.lastMutation = 'incrementarBy' + value;
            state.lastRandomInt = value;
        },
        setLoading(state, value) {
            state.isLoading = value;
        },
    },

    actions: {
        async incrementrandomInt({ commit }) {

            commit('setLoading', true);

            const randomInt = await getRandomInt();

            commit('incremetarBy', randomInt);

            commit('setLoading', false);



        }
    }
});