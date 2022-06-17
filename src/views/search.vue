<template>
    <page-view class="flex flex-col">
        <van-search
        background="#F7504D"
        shape="round"
        show-action
        placeholder="请输入关键字">
            <template #left>
                <img src="../assets/img/left-arrow.svg" class="mr-[10px]" @click="$router.back()" />
            </template>
            <template #action>
                <div class="text-[14px] text-white">搜索</div>
            </template>
        </van-search>
        <div class="content-box flex-1 overflow-auto">
            <!-- 默认情况是没有数据的 -->
            <van-empty description="暂无数据">
                
            </van-empty>  
            <div class="box">
                    <div class="item">
                        <img class="w-full h-full" src="../assets/img/01.jpg" />
                    </div>
            </div>            
        </div>
    </page-view>
</template>
<script setup>
import { Search } from 'vant';
import { reactive } from 'vue';
import API from '../utils/API';

const queryParams = reactive({
    pageIndex:"1",
    keyword:"",
});

const quertData = ()=>{
    API.movieInfo.search(queryParams).then(result=>{
        console.log(result)
    })
}

quertData();


</script>
<style scoped>
        .box{
            padding: 5px;
            box-sizing: border-box;
            border: 2px solid red;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            grid-template-rows: repeat(3,1fr);
            grid-gap: 5px;

        }
</style>