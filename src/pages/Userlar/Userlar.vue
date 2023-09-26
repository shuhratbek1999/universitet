<template>
    <div class="flex h-screen overflow-hidden">
         <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
         <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <div class="flex flex-col items-center w-12/12">
            <div class="w-11/12 flex items-left text-lg m-4 text-blue">
                Tizimdan ro'yxatdan o'tgan foydalanuvchilar
            </div>
            <div class="w-11/12 flex justify-between m-4">
                <n-space>
                <n-button-group >
                    <n-button @click="CopyText">
                        Copy
                     </n-button>
                     <n-button @click="exportToExcel">
                        Excel
                     </n-button>
                     <n-button @click="generatePDF">
                        PDF
                     </n-button>
                     <n-dropdown :options="options" @select="HandleSelect">
                        <n-button >
                           Column Visibility
                        </n-button>
                    </n-dropdown>
                     <!-- <n-button>
                        Column Visibility
                     </n-button> -->
                </n-button-group>
                </n-space>
                <div class="w-4/12">
                    <n-input v-model:value="search" round placeholder="qidiruv">
                    <template #suffix>
                        <n-icon :component="Search" />
                    </template>
                    </n-input>
                </div>
            </div>
            <div class="w-11/12">
                <n-data-table
                :columns="columns"
                :data="SearchInput"
                :pagination="pagination"
                @update:sorter="handleUpdateSorter"
                class="pdf"
                id="text"
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
import * as XLSX from "xlsx/xlsx.mjs";
import html2pdf from 'html2pdf.js';
const previewImageUrlRef = ref("")
const showModalRef = ref(false);
const dialog = useDialog();
const message = useMessage();
const sortStatesRef = ref([])
const search = ref("");
const sidebarOpen = ref(false)
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
    photo: 'rasm',
    fio: "Muqimov Muhriddin",
    fakultet: "Matematika",
    kurs: "1-kurs",
    telefon: "+998 99 123 45 67"
  },
 {
    number: 2,
    photo: 'rasm',
    fio: "Sotvoldiyeva Oydinoy",
    fakultet: "Ona tili va adabiyot",
    kurs: "2 kurs",
    telefon: "+998 91 123 65 43"
  },
  {
    number: 3,
    photo: 'rasm',
    fio: "Komilov Boburjon",
    fakultet: "Jismoniy madaniyat",
    kurs: "4 kurs",
    telefon: "+998 90 873 12 43"
  }
])
 const columns = computed(() => [
      {
        title: 'T/r',
        key: 'number'
      },
       {
        title: 'Rasm',
        key: 'photo'
      },
      {
        title: 'ism va familiya',
        key: 'fio'
      },
      {
        title: 'Fakultet',
        key: 'fakultet',
        sortOrder: sortKeyMapOrderRef.value.chinese || false,
        sorter: {
          compare: (a, b) => a.chinese - b.chinese,
          multiple: 3
        }
      },
      {
        title: 'Kursi',
        key: 'kurs',
        sortOrder: sortKeyMapOrderRef.value.math || false,
        sorter: {
          compare: (a, b) => a.math - b.math,
          multiple: 2
        }
      },
      {
        title: 'Telefon',
        sortOrder: sortKeyMapOrderRef.value.english || false,
        key: 'telefon',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1
        }
      }
    ])
 const handleUpdateSorter = (sorters) =>{
      sortStatesRef.value = [].concat(sorters)
    }
const options = ref([
  {
        label: "Rasm",
        key: 'rasm'
    },
    {
        label: "Ism va familiya",
        key: "ism"
    },
    {
        label: "Fakultet",
        key: "fakultet"
    },
    {
        label: "Kursi",
        key: "kurs"
    },
    {
        label: "Telefon",
        key: "telefon"
    }
])
const exportToExcel = () => {
  let demo = [];
  for (let index = 0; index < data.value.length; index++) {
    const el = data.value[index];
    
    demo.push({
      photo: el?.photo,
      fio: el?.fio,
      fakultet: el?.masul?.fakultet,
      kurs: el?.kurs,
      telefon: el?.telefon
    });
  }

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(demo);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Foydalanuvchilar");
  XLSX.writeFile(
    workbook,
    new Date().toLocaleDateString() + "-User.xlsx"
  );
};
const HandleSelect = (e) => {
    console.log(e)
}
const generatePDF = () => {
      const element = document.querySelector('.pdf');
      html2pdf().from(element).save('output.pdf');
  }
const CopyText = () => {
  var text = document.getElementById("text").innerText;
    navigator.clipboard.writeText(text);
}
const SearchInput = computed((e) => {
  console.log(search.value, "search")
  return data.value.filter(post => {
        return post.fio.toLowerCase().includes(search.value.toLowerCase())
})
})
</script>

<style scoped>
.trash:hover, .edit:hover{
    cursor: pointer;
}
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
}
@media(max-width: 375px){
  .pdf{
    font-size: 7px;
  }
}
</style>