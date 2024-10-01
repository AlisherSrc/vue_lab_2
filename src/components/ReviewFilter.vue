<script setup>
import { blogReviews } from '@/stores/reviews';

const reviews = blogReviews();
const filterClickEmit = defineEmits(['clicked']);

const handleSortChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'rating') {
        reviews.type = "rating";
        filterClickEmit('clicked', reviews.sortedReviews);
    } else if (selectedValue === 'date') {
        reviews.type = "date";
        filterClickEmit('clicked', reviews.sortedReviewsByDate);
    }
};

const sortClick = () => {
    reviews.setDescending(!reviews.isDescending);

    if (reviews.type === 'rating') {
        reviews.type = "rating";
        filterClickEmit('clicked', reviews.sortedReviews);
    } else if (reviews.type === 'date') {
        reviews.type = "date";
        filterClickEmit('clicked', reviews.sortedReviewsByDate);
    }
}

</script>
<template>
    <div class="filter">
        <!-- Filter icon -->
        <div class="filter-icon">
            <img src="../assets/filter.svg" alt="Filter" />
        </div>

        <!-- Dropdown for sorting options -->
        <select @change="handleSortChange" class="sort-dropdown">
            <option value="rating">Sort by Rating</option>
            <option value="date">Sort by Date</option>
        </select>

        <!-- Sorting Icon -->
        <div class="sort-icon" :class="{ rotated: reviews.isDescending }" @click="sortClick">
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

/* Filter block with icon and dropdown */
.filter {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #e9f7f7;
    padding: 10px 15px;
    width: 100%;
}

/* Filter icon styling */
.filter-icon img {
    width: 25px;
    height: 25px;
    margin-right: 15px;
}

/* Dropdown styling */
.sort-dropdown {
    color: rgba(29, 227, 144, 1);
    background-color: #fff;
    border: 1px solid rgba(29, 227, 144, 1);
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    user-select: none;
    box-shadow: none;
    outline: none;

    font-family: 'Jersey 15';
    font-size: 36px;
    font-weight: 400;
    text-align: left;
    
}

.sort-dropdown option {
    color: #333;
    font-family: 'Jersey 15';
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

/* Hide the default arrow in WebKit browsers (Chrome, Safari, Edge) */
.sort-dropdown {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
}

/* For Firefox */
.sort-dropdown::-ms-expand {
    display: none; /* Hide dropdown arrow in older IE/Edge */
}

.sort-dropdown::-moz-focus-inner {
    border: 0;
}

</style>
