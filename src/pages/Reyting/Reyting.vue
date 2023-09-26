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
            <div class="reyting_header_content">
                <div class="left">
                    <div class="left_title">Iqtidorli talabalar reytingi</div>
                    <div class="left_text">Universitetda iqtidorli talabalar O'zbekiston Respublikasi Prezidentining 2018-yil 5-iyundagi “Oliy ta'lim muassasalarida ta'lim sifatini oshirish va ularning mamlakatda amalga oshirilayotgan keng qamrovli islohotlarda faol ishtirokini ta'minlash bo'yicha qo'shimcha chora-tadbirlar to'g'risida”gi PQ – 3775-son qaroriga muvofiq fakultetlar kesimida talabalar orasidan saralab olinadi.</div>
                    <div class="left_texts">Iqtidorli talabalar reytingi ularning erishgan yutuqlari asosida yuritiladi. Buning uchun iqtidorli talabalar quyidagi hujjatlarni tizimga joylashtirishi talab etiladi:</div>
                </div>
                <div class="right">
                    <img src="../../assets/images/university.png" width="500"  alt="">
                </div>
            </div>
        </div>
        <div class="reyting_lists">
            <div class="reyting_item">
                <div class="reyting_list">
                    <div class="reyting_list_left reyting_list_title">
                        Tizimga joylash lozim bo'lgan hujjatlar:
                    </div>
                    <div class="reyting_list_right">

                    </div>
                </div>
                <div class="reyting_list">
                    <div class="reyting_list_left">
                        <n-icon size="40"><ClipboardBulletListLtr16Regular /></n-icon>
                        <div class="title">Fanlarni o‘zlashtirish darajasi(o‘quv varaqasi nusxasi)</div>
                    </div>
                    <div class="reyting_list_right">
                        <n-icon size="40"><Certificate24Filled /></n-icon>
                        <div class="title">Respublika va xalqaro olimpiadalarda erishgan yutuqlari (diplom)</div>
                    </div>
                </div>
                <div class="reyting_list">
                    <div class="reyting_list_left">
                        <n-icon size="40"><ClipboardBulletListLtr16Regular /></n-icon>
                        <div class="title">Ilmiy-tadqiqot ishi doirasida chiqarilgantezis va maqolalari (Respublika va Xalqaro miqyosdagi konferensiyalar)</div>
                    </div>
                    <div class="reyting_list_right">
                        <n-icon size="40"><Certificate24Filled /></n-icon>
                        <div class="title">Ilmiy-tadqiqot ishi doirasida chiqarilgan ilmiy
maqolalari (Respublika va Xalqaro ilmiy jurnallar)</div>
                    </div>
                </div>
                <div class="reyting_list">
                    <div class="reyting_list_left">
                        <n-icon size="40"><ClipboardBulletListLtr16Regular /></n-icon>
                        <div class="title">Ilmiy-tadqiqot ishi doirasida chiqarilgan monografiya, o‘quv, uslubiy qo‘llanmasi</div>
                    </div>
                    <div class="reyting_list_right">
                        <n-icon size="40"><Certificate24Filled /></n-icon>
                        <div class="title">Xorijiy tillarni bilish darajasi (sertifikat)</div>
                    </div>
                </div>
                <div class="reyting_list">
                    <div class="reyting_list_left">
                        <n-icon size="40"><ClipboardBulletListLtr16Regular /></n-icon>
                        <div class="title">Axborot texnologiyalari sohasidagi
erishgan yutuqlari (sertifikat)</div>
                    </div>
                    <div class="reyting_list_right">
                        <n-icon size="40"><Certificate24Filled /></n-icon>
                        <div class="title">Republika va xalqaro tanlovlarda erishgan
yutuqlari (sertifikat va diplom)</div>
                    </div>
                </div>
                <div class="reyting_list">
                    <div class="reyting_list_left">
                        <n-icon size="40"><ClipboardBulletListLtr16Regular /></n-icon>
                        <div class="title">Innovatsion yechimlar va ishlanmalar,
startap loyihalarini yaratishdagi faol ishtiroki
(sertifikat, diplom, guvohnoma)</div>
                    </div>
                    <div class="reyting_list_right">
                        <n-icon size="40"><Certificate24Filled /></n-icon>
                        <div class="title">Ijodiy yutuqlari</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hujjats"> 
            <Hujjat />
        </div>
        <div class="tables">
            <Tables />
        </div>
        <div class="footer">
           <Footer />
        </div>
    </div>
</template>
<script setup>
import Navbar from "../../components/Navbar.vue";
import Hujjat from "../../components/Hujjat.vue";
import Tables from "../../components/Tables.vue";
import Footer from "../../components/Footer.vue";
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
.reyting_lists{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(213, 234, 241, 0.8);
    /* border: 2px solid red; */
}
.reyting_lists .reyting_item{
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    /* border: 2px solid blue; */
}
.reyting_lists .reyting_item .reyting_list{
    width: 100%;
    height: 100px;
    display: flex;
    /* border: 2px solid red; */
    justify-content: center;
}
.reyting_lists .reyting_item .reyting_list:nth-child(2n + 2){
    color: grey;
    background-color: rgb(236, 232, 232);
}
.reyting_list .reyting_list_left,.reyting_list .reyting_list_right{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.reyting_list_title{
    font-size: 22px;
    color: rgb(9, 9, 87);
    font-family: sans-serif;
    font-weight: 600;
}
.reyting_list .reyting_list_right .title, .reyting_list .reyting_list_left .title{
    width: 220px;
    margin-left: 30px;
    padding: 5px 0px;
}
.reyting .hujjats{
    width: 100%;
    background-color: rgba(213, 234, 241, 0.8);
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
}
.tables{
    width: 100%;
    background-color: rgba(213, 234, 241, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
}
.reyting .footer{
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
    width: 400px;
    margin-right: 10px;
    /* border: 2px solid yellow; */
    padding: 10px;
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
.reyting_lists{
    width: 360px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(213, 234, 241, 0.8);
    /* border: 2px solid blue; */
}
.reyting_lists .reyting_item{
    width: 350px;
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    background-color: white;
    /* border: 2px solid blue; */
}
.reyting_lists .reyting_item .reyting_list{
    width: 350px;
    height: 100px;
    display: flex;
    /* border: 2px solid red; */
    justify-content: center;
}
.reyting_lists .reyting_item .reyting_list:nth-child(2n + 2){
    color: grey;
    background-color: rgb(236, 232, 232);
}
.reyting_list .reyting_list_left,.reyting_list .reyting_list_right{
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.reyting_list_title{
    font-size: 12px;
    color: rgb(9, 9, 87);
    font-family: sans-serif;
    font-weight: 600;
}
.reyting_list .reyting_list_right .title, .reyting_list .reyting_list_left .title{
    width: 250px;
    margin-left: 20px;
    /* color: red; */
    font-size: 10px;
    padding: 10px 0px;
}
.reyting_list .reyting_list_left .n-icon,.reyting_list .reyting_list_right .n-icon{
    font-size: 25px !important;
}
.reyting .hujjats{
    width: 360px;
    background-color: rgba(213, 234, 241, 0.8);
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
}
.tables{
    width: 360px;
    background-color: rgba(213, 234, 241, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
}
.reyting .footer{
    width: 360px;
}
}
</style>
