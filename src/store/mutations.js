export const setSearchedMeals = (state, meals) => {
    state.searchedMeals = meals || []
}

export const setMealByLetter = (state, meals) => {
    state.mealByLetter = meals || []
}

export const setMealByIngredient = (state, meals) => {
    state.mealByIngredient = meals || []
}