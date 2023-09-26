<template>
    <div class="platforma">
          <div class="platforma_header">
            <div class="lines"></div>
            <div class="titles">BIZ HAQIMIZDA PLATFORMALARI</div>
          </div>
          <div class="platforma_list">
               <div class="news_list" v-for="(item, index) in news" :key="index">
                <!-- {{item.img}} -->
                 <div class="news_title">{{item.title}}</div>
                 <div class="news_img"><img :src="item.img" width="250" alt=""></div>
                 <!-- <div class="news_time"><n-icon size="20"> <Calendar /></n-icon> {{item.time}} </div> -->
                 <div class="news_text"> {{item.text}} </div>
             </div>
          </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {Calendar} from "@vicons/ionicons5"
import News1 from "../assets/images/platform-1.png";
import News2 from "../assets/images/platform-2.png";
import News3 from "../assets/images/platform-3.png";
import News4 from "../assets/images/paltform-4.png";
const news = ref([
    {
        id: 1, 
        img:  News1, 
        title: "G'oyalar generatori",
        text: "Abdulla Qodiriy nomidagi jizzax davlat pedagogika universiteti Oʻzbekiston Respublikasi Prezidentining 2022-yil 21-iyundagi “Pedagogik taʼlim sifatini oshirish va pedagog kadrlar tayyorlovchi oliy taʼlim muassasalari faoliyatini yanada rivojlantirish chora-tadbirlari toʻgʻrisida”gi PQ–289-son",
    },
    {
        id: 2, 
        img: News2, 
        title: "Startaplar",
        text: "2022-yil 15-dekabr kuni Iqtidorli talabalarning ilmiy tadqiqot faoliyatini tashkil etish bo'limi IT-Park Jizzax viloyati filiali bilan hamkorlikda seminar-trening tashkil etdi. Seminar-treningda IT-Park Jizzax viloyati filiali mutaxassisi Axror Abdug'aniyev",
    },
    {
        id: 3, 
        img: News3, 
        title: "Biznes vakillari",
        text: "2022-yil 2-dekabr kuni Samarqand iqtisodiyot va servis institutida “Tadqiqotchilik va kreativ sa’y-harakatlarni qo‘llaymiz” shiori ostida VII xalqaro talabalar simpoziumi bo‘lib o'tdi. Simpoziumda Ruminiya, Xitoy, Qozog‘iston, Belarus, Qatar",
    },
    {
        id: 4, 
        img: News4, 
        title: "Bo'lajak Akademiklar",
        text: "26-noyabr kuni Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi, IT Park, Google Developer Groups hamda Sambhram universiteti hamkorligida DevFest - Jizzaxdagi birinchi texnologiya festivali tashkil qilindi. Universitetning",
    },
])
</script>
<style scoped>
.platforma{
    width: 100%;
    height: 500px;
    background-color: rgb(243, 247, 247);
}
.platforma_list{
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.platforma_header{
    /* text-align: center; */
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 2px solid red; */
}
.platforma_header .titles{
    font-size: 22px;
    font-weight: 550;
    font-family: sans-serif;
    color: rgb(15, 15, 43);
}
.platforma_list .news_list{
    /* border: 2px solid rgb(201, 197, 197); */
    width: 20%;
    height: 300px;
    background-color: white;
    margin: 5px;
    padding: 10px;
    box-shadow: 1px 1px 5px grey;
    transition: all 0.9s ease-in-out;
    cursor: pointer;
    border-radius: 5px;
}
.platforma_list .news_list:hover{
    transform: scale(0.95,1.04);
}
.news_list .news_img{
    text-align: center;
    /* height: 200px; */
}
.news_list .news_img img{
    width: 60px;
}
.news_list .news_title{
    font-size: 20px;
    padding: 10px 0px;
    font-weight: 600;
    font-family: sans-serif;
    text-align: center;
    /* font-style: */
}
.news_list .news_text{
    text-indent: 20px;
    font-size: 12px;
    font-family: sans-serif;
}
@media(max-width: 375px){
.platforma{
    width: 360px;
    min-height: 700px;
    background-color: rgb(243, 247, 247);
}
.platforma_list{
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.platforma_header{
    /* text-align: center; */
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 2px solid red; */
}
.platforma_header .titles{
    font-size: 14px;
    font-weight: 550;
    font-family: sans-serif;
    color: rgb(15, 15, 43);
}
.platforma_list .news_list{
    /* border: 2px solid rgb(201, 197, 197); */
    width: 160px;
    height: 300px;
    background-color: white;
    margin: 5px;
    padding: 10px;
    box-shadow: 1px 1px 5px grey;
    transition: all 0.9s ease-in-out;
    cursor: pointer;
    border-radius: 5px;
}
.platforma_list .news_list:hover{
    transform: scale(0.95,1.04);
}
.news_list .news_img{
    /* text-align: center; */
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    /* height: 200px; */
}
.news_list .news_img img{
    /* text-align: center; */
    width: 50px;
}
.news_list .news_title{
    font-size: 10px;
    padding: 10px 0px;
    font-weight: 600;
    font-family: sans-serif;
    text-align: center;
    /* font-style: */
}
.news_list .news_text{
    text-indent: 8px;
    font-size: 10px;
    font-family: sans-serif;
}
}
</style>