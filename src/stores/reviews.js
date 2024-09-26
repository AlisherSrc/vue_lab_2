import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { parseDateString } from "@/utils/parseDates";

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
        {
            id: 9,
            name: "Anna",
            surname: "Smith",
            date: "3 days ago, 14:45",
            avatar: "profile_woman_3.png",
            rating: 4.0,
            text: "Absolutely breathtaking experience!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Nature"
        },
        {
            id: 10,
            name: "James",
            surname: "Bond",
            date: "3 days ago, 16:20",
            avatar: "profile_man_2.png",
            rating: 4.0,
            text: "Full of action and suspense!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        },
        {
            id: 11,
            name: "Alice",
            surname: "Wonder",
            date: "4 days ago, 11:00",
            avatar: "profile_woman_1.png",
            rating: 4.0,
            text: "Totally unexpected twists. Loved it!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Horror"
        },
        {
            id: 12,
            name: "Chris",
            surname: "Evans",
            date: "5 days ago, 15:10",
            avatar: "profile_man_2.png",
            rating: 4.0,
            text: "Hilarious moments, kept me laughing!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Comedy"
        },
        {
            id: 13,
            name: "Sophia",
            surname: "Turner",
            date: "5 days ago, 17:45",
            avatar: "profile_woman_3.png",
            rating: 4.0,
            text: "A beautiful escape into nature.",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Nature"
        },
        {
            id: 14,
            name: "John",
            surname: "Doe",
            date: "6 days ago, 13:30",
            avatar: "profile_man_2.png",
            rating: 4.0,
            text: "A blend of modern aesthetics and suspense.",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Modern"
        },
        {
            id: 15,
            name: "Eva",
            surname: "Green",
            date: "6 days ago, 14:00",
            avatar: "profile_woman_1.png",
            rating: 4.0,
            text: "The humor was spot on, highly entertaining!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Comedy"
        },
        {
            id: 16,
            name: "Jack",
            surname: "Sparrow",
            date: "7 days ago, 18:00",
            avatar: "profile_man_2.png",
            rating: 4.0,
            text: "An adventure I'll never forget!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        },
        {
            id: 17,
            name: "Olivia",
            surname: "Brown",
            date: "7 days ago, 19:10",
            avatar: "profile_woman_3.png",
            rating: 4.0,
            text: "A mix of laughter and suspense.",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Comedy"
        },
        {
            id: 18,
            name: "Michael",
            surname: "Jordan",
            date: "8 days ago, 10:30",
            avatar: "profile_man_1.png",
            rating: 4.0,
            text: "An emotional rollercoaster with a modern twist.",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Modern"
        },
        {
            id: 19,
            name: "Emma",
            surname: "Watson",
            date: "8 days ago, 12:05",
            avatar: "profile_woman_2.png",
            rating: 4.0,
            text: "Scared me at every corner, great horror!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Horror"
        },
        {
            id: 20,
            name: "Tom",
            surname: "Cruise",
            date: "9 days ago, 11:50",
            avatar: "profile_man_3.png",
            rating: 4.0,
            text: "The adventure was full of action!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        }        
    ])

    let isDescending = ref(true);
    let type = ref('rating'); // rating or date

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

    const sortedReviewsByDate = computed(() => {
        return [...reviews.value].sort((a,b) => 
            isDescending.value ? parseDateString(b.date) - parseDateString(a.date) : 
            parseDateString(a.date) - parseDateString(b.date)
        );
    })
    return {reviews, sortedReviews, sortedReviewsByDate, isDescending, type, setDescending, setReviews}
})