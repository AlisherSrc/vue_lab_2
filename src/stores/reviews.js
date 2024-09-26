import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const blogReviews = defineStore('reviews', () => {
    let reviews = ref([
        {
            id: 1,
            name: "Mark",
            surname: "Twen",
            date: "Today, 12:00",
            avatar: "profile_man_1.png",
            rating: 4.0,         
            text: "This is awesome adventure that I had! Thanks!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        },
        {
            id: 2,
            name: "Sally",
            surname: "Robinson",
            date: "Yesterday, 18:30",
            avatar: "profile_woman_1.png",
            rating: 4.0,         
            text: "Something new for me. Drive and emotions only",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        },{
            id: 3,
            name: "Milla",
            surname: "Loren",
            date: "1 day ago, 12:10",
            avatar: "profile_man_2.png",
            rating: 4.0,         
            text: "The place is very big. I lost the exit.",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        },{
            id: 4,
            name: "Stevie",
            surname: "",
            date: "2 days ago, 9:05",
            avatar: "profile_man_3.png",
            rating: 4.0,         
            text: "Something to be upgraded.",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        },
        {
            id: 5,
            name: "Mark",
            surname: "Twen",
            date: "Today, 12:00",
            avatar: "profile_man_1.png",
            rating: 4.0,         
            text: "This is awesome adventure that I had! Thanks!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Horror"
        },
        {
            id: 6,
            name: "Milla",
            surname: "Loren",
            date: "1 day ago, 12:10",
            avatar: "profile_woman_2.png",
            rating: 4.0,         
            text: "The place is very big. I lost the exit.",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Modern"
        },{
            id: 7,
            name: "Stevie",
            surname: "",
            date: "2 days ago, 9:05",
            avatar: "profile_man_3.png",
            rating: 4.0,         
            text: "Something to be upgraded.",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        },
        {
            id: 8,
            name: "Mark",
            surname: "Twen",
            date: "Today, 12:00",
            avatar: "profile_woman_3.png",
            rating: 4.0,         
            text: "This is awesome adventure that I had! Thanks!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Horror"
        },
    ])

    let isDescending = ref(true);

    function setReviews(updatedReviews){
        reviews.value = updatedReviews;
    }

    function setDescending(value){
        isDescending.value = value;
    }

    const sortedReviews = computed(() => {
        return [...reviews.value].sort((a,b) => 
            isDescending.value ? b.rating - a.rating : a.rating - b.rating
        );
    });

    return {reviews, sortedReviews, isDescending, setDescending, setReviews}
})