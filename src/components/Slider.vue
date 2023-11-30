<template>
    <div class="sliders">
        <div class="sliders_left">
           <n-carousel autoplay>
            <img
            class="carousel-img"
            src="../assets/images/talaba1.jpg"
            >
            <img
            class="carousel-img"
            src="../assets/images/talaba2.jpg"
            >
            <img
            class="carousel-img"
            src="../assets/images/talaba3.jpeg"
            >
            <img
            class="carousel-img"
            src="../assets/images/talaba4.jpg"
            >
        </n-carousel>
        </div>
        <div class="sliders_right">
            <n-carousel autoplay>
            <img
            class="carousel-img"
            src="../assets/images/rek.jpg"
            >
            <img
            class="carousel-img"
            src="../assets/images/rek1.jpg"
            >
            <img
            class="carousel-img"
            src="../assets/images/rek2.jpg"
            >
            <img
            class="carousel-img"
            src="../assets/images/rek3.jpg"
            >
        </n-carousel>
        </div>
    </div>
</template>

<style scoped>
.sliders{
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin: 0px 20px; */
    /* border: 2px solid red; */
}
.sliders .sliders_left{
    width: 65%;
    margin-right: 30px;
    border-radius: 10px;
    /* border: 2px solid red; */
}
.sliders .sliders_right{
    margin-left: 30px;
    width: calc(90% - 70%);
    /* border: 2px solid red; */
}
.sliders_left .carousel-img{
    border-radius: 10px;
    height: 400px;
    object-fit: fill;
    width: 100%;
}
.sliders_right .carousel-img{
    height: 400px;
    object-fit: unset;
    width: 100%;
    border-radius: 10px;
}
@media(max-width: 360px){
.sliders{
    width: 100%;
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
    /* position: relative; */
}
.sliders .sliders_left{
    /* margin: 0 auto; */
    width: 90%;
    margin-right: 0px;
    border-radius: 10px;
    /* border: 2px solid red; */
}
.sliders .sliders_right{
    display: none;
}
.sliders_left .carousel-img{
    border-radius: 10px;
    height: 200px;
    object-fit: cover;
    width: 100%;
}
.sliders_right .carousel-img{
    height: 400px;
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
}
}
@media(max-width: 412px){
.sliders{
    width: 100%;
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
    /* position: relative; */
}
.sliders .sliders_left{
    /* margin: 0 auto; */
    width: 90%;
    margin-right: 0px;
    border-radius: 10px;
    background-origin: border-box;
}
.sliders .sliders_right{
    display: none;
}
.sliders_left .carousel-img{
    /* border: 2px solid red;  */
    border-radius: 10px;
    height: 200px;
    object-fit: cover;
    width: 90%;
}
.sliders_right .carousel-img{
    height: 400px;
    object-fit: fill;
    object-position: 50% 50%;
    width: 100%;
    border-radius: 10px;
}
}
</style>