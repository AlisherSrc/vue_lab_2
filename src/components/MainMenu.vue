<script setup>
import { blogCategories } from '@/db';
import { blogCategory } from '@/stores/blogCategories';

const toggleMenuEmit = defineEmits(['clicked']);

const categories = blogCategory();

const toggleMenu = () => {
    toggleMenuEmit('clicked');
}

const categoryClick = (category) => {
    categories.setCurrentCategory(category);
    // toggleMenu();
}

</script>
<template>
    <div class="menu-container">
        <div class="menu">
            <p @click="toggleMenu">MENU</p>
            <div class="menu-content">
                <ul class="menu-content__items">
                    <li v-for="category in blogCategories" v-bind:key="category" @click="categoryClick(category)">
                        {{ `${category.toUpperCase()} BLOG` }}
                    </li>
                </ul>

                <div class="menu-content__contacts">
                    <p id="menu-content__contacts__header">CONTACTS</p>
                    <p>PHONE: +1(234)-23-45-22</p>
                    <p>ADDRESS: Green st., Yalow park</p>
                    <p>EMAIL: Yallow@park.info</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.menu-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 310px;
    height: 100%;
    padding: 5px 15px 15px 15px;
    background: rgba(193, 235, 241, 1);
}

.menu {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    gap: 20px;
}

.menu>p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    font-family: "Jersey 15";
    font-size: 36px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
    border-radius: 10px;
    padding: 5px;
    color: rgba(97, 92, 92, 1);
    cursor: pointer;
}

.menu-content {
    display: flex;
    flex-flow: column;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    height: 95%;

    gap: 85px;
}

.menu-content__items {
    display: flex;
    flex-flow: column;
    gap: 30px;
    margin-top: 10px;
    width: 100%;
}

.menu-content__items li {
    list-style: none;
    background: linear-gradient(90deg, #4CD87C 0%, #42D669 63.42%, #3DD55E 100%);
    font-family: "Jersey 15";
    font-size: 36px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    padding: 7px 22px 7px 37px;
    cursor: pointer;
}

.menu-content__contacts {
    display: flex;
    flex-flow: column;
    gap: 30px;
    background: linear-gradient(180deg, #AFF090 0%, #45C330 100%);
    border-radius: 10px;
    padding: 15px 10px 20px 15px;
    width: 87%;
}

#menu-content__contacts__header {
    font-family: "Jersey 15";
    font-size: 36px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
    align-self: center;
}

.menu-content__contacts p {
    font-family: "Jersey 15";
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
}
</style>