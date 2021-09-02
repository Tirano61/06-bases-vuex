import getRandomInt from "../../helpers/getRandomint";



export const incrementrandomInt = async({ commit }) => {

    commit('setLoading', true);

    const randomInt = await getRandomInt();

    commit('incremetarBy', randomInt);

    commit('setLoading', false);
}