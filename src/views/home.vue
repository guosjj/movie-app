<template>
    <div class="home-page">
        <div class="content-box">
            <!-- 根据路由显示不同页面 -->
            <router-view></router-view>
        </div>
        <div class="tab-bar">
            <router-link :to="{name:'movie'}" active-class="selected"> 
                <span class="iconfont icon-dianyingpiaoiocn"></span> 
                影片
            </router-link>

            <router-link :to="{name:'hall'}" active-class="selected"> 
                <span class="iconfont icon-cinema"></span> 
                影院
            </router-link>

            <router-link :to="{name:'plan'}" active-class="selected"> 
                <span class="iconfont icon-paipian"></span> 
                排片
            </router-link>

            <router-link :to="{name:'my'}" active-class="selected"> 
                <span class="iconfont icon-wode"></span> 
                我的
            </router-link>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../assets/scss/comm.scss";
.home-page {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.content-box {
    flex: 1;
    overflow: auto;
}

.tab-bar {
    box-shadow: 0px -5px 15px lightgray;
    height: 55px;
    display: flex;
    justify-content: space-around;
    a {
    font-size: 14px;
    width: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    .iconfont {
    font-size: 28px;
    }
    }
}

/* 专门用于tab-bar选中后的样式 */
.selected{
    color: $primaryColor !important;
}
</style>