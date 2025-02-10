import {createStore} from 'vuex'
import {autoTypes,autoBody} from "@/constants/carType.js";
import {cars} from "@/constants/cars.js";
import {filterList} from "@/store/helpers/filteredList.js";
// Create a new store instance.
const store = createStore({
    state() {
        return {
            categoryAuto: autoTypes,
            carTypeSelected: null,
            bodyTypeSelected: null,
            bodyType:autoBody,
            cars: cars

        }
    },
    getters: {
        carTypeSelected: (state) => state.carTypeSelected,
        categoryAuto: (state) => state.categoryAuto,
        filteredCarsList: (state) => filterList(state),
        bodyTypeSelected:(state) => state.bodyTypeSelected,
        bodyType:(state) => state.bodyType

    },
    mutations: {
        selectedAuto(state, value) {
            state.carTypeSelected = value;
        },
        selectedAutoBody(state, value) {
            state.bodyTypeSelected = value;
        }
    },
    actions: {
        selectedAuto({commit}, value) {
            commit('selectedAuto', value);
        },
        selectedAutoBody({commit}, value) {
            commit('selectedAutoBody', value);
        }
    },


})

export default store