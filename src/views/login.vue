<template>
    <page-view class="flex flex-col">
        <title-bar :show-back="true">登录</title-bar>
        <van-form>
            <van-cell-group inset>
                <van-field autocomplete="false" v-model="phone" name="手机号" label="手机号" placeholder="手机号"
                    :rules="[{ validator: asyncValidator, message: '请填写手机号' }]" />
                <van-field autocomplete="false" v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ validator: asyncValidator, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button class="border-0 bg-primaryColor" round block type="primary" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
    </page-view>
</template>
<script setup>
import titleBar from '../components/title-bar.vue';
import { ref } from 'vue';
import { Toast } from 'vant';
const phone = ref('');
const password = ref('');

const asyncValidator = (val) =>
      new Promise((resolve) => {
    if (phone.value == '' || password.value == '') {
        Toast("请填写完整信息");
    }   
        resolve(val !== '');
        // setTimeout(() => {
        //   resolve(val !== '');
        // }, 1000);
      });

</script>
<style scoped>
</style>