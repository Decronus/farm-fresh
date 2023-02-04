import { createStore } from "vuex";

export default createStore({
    state: {
        currentCity: null,
        modalProductCardVisibility: false,
        isSliderMoving: false,
    },
    getters: {},
    mutations: {
        cityChoice(state, payload) {
            state.currentCity = payload;
        },

        toggleModalProductCard(state, payload) {
            if (state.isSliderMoving) {
                state.isSliderMoving = false;
                return;
            }

            state.modalProductCardVisibility = payload;
        },

        toggleSliderMoving(state, payload) {
            state.isSliderMoving = payload;
        },
    },
    actions: {},
    modules: {},
});
