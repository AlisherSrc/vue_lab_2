import { defineStore } from "pinia"
import { ref } from "vue";

export const blogCategory = defineStore("categories",() => {
    const currCategory = ref("Adventure");

    function setCurrentCategory(category){
        currCategory.value = category;
    }

    return {currCategory, setCurrentCategory};
})