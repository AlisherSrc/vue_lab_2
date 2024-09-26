<script setup>
import { defineEmits, defineProps, ref } from 'vue';

const menuClicked = defineEmits(['clicked']);
const props = defineProps({
    menuShow:Boolean
});

const toggleMenu = ref(props.menuShow);

const menuClick = () => {
    menuClicked("clicked",!toggleMenu.value)
}

</script>
<template>
    <header>
        <div class="menu_icon_container">
            <img src="../assets/menu.png" width="35px" height="35px" @click="menuClick">
        </div>
        <div class="content_text">
            <p>New trips on Fall season! Full details on our Instagram accounts.</p>
        </div>
        <div class="profile_icon_container">
            <img src="../assets/profile.png" width="35px" height="35px">
        </div>
    </header>
</template>
<style>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;
    max-width: 100vw;
    overflow-x: hidden;
    background: rgba(255, 255, 255, 0.74);
    height: 60px;
    gap: 15px;
}

.menu_icon_container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgb(0, 0, 0);
    width: 50px;
    height: 50px;
}

.menu_icon_container img{
    cursor: pointer;
}


.profile_icon_container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(126, 239, 255, 1);
    width: 50px;
    height: 50px;
}

.content_text {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg,
            #E5F67C 0%,
            #ECEF64 33%,
            #D2E037 66%,
            #EAEE3A 100%);

    height: 75%;
    width: 90%;
    border-radius: 10px;
    padding: 0 0px;
}

.content_text p {
    background: linear-gradient(90deg, #FFADAD 0%, #FF774C 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Inknut Antiqua';
    font-size: 17px;
    font-weight: 400;
    line-height: 43.84px;
    text-align: left;
}
</style>