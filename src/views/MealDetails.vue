<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl text font-bold md-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
        <div class="grid grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
            </div>
        </div>
        <div class="my-3 text-justify">
            {{ meal.strInstructions }}
        </div>
        <div class="grid grid-cols-2 ">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(item, index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                            {{ index + 1}}. {{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <template v-for="(item, index) of new Array(20)">
                        <li v-if="meal[`strMeasure${index + 1}`]">
                            {{ index + 1}}. {{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
                <a :href="meal.strSource" target="_blank"
                    class="p-3 py-2 rounded text-white  border-indigo-600 bg-indigo-500 hover:bg-indigo-600 transition-colors">
                    View Original Source
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import axiosClient from '../services/axiosClient'

import YoutubeButton from '../components/YoutubeButton.vue';

let route = useRoute()

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0]
        })
})

const meal = ref({})
</script>