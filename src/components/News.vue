<template>
    <div class="news">
        <div class="news_header">
            <div class="news_line">
                News
            </div>
            <div class="news_title">Yangiliklar</div>
        </div>
        <div class="news_content">
            <!-- <img src="../assets/images/photo.jpg" alt=""> -->
             <div class="news_list" v-for="(item, index) in news" :key="index">
                <!-- {{item.img}} -->
                 <div class="news_img"><img :src="item.img" width="250" alt=""></div>
                 <div class="news_title">{{item.title}}</div>
                 <div class="news_time"><n-icon size="20"> <Calendar /></n-icon> {{item.time}} </div>
                 <div class="news_text"> {{item.text}} </div>
             </div>
        </div>
    </div>
</template>
<script setup>
import { Calendar } from "@vicons/ionicons5";
import {ref} from "vue";
import News1 from "../assets/images/new1.jpg";
import News2 from "../assets/images/new3.jpg";
import News3 from "../assets/images/Rectangle 61.png";
import News4 from "../assets/images/photo.jpg";
const news = ref([
    {
        id: 1, 
        img:  News1, 
        title: "XXI asr ko‘nikmalarini ommalashtirishda",
        text: "Abdulla Qodiriy nomidagi jizzax davlat pedagogika universiteti Oʻzbekiston Respublikasi Prezidentining 2022-yil 21-iyundagi “Pedagogik taʼlim sifatini oshirish va pedagog kadrlar tayyorlovchi oliy taʼlim muassasalari faoliyatini yanada rivojlantirish chora-tadbirlari toʻgʻrisida”gi PQ–289-son",
        time: "30-08-2023 10:25:45"
    },
    {
        id: 2, 
        img: News2, 
        title: "Startap loyiha nima?",
        text: "2022-yil 15-dekabr kuni Iqtidorli talabalarning ilmiy tadqiqot faoliyatini tashkil etish bo'limi IT-Park Jizzax viloyati filiali bilan hamkorlikda seminar-trening tashkil etdi. Seminar-treningda IT-Park Jizzax viloyati filiali mutaxassisi Axror Abdug'aniyev",
        time: "29-08-2023 12:45:15"
    },
    {
        id: 3, 
        img: News3, 
        title: "Tadqiqotchilik va kreativ sa’y-harakatlarni qo‘llaymiz",
        text: "2022-yil 2-dekabr kuni Samarqand iqtisodiyot va servis institutida “Tadqiqotchilik va kreativ sa’y-harakatlarni qo‘llaymiz” shiori ostida VII xalqaro talabalar simpoziumi bo‘lib o'tdi. Simpoziumda Ruminiya, Xitoy, Qozog‘iston, Belarus, Qatar",
        time: "31-08-2023 15:25:06"
    },
    {
        id: 4, 
        img: News4, 
        title: "Jizzax viloyatida ilk bor 'DevFest 2022 Jizzakh'",
        text: "26-noyabr kuni Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi, IT Park, Google Developer Groups hamda Sambhram universiteti hamkorligida DevFest - Jizzaxdagi birinchi texnologiya festivali tashkil qilindi. Universitetning",
        time: "28-08-2023 08:55:45"
    },
])
</script>
<style scoped>
.news{
    width: 100%;
    height: 550px;
    background-color: rgba(250, 248, 248, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.news_header{
    width: 90%;
    height: 100px;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.news_header .news_line{
    width: 50%;
    position: relative;
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 600;
    /* margin: 0px auto; */
}
.news_header .news_title{
    font-size: 22px;
    font-weight: 700;
}
.news_content{
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.news_content .news_list{
    /* border: 2px solid rgb(201, 197, 197); */
    width: 23.5%;
    background-color: rgba(201, 197, 197, 0.2);
    margin: 5px 8px;
    padding: 10px;
    box-shadow: 1px 1px 5px grey;
    transition: all 0.9s ease-in-out;
    cursor: pointer;
    border-radius: 5px;
}
.news_content .news_list:hover{
    transform: scale(0.95,1.04);
}
.news_list .news_img{
    text-align: center;
    /* height: 200px; */
}
.news_list .news_img img{
    height: 180px;
}
.news_list .news_title{
    font-size: 20px;
    padding: 10px 0px;
    font-weight: 600;
    font-family: sans-serif;
    /* font-style: */
}
.news_list .news_time{
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
}
.news_list .news_text{
    text-indent: 20px;
    font-size: 12px;
    font-family: sans-serif;
}
@media(max-width: 375px){
    .news{
    width: 360px;
    min-height: 700px;
    background-color: rgba(250, 248, 248, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.news_header{
    width: 300px;
    /* border: 2px solid red; */
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.news_header .news_line{
    display: none;
}
.news_header .news_title{
    font-size: 14px;
    font-weight: 700;
}
.news_content{
    width: 320px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.news_content .news_list{
    /* border: 2px solid rgb(201, 197, 197); */
    width: 150px;
    background-color: rgba(201, 197, 197, 0.2);
    margin: 5px;
    padding: 10px;
    box-shadow: 1px 1px 5px grey;
    transition: all 0.9s ease-in-out;
    cursor: pointer;
    border-radius: 5px;
}
.news_content .news_list:hover{
    transform: scale(0.95,1.04);
}
.news_list .news_img{
    text-align: center;
    /* height: 200px; */
}
.news_list .news_img img{
    height: 100px;
}
.news_list .news_title{
    font-size: 10px;
    padding: 10px 0px;
    font-weight: 600;
    font-family: sans-serif;
    /* font-style: */
}
.news_list .news_text{
    text-indent: 8px;
    font-size: 8px;
    font-family: sans-serif;
}
.news_list .news_time{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 10px !important;
    padding: 5px 0px;
    /* border: 1px solid red; */
}
.news_list .news_time .n-icon{
    font-size: 15px !important;
}
}
</style>