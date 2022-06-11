<template>
            <div class="bg-white mt-[5px]">
                <div class="flex h-[120px] p-[5px]" v-for="item in resultData.listData" :key="item.id">
                    <div class="w-[95px]">
                        <img class="w-full h-full" :src="baseURL+item.movie_pc" alt="">
                    </div>
                    <ul class="flex flex-col flex-1 justify-between text-[12px] list-none px-[10px]">
                        <li class="text-[18px] font-bold">{{item.movie_name}}</li>
                        <li >众人评分: <span class="text-[14px] font-bold text-warningColor">{{item.movie_score}}</span></li>
                        <li >主演: {{item.role}}</li>
                        <li >上映时间:{{item.publicTime}}</li>
                    </ul>
                    <div class="flex w-[70px] flex-col justify-center">
                        <button class="btn-buy" type="button" v-if="item.publicTime<new Date().toLocaleDateString()">购票</button>
                        <button type="button" class="btn-presale" v-else>预告</button>
                    </div>
                </div>
            </div>
</template>
<script setup>
import API from "../utils/API/index.js";
import { ref,reactive,inject } from "vue";

const baseURL = inject("baseURL");
//定义请求参数
const queryParams = reactive({
    pageIndex:1,
    tags:"",
    movie_name:"",
});
//分页请求数据
const resultData = reactive({
    listData: [],
    pageCount: 0
});
const queryData = ()=>{
    API.movieInfo.getListByPage(queryParams).then((result)=>{
        resultData.pageCount = result.data.pageCount;
        resultData.listData = result.data.listData;
        console.log(resultData);
    });
};

queryData();
</script>
<style scoped lang="scss">
.btn-buy{
    @apply w-[60px] h-[30px] border-none rounded-[18px] text-[12px] bg-primaryColor text-white;
}
.btn-presale{
    @extend .btn-buy;
    @apply bg-secondColor;
}
</style>