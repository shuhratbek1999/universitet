<template>
    <div>
    <div class="bg-gray-100">
      <nav
        class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
            >Logo
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Home
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            About
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Blogs
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Contact Us
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue"
const router = useRouter();
const showMenu = ref(false);
const Reyting = () => {
    router.push("/reyting")
}
const About = () => {
    router.push("/academy")
}
const Dashboard = () => {
    router.push("/dashboard")
}
</script>
<style scoped>
.navbar{
    width: 100%;
    height: 100px;
     display: flex;
     justify-content: space-between;
    align-items: center;  
}
.navbar .navbar_item {
    /* width: 33%; */
    display: flex;
    justify-content: space-around;
}
.navbar .navbar_item img{
    width: 100px;
    /* border: 2px solid red; */
}
.navbar .navbar_item .navbar_list{
    padding: 0px 20px;
    color: black;
    font-size: 16px;
    font-family: sans-serif;
    cursor: pointer;
    transition: all 0.7s ease-in-out;
}
.navbar .navbar_list:nth-child(2n + 4){
    color: white;
}
.navbar .navbar_item .navbar_list:hover{
    transform: scale(0.9);
}

@media(max-width: 375px){
    .navbar{
    width: 350px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;  
}
.navbar .navbar_item {
    /* width: 33%; */
    display: flex;
    justify-content: space-around;
}
.navbar .navbar_item img{
    width: 50px;
    /* border: 2px solid red; */
}
.navbar .navbar_item .navbar_list{
    padding: 0px 10px;
    color: black;
    font-size: 10px;
    font-family: sans-serif;
    cursor: pointer;
    transition: all 0.7s ease-in-out;
}
.navbar .navbar_list:nth-child(2n + 4){
    color: white;
}
.navbar .navbar_item .navbar_list:hover{
    transform: scale(0.9);
}
}
</style>