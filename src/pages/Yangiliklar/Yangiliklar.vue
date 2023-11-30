<template>
    <div class="reyting">
        <!-- salom -->
        <div class="reyting_header">
            <div class="topMenu">
                <TopMenu />
            </div>
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
        </div>
        <div class="Matbuot">
            <Matbuot />
        </div>
        <div class="tanlovs">
            <Yangiliklar />
        </div>
        <div class="Elonlar">
             <div class="elon_title">
                Elonlar
             </div>
            <Elon>
            </Elon>
        </div>
        <div class="footer">
           <Footer />
        </div>
    </div>
</template>
<script setup>
import Navbar from "../../components/Navbar.vue";
import Matbuot from "../../components/Matbuot.vue";
import Footer from "../../components/Footer.vue";
import Yangiliklar from "../../components/News.vue";
import TopMenu from "../../components/TopMenu.vue";
import Elon from "../../components/Elon.vue";
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
.reyting{
    width: 100%;
    height: 100vh;
    /* border: 2px solid red; */
    background-color: rgb(229, 231, 231);
    /* color: white; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* position: relative; */
}
.reyting .Elonlar{
    /* border: 2px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
}
.elon_title{
    text-align: center;
    font-size: 15px;
    font-weight: bold;
     padding-left: 70px;
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
.reyting_header{
    width: 100%;
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.reyting_header .reyting_top{
    position: sticky;
    top: 0;
    width: 90%;
    height: 60px;
    /* border: 2px solid red; */
    /* padding: 0px 50px; */
    z-index: 2000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgb(212, 210, 210);
    border-bottom: 1px solid rgb(202, 200, 200);
    margin: 10px 0px 0px 0px;
}
.navbar_item{
    display: flex;
}
.reyting_header_content{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
}
.reyting_header_content .left{
    width: 460px;
    margin-right: 30px;
    /* border: 2px solid red; */
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
}
.reyting_header_content .left .left_texts{
    font-size: 17px;
    font-family: sans-serif;
    text-indent: 20px;
    padding: 20px 0px;
    color: rgb(14, 14, 82);
    font-weight: 600;
}
.tanlovs{
    width: 90%;
    margin: 20px 0px;
}
.footer{
    width: 100%;
}
@media(max-width: 375px){
.topMenu{
    display: none;
}
.reyting{
    width: 100%;
    height: 100vh;
    /* border: 2px solid red; */
    background-color: rgb(229, 231, 231);
    /* color: white; */
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
}
.reyting_header{
    width: 100%;
    border: 2px solid blue;
}
.reyting_header_content{
    display: flex;
    margin: 0px;
}
.elon_title{
    text-align: center;
    font-size: 15px;
    font-weight: bold;
     padding-left: 50px;
}
.reyting_header_content .left{
    width: 80%;
    margin-right: 10px;
    /* border: 2px solid yellow; */
}
.reyting_header_content .left .left_title{
    font-size: 14px;
    font-family: sans-serif;
    color: rgb(14, 14, 82);
    font-weight: 600;
}
.reyting_header_content .left .left_text{
    text-indent: 10px;
    font-family: sans-serif;
    font-size: 8px;
}
.reyting_header_content .left .left_texts{
    font-size: 8px;
    font-family: sans-serif;
    text-indent: 10px;
    padding: 10px 0px;
    color: rgb(14, 14, 82);
    font-weight: 600;
}
.reyting_header_content .right image{
    width: 150px !important;
}
.tanlovs{
    width: 100%;
}
.footer{
    width: 100%;
}
}
</style>
