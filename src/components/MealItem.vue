<template>
    <div class="bg-white shadow rounded">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t w-full h-48 object-cover">
        </router-link>
        <div class="p-3">
            <h3 class="font-semibold">{{ meal.strMeal }}</h3>
            <div class="flex items-center justify-between">
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

import YoutubeButton from '../components/YoutubeButton.vue'

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>