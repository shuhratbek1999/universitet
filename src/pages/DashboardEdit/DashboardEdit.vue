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
                    <li @click="Stipendiya">
                        <n-icon size="20"> <Money24Regular /></n-icon>
                        Stipendiya
                    </li>
                  </ul>
              </div>
              <div class="login_kirish">
                <div class="profil_about">
                  <div class="profil_about_header">Foydalanuvchi malumotlari Tahrirlash</div>  
                    <div class="profil_about_text">
                        <n-form ref="formRef" :model="model" :rules="rules">
                        <n-form-item label="Ism va familiya" path="name">
                        <n-input 
                            class="input" 
                            v-model:value="model.name" 
                            @keydown.enter.prevent 
                            size="large" 
                            clearable
                            />
                        </n-form-item>
                        <n-form-item label="Email" path="email">
                        <n-input 
                            class="input" 
                            v-model:value="model.email" 
                            @keydown.enter.prevent 
                            size="large" 
                            clearable
                            />
                        </n-form-item>
                        <n-form-item label="Pasport raqami" path="pasport">
                        <n-input 
                            class="input" 
                            v-model:value="model.pasport" 
                            @keydown.enter.prevent 
                            size="large" 
                            clearable
                            />
                        </n-form-item>
                        <n-form-item label="JSHSHIR-kod" path="jshsh">
                        <n-input 
                            class="input" 
                            v-model:value="model.jshsh" 
                            @keydown.enter.prevent 
                            size="large" 
                            clearable
                            />
                        </n-form-item>
                        <n-form-item label="Tug'ilgan sana" path="birthday">
                            <n-date-picker bottom-start v-model:value="model.birthday" size="large" type="date" clearable />
                        </n-form-item>
                        <n-form-item label="Jinsi" path="gender">
                            <n-radio
                                :checked="model.gender == 'Erkak'"
                                :value="'Erkak'"
                                @change="handleChange"
                            >
                                Erkak
                            </n-radio>
                            <n-radio
                                :checked="model.gender == 'Ayol'"
                                :value="'Ayol'"
                                @change="handleChange"
                            >
                                Ayol
                            </n-radio>
                            </n-form-item>
                        <n-form-item label="Telefon raqami" path="phone">
                        <n-input 
                            class="input" 
                            v-model:value="model.phone" 
                            @keydown.enter.prevent 
                            size="large" 
                            clearable
                            />
                        </n-form-item>
                        <n-form-item label="Fakultetingini tanlang" path="fakultet"> 
                            <n-select
                                v-model:value="model.fakultet"
                                :options="fakultet"
                                label-field="name"
                                value-field="name"
                                class="viloyat"
                                filterable 
                                > </n-select>
                        </n-form-item>
                        <n-form-item label="Yo'nalishingizni tanlang" path="yonalish"> 
                            <n-select
                                v-model:value="model.yonalish"
                                :options="yonalish"
                                label-field="name"
                                value-field="name"
                                class="viloyat"
                                filterable 
                                > </n-select>
                        </n-form-item>
                        <n-form-item path="password" label="Password">
                        <n-input
                            v-model:value="model.password"
                            :type="input_type"
                            @input="handlePasswordInput"
                            @keydown.enter.prevent
                            size="large"
                            class="input input_password"
                            clearable
                        />
                        <n-icon class="eye_icon" size="20">
                        <EyeOffOutline @click="handleInput" />
                        </n-icon>
                        </n-form-item>
                        <n-form-item
                        ref="rPasswordFormItemRef"
                        first
                        path="reenteredPassword"
                        label="Parolni tasdiqlang"
                        >
                        <n-input
                            v-model:value="model.reenteredPassword"
                            :disabled="!model.password"
                            type="password"
                            @keydown.enter.prevent
                        />
                        </n-form-item>
                        <n-form-item
                        ref="imagess"
                        first
                        path="images"
                        label="Rasm yukleng"
                        >
                            <n-upload
                                :default-file-list="fileList"
                                list-type="image-card"
                                @preview="handlePreview"
                            >
                                Click to Upload
                            </n-upload>
                            </n-form-item>
                        <n-row :gutter="[0, 24]">
                        <n-col :span="24">
                            <div style="display: flex; justify-content: center">
                                <div 
                                :disabled="model.email === null"
                                class="Kirish border-2 border-solid rounded-lg p-2 text-center bg-teal-300 text-white shadow hover:shadow-lg cursor-pointer tahrirlash" @click="handleValidateButtonClick">
                                    Yangilash
                                </div>
                            </div>
                        </n-col>
                        </n-row>
                    </n-form>
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
const fileList = ref([]);
const router = useRouter();
const register = Register();
const rPasswordFormItemRef = ref(null);
const formRef = ref(null);
const message = useMessage();
const search = ref("")
    let model = ref({
        name: "",
        phone: "",
        fakultet: "",
        yonalish: "",
        email: "",
        password: "",
        reenteredPassword: "",
        jshsh: "",
        gender: 'Erkak',
        birthday: null,
        pasport: ""
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
    let validatePasswordStartWith = (rule, value) => {
        return !!model.value.password && model.value.password.startsWith(value) && model.value.password.length >= value.length
    }
    let validatePasswordSame = (rule,value) => {
        return value === model.value.password;
    }
let rules = {
    email: [
        {required: true,
        validator(rule, value){
            // let inv = model.value.email.includes("@")
            if(!value){
                return new Error("Email is required");
            } else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w)+$/.test(model.value.email)) {
              return new Error("Email should be an integer");
            } 
            return true;
            },
        trigger: ["input", "blur"]
        }
    ],
    password: [
        {
          required: true,
          message: "Password is required"
        }
      ],
      name: [
        {
          required: true,
          message: "Name is required"
        }
      ],
      phone: [
        {
          required: true,
          message: "Phone number is required"
        }
      ],
      fakultet: [
        {
          required: true,
          message: "Fakultet is required"
        }
      ],
      yonalish: [
        {
          required: true,
          message: "Yonalish is required"
        }
      ],
      reenteredPassword: [
        {
          required: true,
          message: "Re-entered password is required",
          trigger: ["input", "blur"]
        },
        {
          validator: validatePasswordStartWith,
          message: "Password is not same as re-entered password!",
          trigger: "input"
        },
        {
          validator: validatePasswordSame,
          message: "Password is not same as re-entered password!",
          trigger: ["blur", "password-input"]
        }
      ]
}
const handlePasswordInput = () => {
    if (model.value.reenteredPassword) {
          rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
        }
}
const handleValidateButtonClick = (e)=> {
        e.preventDefault();
        formRef.value?.validate(
          (errors) => {
            if (!errors) {
              message.success("Valid");
              register.registratsiya = model.value;
              router.push('/profil')
            } else {
              message.error("Fo'rmalarni to'ldirish shart");
            }
          }
        );
      }
const handleInput = () => {
     return input_type.value === "password" ? input_type.value = "text" : input_type.value = "password"
}

const Login = () => {
     router.push("/")
}
const RegisterAbout = () => {
    model.value = register.registratsiya
}
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
    else{
        router.push("/register")
    }
}
onMounted(() => {
    RegisterAbout(),
    handlePreview()
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
    right: 10px;
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
    font-size: 20px;
    font-weight: 600;
    font-family: sans-serif;
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
}
.profil_about_text .text{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(226, 223, 223);
    padding: 8px 12px;
    font-size: 12px;
}
.profil_about_text .text .main{
    font-weight: 500;
}
.profil_about_header{
    font-size: 12px;
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
.tahrirlash{
    width: 150px !important;
    margin: 15px 0px;
    font-size: 12px;
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
}
</style>