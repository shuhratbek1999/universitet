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
                    <li>DASHBOARD</li>
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
                    <div class="header">FOYDALANUVCHILAR SAHIFASI</div>
                    <div class="profil_about">
                            <div class="profil_about_header">Foydalanuvchi shaxsiy malumotlari</div>  
                            <div class="profil_button">
                                <div class="border-2 border-solid rounded-lg py-2 text-center bg-slate-50 shadow hover:shadow-lg cursor-pointer tahrirlash" @click="Taxrirlash">
                                    <n-icon class="eye_icon" size="20">
                                    <TextBulletListSquareEdit20Regular />
                                    </n-icon>
                                    Profilni tahrirlash
                                </div>
                            </div>
                            <div class="profil_about_text">
                                 <div class="text">
                                    <div class="profil_text main">Ismi va familiyasi :</div>
                                    <div class="profil_text">{{model.name}}</div>
                                 </div>
                                 <div class="text">
                                    <div class="profil_text main">Telefon raqami :</div>
                                    <div class="profil_text">{{model.phone}}</div>
                                 </div>
                                 <div class="text">
                                    <div class="profil_text main">E-mail :</div>
                                    <div class="profil_text">{{model.email}}</div>
                                 </div>
                                 <div class="text">
                                    <div class="profil_text main">Manzili :</div>
                                    <div class="profil_text"></div>
                                 </div>
                                 <!-- <div class="text">
                                    <div class="profil_text main">Fakultetingiz :</div>
                                    <div class="profil_text">{{model.fakultet}}</div>
                                 </div>
                                 <div class="text">
                                    <div class="profil_text main">Kursingiz :</div>
                                    <div class="profil_text"></div>
                                 </div>
                                 <div class="text">
                                    <div class="profil_text main">Yo'nalishingiz :</div>
                                    <div class="profil_text">{{model.yonalish}}</div>
                                 </div>
                                 <div class="text">
                                    <div class="profil_text main">Jinsingiz :</div>
                                    <div class="profil_text"></div>
                                 </div>
                                 <div class="text">
                                    <div class="profil_text main">Tug'ilgan.oy.kun :</div>
                                    <div class="profil_text"></div>
                                 </div>
                                 <div class="text">
                                    <div class="profil_text main">JSHSHR :</div>
                                    <div class="profil_text"></div>
                                 </div>
                                 <div class="text">
                                    <div class="profil_text main">Passport ma'lumotlaringiz:</div>
                                    <div class="profil_text"></div>
                                 </div>
                                 <div class="text">
                                    <div class="profil_text main">Photo surat:</div>
                                    <div class="profil_text"></div>
                                 </div> -->
                            </div>
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
import { EyeOffOutline,PersonCircleOutline,LogOutOutline } from "@vicons/ionicons5";
import {TextBulletListSquareEdit20Regular, 
Money24Regular,DocumentBulletList20Regular,LineHorizontal320Filled,
Person16Filled,MailOpenPerson16Filled,Search24Regular,NotepadPerson24Regular,Password16Filled} from "@vicons/fluent"
import {useRouter} from "vue-router";
import {Register} from "../../stores/index"
const router = useRouter();
const search = ref("");
const register = Register();
const message = useMessage();
let model = ref({})
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};
const Taxrirlash = () => {
    router.push("/user/profil/edit")
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
    }
])
const handleValidateButtonClick = (e)=> {
        e.preventDefault();
        formRef.value?.validate(
          (errors) => {
            if (!errors) {
              message.success("Valid");
            } else {
              message.error("Fo'rmalarni to'ldirish shart");
            }
          }
        );
      }
const HandleSelect = (e) => {
    if(e == 'profil'){
        router.push("/profil")
    }
    else if(e == 'chiqish'){
        router.push("/")
    }
    else{
        router.push("/register")
    }
}
const Login = () => {
     router.push("/")
}
const Dashboard = () => {
    router.push("/dashboard")
}
const Hujjatlar = () => {
    router.push("/user/document")
}
const Stipendiya = () => {
    router.push("/user/scholarship")
}
const RegisterAbout = () => {
    model.value = register.registratsiya
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
.Kirish{
    width: 450px !important;
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
    width: 75%;
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
    font-size: 18px;
    font-weight: 600;
    font-family: sans-serif;
}
.eye_icon{
    position: absolute;
    left: 10px;
    top: 10px;
    cursor: pointer;
    color: black;
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
.profil_button{
    position: relative;
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
.profil_header{
    width: 360px;
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
.profil_header .header_left2{
    width: 180px;
    /* border: 2px solid red; */
}
.profil_header .header_left2 .header_button{
    width: 180px;
    font-size: 11px;
}
.line{
    margin-right: 10px;
    cursor: pointer;
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
.login_top .login_about ul .dashboard{
    font-size: 10px !important;
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
.Kirish{
    width: 200px !important;
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
    padding: 10px 10px;
}
.profil_about{
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    /* border: 2px solid red; */
    overflow: scroll;
}
.profil_about_text .text{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(226, 223, 223);
    padding: 8px 12px;
    font-size: 10px;
}
.profil_about_text .text .main{
    font-weight: 500;
}
.profil_about_header{
    font-size: 12px;
    font-weight: 600;
    font-family: sans-serif;
}
.profil_button{
    position: relative;
}
.eye_icon{
    position: absolute;
    left: 8px;
    top: 10px;
    cursor: pointer;
    font-size: 15px !important;
    color: black;
}
.tahrirlash{
    width: 150px !important;
    margin: 15px 0px;
    font-size: 12px;
}
.header{
    width: 70%;
    text-align: left;
    cursor: pointer;
    font-size: 12px;
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
    margin-right: 30px;
}
}
</style>