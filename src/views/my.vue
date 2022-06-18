<template>
    <page-view class="flex flex-col bg-gray-100">
        <title-bar>
            我的
            <!-- #right插入到一个name为right的具名插槽 -->
            <template #right>
            </template>
        </title-bar>
        <div class="content-box flex-1 overflow-auto relative z-10">
            <div class="h-[190px] relative flex justify-center items-center">
                <img src="http://lovesnsfi_admin.gitee.io/movie-app/assets/bg.6e97eec3.png"
                    class="w-full h-full object-cover absolute -z-10" alt="">
                <img src="https://cdn.jsdelivr.net/gh/guosjj/blog_image/img/2022/1.png"
                    class="w-[70px] h-[70px] rounded-full border-2 border-solid border-white" alt="">
            </div>
            <div class="mt-[10px]">
                <div class="van-cell van-cell--clickable" role="button" tabindex="0">
                    <div class="van-cell__title"><span>我的订单</span></div>
                    <i class=" van-icon van-icon-arrow"></i>
                </div>
                <div class="van-cell van-cell--clickable" role="button" tabindex="0">
                    <div class="van-cell__title"><span>退出登录</span></div>
                    <i class=" van-icon van-icon-arrow"></i>
                </div>
            </div>
        </div>
    </page-view>
</template>

<script setup>
import titleBar from "../components/title-bar.vue";
</script>

<style>
</style>