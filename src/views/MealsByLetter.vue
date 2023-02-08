<template>
    <div>
        <div class="flex gap-2 mt-2 justify-center">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
    </div>
    <div class="grid gap-4 grid-cols-4 grid-rows-4 mt-4 p-4">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, watch } from 'vue'

import store from '../store';
import MealItem from '../components/MealItem.vue'

const route = useRoute()

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
const meals = computed(() => store.state.mealByLetter)

watch(route, () => {
    store.dispatch('searchMealByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealByLetter', route.params.letter)
})
</script>