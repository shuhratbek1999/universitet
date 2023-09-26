<template>
    <div class="tables">
        <n-table :single-line="false">
            <thead>
            <tr>
                <th>№</th>
                <th>Talaba ismi</th>
                <th>Talaba yo'nalaishi</th>
                <th>Bahosi</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in tabless" :key="index">
                <td>{{index+1}}</td>
                <td> {{item.name}} </td>
                <td> {{item.yonalish}} </td>
                <td> {{item.baho}} </td>
            </tr>
            </tbody>
        </n-table>
    </div>
</template>

<script setup>
import {ref} from "vue";
const tabless = ref([
    {name: "Zokirjonov shuhratbek", yonalish: "Maktabgacha ta'lim", baho: "80"},
    {name: "Sodiqova Umidaxon", yonalish: "Iqtisod", baho: "78"},
    {name: "Zokirjonova Munisaxon", yonalish: "Kimyo", baho: "77"},
    {name: "Sodiqov Zafardin", yonalish: "Jismoniy tarbiya", baho: "75"},
    {name: "Hoshimov Egamberdi", yonalish: "Informatika", baho: "72"},
    {name: "Sovetboyev Behzodbek", yonalish: "Moliya", baho: "70"}
])
</script>

<style scoped>
.tables{
    width: 80% !important;
    /* height: 500px; */
    /* border: 2px solid red; */
}
@media(max-width: 375px){
.tables{
    width: 360px !important;
    /* height: 500px; */
    /* border: 2px solid red; */
}
.tables .n-table{
    width: 360px !important;
    /* height: 500px; */
    /* border: 2px solid red; */
}
}
/* thead{
    background-color: blue;
} */
</style>