<template>
    <div class="reyting">
        <div class="reyting_header">
            <div class="reyting_top">
                <Navbar class="Navbar">
                    <template v-slot:image> 
                       <img src="../../assets/images/logo-blue.png" alt="">
                     </template>
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
        <div class="tanlovs">
            <Tanlov />
        </div>
        <div class="footer">
           <Footer />
        </div>
    </div>
</template>
<script setup>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import Tanlov from "../../components/Tanlov.vue";
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
}
.reyting_header{
    width: 90%;
    /* border: 2px solid blue; */
}
.navbar_item{
    display: flex;
}
.reyting_header_content{
    display: flex;
    margin: 20px 0px;
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
.reyting{
    width: 375px;
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
    width: 370px;
    /* border: 2px solid blue; */
}
.reyting_header_content{
    display: flex;
    margin: 20px 0px;
}
.reyting_header_content .left{
    width: 300px;
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
    width: 370px;
}
.footer{
    width: 370px;
}
}
</style>
