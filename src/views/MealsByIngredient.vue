<template>
    <div class="p-8">
        <div class="grid gap-4 grid-cols-4 grid-rows-4 mt-4 p-4">
            <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

import { onMounted, computed } from 'vue'

import store from '../store';

const route = useRoute()

const meals = computed(() => store.state.mealByIngredient)

onMounted(() => {
    store.dispatch('searchMealByIngredient', route.params.ingredient)
})
</script>