<template>
    <div class="flex h-screen overflow-hidden">
         <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
         <div class="relative flex flex-col flex-1">
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <div class="flex flex-col items-center w-12/12">
            <div class="text-lg text-blue title">
                YANGILIKLAR SAHIFASI
            </div>
            <div class="flex flex-col w-11/12">
                 <n-form ref="formRef" :model="model">
                    <n-form-item path="news_theme" label="Yangilik mavzusi">
                    <n-input v-model:value="model.news_theme" @keydown.enter.prevent />
                    </n-form-item>
                    <n-form-item path="news_text" label="Yangilik matni">
                    <n-input
                        v-model:value="model.news_text"
                         type="textarea"
                        :autosize="{
                        minRows: 6,
                        maxRows: 14
                        }"
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
                                v-model:file-list="fileList"
                            >
                                Click to Upload
                            </n-upload>
                            </n-form-item>
                        <n-form-item>
                            <button @click="Saqlash" class="bg-indigo-500 rounded-full px-6 py-2 text-white">Save Changes</button>
                        </n-form-item>
                </n-form>

            </div>
            <div class="tablee w-11/12 my-6">
                <n-table :single-line="false" size="large">
                <thead>
                <tr>
                    <th>T/r</th>
                    <th>Photo</th>
                    <th>Mavzu</th>
                    <th>Tavsif</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in yangiliklar" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{item.news_photo}} <img :src="item.news_photo" width="50" alt=""></td>
                    <td>{{item.news_theme}}</td>
                    <td>{{item.news_text.substring(0, 20).concat(" ", "..........")}}</td>
                    <td>
                        <n-icon class="trash" size="30" @click="Edit(item.id)">
                           <Pencil />
                        </n-icon>
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
import {ref} from "vue"
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import {Delete16Filled} from "@vicons/fluent"
import { Pencil, Trash } from "@vicons/tabler"
import {useNotification,useDialog,useMessage} from "naive-ui"
const fileList = ref([])
const sidebarOpen = ref(false)
const notification = useNotification();
const previewImageUrlRef = ref("")
const showModalRef = ref(false);
const dialog = useDialog();
const message = useMessage();
const model = ref({
    id: 0,
    news_theme: "",
    news_text: "",
    news_photo: ""
})
const handlePreview = (file) => {
      const { url } = file;
      model.value.news_photo = url;
      showModalRef.value = true;
}
const yangiliklar = ref([
    // {id: 1, images: previewImageUrlRef, news_theme: model.value.news_theme, news_text: model.value.news_text}
])
const Saqlash = () => {
    let models = model.value;
    models.id++;
    fileList.value.forEach(item => {
    //  console.log(item, "urllllllll");
     models.news_photo = item.file.name;
  })
      if(models.news_theme.length > 0 && models.news_text.length > 0 && models.news_photo.length > 0){
          yangiliklar.value.push(model.value)
      }
      else{
        notification.error({
            content: `Malumotlarni toldiring`,
            duration: 2500,
            keepAliveOnHover: true,
        });
      }
    //   setTimeout(() => {
    //      Tozalash()
    //   }, 3000);
}
const Edit = (id) => {
    let index = yangiliklar.value.findIndex(item => item.id === id);
    if(index == -1){
        yangiliklar.value.forEach(item => {
            if(item.id === id){
                item.id = model.value.id,
                item.news_theme = model.value.news_theme,
                item.news_text = model.value.news_text,
                item.news_photo = model.value.news_photo
            }
        })
    }
    // console.log(id, "newwwwwwwwwwwww", newss)
}
const Delete = (id) => {
  dialog.warning({
    title: "Ogohlantirish",
    content: "Ma'lumot o'chirilsinmi",
    positiveText: "O'chirish",
    negativeText: "Bekor qilish",
    onPositiveClick: () => {
        let index = yangiliklar.value.findIndex(item => item.id === id);
        console.log(index, "indexxxxxxx")
        if(index != -1){
            yangiliklar.value.splice(index,1);
            message.success("O'chirildi!");
        }
    //   axios.delete("/teacher/id/" + id).then((res) => {
    //     if (res) {
    //       get();
    //       message.success("O'chirildi!");
    //     }
    //   });
    },
    onNegativeClick: () => {
      message.error("Bekor qilindi!");
    },
  });
};
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
.title{
    font-size: 15px;
    margin: 10px 0px;
}
/* .tablee{
    overflow: scroll;
} */
}
</style>