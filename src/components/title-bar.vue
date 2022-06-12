<template>
    
        <div class="title-bar">
            <img v-if="showBack" class="left-back" src="../assets/img/left-arrow.svg" @click="$router.back()" alt="返回" />
            <slot></slot>
            <div class="right-menu-box">
                <slot name="right"></slot>
            </div>
        </div>
</template>

<script setup>
    //接收外部传来的值
    const props = defineProps({
        showBack:{
            type: Boolean,
            default: false
        }
    });
</script>

<style scoped lang="scss">
@import "../assets/scss/comm.scss";

.title-bar{
    background-color: $primaryColor;
    height: 45px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .left-back{
        position: absolute;
        left: 10px;
    }
    .right-menu-box{
        position: absolute;
        right: 10px;
        display: flex;
        align-items: center;
        // :deep可以设置插槽从外边插入进来的样式
        :deep(img){
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }
}

</style>