<script setup>
import { defineEmits } from 'vue';

const clickEmit = defineEmits(['clicked']);

const props = defineProps({
    id: Number,
    name: String,
    surname: String,
    date: String,
    avatar: String,
    rating: Number,
    text: String,
    unqiuePeopleLiked: Number
})

const liked = () => {
    clickEmit('clicked', props.id);
}

</script>
<template>
    <div class="card-container">
        <div class="card-top">
            <div class="card-top__general-info">
                <p>{{ name + surname }}</p>
                <p>{{ date }}</p>
            </div>
            <div class="card-top__rating">
                <p>Rating</p>
                <div class="card-top__rating-stars">
                    <img v-if="rating >= 1" src="./../assets/star_solid.svg" />
                    <img v-else src="./../assets/star_empty.svg" />
                    <img v-if="rating >= 2" src="./../assets/star_solid.svg" />
                    <img v-else src="./../assets/star_empty.svg" />
                    <img v-if="rating >= 3" src="./../assets/star_solid.svg" />
                    <img v-else src="./../assets/star_empty.svg" />
                    <img v-if="rating >= 4" src="./../assets/star_solid.svg" />
                    <img v-else src="./../assets/star_empty.svg" />
                    <img v-if="rating >= 4.5" src="./../assets/star_solid.svg" />
                    <img v-else src="./../assets/star_empty.svg" />
                </div>
            </div>
            <div class="card-top__avatar">
                <img :src="`/avatars/${avatar}`" alt="Avatar" />
            </div>
        </div>
        <div class="card-bottom">
            <p>{{ text }}</p>
            <input type="button" value="LIKE" @click="liked" />
        </div>
    </div>
</template>
<style>
.card-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background: rgba(91, 185, 205, 1);
    border-radius: 10px;
    padding: 5px;
    height: 170px;
}

.card-container p{
    color: rgba(255, 255, 255, 1);
}

.card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 99%;
}

.card-top__general-info {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    height: 69px;
    min-width: 110px;
    padding: 5px;
    border-radius: 10px;
    background: rgba(255, 255, 245, 0.15);
}

.card-top__general-info p {
    font-family: 'Jersey 15';
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
}

.card-top__rating {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    margin-top: 10px;
    height: 59px;
}

.card-top__rating-stars {
    display: flex;
    gap: 10px;
    align-items: center;
}

.card-top__avatar {}

.card-bottom {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 99%;
}

.card-bottom p {
    font-family: 'Jersey 15';
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
}

.card-bottom input {
    display: flex;
    justify-content: center;
    align-items: center;

    justify-self: end;
    align-self: flex-end;
    background: rgba(67, 239, 39, 1);
    width: 70px;
    height: 25px;
    font-family: 'Jersey 15';
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    border: none;
    cursor: pointer;
}
</style>