<template>
    <div class="tanlov">
        <div class="tanlov_top">
             <div class="tanlov_top_left text-teal-900">
                   Tanlovlar
             </div>
              <div class="tanlov_top_right text-cyan-950">
                  So'nggi joylanganlar
             </div>
        </div>
        <div class="tanlov_content">
             <div class="tanlov_content_about">
                 <div class="tanlov_content_about_list rounded-lg bg-white" v-for="(item,index) in tanlovlar" :key="index">
                    <div class="tanlov_content_about_img">
                     <img :src="item.img" alt="">
                    </div>
                    <div class="tanlov_content_about_text">
                        <div class="about_text indent-2.5">
                            {{item.text}}
                        </div>
                        <div 
                            class="batafsil xs:text-xs border-2 border-solid rounded-lg my-2 py-2 px-6 md:w-40 text-center bg-cyan-700 text-white shadow hover:shadow-lg cursor-pointer" 
                            >
                            Bog'lanish
                        </div>
                    </div>
                 </div>
             </div>
             <div class="tanlov_content_list">
                 <div class="tanlov_list" v-for="(item,index) in tanlovlars" :key="index" @click="TanlovlarIndex(item.id)">
                      <div class="tanlov_item_img">
                          <img :src="item.img" alt="">
                      </div>
                      <div class="tanlov_item_text">
                          <div class="tanlov_item_title">{{item.name}}</div>
                          <div class="tanlov_date">{{item.date_time}}</div>
                      </div>
                 </div>
             </div>
        </div>
    </div>
