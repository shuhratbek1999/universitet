<template>
     <div class="containers">
         <div class="loader"></div>
         <div class="login_top">
              <div class="login_about">
                  <ul>
                    <li class="kelibsiz">tizimiga xush kelibsiz!</li>
                    <li class="royhat">
                        Tizimda profilingiz yo'qmi?
                        <span @click="Register"> Hozir ro'yxatdan o'ting!</span>
                    </li>
                  </ul>
              </div>
              <div class="login_kirish">
                    <div class="header">TBA - axborot tizimi</div>
                   <n-form ref="formRef" :model="model" :rules="rules">
                    <n-form-item label="Email" path="email">
                    <n-input 
                        class="input" 
                        v-model:value="model.email" 
                        @keydown.enter.prevent 
                        size="large" 
                        clearable
                        />
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
                    <n-row :gutter="[0, 24]">
                    <n-col :span="24">
                        <div style="display: flex; justify-content: center">
                            <div 
                                class="border-2 border-solid rounded-lg py-2 px-6 w-40 text-center bg-slate-50 shadow hover:shadow-lg cursor-pointer tahrirlash" 
                                :disabled="model.email === null"
                                @click="handleValidateButtonClick"
                                >
                                    Kirish
                            </div>
                        </div>
                    </n-col>
                    </n-row>
                   </n-form>
                    <div class="password_remember">Parolni unitdingizmi?</div>
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
import {onMounted, ref} from "vue"; 
import {useMessage} from "naive-ui";
import { EyeOffOutline } from "@vicons/ionicons5";
import {useRouter} from "vue-router"
const formRef = ref(null);
const router = useRouter();
const rPasswordFormItemRef = ref(null)
const message = useMessage();
let input_type = ref("password")
let model = ref({
    email: "",
    password: "",
    reenteredPassword: ""
})
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
            if(!value){
                return new Error("Email is required");
            } 
            else{
                console.log(value, rule)
                let tekshir = value.includes('@gmail.com')
                if(!tekshir){
                   return new Error("Yaroqsiz email")
                }
            }
            // else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(model.value.email)) {
            //   return new Error("Email should be an integer");
            // } else if (Number(value) < 18) {
            //   return new Error("Email should be above 18");
            // }
            // return true;
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
            } else {
              message.error("Fo'rmalarni to'ldirish shart");
            }
          }
        );
      }
const handleInput = () => {
     return input_type.value === "password" ? input_type.value = "text" : input_type.value = "password"
}
const Register = () => {
     router.push("/register")
}
 
// const loader = () => { 
//     let load = document.querySelector('.loader');
//     let avvalgiManzil = document.referrer;
//     console.log("logiinnnn", avvalgiManzil)
//     if(avvalgiManzil.length == 0){
//         console.log("documennnnttttt", avvalgiManzil);
//         window.addEventListener('load', () =>{
//             setTimeout(() => {
//                 load.style.display = "none"
//             }, 1000); 
//         })
//     }
//     else{ 
//         console.log("xayooooooooot", document.referrer)
//        setTimeout(() => {
//                 load.style.display = "none"
//             }, 1000); 
//     }
// } 

// onMounted(() => {
//     loader()
// })
</script>
<style scoped>
body{
    background-color: green;
}
.loader{
    width: 100%;
    height: 100vh;
    background: #000 url('../../assets/images/loader4.gif') no-repeat center;
    z-index: 100;
    position: fixed;
    background-size: 20%;
    display: none;
    /* animation: animate 1.5s linear infinite;
    clip: rect(0, 80px, 80px, 40px);
    height: 80px;
    width: 80px;
    position: absolute;
    left: calc(50% - 40%);
    top: calc(50% - 40%); */
}
/* @keyframes animate{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(220deg);
    }
}
.loader::after{
    animation: animate2 1.5s ease-in-out infinite;
    clip: rect(0px, 80px, 80px, 40px);
    content: '';
    border-radius: 50%;
    height: 80px;
    width: 80px;
    position: absolute;
}
@keyframes animate2{
    0%{
        box-shadow: unset #ffff 0 0 0 17px;
        transform: rotate(-140deg);
    }
    50%{
        box-shadow: unset #ffff 0 0 0 2px;
        transform: rotate(-140deg);
    }
    100%{
       box-shadow: unset #ffff 0 0 0 17px;
        transform: rotate(-140deg); 
    }
} */
.containers{
    width: 100%;
    height: 100vh;
    background: rgba(33, 33, 99, 0.915);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.login_top{
    width: 70%;
    min-height: 520px;
    background-color: rgb(235, 238, 238);
    display: flex;
}
.login_top .login_about{
    /* border: 1px solid red; */
    width: 33%;
    background-image: url("../../assets/images/bodyback.png");
    background-position: center;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: cover;
}
.login_top .login_about ul{
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: center;
}
.login_top .login_about ul .iqtidor{
    color: white; 
    font-size: 27px; 
    text-align: center;
}
.login_top .login_about ul .kelibsiz{
    color: white; 
    margin-top: -10px; 
    font-size: 14px;
}
.login_top .login_about ul .royhat{
    color: rgb(241, 194, 131); 
    font-size: 14px;
}
.login_top .login_about ul .admin{
    color: rgb(241, 194, 131); 
    font-size: 14px;
}
.login_top .login_about ul .admin span{
    font-size: 16px;
}
.login_top .login_about ul li{
    text-align: center;
    margin: 20px 0px;
}
.login_top .login_about ul li span{
    display: inline;
    color: aqua;
    transition: all 0.5s ease-in-out;
}
.login_top .login_about ul li span:hover{
    color: blue;
    cursor: pointer;
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
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.eye_icon{
    position: absolute;
    right: 30px;
    top: 10px;
    cursor: pointer;
}
.header, .password_remember{
    width: 70%;
    text-align: center;
    cursor: pointer;
}
.header{
    font-size: 25px;
    font-family: sans-serif;
    color: blue;
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
.login_top{
    width: 320px;
    min-height: 520px;
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
    align-items: center;
    padding: 10px;
    justify-content: space-evenly;
}
.login_top .login_about ul li{
    text-align: center;
    margin: 20px 0px;
}
.login_top .login_about ul .iqtidor{
    color: white; 
    font-size: 15px; 
    text-align: center;
}
.login_top .login_about ul .kelibsiz{
    color: white; 
    margin-top: -10px; 
    font-size: 9px;
}
.login_top .login_about ul .royhat{
    color: rgb(241, 194, 131); 
    font-size: 9px;
}
.login_top .login_about ul .admin{
    color: rgb(241, 194, 131); 
    font-size: 10px;
}
.login_top .login_about ul .admin span{
    font-size: 12px;
}
.login_top .login_about ul li span{
    display: inline;
    color: aqua;
    transition: all 0.5s ease-in-out;
}
.login_top .login_about ul li span:hover{
    color: blue;
    cursor: pointer;
}
.Kirish{
    width: 200px !important;
}
.input{
    width: 200px !important;
    font-size: 12px;
}
.input_password{
    width: 200px !important;
    position: relative;
    font-size: 12px;
}
.login_kirish{
    width: 250px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.eye_icon{
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
}
.header, .password_remember{
    width: 200px;
    text-align: center;
    cursor: pointer;
    font-size: 12px;
    margin: 10px 0px;
}
.header{
    font-size: 16px;
    font-family: sans-serif;
    color: blue;
}
.login_footer{
    width: 370px;
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