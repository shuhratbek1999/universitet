<template>
     <div class="container">
          <div class="profil_header">
                <div class="header_left1">
                     <n-icon color="white" class="line" size="20"><LineHorizontal320Filled /></n-icon>
                    <n-input v-model:value="search" class="search_input" type="search" placeholder="Basic Input" />
                    <n-icon size="18" color="black" class="search_icon"> <Search24Regular /> </n-icon>
                </div>
                <div class="header_left2">
                    <n-dropdown :options="options" @select="HandleSelect">
                        <n-button type="tertiary" class="header_button">
                          <n-icon class="person_icon" size="20">
                            <MailOpenPerson16Filled />
                        </n-icon>  Zokirjonov shuhratbek
                        </n-button>
                    </n-dropdown>
                </div>
          </div>
         <div class="login_top">
              <div class="login_about">
                  <ul>
                    <li @click="Dashboard" style="cursor: pointer">DASHBOARD</li>
                    <li @click="Hujjatlar">
                        <n-icon size="20"><DocumentBulletList20Regular />  </n-icon>
                       Hujjatlar
                    </li>
                    <li>
                        <n-icon size="20"> <Money24Regular /></n-icon>
                        Stipendiya
                    </li>
                  </ul>
              </div>
              <div class="login_kirish">
                    <div class="profil_about_header">STIPENDIYALAR</div>  
                <div class="profil_about">
                    <div class="profil_about_text">
                        <n-form ref="formRef" :model="model">
                        <label>Yuklanadigan hujjatlar va ma'lumotlar formasi </label>
                        <n-form-item label="Stipendiya nomi" path="name">
                        <n-select
                            v-model:value="model.name"
                            :options="stipendiya"
                            label-field="name"
                            value-field="name"
                            class="viloyat"
                            filterable 
                            > </n-select>
                        </n-form-item>
                        <div class="talim_about">
                            <label>Talim ma'lumotlari </label>
                            <div class="education">
                                <n-form-item class="edu" label="Yo'nalish nomi" path="yonalish">
                                <n-input 
                                    class="input" 
                                    v-model:value="model.yonalish" 
                                    @keydown.enter.prevent 
                                    size="large" 
                                    clearable
                                    />
                                </n-form-item>
                                <n-form-item class="edu" label="Talim shakli" path="talim_shakli">
                                <n-select
                                    v-model:value="model.talim_shakli"
                                    :options="TalimShakli"
                                    label-field="name"
                                    value-field="name"
                                    class="viloyat"
                                    filterable 
                                    > </n-select>
                                </n-form-item>
                                <n-form-item class="edu" label="Talim bosqichi" path="kurs">
                                <n-select
                                    v-model:value="model.kurs"
                                    :options="Kurs"
                                    label-field="name"
                                    value-field="name"
                                    class="viloyat"
                                    filterable 
                                    > </n-select>
                                </n-form-item>
                                <n-form-item class="edu" label="Talim tili" path="language">
                                <n-select
                                    v-model:value="model.language"
                                    :options="language"
                                    label-field="name"
                                    value-field="name"
                                    class="viloyat"
                                    filterable 
                                    > </n-select>
                                </n-form-item>
                            </div>
                        </div>
                        <div class="ariza">
                            <label>Ariza ma'lumotlari </label>
                            <div class="ariza_about">
                                <div class="title">Ma'lumotnoma</div>
                                <div class="files">
                                    <!-- <input ref="file" v-model="model.malumotnoma"   type="file" > -->
                                    <n-input type="file" v-model:value="model.malumotnoma" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">Reyting daftarcha</div>
                                <div class="files">
                                    <n-input type="file" v-model:value="model.rengting" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">Ilmiy rahbar tavsiyanomasi</div>
                                <div class="files">
                                     <n-input type="file" v-model:value="model.ilmiy_rahbar" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">Fakultet dekani tavsiyanomasi</div>
                                <div class="files">
                                    <n-input type="file" v-model:value="model.fakultet_dek_tav" />
                                </div>
                            </div>
                        </div>
                        <div class="ariza">
                            <label>Portfoliya </label>
                            <div class="ariza_about">
                                <div class="title">Xalqaro konferensiya</div>
                                <div class="files">
                                    <n-input type="file" v-model:value="model.xalqaro_konf" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">Respublikada konferensiya</div>
                                <div class="files">
                                    <n-input type="file" v-model:value="model.res_konf" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">Xalqaro jurnal</div>
                                <div class="files">
                                    <n-input type="file" v-model:value="model.xalq_jurnal" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">Respulika jurnal</div>
                                <div class="files">
                                    <n-input type="file" v-model:value="model.res_jurnal" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">Muallif guvohnomasi</div>
                                <div class="files">
                                     <n-input type="file" v-model:value="model.muallif_guvoh" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">Yutuqlar</div>
                                <div class="files">
                                     <n-input type="file" v-model:value="model.yutuq" />
                                </div>
                            </div>
                             <div class="ariza_about">
                                <div class="title">Xorijiy tili sertifikati</div>
                                <div class="files">
                                    <n-input type="file" v-model:value="model.til_sertifikat" />
                                </div>
                            </div>
                             <div class="ariza_about">
                                <div class="title">Boshqa</div>
                                <div class="files">
                                    <input ref="file"   type="file">
                                </div>
                            </div>
                        </div>
                    </n-form>
                   </div>
                   <div class="stipendiya_footer">
                      <div class="Kirish m-2 border-2 border-solid rounded-lg p-2 text-center bg-indigo-300 text-white shadow hover:shadow-lg cursor-pointer">
                          Yuborish
                        </div>
                   </div>
            </div>
              <div class="login_remember">
                <n-alert title="Ogoxlantirish" type="error">
                 Yuklanayotgan fayllarga qo'yiladigan talablar max: 50MB doc, docx, pdf, jpg, png, pptx, zip
                </n-alert>
                  <!-- <div class="alert">
                    <span>Yuklanayotgan fayllarga qo'yiladigan talablar</span> max: 50MB doc, docx, pdf, jpg, png, pptx, zip
                  </div> -->
              </div>
              </div>
         </div>
         <div class="login_footer">
              <div class="foter_name">
                  2023 © O'zMUJF
              </div>
              <div class="foter_link">
                  RTTM tomonidan ishlab chiqilgan
              </div>
         </div>
    </div>