</template>
<script setup>
import {reactive, ref,onMounted} from "vue";
import tanlovImg from "../assets/images/tan2.webp";
import tanlovImg1 from "../assets/images/tan1.webp";
import tanlovImg2 from "../assets/images/tan.webp";
import tanlovImg3 from "../assets/images/tan3.webp";
const imgWidth = ref("350");
const tanlovlar = ref([]);
const tanlovlars = ref([]);
const Tanlov = ref([
    {
        id: 1, 
        text: "Birlashgan Millatlar Tashkiloti Bosh Assambleyasining 2015-yil 22-dekabrdagi 70-sessiyasida 11-fevral “Ilm-fan sohasidagi ayollar va qizlar xalqaro kuni” sifatida rasman eʼlon qilingan. Ushbu munosabat bilan “O‘zbekiston olima va tadqiqotchi xotin-qizlarining innovatsion g‘oyalari” tanlovi tashkil etilmoqda. Tanlov joriy yilning yanvar-fevral oylarida 3 bosqichda va 18-30 hamda 30 yoshdan yuqori bo‘lgan yosh toifasidagi xotin-qizlar o‘rtasida",
        img: tanlovImg1, 
        date_time: "2023-02-04 10:00:21",
        name: "Yoshlar akademiyasidan “Boʻlajak olim” 2023 ILMIY G'OYALAR tanlovi"
    },
    {
        id: 2, 
        text: "Dastur Oʻzbekiston Respublikasi Prezidentining 2022-yil 5 avgustdagi “Shaxmatni yanada ommalashtirish va rivojlantirish boʻyicha qoʻshimcha chora-tadbirlar toʻgʻrisida”gi PQ-347-son qarori ijrosini taʼminlash maqsadida tashkillashtirilgan. Turnirni tashkil etish va oʻtkazish Oʻzbekiston Respublikasi Yoshlar siyosati va sport vazirligi, Yoshlar ishlari agentligi, Oʻzbekiston shaxmat federatsiyasi tomonidan amalga oshiriladi. Dastur 5 bosqichda amalga oshiriladi. Turnirda ishtirokchilar 4 guruhda qatnashishadi",
        img: tanlovImg2, 
        date_time: "2023-02-07 12:10:21",
        name: "Sovrin jamgʻarmasi 880 million soʻmlik “Yoshlar ishlari agentligi kubogi” Respublika ochiq turniri"
    },
    {
        id: 3, 
        text: "Oliy taʼlimni rivojlantirish  tadqiqotlari va ilgʻor texnologiyalarni tatbiq qilish markazi, Raqamli taʼlim texnologiyalarini rivojlantirish markazi hamda oliy taʼlim muassasalari tomonidan kimyo, biologiya, fizika hamda informatika va axborot texnologiyalari fanlaridan oʻtkaziladigan respublika fan olimpiadasi 2023-yilning 10-20-iyun kunlari oraligʻida tashkil etiladi. Bunda tegishli fanlar boʻyicha bakalavriat bosqichida taʼlim olayotgan bitiruvchi talabalar ishtirok etishi mumkin.Gʻoliblar ikki bosqichda saralab olinadi:1-bosqich. Nazariy qism — 50 ball.Nazariy qism olimpiada.edu.uz elektron platformasida test shaklida boʻlib oʻtadi. Ishtirokchilar testni har bir fan boʻyicha olimpiadani oʻtkazishga masʼul hisoblangan oliy taʼlim muassasasi binosida video kuzatuv kamerasi nazoratida topshiradi. Test topshiriqlari soni — 50 ta. Umumiy beriladigan vaqt — 60 daqiqa.Har bir toʻgʻri javob 1 balldan baholanadi. Ishtirokchilar topshiriqlarni bajarishga berilgan vaqt oraligʻida tegishli fan boʻyicha test savollariga javob beradi. Ishtirokchilarning 1-tur boʻyicha olgan ballari toʻgʻrisidagi maʼlumot test yakunlangandan soʻng, olimpiada.edu.uz elektron platformasiga joylanadi. Ishtirokchilar 1-tur boʻyicha test savollariga 70 foiz toʻgʻri javob bersa  (50 balldan 35 ball toʻplasa) keyingi 2-tur bosqichiga oʻtkaziladi.2-bosqich. Amaliy qism — 50 ball.Birinchi turdan oʻtgan ishtirokchilar kimyo, biologiya va fizika fanlari boʻyicha laboratoriya mashgʻulotlarini, informatika va axborot texnologiyalari boʻyicha amaliy topshiriqlarni bajaradi. Topshiriqni bajarishga 120 daqiqa vaqt beriladi. Amaliy qismida har bir fan boʻyicha 1 ta topshiriq beriladi. Topshiriqlarning toʻgʻri va toʻliq bajarilganligiga qarab 50 ballgacha bilan baholanadi. Olimpiadaning amaliy qismi uchun baholash mezonlari hakamlar hayʼati tomonidan ishlab chiqiladi. Ikkinchi turda berilgan topshiriqni muddatidan oldin toʻgʻri va aniq bajargan ishtirokchilarga ustunlik beriladi.Olimpiada gʻoliblari 1- va 2-tur davomida toʻplagan baliga qarab aniqlanadi. Har bir fan boʻyicha eng yuqori ball toʻplagan 3 nafar ishtirokchi gʻolib deb topiladi. Natijalarni talabaning shaxsiy kabinetidagi olimpiada natijasi boʻlimidan koʻrish mumkin boʻladi.",
        img: tanlovImg3, 
        date_time: "2023-02-10 10:00:21",
        name: "Bitiruvchi bakalavrlar uchun kimyo, biologiya, fizika hamda informatika va axborot texnologiyalari fanlaridan respublika"
    },
    {
        id: 4, 
        text: "“Markaziy Osiyoda bagʻrikenglik va tinchlik manfaatlari yoʻlida transchegaraviy koʻp tomonlama muloqot” loyihasi doirasida Konrad Adenaur fondi tomonidan “Yaxshi qoʻshnichilik yoshlar nigohida” mavzusida hikoyalar tanlovi tashkil etilmoqda. Mahalliy hamkorlar: “Yuksalish fondi” (Oʻzbekiston), BIOM (Qirgʻiziston), “Gender va taraqqiyot” NNT (Tojikiston). Tanlov onlayn boʻlib oʻtadi.Tanlovda qatnashish uchun qoʻshnichilik haqida hikoya yozish kerak. Hikoya Markaziy Osiyoda yaxshi qoʻshnichilik va tinchlik oʻrnatish barqarorligi va rivojlanishini taʼminlashga yordam beradigan ijobiy gʻoyalar va tashabbuslarni yoritishga qaratilgan boʻlishi kerak. Qirgʻiz, tojik, oʻzbek yoki rus tilida yozilishi mumkin.Hikoyalar asosida badiiy illyustratsiyalar yaratiladi va 3 ta davlatda: Tojikiston, Oʻzbekiston va Qirgʻizistonda tarqatiladi. Shuningdek, gʻolib hikoyalar Oʻsh shahrida boʻlib oʻtadigan milliy koʻrgazmada namoyish etiladi. Shuningdek, siz qimmatbaho sovgʻa va sertifikat yutib olish imkoniyatiga ega boʻlasiz.",
        img: tanlovImg, 
        date_time: "2023-02-04 10:00:21",
        name: "“Yaxshi qoʻshnichilik yoshlar nigohida” mavzusida hikoyalar tanlovi"
    },
])
const TanlovlarIndex = (id) => {
    let index = Tanlov.value.findIndex(item => item.id == id)
    let massiv = Tanlov.value.slice(index, id)
    tanlovlar.value = massiv;
}
const Tanlovlist = () => {
    tanlovlar.value = Tanlov.value;
    tanlovlars.value = Tanlov.value;
}
onMounted(() => {
    Tanlovlist()
})
</script>

