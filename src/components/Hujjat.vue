<template>
    <div class="hujjat">
          <div class="hujjat_top">Hujjatlar</div>
              <slot name="list">
                <div class="hujjat_content">
                        <ul>
                        <li>
                            <n-icon size="30">
                                <PictureAsPdfFilled />
                            </n-icon>
                        </li>
                        <li>Iqtidorli talabalar reytingini baholash me'zonlari</li>
                        <li>04.01.2023</li>
                        <li>17:16</li>
                        <li>299KB</li>
                        <li>
                            <n-icon size="30">
                                    <DownloadForOfflineRound />
                            </n-icon>
                        </li>
                    </ul>
                </div>
              </slot>
    </div>
</template>

<script setup>
import {DownloadForOfflineRound, PictureAsPdfFilled} from "@vicons/material"
</script>

<style>
.hujjat{
    width: 80%;
    min-height: 200px;
    /* border: 2px solid red; */
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 40px;;
    margin: 40px 0px;
    background-color: white;
    align-items: space-between;
}
.hujjat_top{
    font-size: 20px;
    margin-bottom: 40px;
    color: rgb(6, 6, 88);
    font-weight: 600;
    font-family: sans-serif;
}
/* .hujjat_content{
    width: 100%;
    height: 300px;
} */
.hujjat_content ul{
    display: flex;
    list-style: none;
    border-bottom: 1px solid rgb(172, 169, 169);
    padding-bottom: 10px;
}
.hujjat_content ul li{
    padding: 20px 50px;
    margin: 10px 0px;
}
.hujjat_content ul li:first-child{
    padding: 0px;
}

@media(max-width: 375px){
.hujjat{
    width: 340px;
    min-height: 160px;
    /* border: 2px solid red; */
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 40px;;
    margin: 20px 0px;
    background-color: white;
    align-items: center;
}
.hujjat_top{
    font-size: 12px;
    margin-bottom: 0px;
    color: rgb(6, 6, 88);
    font-weight: 600;
    font-family: sans-serif;
}
/* .hujjat_content{
    width: 100%;
    height: 300px;
} */
.hujjat_content ul{
    display: flex;
    align-items: center;
    list-style: none;
    border-bottom: 1px solid rgb(172, 169, 169);
    padding-bottom: 10px;
}
.hujjat_content ul li{
    padding: 0px 10px;
    margin: 0px;
    font-size: 8px;
}
.hujjat_content ul li:first-child{
    padding: 0px;
}
}
/* .hujjat:hover{
    font-size: 150px;
    transform: rotate(30deg)
} */
</style>