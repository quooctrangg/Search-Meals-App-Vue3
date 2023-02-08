<template>
    <div class="flex flex-col p-8">
        home
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axiosClient from '../services/axiosClient'

const ingredients = ref([])

onMounted(async () => {
    let response = await axiosClient.get('/list.php?i=list')
    ingredients.value = response.data
})
</script>