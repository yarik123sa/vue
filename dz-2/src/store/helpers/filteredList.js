
export function filterList(state) {
    let filteredList =state.cars
    filteredList =  state.cars.filter(car => car.type === state.carTypeSelected && car.body_type ===state.bodyTypeSelected)
    return filteredList
}