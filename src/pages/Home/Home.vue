<template>
    <div class="home">
        <div class="banner">
            <Navbar />
            <div class="logo">
                <img src="../../assets/images/logo1.png" alt="">
            </div>
        </div>
        <div class="yangiliklar">
            <News />
        </div>
        <div class="elonlar">
            <div class="elon_title">E'lonlar</div>
            <Elon />
        </div>
        <div class="platformalar">
            <Platforma />
        </div>
        <div class="footerr">
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Navbar from "../../components/Navbar.vue";
import News from "../../components/News.vue";
import Elon from "../../components/Elon.vue";
import Platforma from "../../components/Platforma.vue";
import Footer from "../../components/Footer.vue";
</script>

<style scoped>
.home{
    width: 100%;
    min-height: 100vh;
    background-image: url("../../assets/images/mainback.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
}
.home .banner{
    width: 90%;
    height: 550px;
    /* border: 2px solid red; */
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(173, 171, 171, 0.3);
    box-shadow: 0px 0px 5px grey;
    /* opacity: 0.8; */
    /* margin: 0px auto; */
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
    background-image: url("../../assets/images/bg-chng.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
.elonlar .elon_title{
    text-align: center;
    font-size: 30px;
    color: black;
    font-weight: 700;
}
.platformalar{
    width: 100%;
}
.footerr{
    width: 100%;
}
@media(max-width: 375px){
    .home{
    width: 370px;
    min-height: 100vh;
    background-image: url("../../assets/images/mainback.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
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
    background-image: url("../../assets/images/bg-chng.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
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