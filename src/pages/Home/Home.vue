<template>
    <div class="home">
        <div class="topMenu">
            <TopMenu />
        </div>
        <div class="banner">
            <Navbar />
        </div>
        <div class="carousel">
           <Slider />
        </div>
        <div class="yangiliklar">
            <News />
        </div>
        <div class="elonlar">
            <div class="elon_title">
                <div class="elon_left">E'lonlar</div>
                <div class="elon_left">barcha elonlar ></div>
            </div>
            <Elon />
        </div>
        <div class="platformalar">
            <Platforma />
        </div>
        <div class="footerr">
            <Footer />
        </div>
        <div class="admin">
            <div class="close" @click="Close"></div>
            <div class="close2 close" @click="Close" ></div>
            </div>
    </div>
</template>

<script setup>
import Navbar from "../../components/Navbar.vue";
import Slider from "../../components/Slider.vue";
import News from "../../components/News.vue"; 
import TopMenu from "../../components/TopMenu.vue";
import Elon from "../../components/Elon.vue";
import Platforma from "../../components/Platforma.vue";
import Footer from "../../components/Footer.vue";
import {ref,onMounted} from "vue";

const Reklama = () => {
    let admin = document.querySelector('.admin');
    admin.innerHTML += `
    <span>assalomu alleykum men sizga qanday yordam bera olaman?</span>
    `
    admin.addEventListener('click', () => {
        // console.log(admin.ch, "node");
    })
}
const Close = () => {
console.log("salomm", "aloooooo")
}
onMounted(() => {
    Reklama()
})
</script>

<style scoped>
.admin{
    width: 200px;
    height: 150px;
    /* border: 1px solid black; */
    position: fixed;
    top: 350px;
    right: 100px;
    display: flex;
    align-items: center;
    background-color: rgba(202, 200, 200, 0.6);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
.close{
    width: 20px;
    height: 4px;
    background-color: black;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: rotate(-40deg);
}
.close2{
    transform: rotate(40deg);
}
/* .close::after{
    content: "";
    width: 20px;
    height: 4px;
    background-color: black;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: rotate(-40deg);
}

.close::before{
    content: "";
    width: 20px;
    height: 4px;
    background-color: black;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: rotate(40deg);
} */
.home{
    width: 100%;
    min-height: 100vh;
    /* background-image: url("../../assets/images/mainback.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding-top: 10px; */
}
.home .banner{
    position: sticky;
    top: 0px;
    bottom: 10px;
    width: 90%;
    height: 70px;
    /* border: 2px solid red; */
    /* padding: 0px 50px; */
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgb(212, 210, 210);
    border-bottom: 1px solid rgb(202, 200, 200);
    margin: 10px 0px 0px 0px;
}
.home .topMenu{
    width: 100%;
    height: 40px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F7F8F9;
    /* margin: 0 auto; */
}
.home .carousel{
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
}
.logo{
    align-self: flex-end;
    margin-right: 150px;
}
.logo img{
    width: 400px;
    height: 400px;
}
.home .yangiliklar{
    width: 100%;
    min-height: 600px;
}
.elonlar{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-image: url("../../assets/images/bg-chng.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; */
}
.elonlar .elon_title{
    width: 90%;
    font-size: 30px;
    color: black;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
}
.platformalar{
    width: 100%;
}
.footerr{
    width: 100%;
}
@media(max-width: 375px){
    .home{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0px;
}
.home .banner{
    width: 90%;
    height: 80px;
    /* border: 2px solid red; */
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(173, 171, 171, 0.3);
    box-shadow: 0px 0px 5px grey;
    margin: 10px 0px;
    /* opacity: 0.8; */
    /* margin: 0px auto; */
}
.home .carousel{
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.home .topMenu{
    display: none;
}
.logo{
    display: none;
    align-self: flex-end;
    margin-right: 150px;
}
.home .yangiliklar{
    width: 360px;
    min-height: 700px;
    /* border: 2px solid red; */
}
.elonlar{
    width: 100%;
}
.elonlar .elon_title{
    text-align: center;
    font-size: 14px;
    color: black;
    font-weight: 700;
}
.platformalar{
    width: 100%;
}
.footerr{
    width: 100%;
}
}
</style>