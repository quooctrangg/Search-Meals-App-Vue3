<template>
    <div class="p-8 pb-0">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full h-10"
            placeholder="Search for Meals" @change="searchMeals" />
    </div>
    <div class="grid gap-4 grid-cols-4 grid-rows-4 mt-4 p-4">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'

import store from '../store'

import MealItem from '../components/MealItem.vue';

let route = useRoute()

let keyword = ref('')
let meals = computed(() => store.state.searchedMeals)

const searchMeals = () => {
    if (keyword.value) {
        store.dispatch("searchMeals", keyword.value);
    } else {
        store.commit("setSearchedMeals", []);
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})
</script>