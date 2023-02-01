import { createStore } from "vuex";

export default createStore({
    state: {
        currentCity: null,
    },
    getters: {},
    mutations: {
        cityChoice(state, payload) {
            state.currentCity = payload;
        },
    },
    actions: {},
    modules: {},
});
