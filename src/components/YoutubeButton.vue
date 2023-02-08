<template>
    <a :href="href" target="_blank"
        class="p-3 py-2 rounded text-white  border-red-600 bg-red-500 hover:bg-red-600 transition-colors">
        <slot></slot>
    </a>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    href: String
})
</script>