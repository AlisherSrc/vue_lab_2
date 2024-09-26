<script setup>
import { ref } from 'vue';
import { blogCategories } from '@/db';

const categories = ref(blogCategories);
const activeCategory = ref("Adventure");
const dropdownOpen = ref(false);
const activeCategoryEmit = defineEmits(['clicked']);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const selectCategory = (category) => {
    activeCategory.value = category;
    dropdownOpen.value = false;
    activeCategoryEmit("clicked", category)
};
</script>
<template>
    <div class="category-switch">
        <button @click="toggleDropdown" class="active-category-button">
            {{ activeCategory }}
        </button>

        <ul v-show="dropdownOpen" class="category-list">
            <li v-for="category in categories" v-bind:key="category" @click="selectCategory(category)"
                class="category-item">
                {{ category }}
            </li>
        </ul>
    </div>
</template>
<style scoped>
.category-switch {
    position: relative;
    display: inline-block;
    width: 100%;
}

.active-category-button {
    background: rgba(91, 185, 205, 1);
    border: none;
    border-radius: 10px;
    color: white;
    padding: 3px 20px;
    font-family: 'Jersey 15';
    font-size: 64px;
    font-weight: 400;
    line-height: 64px;
    text-align: left;
    width: 100%;
    /* Pixel-like font */
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.active-category-button:hover {
    background-color: rgb(79, 157, 174);
}

/* Dropdown styling */
.category-list {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border-radius: 10px;
    list-style: none;
    padding: 0;
    margin: 10px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-item {
    padding: 10px 20px;
    cursor: pointer;
    font-family: 'Press Start 2P', cursive;
    color: #333;
    transition: background-color 0.2s ease;
}

.category-item:hover {
    background-color: #f0f0f0;
}
</style>