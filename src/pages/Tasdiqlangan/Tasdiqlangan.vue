<template>
    <div class="flex h-screen overflow-hidden">
         <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
         <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <div class="flex flex-col items-center w-12/12">
            <div class="w-11/12 flex items-left text-lg text-blue m-4 ariza">
                AKADEMIYALAR BO'YICHA TASDIQLANGAN
            </div>
            <div class="tablee w-11/12">
                <n-table :single-line="false" size="large" class="pdf">
                <thead>
                <tr>
                    <th>T/r</th>
                    <th>Ismi</th>
                    <th>Kelgan vaqti</th>
                    <th>Holati</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in yangiliklar" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.date_time}}</td>
                    <td>
                        <n-button :disabled="item.status == 'Tasdiqlangan'" v-if="item.status === 'Tasdiqlangan'">
                             Tasdiqlangan
                        </n-button>
                        <n-button :disabled="item.status == 'Tasdiqlangan'" v-else>
                             Tasdiqlanmagan
                        </n-button>
                    </td>
                    <td>
                        <n-icon class="edit" @click="Delete(item.id)" size="30">
                           <Delete16Filled />
                        </n-icon>
                    </td>
                </tr>
                </tbody>
            </n-table>
            </div>
            </div>
        </div>
      </div>
</template>

<script setup>
import {ref, computed } from "vue"
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import {Delete16Filled} from "@vicons/fluent"
import { Search } from "@vicons/tabler"
import {useNotification,useDialog,useMessage} from "naive-ui"
const fileList = ref([])
const sidebarOpen = ref(false)
const notification = useNotification();
const previewImageUrlRef = ref("")
const showModalRef = ref(false);
const dialog = useDialog();
const message = useMessage();
const sortStatesRef = ref([])
const yangiliklar = ref([
    {
        id: 1,
        name: "Sodiqov Iqboldin",
        date_time: "+998 99 123 87 45",
        status: "Tasdiqlangan"
    },
     {
        id: 1,
        name: "Sodiqov Iqboldin",
        date_time: "+998 99 123 87 45",
        status: "Tasdiqlanmagan"
    }
])
</script>
<style scoped>
.trash, .edit{
    border-radius: 50%;
    /* padding: 5px; */
    /* background-color: black; */
    color: white;
    width: 35px;
    height: 35px;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 35px;
}
.trash{
    background-color: black;
    color: white;
}
.edit{
    background-color: red;
    color: white;
    cursor: pointer;
}
@media(max-width: 375px){
.edit{
background-color: red;
color: white;
cursor: pointer;
}
  .pdf{
    font-size: 9px;
  }
  .ariza{
    margin: 10px 0px;
    font-size: 15px;
  }
  .pdf tr td .n-button{
     width: 80px;
     font-size: 7px;
  }
.trash, .edit{
    border-radius: 50%;
    /* padding: 5px; */
    /* background-color: black; */
    color: white;
    width: 30px;
    height: 30px;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 30px;
    font-size: 18px !important;
}
}
</style>