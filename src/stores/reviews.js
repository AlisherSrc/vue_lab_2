import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const blogReviews = defineStore('reviews', () => {
    let now = new Date("2024-09-13T12:00:00");
    let reviews = ref([
        {
            id: 1,
            name: "Mark",
            surname: "Twen",
            date: now,
            avatar: "profile_man_1.png",
            rating: 4.5,         
            text: "This is awesome adventure that I had! Thanks!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        },
        {
            id: 2,
            name: "Sally",
            surname: "Robinson",
            date: new Date("2024-09-12T18:30:00"),
            avatar: "profile_woman_1.png",
            rating: 3.5,         
            text: "Something new for me.",
            unqiuePeopleLiked: 15,
            sumOfRatings: 45,
            blogCategory: "Adventure"
        },{
            id: 3,
            name: "Milla",
            surname: "Loren",
            date: new Date("2024-09-12T12:10:00"),
            avatar: "profile_man_2.png",
            rating: 4.0,         
            text: "The place is very big. Like, really!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        },{
            id: 4,
            name: "Stevie",
            surname: "",
            date: new Date("2024-09-11T09:05:00"),
            avatar: "profile_man_3.png",
            rating: 4.0,         
            text: "Nice!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        },
        {
            id: 5,
            name: "Mark",
            surname: "Twen",
            date: now,
            avatar: "profile_man_1.png",
            rating: 3.5,         
            text: "Good enough",
            unqiuePeopleLiked: 15,
            sumOfRatings: 45,
            blogCategory: "Horror"
        },
        {
            id: 6,
            name: "Milla",
            surname: "Loren",
            date: new Date("2024-09-12T12:10:00"),
            avatar: "profile_woman_2.png",
            rating: 4.0,         
            text: "The place is very big.",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Modern"
        },{
            id: 7,
            name: "Stevie",
            surname: "",
            date: new Date("2024-09-11T09:05:00"),
            avatar: "profile_man_3.png",
            rating: 4.5,         
            text: "Something to be upgraded. But it's okay",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Adventure"
        },
        {
            id: 8,
            name: "Mark",
            surname: "Twen",
            date: now,
            avatar: "profile_woman_3.png",
            rating: 3.0,         
            text: "Mid",
            unqiuePeopleLiked: 15,
            sumOfRatings: 45,
            blogCategory: "Horror"
        },
        {
            id: 9,
            name: "Anna",
            surname: "Smith",
            date: new Date("2024-09-10T14:45:00"),
            avatar: "profile_woman_3.png",
            rating: 5.0,
            text: "Absolutely breathtaking experience!",
            unqiuePeopleLiked: 50,
            sumOfRatings: 250,
            blogCategory: "Nature"
        },
        {
            id: 10,
            name: "James",
            surname: "Bond",
            date: new Date("2024-09-11T16:20:00"),
            avatar: "profile_man_2.png",
            rating: 5.0,
            text: "Full of action and suspense!",
            unqiuePeopleLiked: 50,
            sumOfRatings: 250,
            blogCategory: "Adventure"
        },
        {
            id: 11,
            name: "Alice",
            surname: "Wonder",
            date: new Date("2024-09-10T11:00:00"),
            avatar: "profile_woman_1.png",
            rating: 5.0,
            text: "Totally unexpected twists. Loved it!",
            unqiuePeopleLiked: 50,
            sumOfRatings: 250,
            blogCategory: "Horror"
        },
        {
            id: 12,
            name: "Chris",
            surname: "Evans",
            date: new Date("2024-09-10T15:10:00"),
            avatar: "profile_man_2.png",
            rating: 4.5,
            text: "Hilarious moments, kept me laughing!",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Comedy"
        },
        {
            id: 13,
            name: "Sophia",
            surname: "Turner",
            date: new Date("2024-09-09T17:45:00"),
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
            date: new Date("2024-09-08T13:30:00"),
            avatar: "profile_man_2.png",
            rating: 4.5,
            text: "A blend of modern aesthetics and suspense.",
            unqiuePeopleLiked: 2,
            sumOfRatings: 8,
            blogCategory: "Modern"
        },
        {
            id: 15,
            name: "Eva",
            surname: "Green",
            date: new Date("2024-09-08T14:30:00"),
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
            date: new Date("2024-09-07T13:30:00"),
            avatar: "profile_man_2.png",
            rating: 2.0,
            text: "An adventure I'll never forget! 2 stars!",
            unqiuePeopleLiked: 15,
            sumOfRatings: 30,
            blogCategory: "Adventure"
        },
        {
            id: 17,
            name: "Olivia",
            surname: "Brown",
            date: new Date("2024-09-08T19:10:00"),
            avatar: "profile_woman_3.png",
            rating: 2.0,
            text: "Toilet jokes",
            unqiuePeopleLiked: 15,
            sumOfRatings: 30,
            blogCategory: "Comedy"
        },
        {
            id: 18,
            name: "Michael",
            surname: "Jordan",
            date: new Date("2024-09-07T11:30:00"),
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
            date: new Date("2024-09-07T12:05:00"),
            avatar: "profile_woman_2.png",
            rating: 1.0,
            text: "Bruh",
            unqiuePeopleLiked: 15,
            sumOfRatings: 15,
            blogCategory: "Horror"
        },
        {
            id: 20,
            name: "Tom",
            surname: "Cruise",
            date: new Date("2024-09-05T12:05:00"),
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
            isDescending.value ? (b.date) - (a.date) : 
            (a.date) - (b.date)
        );
    })
    return {reviews, sortedReviews, sortedReviewsByDate, isDescending, type, setDescending, setReviews}
})