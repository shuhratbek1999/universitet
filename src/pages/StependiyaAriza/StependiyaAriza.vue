<template>
    <div class="flex h-screen overflow-hidden">
         <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
         <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <div class="flex flex-col items-center w-12/12">
            <div class="w-11/12 flex items-left text-lg text-blue m-4 ariza">
                STIPENDIYA UCHUN ARIZALAR
            </div>
            <div class="w-11/12">
                <n-data-table
                :columns="columns"
                :data="data"
                :pagination="pagination"
                @update:sorter="handleUpdateSorter"
                class="pdf"
                />
            </div>
            <!-- <div class="tablee w-11/12">
                <n-table :single-line="false" size="large">
                <thead>
                <tr>
                    <th>T/r</th>
                    <th>Photo</th>
                    <th>ism va familiya</th>
                    <th>Fakultet</th>
                    <th>Kursi</th>
                    <th>Telefon</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in yangiliklar" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{item.news_photo}} <img :src="item.news_photo" width="50" alt=""></td>
                    <td>{{item.news_theme}}</td>
                    <td>{{item.news_text.substring(0, 20).concat(" ", "..........")}}</td>
                    <td>salom</td>
                    <td>salom</td>
                </tr>
                </tbody>
            </n-table> -->
            </div>
        </div>
      </div>
</template>

<script setup>
import {ref, computed } from "vue"
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
// import {Delete16Filled} from "@vicons/fluent"
import { Search } from "@vicons/tabler"
import {useNotification,useDialog,useMessage} from "naive-ui"
const fileList = ref([])
const notification = useNotification();
const previewImageUrlRef = ref("")
const showModalRef = ref(false);
const dialog = useDialog();
const message = useMessage();
const sidebarOpen = ref(false)
const sortStatesRef = ref([])
const yangiliklarr = ref([
    // {id: 1, images: previewImageUrlRef, news_theme: model.value.news_theme, news_text: model.value.news_text}
])
const sortKeyMapOrderRef = computed(() =>
      sortStatesRef.value.reduce((result, { columnKey, order }) => {
        result[columnKey] = order
        return result
      }, {})
    )
const pagination = ref({ pageSize: 5 })
const data = ref([
  {
    number: 1,
    photo: 'Muqimov Muhriddin',
    fio: "01.08.2023",
    fakultet: "ko'rilmoqda",
    kurs: "Bekor qilish"
  },
 {
    number: 2,
    photo: 'Sotvoldiyeva Oydinoy',
    fio: "03.08.2023",
    fakultet: "Ko'rilmoqda",
    kurs: "bekor qilish"
  },
  {
    number: 3,
    photo: 'Komilov Boburjon',
    fio: "04.08.2023",
    fakultet: "Ko'rilmoqda",
    kurs: "bekor qilish"
  }
])
 const columns = computed(() => [
      {
        title: 'T/r',
        key: 'number'
      },
       {
        title: 'Ismi',
        key: 'photo'
      },
      {
        title: 'kelgan vaqti',
        key: 'fio'
      },
      {
        title: `ko'rib chiqish`,
        key: 'fakultet',
        sortOrder: sortKeyMapOrderRef.value.chinese || false,
        sorter: {
          compare: (a, b) => a.chinese - b.chinese,
          multiple: 3
        }
      },
      {
        title: 'Bekor qilish',
        key: 'kurs',
        sortOrder: sortKeyMapOrderRef.value.math || false,
        sorter: {
          compare: (a, b) => a.math - b.math,
          multiple: 2
        }
      }
    ])
 const handleUpdateSorter = (sorters) =>{
      sortStatesRef.value = [].concat(sorters)
    }
</script>

<style scoped>
@media(max-width: 375px){
  .pdf{
    font-size: 7px;
  }
  .ariza{
    margin: 10px 0px;
    font-size: 15px;
  }
}
</style>
