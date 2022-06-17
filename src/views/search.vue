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
            <van-empty description="暂无数据"></van-empty>   
            
        </div>
    </page-view>
</template>
<script setup>
import { Search } from 'vant';
</script>
<style scoped>

</style>