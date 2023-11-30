<template>
     <div class="containers">
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
                    <li @click="Stipendiya">
                        <n-icon size="20"> <Money24Regular /></n-icon>
                        Stipendiya
                    </li>
                  </ul>
              </div>
              <div class="login_kirish">
                <div class="profil_about_header">HUJJATLARNI YUBORISH SAHIFASI</div>  
                <div class="profil_about">
                    <div class="profil_about_text">
                        <n-form ref="formRef" :model="model">
                        <div class="ariza">
                            <div class="ariza_about">
                                <div class="title">
                                    <span>1. Fanlarni o'zlashtirish darajasi (o'quv varaqasi nusxasi)</span>
                                    <div class="tavsif">
                                        <span>Tavsif</span>
                                        <n-input type="text" v-model:value="model.tavsif" clearable/>
                                    </div>
                                    </div>
                                <div class="files">
                                    <!-- <input ref="file" v-model="model.malumotnoma"   type="file" > -->
                                    <n-input placeholder="" type="file" v-model:value="model.malumotnoma" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">
                                    2. Respublika va xalqaro olimpiadalarda erishgan yutuqlari (diplom)
                                    <div class="tavsif">
                                        <span>Tavsif</span>
                                        <n-input type="text" v-model:value="model.tavsif" clearable/>
                                    </div>
                                </div>
                                <div class="files">
                                    <n-input placeholder="" type="file" v-model:value="model.reyting" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">
                                    3. Ilmiy-tadqiqot ishi doirasida chiqarilgan tezis va maqolalari (respublika va xalqaro miqyosdagi konferensiyalar)
                                    <div class="tavsif">
                                        <span>Tavsif</span>
                                        <n-input type="text" v-model:value="model.tavsif" clearable/>
                                    </div>
                                    </div>
                                <div class="files">
                                    <n-input placeholder="" type="file" v-model:value="model.fakultet_dek_tav" />
                                </div>
                            </div>
                        </div>
                        <div class="ariza">
                            <div class="ariza_about">
                                <div class="title">
                                    4. Ilmiy-tadqiqot ishi doirasida chiqarilgan ilmiy maqolalari (respublika va xalqaro ilmiy jurnallar)
                                    <div class="tavsif">
                                        <span>Tavsif</span>
                                        <n-input type="text" v-model:value="model.tavsif" clearable/>
                                    </div>
                                    </div>
                                <div class="files">
                                    <n-input placeholder="" type="file" v-model:value="model.xalqaro_konf" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">
                                    5. Ilmiy-tadqiqot ishi doirasida chiqarilgan monografiya, o'quv, uslubiy qo'llanmasi
                                    <div class="tavsif">
                                        <span>Tavsif</span>
                                        <n-input type="text" v-model:value="model.tavsif" clearable/>
                                    </div>
                                    </div>
                                <div class="files">
                                    <n-input placeholder="" type="file" v-model:value="model.res_konf" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">
                                    6. Xorijiy tillarni bilish darajasi (sertifikat)
                                    <div class="tavsif">
                                        <span>Tavsif</span>
                                        <n-input type="text" v-model:value="model.tavsif" clearable/>
                                    </div>
                                    </div>
                                <div class="files">
                                    <n-input placeholder="" type="file" v-model:value="model.xalq_jurnal" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">
                                    7. Axborot texnologiyalari sohasidagi erishgan yutuqlari (sertifikat)
                                    <div class="tavsif">
                                        <span>Tavsif</span>
                                        <n-input type="text" v-model:value="model.tavsif" clearable/>
                                    </div>
                                    </div>
                                <div class="files">
                                    <n-input placeholder="" type="file" v-model:value="model.res_jurnal" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">
                                    8.Republika va xalqaro tanlovlarda erishgan yutuqlari (sertifikat va diplom)
                                    <div class="tavsif">
                                        <span>Tavsif</span>
                                        <n-input type="text" v-model:value="model.tavsif" clearable/>
                                    </div>
                                    </div>
                                <div class="files">
                                     <n-input placeholder="" type="file" v-model:value="model.muallif_guvoh" />
                                </div>
                            </div>
                            <div class="ariza_about">
                                <div class="title">
                                    9.Innovatsion yechimlar va ishlanmalar, startap loyihalarini yaratishdagi faol ishtiroki (sertifikat, diplom, guvohnoma)
                                    <div class="tavsif">
                                        <span>Tavsif</span>
                                        <n-input type="text" v-model:value="model.tavsif" clearable/>
                                    </div>
                                    </div>
                                <div class="files">
                                     <n-input placeholder="" type="file" v-model:value="model.yutuq" />
                                </div>
                            </div>
                             <div class="ariza_about">
                                <div class="title">
                                    10. Ijodiy yutuqlari
                                    <div class="tavsif">
                                        <span>Tavsif</span>
                                        <n-input type="text" v-model:value="model.tavsif" clearable/>
                                    </div>
                                    </div>
                                <div class="files">
                                    <n-input placeholder="" type="file" v-model:value="model.til_sertifikat" />
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
                <n-alert title="Ogoxlantirish" type="error" class="ogoh">
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
const handlePreview = () => {
    console.log("salommm", fileList.value)
}
const handleChange = (e) => {
  model.value.gender = e.target.value;
};
const Dashboard = () => {
    router.push("/dashboard")
}
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
const Hujjatlar = () => {
    router.push("/user/document")
}
const Stipendiya = () => {
    router.push("/user/scholarship")
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
const Login = () => {
     router.push("/")
}
const RegisterAbout = () => {
    model.value = register.registratsiya
}
onMounted(() => {
    RegisterAbout(),
    handlePreview()
})
</script>
<style scoped>
.containers{
    width: 100%;
    min-height: 100vh;
    background: rgba(33, 33, 99, 0.915);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.tavsif{
    margin: 10px 0px;
}
.profil_header{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid red; */
    padding: 0px 65px;
    margin: 10px 0px;
}
.profil_header .person_icon{
    margin-right: 10px;
}
.profil_header .header_left1{
    width: 40%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.line{
    margin-right: 10px;
    cursor: pointer;
}
.search_input{
    width: 360px;
}
/* .profil_header .header_left2{
    width: 60%;
} */
.search_icon{
    position: absolute;
    right: 110px;
    cursor: pointer;
    top: 10px;
}
.login_top{
    width: 90%;
    min-height: 540px;
    background-color: rgb(235, 238, 238);
    display: flex;
    /* border: 2px solid red; */
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
    /* border: 1px solid red; */
}
.login_top .login_about ul li .n-icon{
    margin-right: 10px;
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
.ariza .ariza_about .title{
    width: 260px;
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
    /* overflow-y: scroll; */
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
.containers{
    width: 370px;
    height: 100vh;
    background: rgba(33, 33, 99, 0.915);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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
    /* overflow-y: scroll; */
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
    padding: 8px 12px;
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
    margin-right: 30px  ;
}
}
</style>