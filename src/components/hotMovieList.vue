<template>
            <van-list class="bg-white mt-[5px]"
            v-model:loading="isLoading"
            loading-text="正在加载电影数据"
            finished-text="我是有底线的"
            @load="loadNextPage"
            :finished="queryParams.pageIndex>=resultData.pageCount">
                <div class="flex h-[120px] p-[5px]" v-for="item in resultData.listData" :key="item.id"
                @click="toMovieDetail(item.id)">
                    <div class="w-[95px]">
                        <img @click="ImagePreview([baseURL+item.movie_pc])" class="w-full h-full" :src="baseURL+item.movie_pc" alt="">
                    </div>
                    <ul class="flex flex-col flex-1 justify-between text-[12px] list-none px-[10px]">
                        <li class="text-[18pxs] font-bold">{{item.movie_name}}</li>
                        <li >众人评分: <span class="text-[14px] font-bold text-warningColor">{{item.movie_score}}</span></li>
                        <li >主演: {{item.role}}</li>
                        <li >上映时间:{{item.publicTime}}</li>
                    </ul>
                    <div class="flex w-[70px] flex-col justify-center">
                        <button class="btn-buy" type="button" v-if="item.publicTime<new Date().toLocaleDateString()">购票</button>
                        <button type="button" class="btn-presale" v-else>预告</button>
                    </div>
                </div>
            </van-list>
</template>
<script setup>
import API from "../utils/API/index.js";
import { ref,reactive,inject } from "vue";
import { ImagePreview } from "vant";
import { useRouter } from "vue-router";

//获取路由管理对象
const router = useRouter();

const baseURL = inject("baseURL");
//定义请求参数
const queryParams = reactive({
    pageIndex:1,
    tags:"",
    movie_name:"",
});

const isLoading = ref(false);

//分页请求数据
const resultData = reactive({
    listData: [],
    pageCount: 0
});

const queryData = ()=>{
    isLoading.value =true;
    API.movieInfo.getListByPage(queryParams).then((result)=>{
        //原来的数据包含加载的数据
        //resultData.listData = result.data.listData;
        resultData.listData = resultData.listData.concat(result.data.listData)
        resultData.pageCount = result.data.pageCount; 
    })
    .finally(()=>{
        //数据请求完了，就把加载状态取消
        isLoading.value = false;
    });
};
queryData();

const loadNextPage =()=>{
    //第一步把页码加1
    queryParams.pageIndex++;
    //第二步：再次调用方法，查询数据
    queryData();
}

const toMovieDetail = (id)=>{
    router.push({
        name:'movieDetail',
        query:{
            id:id
        }
    });
};

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