<template>
        <page-view>
        <title-bar>
        我的
        <!-- #right插入到一个name为right的具名插槽 -->
        <template #right>
        </template>
        </title-bar>
    </page-view>
</template>

<script setup>
import titleBar from "../components/title-bar.vue";
</script>

<style>
</style>