<template>
    <div class="flex h-screen overflow-hidden">
         <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
         <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <div class="flex flex-col items-center w-12/12">
            <div class="w-11/12 flex items-left text-lg text-blue m-4">
                FAKULTETLAR SAHIFASI
            </div>
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
const sortStatesRef = ref([])
const yangiliklarr = ref([
    // {id: 1, images: previewImageUrlRef, news_theme: model.value.news_theme, news_text: model.value.news_text}
])
</script>
