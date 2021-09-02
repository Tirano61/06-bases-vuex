import { createStore } from "vuex";
import counterStore from "./counter";


export default createStore({

    modules: {
        counter: counterStore,
        //auth: authStore,
        //products: productStore

    }
});