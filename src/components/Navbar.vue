<template>
    <div class="Navbars">
        <div class="navbar">
         <div class="navbar_item">
             <slot name="image">
                <img src="../assets/images/logo.png" width="50px" alt="">
             </slot>
         </div>
         <div class="navbar_item navbar_items">
              <div class="navbar_list" @click="Reyting">Iqtidorli talabalar</div>
              <div class="navbar_list" @click="About">Biz haqimizda</div>
              <div class="navbar_list" @click="Tanlovlar">Tanlovlar</div>
              <div class="navbar_list" @click="Yangiliklar">Matbuot xizmati</div>
         </div>
         <div class="navbar_item">
            <slot name="button">
                <div 
                    class="dashboard border-2 border-solid rounded-lg py-2 px-6 md:w-50 text-center bg-cyan-400 text-white shadow hover:shadow-lg cursor-pointer tahrirlash" 
                    @click="Dashboard"
                    >
                    Dashboard
                </div>
            </slot>
         </div>
        </div>
        <div class="hidden_navbar">
            <div class="hidden_img">
             <slot name="image">
                <img src="../assets/images/logo.png" alt="">
             </slot>
            </div>
            <n-icon class="menu" @click="Activate">
                <Menu />
             </n-icon>
            <n-drawer
            v-model:show="active"
            :width="200"
            :placement="placement"
            resizable
        >
            <n-drawer-content title="Menu" class="shadow-sm" closable>
              <div class="flex flex-col justify-center items-left">
                <div class="navbar_list py-2 brightness-50" @click="Reyting">Iqtidorli talabalar</div>
                <div class="navbar_list py-2" @click="About">Biz haqimizda</div>
                <div class="navbar_list py-2" @click="Tanlovlar">Tanlovlar</div>
                <div class="navbar_list py-2" @click="Yangiliklar">Matbuot xizmati</div>
             </div>
            </n-drawer-content>
        </n-drawer>
        </div>
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";
import {Menu} from "@vicons/ionicons5"
import {ref} from "vue"
const router = useRouter();
const active = ref(false);
const Activate = () => {
    active.value = true;
}
const Reyting = () => {
    router.push("/reyting")
}
const About = () => {
    router.push("/about")
}
const Tanlovlar = () => {
    router.push("/startup")
}
const Yangiliklar = () => {
    router.push("/news")
}
const Dashboard = () => {
    router.push("/dashboard")
}
</script>
<style scoped>
.Navbars{
    width: 100%;
}
.hidden_navbar{
    display: none;
}
.navbar{
    width: 100%;
    height: 100px;
     display: flex;
     justify-content: space-between;
    align-items: center;  
}
.navbar .navbar_item {
    /* width: 33%; */
    display: flex;
    justify-content: space-around;
}
.navbar .navbar_item img{
    width: 100px;
    /* border: 2px solid red; */
}
.navbar .navbar_item .navbar_list{
    padding: 0px 20px;
    color: black;
    font-size: 16px;
    font-family: sans-serif;
    cursor: pointer;
    transition: all 0.7s ease-in-out;
}
.navbar .navbar_list:nth-child(2n + 4){
    color: white;
}
.navbar .navbar_item .navbar_list:hover{
    transform: scale(0.9);
}

@media(max-width: 375px){
.Navbars{
    width: 360px;
}
.navbar{
    display: none; 
}
.menu{
    font-size: 25px !important;
    color: white;
}
.hidden_navbar{
    width: 360px;
    height: 80px;
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0px 20px;
    /* margin: 0px;
    padding: 0px; */
}
.hidden_navbar .hidden_img{
    width: 60px;
}
/* .navbar .navbar_items{
    border: 2px solid red;
    width: 33%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.navbar .navbar_item img{
    width: 40px;
    /* border: 2px solid red; 
}
.navbar .navbar_items .navbar_list{
    font-size: 10px;
}
.navbar .navbar_items .dashboard{
    width: 80px;
    height: 20px;
    color: red;
    font-size: 8px;
}
.navbar .navbar_list:nth-child(2n + 4){
    color: white;
}
.navbar .navbar_items .navbar_list:hover{
    transform: scale(0.9);
} */
}
</style>