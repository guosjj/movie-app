<template>
        <page-view>
        <title-bar>
       排片
        <!-- #right插入到一个name为right的具名插槽 -->
        <template #right>
            <img src="../assets/img/search.svg" />
        </template>
        </title-bar>
    </page-view>
</template>

<script setup>
import titleBar from "../components/title-bar.vue";
</script>

<style>
</style>