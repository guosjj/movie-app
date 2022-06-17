<template>
    <page-view>
        <title-bar :show-back="true">电影详细信息</title-bar>
        <div class="content-box flex-1 overflow-auto">
            <van-skeleton :loading="isLoading" animate :row="7">
                <div class="movie-info-box box-border p-[10px] flex flex-row relative overflow-hidden h-[150px]">
                <img :src="baseURL+movieDetail.movie_pc" class="w-full h-full object-cover blur-lg absolute -z-10">
                <div class="left w-[100px] h-full">
                    <img :src="baseURL+movieDetail.movie_pc" class="w-full h-full" />
                </div>
                <ul class="flex flex-col justify-between flex-1 ml-[10px] text-white text-[12px]">
                    <li class="text-[20px]">{{movieDetail.movie_name}}</li>
                    <li><span class="text-[16px] text-warningColor">{{movieDetail.movie_score}}</span>分</li>
                    <li>{{movieDetail.tags}}</li>
                    <li>{{movieDetail.duration}}分钟</li>
                    <li>{{movieDetail.publicTime}}上映</li>
                </ul>
                </div>
                <div @click="toPlanInfoList" class="mx-[10px] my-[15px] rounded-[5px] cursor-pointer active:bg-successColor bg-primaryColor text-center text-white h-[25px]">抢票订购</div>   
                <p class="movie-desc">
                    {{movieDetail.movie_desc}}    
                </p>
            </van-skeleton>
            
        </div>
    </page-view>
</template>
<script setup>
import titleBar from '../components/title-bar.vue';
import { ref,inject } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import API from "../utils/API/index.js";

const route = useRoute();
//注入全局参数
const baseURL = inject("baseURL");
const router = useRouter();

//定义一个变量，表示是否正在加载
const isLoading = ref(true);

//定义一个变量，保存电影
const movieDetail = ref(null);

const queryData = ()=>{
    isLoading.value=true;
    API.movieInfo.getMovieById(route.query.id)
    .then((result)=>{
    if(result.status=="success"){
        movieDetail.value = result.data;
    }else {
        //服务器返回数据失败
        console.log("获取数据失败");
    }
}).finally(()=>{
        isLoading.value=false;
    })
};
queryData();

const toPlanInfoList = ()=>{
    router.push({
        name:'planInfoList',
        query:{
            id:route.query.id
        }
    });
}
</script>
<style scoped lang="scss">
.movie-desc{
    @apply text-[12px] p-[5px] leading-6 indent-[2em];
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>