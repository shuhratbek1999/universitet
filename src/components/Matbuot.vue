<template>
    <div class="matbuot">
        <div class="matbuot_content">
             <div class="matbuot_left">
                 <div class="matbuot_name">{{names}}</div>
                 <div class="matbuot_lists" v-for="(item, index) in yangiliklar" :key="index">
                      <div class="img"><img :src="item.img" :alt="item.name"></div>
                      <div class="text">{{item.text}}</div>
                 </div>
             </div>
             <div class="matbuot_right">
                 <div class="matbuot_titles" v-for="(item, index) in yangiliklar_list" :key="index" @click="News(item.id)">
                      <div class="img"><img :src="item.img" :alt="item.name" width="80" ></div>
                      <div class="content">
                        <div class="name">{{item.name}}</div> 
                        <div class="date">{{item.date_time}}</div> 
                      </div>
                 </div>
             </div>
        </div>
    </div>
</template>

<script setup>
import {ref,onMounted} from "vue";
import img1 from "../assets/images/mat1.jpg";
import img2 from "../assets/images/mat7.jpg";
import img3 from "../assets/images/mat3.jpg";
import img5 from "../assets/images/mat5.jpg";
const yangiliklar = ref([]);
const yangiliklar_list = ref([])
const names = ref("")
const List = ref([
    {id: 1, date_time: "25.11.2023", name: "o'zbek тили шаръий илмлар калити", text: "Тошкент ислом институти ректори, сиёсий фанлар доктори, профессор Муҳаммадолим домла Муҳаммадсидиқов Тиллар кафедраси фаолиятини ўрганди.Талабаларнинг ўзбек ва хорижий тилларни мукаммал ўрганишларини таъминлаш мақсадида Тиллар кафедраси 2001 йилда ташкил этилди.Кафедра Араб тили, Араб тили – Муҳовара, Балоғат, Рус тили, Инглиз тили, Форс тили, Палеография, кодикология ва эпиграфика каби фанларни ўз таркибига олади.Кафедранинг асосий мақсади ўзбек тилида иш юритишни мукаммал биладиган, хорижий тилларда илмий-ижтимоий мавзуларда суҳбатлаша оладиган, муқаддас манбалардаги ибора ва матнларни ўқиб таржима қилиш, шарҳлаш салоҳиятига эга мутахассисларни тайёрлашдан иборат.", img: img1},
    {id: 2, date_time: "24.11.2023", name: "Мутахассислар хорижий институт томонидан ташкил этилган ўқув курсларида билимларини мустаҳкамлашди", text: "Бу борада “Газпром” компанияси билан малакали кадрлар тайёрлаш масалаларида ҳамкорлик алоқалари йўлга қўйилган. Томонлар ўртасида ҳамкорликни кенгайтириш бўйича тасдиқланган “Меморандум”га мувофиқ нефть-газ саноати корхоналарида меҳнат қилаётган ходимларнинг малакаси ва билимларини оширишга қаратилган ўқув курслари ташкил этилмоқда.“Ўзбекнефтгаз” АЖ Қурилиш ва лойиҳалаштириш депаратаменти, завод ва бошқармаларда ушбу йўналишда фаолият олиб бораётган 19 нафар ходим Газпром корпоратив институти томонидан ташкил этилган бир ҳафталик ўқув курсларида билимларини мустаҳкамлаб қайтишди", img: img2},
    {id: 3, date_time: "26.11.2023", name: "Ibn Molik", text: "Muhammad ibn Abdulloh ibn Molik at-Toiy Andalusiy rohmatullohi alayh, 1204 (600-hijriy)-yilda Andalusning Jayyon shahrida dunyoga kelgan, Ibn Molik kunyasi bilan mashhurdir. Ushbu zot Arab tili grammatikasi tarixida ajralib turadigan ulug’ allomalardan. Ibn Molik avvalgi ilmini Qur’on yodlashdan boshlagan, so’ngra qiroat ilmlari, diniy ilmlar, nahv va lug’at ilmlarini o’rgangan. Ma’lumotlarda kelishicha birinchi bo’lib arab tilini 628-hijriy yillarda bir qancha muddat o’z shahridagi olim Sobit ibn Xayor al-Kiloiy al-Muqridan o’rgangan. Ibn Molik yashab turgan vaqtlarda Andalusda tinchlik barqaror emas edi. Shu sababli u zot Mashriqga safar qilgan. Ehtimol rihlatning sababi ham ilm olish va hajni ado qilish uchun bo’lgan. 630-hijriy yillar atrofida Misrga safar qiladilar, u yerda uzoq turmay Haj amalini ado qilish uchun hijozga qarab yo’l oladilar, so’ng Damashqqa borib u yerda ustozlardan ilm tahsil qilishni boshlaydi. Undan so’ng esa Halabga borib ilm olishni davom ettirgan.", img: img5},
    {id: 4, date_time: "23.11.2023", name: "Матбуот котибининг асосий вазифалари", text: "Олий ва ўрта махсус таълим вазирлиги ахборот хизмати ҳамда институт рахбарияти томонидан белгиланадиган ахборот сиёсатини шакллантириш ва амалга оширишда иштирок этиш;Ахборот сохасидаги ягона давлат сиёсатини амалга ошириш борасида Олий ва ўрта махсус таълим вазирлиги ахборот хизмати ҳамда давлат ва жамоат ташкилотларининг ахборот хизматлари билан самарали ва амалий ҳамкорликни таъминлаш; Кенг жамоатчиликни институт фаолияти, соҳага доир норматив-ҳуқуқий хужжатлар тўғрисида ҳолисона, сифатли ва тезкор хабардор қилиш, оммавий ахборот воситалари билан ҳамкорлик ўрнатиш, доимий ҳамкорликда ишлайдиган журналистлар доирасини шакллантириш, ахборот хабарларини тарқатиш;", img: img3}
])
const News = (id) => {
    let index = List.value.findIndex(item => item.id == id)
    let massiv = List.value.slice(index, id)
    yangiliklar.value = massiv;
    // console.log(index, id, massiv)
}
const Lists = () => {
    yangiliklar.value = List.value;
    yangiliklar_list.value = List.value;
}
onMounted(() => {
  Lists()
})
</script>

