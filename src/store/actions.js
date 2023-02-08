import axiosClient from '../services/axiosClient'

export const searchMeals = ({ commit }, keyword) => {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals)
        })
}

export const searchMealByLetter = ({ commit }, letter) => {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            commit('setMealByLetter', data.meals)
        })
}

export const searchMealByIngredient = ({ commit }, ing) => {
    axiosClient.get(`search.php?i=${ing}`)
        .then(({ data }) => {
            commit('setMealByIngredient', data.meals)
        })
}