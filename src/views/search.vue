<template>
    <page-view class="flex flex-col">
        <form action="/">
            <van-search
            v-model="value"
            background="#F7504D"
            shape="round"
            show-action
            @search="onSearch"
            placeholder="请输入关键字">
                <template #left>
                    <img src="../assets/img/left-arrow.svg" class="mr-[10px]" @click="$router.back()" />
                </template>
                <template #action>
                    <div @click="onClickButton" class="text-[14px] text-white">搜索</div>
                </template>
            </van-search>
        </form>
        
        <div class="content-box flex-1 overflow-auto">
            <!-- 默认情况是没有数据的 -->
            <van-empty description="暂无数据" v-if="searchData.length==0"></van-empty>  
            <div class="box">
                    <div class="relative" v-for="item in searchData" :key="item.id"
                    @click="toMovieDetail(item.id)">
                        <img class="w-full h-full" :src="baseURL + item.movie_pc" />
                        <p class="text-yellow-500 text-[12px] absolute bottom-[2px] left-[8px] font-bold">
                                观众评分{{ item.movie_score }}</p>
                    </div>
            </div>            
        </div>
    </page-view>
</template>
<script setup>
import { Search,Toast } from 'vant';
import { reactive,ref,inject } from 'vue';
import API from '../utils/API';
import { useRouter } from "vue-router";

const baseURL = inject("baseURL");

//输入的值
const value = ref('');

const router = useRouter();

const queryParams = reactive({
    pageIndex:"1",
    keyword:"",
});

const searchData = ref([]);

const quertData = ()=>{
    API.movieInfo.search(queryParams).then(result=>{
        console.log(result.data.listData)
        if(result.data.listData.length==0){
            Toast('暂无数据');
        }else{
        searchData.value=result.data.listData
        //console.log(searchData.value)
        }   
    })
}

const onClickButton = () => {
    queryParams.keyword=value.value;
    quertData();
};

const onSearch = () => {
    queryParams.keyword=value.value;
    quertData();
};

const toMovieDetail = (id)=>{
    router.push({
        name:'movieDetail',
        query:{
            id:id
        }
    });
};
</script>
<style scoped>
        .box{
            padding: 5px;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            grid-gap: 5px;

        }
</style>