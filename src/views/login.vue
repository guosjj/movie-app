<template>
    <page-view class="flex flex-col">
        <title-bar :show-back="true">登录</title-bar>
        <form action="" class="flex flex-col items-center p-[15px]">
            <div class="w-full border-0 border-b border-solid border-gray-100 py-[10px]"> 
                <label class="inline-block w-[100px] text-gray-600 text-[15px]">手机号</label>   
                <input class="border-0 placeholder-gray-300" type="text" placeholder="用户名" />
            </div>
            <div class="w-full border-0 border-b border-solid border-gray-100 py-[10px]"> 
                <label class="inline-block w-[100px] text-gray-600 text-[15px]">密码</label>     
                <input class="border-0 placeholder-gray-300" type="password" placeholder="密码" />
            </div> 
            <div class="w-full h-[30px] mx-[10px] my-[15px] rounded-[15px] cursor-pointer 
            active:bg-successColor bg-primaryColor flex flex-col justify-center text-center text-white">
                登录
            </div>
        </form>
    </page-view>
</template>
<script setup>
import titleBar from '../components/title-bar.vue';


</script>
<style scoped>

</style>