<template>
    <div class="reyting">
        <div class="topMenu">
            <TopMenu />
        </div>
        <div class="reyting_header">
            <div class="reyting_top">
                <Navbar class="Navbar">
                    <template v-slot:button> 
                        <div class="navbar_item">
                            <div 
                                class="border-2 border-solid rounded-lg py-2 px-6 md:w-50 text-center bg-blue-300 text-white shadow hover:shadow-lg cursor-pointer" 
                                @click="Kirish"
                                style="margin-right: 15px;"
                                >
                                Kirish
                            </div>
                            <div 
                                class="border-2 border-solid rounded-lg py-2 px-6 md:w-50 text-center bg-blue-300 text-white shadow hover:shadow-lg cursor-pointer" 
                                @click="Royhat"
                                >
                                Ro'yhatdan o'tish
                            </div>
                        </div>
                    </template>
                 </Navbar>
            </div>
            <div class="reyting_header_content">
                <div class="left">
                    <div class="left_title">Biz haqimizda</div>
                    <div class="left_text">
                        O'zbekiston Respublikasi Prezidentining 2019-yil 30-avgustdagi “Yoshlarni ilm-fan sohasiga jalb etish va ularning tashabbuslarini qo'llab-quvvatlash tizimini takomillashtirish chora-tadbirlari to'g'risida” PQ-4433-son qaroriga ko'ra Abdulla Qodiriy nomidagi Jizzax davlat pedagogika universiteti huzurida iqtidorli va tashabbuskor talabalarni har tomonlama qo'llab-quvvatlash maqsadida Biz haqimizda tashkil etildi. Biz haqimizda 4 ta platforma bo'yicha jamoalarni a'zolikka qabul qiladi va a'zolarini yangi istiqbolli yo'nalishlar bo'yicha yetuk mutaxassislar bo'lishlarida amaliy yordam ko'rsatadi.
                    </div>
                </div>
                <div class="right">
                    <img src="../../assets/images/university.png" width="500"  alt="">
                </div>
            </div>
        </div>
        <div class="hujjats"> 
            <Hujjat>
                <template v-slot:list>
                   <div class="hujjat_content">
                        <ul>
                            <li>
                                <n-icon size="30">
                                    <PictureAsPdfFilled />
                                </n-icon>
                            </li>
                            <li>Jizzax davlat pedagogika universiteti huzuridagi
“Biz haqimizda to'g'risida”gi nizom</li>
                            <li>04.01.2023</li>
                            <li>17:16</li>
                            <li>299KB</li>
                            <li>
                                <n-icon size="30">
                                        <DownloadForOfflineRound />
                                </n-icon>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <n-icon size="30">
                                    <PictureAsPdfFilled />
                                </n-icon>
                            </li>
                            <li>Jizzax davlat pedagogika universiteti Talabalar
Biz haqimizda Kengashi nizomi</li>
                            <li>04.01.2023</li>
                            <li>17:16</li>
                            <li>299KB</li>
                            <li>
                                <n-icon size="30">
                                        <DownloadForOfflineRound />
                                </n-icon>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <n-icon size="30">
                                    <PictureAsPdfFilled />
                                </n-icon>
                            </li>
                            <li>Biz haqimizda platformalariga iqtidorli va tashabbuskor
yoshlardan iborat jamoalarni saralash to'g'risida nizom</li>
                            <li>04.01.2023</li>
                            <li>17:16</li>
                            <li>299KB</li>
                            <li>
                                <n-icon size="30">
                                        <DownloadForOfflineRound />
                                </n-icon>
                            </li>
                        </ul>
                        
                </div>
                </template>
            </Hujjat>
        </div>
        <div class="statistika">
            <Statistika/>
        </div>
        <div class="footer">
           <Footer />
        </div>
    </div>
</template>
<script setup>
import TopMenu from "../../components/TopMenu.vue";
import Statistika from "../../components/Statistika.vue";
import Navbar from "../../components/Navbar.vue";
import Hujjat from "../../components/Hujjat.vue";
import Footer from "../../components/Footer.vue";
import {DownloadForOfflineRound, PictureAsPdfFilled} from "@vicons/material"
import {ClipboardBulletListLtr16Regular,Certificate24Filled} from "@vicons/fluent";
import {useRouter} from "vue-router";
const router = useRouter();
const Kirish = () => {
    router.push("/")
}
const Royhat = () => {
    router.push("/register")
}
</script>

<style scoped>
.reyting {
    width: 100%;
    height: 100vh;
    background-color: rgb(229, 231, 231);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.statistika{
    width: 100%;
    min-height: 800px;
    /* border: 1px solid red; */
}
.reyting_header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.reyting_header .reyting_top {
    width: 90%;
    height: 70px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0px 0px 0px;
}
.topMenu{
    width: 100%;
    height: 40px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F7F8F9;
    /* margin: 0 auto; */
}
.navbar_item{
    display: flex;
    /* border: 1px solid red; */
}
.reyting_header_content{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
     /* border: 1px solid red; */
}
.reyting_header_content .left{
    width: 460px;
    margin-right: 30px;
}
.reyting_header_content .left .left_title{
    font-size: 44px;
    font-family: sans-serif;
    color: rgb(14, 14, 82);
    font-weight: 600;
}
.reyting_header_content .left .left_text{
    text-indent: 20px;
    font-family: sans-serif;
    padding: 40px 0px;
}
.reyting_header_content .left .left_texts{
    font-size: 17px;
    font-family: sans-serif;
    text-indent: 20px;
    padding: 20px 0px;
    color: rgb(14, 14, 82);
    font-weight: 600;
}
.reyting .hujjats{
    width: 100%;
    background-color: rgba(213, 234, 241, 0.8);
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
}
.reyting .footer{
    width: 100%;
}

@media(max-width: 375px){
.reyting{
    width: 100%;
    height: 100vh;
    /* border: 2px solid red; */
    background-color: rgb(229, 231, 231);
    /* color: white; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.reyting_header{
    width: 90%;
    /* border: 2px solid blue; */
}
.statistika{
    width: 100%;
    min-height: 1100px;
    /* border: 1px solid red; */
}
.reyting_header_content{
    width: 100%;
    display: flex;
    margin: 20px 0px;
}
.reyting_header_content .left{
    width: 60%;
    margin-right: 30px;
}
.reyting_header_content .right{
    width: calc(100% - 60%);
    margin-right: 10px;
    /* border: 2px solid red; */
}
.reyting_header_content .left .left_title{
    font-size: 20px;
    font-family: sans-serif;
    color: rgb(14, 14, 82);
    font-weight: 600;
}
.reyting_header_content .left .left_text{
    text-indent: 20px;
    font-family: sans-serif;
    font-size: 10px;
}
.reyting_header_content .left .left_texts{
    font-size: 12px;
    font-family: sans-serif;
    text-indent: 20px;
    padding: 20px 0px;
    color: rgb(14, 14, 82);
    font-weight: 600;
}
.reyting .hujjats{
    width: 100%;
    background-color: rgba(213, 234, 241, 0.8);
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
}
.reyting .footer{
    width: 100%;
}

}
</style>
