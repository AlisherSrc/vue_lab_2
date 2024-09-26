<script setup>
import ReviewCard from './../components/ReviewCard.vue';
import CategoryBtn from '@/components/CategoryBtn.vue';
import ReviewFilter from '@/components/ReviewFilter.vue';
import { blogReviews } from '@/stores/reviews';
import { blogCategory } from '@/stores/blogCategories';
import { computed, ref } from 'vue';

const categories = blogCategory();
const reviews = blogReviews();
let maxPages = computed(() => Math.ceil(reviews.reviews.length / 4));
let currentPage = ref(1);
let itemsPerPage = ref(4);
let reviewsArr =  ref(reviews.reviews); // default


const handleLikeClick = (id) => {
    const updatedReviews = (reviews.type === 'date' ? reviews.sortedReviewsByDate : reviews.sortedReviews).map((review) => {
        if (review.id === id) {
            // Update the rating and the other values
            const newUniquePeopleLiked = review.unqiuePeopleLiked + 1;
            const newSumOfRatings = review.sumOfRatings + 5; // Assuming the new rating is 5 for simplicity
            const newRating = newSumOfRatings / newUniquePeopleLiked;

            return {
                ...review,
                unqiuePeopleLiked: newUniquePeopleLiked,
                sumOfRatings: newSumOfRatings,
                rating: newRating, // Properly calculate the rating
            };
        }
        return review;
    });

    reviews.setReviews(updatedReviews);
    reviewsArr.value = (reviews.type === 'date' ? reviews.sortedReviewsByDate : reviews.sortedReviews);
};

const nextPage = () => {
    if (currentPage.value === maxPages.value) currentPage.value = 1;
    else currentPage.value++;
}

const handleSelectCategory = (category) => {
    reviewsArr.value = (reviews.type === 'date' ? reviews.sortedReviewsByDate : reviews.sortedReviews);
    reviewsArr.value = reviewsArr.value.filter((review) => review.blogCategory === category);
    currentPage.value = 1;
    maxPages = computed(() => Math.ceil(reviewsArr.value.length / 4))
    categories.setCurrentCategory(category);
}

const handleFilterClicked = (arr) => {
    console.log(arr,'pls work', reviews.type)
    reviewsArr.value = arr;
}

</script>

<template>
    <div class="review-cards__container">
        <div class="review-cards">
            <div class="triangle-up"></div>
            <div class="card-content">
                <div class="card-content__date">
                    <p>13.09.2024</p>
                </div>
                <div class="card-content__top">
                    <div class="card-content__category">
                        <CategoryBtn @clicked="handleSelectCategory" />
                    </div>
                    <div class="card-content__filter">
                        <ReviewFilter @clicked="handleFilterClicked"/>
                    </div>
                    <div class="card-content__next_page">
                        <img src="../assets/arrow_right.svg" alt="arrow right" @click="nextPage" />
                        <p>{{ `${currentPage}/${maxPages}` }}</p>
                    </div>
                </div>
                <div class="cards">
                    <div class="card"
                        v-for="review in reviewsArr.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)"
                        v-bind:key="review.id">
                        <ReviewCard :id="review.id" :name="review.name" :surname="review.surname" :date="review.date"
                            :avatar="review.avatar" :rating="review.rating" :text="review.text"
                            @clicked=handleLikeClick />
                    </div>
                </div>
            </div>
            <div class="triangle-down"></div>
        </div>
    </div>
</template>
<style>
body {
    overflow: hidden;
}

.review-cards__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 950px;
}

.review-cards {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 90%;
}

.cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 70px;
    row-gap: 35px;
    width: 100%;
}



.card-content {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
    background: linear-gradient(180deg,
            rgba(254, 254, 254, 0.8) 0%,
            /* 50% transparent white */
            rgba(206, 210, 210, 0.8) 40%,
            /* 50% transparent light gray */
            rgba(193, 197, 197, 0.8) 62%,
            /* 50% transparent gray */
            rgba(184, 187, 187, 0.8) 100%
            /* 50% transparent darker gray */
        );
    padding: 25px;
}

.card-content__date {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 0 20px rgba(91, 185, 205, 1);
    border-radius: 8px;
    background: rgba(91, 185, 205, 1);
    color: rgba(255, 255, 255, 0.9);

    height: 50px;
    width: 30%;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 5%;
    align-self: flex-start;

}


.card-content__date p {
    position: relative;
    font-family: 'Inknut Antiqua';
    font-size: 36px;
    font-weight: 400;
    line-height: 92.84px;
    text-align: left;
}

.card-content__top {
    display: flex;
    width: 100%;
}

.card-content__category {
    margin-right: 10%;
    width: 400px;
}

.card-content__filter {
    margin-right: 10%;
}

.card-content__next_page {
    display: flex;
    flex-flow: column;
}

.card-content__next_page p {
    font-family: "Italianno";
    font-size: 48px;
    font-weight: 400;
    line-height: 60px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    margin-left: 15px;
}

.card-content__next_page img {
    cursor: pointer;
}

.triangle-up {
    width: 0px;
    height: 0px;
    border-left: 470px solid transparent;
    border-right: 470px solid transparent;
    border-bottom: 30px solid #ffffffc9;
    margin: 0 auto;
}

.triangle-down {
    --c: 100%;
    /* control the curvature (works with percentage) */
    height: 200px;
    width: 90%;
    aspect-ratio: 3/2;
    mask: radial-gradient(100% var(--c) at bottom, #0000 calc(100% - 2px), #000);

    background: linear-gradient(180deg,
            rgba(254, 254, 254, 0.5) 0%,
            /* 50% transparent white */
            rgba(206, 210, 210, 0.5) 40%,
            /* 50% transparent light gray */
            rgba(193, 197, 197, 0.5) 62%,
            /* 50% transparent gray */
            rgba(184, 187, 187, 0.5) 100%
            /* 50% transparent darker gray */
        );
}
</style>