<style scoped>
.tanlov{
    width: 100%;
    /* border: 2px solid red; */
}
.tanlov .tanlov_top{
    width: 100%;
    display: flex;
    justify-content: center;
}
.tanlov .tanlov_top .tanlov_top_left{
    font-size: 22px;
    width: 65%;
    /* align-self: center; */
}
.tanlov_top_right{
    font-size: 22px;
    width: 35%;
}
.tanlov .tanlov_content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    margin: 30px 0px;
    /* border: 2px solid yellow; */
}
.tanlov .tanlov_content .tanlov_content_about_list{
    width: 100%;
    display: flex;
    flex-direction: column;
    /* border: 2px solid red; */
    margin: 10px 0px;
}
.tanlov .tanlov_content .tanlov_content_about{
    width: 60%;
    display: flex;
    flex-direction: column;
    /* border: 2px solid blue; */
}
.tanlov .tanlov_content .tanlov_content_about .tanlov_content_about_img{
    width: 100%;
    /* border: 2px solid red; */
}
.tanlov_content_about_img img{
    width: 100%;
    height: 500px;
}
.tanlov .tanlov_content .tanlov_content_about .tanlov_content_about_text{
    width: 100%;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.tanlov_content_about_title{
    font-size: 20px;
}
.tanlov .tanlov_content .tanlov_content_list{
    width: calc(100% - 65%);
    height: 300px;
    display: flex;
    flex-direction: column;
    /* margin-left: 30px; */
    /* margin: 10px 0px 10px 30px; */
    /* border: 2px solid black; */
}
.tanlov_content_list .tanlov_list{
    /* width: 250px; */
    min-height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    /* border: 2px solid red; */
}
.tanlov_list .tanlov_item_img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 90px;
    background-color: white;
    border-radius: 10px;
}
.tanlov_item_text{
    width: calc(100% - 40%);
}
.tanlov_list .tanlov_item_img img{
    width: 100px;
    height: 80px;
}
.tanlov_item_text .tanlov_date{
    font-size: 12px;
    padding: 5px 0px;
    color: gray;
    font-weight: bold;
}
.batafsil{
    font-size: 16px;
    /* height: 40px; */
    align-self: flex-end;
}

@media(max-width: 375px){
.tanlov{
    width: 100%;
    /* border: 2px solid red; */
}
.about_text{
    font-size: 8px;
}
.tanlov .tanlov_top{
    width: 100%;
    display: flex;
    justify-content: center;
}
.tanlov .tanlov_top .tanlov_top_left{
    font-size: 10px;
    width: 60%;
    font-weight: bold;
    /* align-self: center; */
}
.tanlov_top_right{
    font-size: 10px;
    width: 30%;
    font-weight: bold;
}
.tanlov .tanlov_content{
    width: 100%;
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    margin: 10px 0px;
    /* border: 2px solid yellow; */
}
.tanlov .tanlov_content .tanlov_content_about_list{
    width: 100%;
    display: flex;
    flex-direction: column;
    /* border: 2px solid red; */
    margin: 10px 0px;
}
.tanlov .tanlov_content .tanlov_content_about{
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    /* border: 2px solid blue; */
}
.tanlov .tanlov_content .tanlov_content_about .tanlov_content_about_img{
    width: 100%;
    /* border: 2px solid red; */
}
.tanlov_content_about_img img{
    width: 100%;
    height: 200px;
}
.tanlov .tanlov_content .tanlov_content_about .tanlov_content_about_text{
    flex-direction: column;
    width: 100%;
    padding: 10px;
}
.tanlov_content_about_title{
    font-size: 14px;
}
.tanlov .tanlov_content .tanlov_content_list{
    width: 40%;
    min-height: 650px;
    display: flex;
    flex-direction: column;
    /* margin-left: 30px; */
    margin: 10px 10px 10px 30px;
    /* border: 2px solid black; */
}
.tanlov_content_list .tanlov_list{
    width: 90%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0px;
    /* border: 2px solid red; */
}
.tanlov_list .tanlov_item_img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    background-color: white;
    border-radius: 10px;
}
.tanlov_list .tanlov_item_img img{
    width: 80px;
}
.tanlov_item_text .tanlov_date{
    font-size: 8px;
}
.tanlov_item_text{
    width:100%;
    padding: 10px;
}
.tanlov_item_title{
    font-size: 8px;
}
.batafsil{
    text-align: center;
    font-size: 8px;
    height: 30px;
}
}
</style>
