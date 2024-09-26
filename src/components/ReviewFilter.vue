<script setup>
import { blogReviews } from '@/stores/reviews';

const reviews = blogReviews();

const toggleSortOrder = () => {
    reviews.setDescending(!reviews.isDescending);
}

</script>
<template>
    <div class="filter">
        <div class="filter-icon">
            <!-- Filter icon (a simple SVG or image) -->
            <img src="../assets/filter.svg" alt="Filter" />
        </div>
        <span class="filter-text">Rating</span>
        <!-- Sorting Icon -->
        <div class="sort-icon" @click="toggleSortOrder" :class="{ rotated: reviews.isDescending }">
            <img src="../assets/triDown.svg" alt="triDown" />
        </div>
    </div>
</template>
<style scoped>
/* Main filter container */
.filter-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

/* Filter block with icon and text */
.filter {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #e9f7f7;
    padding: 10px 15px;
    width: 100%;
}

.filter-icon img {
    width: 25px;
    height: 25px;
    margin-right: 15px;
}

/* Text next to filter icon */
.filter-text {
    font-family: 'Jersey 15';
    font-size: 36px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
    color: rgba(29, 227, 144, 1);
    margin-right: 25px;
}

/* Sort icon (the small triangle) */
.sort-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}

/* Rotated class for the icon */
.sort-icon.rotated {
    transform: rotate(180deg);
}
</style>