</template>
<script setup>
import {ref, onMounted,h} from "vue"; 
import {useMessage, NIcon} from "naive-ui";
import { EyeOffOutline,PersonCircleOutline,LogOutOutline,CloudUploadOutline } from "@vicons/ionicons5";
import {TextBulletListSquareEdit20Regular, 
Money24Regular,DocumentBulletList20Regular,LineHorizontal320Filled,
Person16Filled,MailOpenPerson16Filled,Search24Regular,NotepadPerson24Regular,Password16Filled} from "@vicons/fluent"
import {useRouter} from "vue-router";
import {Register} from "../../stores/index"
const fileList = ref([]);
const router = useRouter();
const register = Register();
const rPasswordFormItemRef = ref(null);
const formRef = ref(null);
const message = useMessage();
const search = ref("");
const defaultFileList = ref([])
    let model = ref({
        name: "",
        yonalish: "",
        talim_shakli: "",
        kurs: "",
        language: "",
        malumotnoma: "",
        rengting: '',
        ilmiy_rahbar: "",
        fakultet_dek_tav: "",
        xalqaro_konf: "",
        res_konf: "",
        xalq_jurnal: "",
        res_jurnal: "",
        muallif_guvoh: "",
        yutuq: "",
        til_sertifikat: ""
    })
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};
const Hujjatlar = () => {
    router.push("/user/document")
}
// const handlePreview = () => {
//     console.log("salommm", fileList.value)
// }
const handleChange = (e) => {
  model.value.gender = e.target.value;
};
const Dashboard = () => {
    router.push("/dashboard")
}
const language = ref([
    {id: 1, name: "O'zbek"},
    {id: 2, name: "Rus"},
    {id: 3, name: "Ingliz"},
    {id: 4, name: "Qozoq"},
    {id: 5, name: "Tojik"},
    {id: 6, name: "Qirg'iz"}
])
const Kurs = ref([
    {id: 1, name: "I-bosqish"},
    {id: 2, name: "II-bosqish"},
    {id: 3, name: "III-bosqish"},
    {id: 4, name: "VI-bosqish"},
])
const TalimShakli = ref([
    {id: 1, name: "Kunduzgi"},
    {id: 2, name: "Kehcki"},
    {id: 3, name: "Sirtqi"},
    {id: 4, name: "Ikkinchi mutaxasislik"},
])
const stipendiya = ref([
    {id: 1, name: "O'zbekiston Respublikasi prezidenti"},
    {id: 2, name: "Islom Karimov"},
    {id: 3, name: "Navoiy"},
    {id: 4, name: "Pahlavon Mahmud"},
    {id: 5, name: "Kamoliddin Behzod"},
    {id: 6, name: "Universitet stipendiyasi"}
])
const Tahrirlash = () => {
    router.push("/profil/edit")
}
const options = ref([
    {
        label: "Profil",
        key: 'profil',
        icon: renderIcon(PersonCircleOutline)
    },
    {
        label: "Parol",
        key: "parol",
        icon: renderIcon(Password16Filled)
    },
    {
        label: "chiqish",
        key: "chiqish",
        icon: renderIcon(LogOutOutline)
    },
    {
        label: "Admin",
        key: "admin",
        icon: renderIcon(PersonCircleOutline)
    }
])
let input_type = ref("password")
const fakultet = ref([
    {id: 1, name: "Matematika"},
    {id: 2, name: "Axborot texnologiyalari"},
    {id: 3, name: "Ona tili va adabiyot"},
    {id: 4, name: "Jismoniy madaniyat"},
    {id: 5, name: "Tabiiy fanlar"}
])
const yonalish = ref([
    {id: 1, name: "Matematika"},
    {id: 2, name: "Informatika"},
    {id: 3, name: "Ona tili va adabiyot"},
    {id: 4, name: "Jismoniy tarbiya"},
    {id: 5, name: "Mehnat"},
    {id: 6, name: "Huquqshunoslik"},
])
const Login = () => {
     router.push("/")
}
const RegisterAbout = () => {
    model.value = register.registratsiya
}
const HandleSelect = (e) => {
    if(e == 'profil'){
        router.push("/profil")
    }
    else if(e == 'chiqish'){
        router.push("/")
    }
    else if(e == 'register'){
        router.push("/register")
    }
    else{
        router.push("/yangiliklar")
    }
}
onMounted(() => {
    RegisterAbout()
})
</script>
<style scoped>
.container{
    width: 100%;
    height: 100vh;
    background: rgba(33, 33, 99, 0.915);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.profil_header{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid red; */
}
.profil_header .person_icon{
    margin-right: 10px;
}
.profil_header .header_left1{
    width: 40%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.line{
    margin-right: 10px;
    cursor: pointer;
}
.search_input{
    width: 250px;
}
/* .profil_header .header_left2{
    width: 60%;
} */
.search_icon{
    position: absolute;
    right: 30px;
    cursor: pointer;
    top: 10px;
}
.login_top{
    width: 70%;
    min-height: 540px;
    background-color: rgb(235, 238, 238);
    display: flex;
}
.login_top .login_about{
    width: 33%;
    background-image: url("../../assets/images/bodyback.png");
    background-position: center;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: cover;
}
.login_top .login_about ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
    justify-content: space-evenly;
}
.login_top .login_about ul li{
    text-align: center;
    margin: 10px 0px;
    cursor: pointer;
}
.login_top .login_about ul li:first-child{
    margin-bottom: 40px;
    color: white;
    font-weight: bold;
    font-size: 18px;
}
.login_top .login_about ul li:nth-child(2n), .login_top .login_about ul li:nth-child(2n+1){
    color: white;
    font-family: sans-serif;
    display: flex;
}
.login_remember{
    margin: 10px 0px;
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}
label{
    color: rgb(101, 101, 231);
    font-family: sans-serif;
    font-weight: 600;
    margin: 10px 0px;
}
.talim_about{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.education{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.education .edu{
    width: 45%;
}
.ariza{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ariza .ariza_about{
    width: 100%;
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-between;
    align-items: center;
    margin: 15px 0px;
}
.ariza .ariza_about .files{
    padding: 10px;
    border-radius: 5px;
    background-color: rgb(224, 220, 220);
}
.Kirish{
    width: 300px !important;
}
.input{
    width: 500px !important;
}
.input_password{
    width: 500px !important;
    position: relative;
}
.login_kirish{
    width: 70%;
    height: 500px;
    /* margin-top: 30px; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    padding: 10px 10px;
}
.profil_about{
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 15px;
}
.profil_about_text .text{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(226, 223, 223);
    padding: 8px 12px;
}
.profil_about_text .text .main{
    font-weight: 500;
}
.profil_about_header{
    font-size: 16px;
    font-weight: 700;
    font-family: sans-serif;
    padding: 20px 0px;
    color: rgb(13, 13, 131);
}
.eye_icon{
    position: absolute;
    right: 10px;
    top: 8px;
    cursor: pointer;
}
.tahrirlash{
    width: 200px !important;
    margin: 15px 0px;
}
.header{
    width: 70%;
    text-align: left;
    cursor: pointer;
    font-size: 16px;
    font-family: sans-serif;
    color: rgb(5, 64, 131);
    padding: 20px 0px;
    font-weight: 900;
}
.login_footer{
    width: 99%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(100, 99, 99);
}
.foter_name{
    width: 35%;
    text-align: right;
}
.foter_link{
    width: calc(100% - 35%);
    text-align: right;
    margin-right: 30px  ;
}

@media(max-width: 375px){
.container{
    width: 370px;
    height: 100vh;
    background: rgba(33, 33, 99, 0.915);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.viloyat{
    width: 200px !important;
}
.profil_header{
    width: 340px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid red; */
}
.profil_header .person_icon{
    margin-right: 10px;
}
.profil_header .header_left1{
    width: 150px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.line{
    margin-right: 10px;
    cursor: pointer;
}
.profil_header .header_left2{
    width: 180px;
    /* border: 2px solid red; */
}
.profil_header .header_left2 .header_button{
    width: 180px;
    font-size: 11px;
}
.search_input{
    width: 150px;
}
/* .profil_header .header_left2{
    width: 60%;
} */
.search_icon{
    position: absolute;
    right: 10px;
    cursor: pointer;
    top: 10px;
}
.login_top{
    width: 340px;
    min-height: 540px;
    background-color: rgb(235, 238, 238);
    display: flex;
}
.login_top .login_about{
    width: 100px;
    background-image: url("../../assets/images/bodyback.png");
    background-position: center;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: cover;
}
.login_top .login_about ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    justify-content: space-evenly;
}
.login_top .login_about ul li{
    text-align: center;
    margin: 10px 0px;
    cursor: pointer;
    font-size: 11px !important;
}
.login_top .login_about ul li:first-child{
    margin-bottom: 40px;
    color: white;
    font-weight: bold;
    font-size: 18px;
}
.login_top .login_about ul li:nth-child(2n), .login_top .login_about ul li:nth-child(2n+1){
    color: white;
    font-family: sans-serif;
    display: flex;
}
.login_remember{
    margin: 10px 0px;
    background-color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}
.login_remember .n-alert-body__content{
    font-size: 12px !important;
}
label{
    color: rgb(101, 101, 231);
    font-family: sans-serif;
    font-weight: 600;
    margin: 10px 0px;
}
.ariza{
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
}
.ariza .ariza_about{
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    /* border: 2xp solid red; */
}
.ariza .ariza_about .files{
    width: 200px;
    padding: 5px;
    border-radius: 5px;
    background-color: rgb(224, 220, 220);
}
.ariza .ariza_about .files .n-input{
    width: 200px;
    font-size: 10px;
}
.ariza .ariza_about .title{
    width: 200px;
    font-size: 11px;
    padding: 5px 0px;
}
.Kirish{
    width: 100px !important;
}
.input{
    width: 200px !important;
}
.input_password{
    width: 200px !important;
    position: relative;
}
.login_kirish{
    width: 240px;
    height: 500px;
    /* margin-top: 30px; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    padding: 10px;
}
.profil_about{
    width: 220px;
    background-color: white;
    border-radius: 5px;
    padding: 15px 0px;
    /* border: 2px solid red; */
}
.profil_about_text{
    width: 220px;
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(226, 223, 223);
    padding: 6px 5px;
    /* font-size: 12px; */
}
.profil_about_text label{
    /* margin: 10px 0px; */
    font-size: 12px;
}
.profil_about_header{
    font-size: 10px;
    font-weight: 600;
    font-family: sans-serif;
}
.eye_icon{
     position: absolute;
    right: 8px;
    top: 12px;
    cursor: pointer;
    font-size: 15px !important;
}

.header{
    width: 70%;
    text-align: left;
    cursor: pointer;
    font-size: 16px;
    font-family: sans-serif;
    color: rgb(5, 64, 131);
    padding: 20px 0px;
    font-weight: 900;
}
.login_footer{
    width: 340px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(100, 99, 99);
}
.foter_name{
    width: 35%;
    text-align: right;
}
.foter_link{
    width: calc(100% - 35%);
    text-align: right;
    margin-right: 30px;
}
.education{
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    /* border: 2px solid red; */
}
.education .edu{
    width: 200px;
    /* border: 2px solid black; */
}
}
</style>