<style scoped>
.matbuot{
    width: 100%;
    min-height: 800px;
    display: flex;
    justify-content: center;
    /* border: 1px solid red; */
}
.matbuot .matbuot_content{
    width: 90%;
    display: flex;
    justify-content: space-between;
}
.matbuot .matbuot_content .matbuot_left{
    width: 65%;
    /* border: 1px solid red; */
}
.matbuot_content .matbuot_left .matbuot_lists{
    margin: 10px 0px;
    padding: 10px;
}
.matbuot_content .matbuot_left .matbuot_lists .text{
    padding: 10px 0px;
    text-indent: 10px;
}
.matbuot .matbuot_content .matbuot_right{
    width: calc(100% - 70%);
    /* border: 1px solid blue; */
}
.matbuot_content .matbuot_right .matbuot_titles{
    margin: 10px 0px;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    /* border: 1px solid red; */
}
.matbuot_content .matbuot_right .matbuot_titles .img{
    width: 35%;
}
.matbuot_content .matbuot_right .matbuot_titles .content{
    width: calc(100% - 35%);
    height: 100%;
}
.matbuot_titles .content .name{
    font-size: 14px;
}
.matbuot_titles .content .date{
    padding: 10px 0px;
}

@media(max-width: 375px){
.matbuot{
    width: 100%;
    min-height: 1000px;
    display: flex;
    justify-content: center;
    /* border: 1px solid red; */
}
.matbuot .matbuot_content{
    width: 90%;
    display: flex;
    justify-content: space-between;
}
.matbuot .matbuot_content .matbuot_left{
    width: 65%;
    /* border: 1px solid red; */
}
.matbuot_content .matbuot_left .matbuot_lists{
    margin: 10px 0px;
    padding: 10px;
}
.matbuot_content .matbuot_left .matbuot_lists .text{
    padding: 10px 0px;
    font-size: 10px;
    text-indent: 10px;
}
.matbuot .matbuot_content .matbuot_right{
    width: calc(100% - 60%);
    /* border: 1px solid blue; */
}
.matbuot_content .matbuot_right .matbuot_titles{
    margin: 10px 0px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}
.matbuot_content .matbuot_right .matbuot_titles .img{
    /* border: 1px solid red; */
    width: 90%;
}
.matbuot_content .matbuot_right .matbuot_titles .img img{
    width: 100px !important;
}
.matbuot_content .matbuot_right .matbuot_titles .content{
    width: 90%;
    height: 100%;
}
.matbuot_titles .content .name{
    font-size: 10px;
}
.matbuot_titles .content .date{
    padding: 10px 0px;
     font-size: 10px;
}
}
</style>
