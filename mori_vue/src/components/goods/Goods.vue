<template>
    <div class="goods">
        <nav-bar></nav-bar>
        <div class="addCartIcon" v-for="g, item in showGoods" :key="item" :class="{showing: g.showingIcon}">已加入購物車</div>
        <div class="content">
                <p class="title-g-t">商品一覽</p>
            <div class="search">
                <!-- 根據 name 發生變化, input發生變化就觸發search -->
                <input type="text" style="width:200px; height:30px;" v-model="name" @input="search" placeholder="請輸入商品名搜尋">
            </div>
            <transition appear name="show-g">
            <div class="title-g">
                <div class="good-item" v-for="g, item in showGoods" :key="item">
                    <div class="info">
                        <div class="title">{{g.name}}</div>
                        <div class="price">NT ${{g.price}}</div>
                        <img class="goods-img" :src="g.img">
                        <div class="add-cart" @click="addA(g), addIcon(g)">
                            <span>加入購物車</span>
                        </div>
                    </div>
                </div>
            </div>
            </transition>
        </div>
        <footer-i></footer-i>
    </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import FooterI from '@/components/footer/Footer'

import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    name: 'goods',
    data() {
        return {
            // 表示input輸入的名字
            name: '',
        }
    },
    components: {
        NavBar,
        FooterI
    },
    methods: {
        search() {
            this.$store.dispatch('goodsList/searchA', this.name)
        },
        ...mapActions('shopCart', ['addA']),
        addIcon(goods) {
            goods.showingIcon = true
            setTimeout(() => {
                goods.showingIcon = false
            }, 800)
            // console.log(this.$store.state.goodsList.goods);
        }
    },
    computed: {
        // 簡化this.$store.state.goodsList.goods
        ...mapState({
            goods: state => state.goodsList.goods
        }),
        // 模塊名, 陣列(要導入的函式)
        ...mapGetters('goodsList', ['showGoods']),
    },
}
</script>

<style>
    .addCartIcon {
        z-index: 999;
        position: fixed;
        top: 70px;
        right: 16%;
        width: 200px;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        letter-spacing: 3px;
        color: rgb(60, 84, 138);
        border: 1px solid rgb(157, 177, 221);
        border-radius: 20px;
        background-color: rgb(218, 230, 241);
        opacity: 0;
        transition: opacity 1.5s;
    }
    .addCartIcon.showing {
        opacity: 1;
    }
    .content {
        padding-top: 80px;
        min-height: calc(100vh - 130px);
        background-color: rgb(249, 248, 244);
    }
    .title-g-t {
        font-size: 26px;
        text-align: center;
        margin: 0;
        padding: 30px;
        letter-spacing: 2px;
    }
    .search {
        display:inline-block;
        width: 80%;
        text-align: end;
        padding: 20px 0;
    }
    @media (max-width: 830px) {
        .search {
            width: 100%;
            text-align: center;
        }
    }
    .search input:focus {
        outline:0;
        outline-color: rgba(183, 183, 183);
    }
    .title-g {
        display: flex;
        flex-wrap: wrap;
        width: 70%;
        margin: 0 auto;
        font-size: 26px;
    }
    .good-item {
        display: flex;
        justify-content: center;
        width: calc(100% / 3);
        height: 400px;
        padding-bottom: 30px;
    }
    @media (max-width: 1200px) {
        .good-item {
            width: calc(100% / 2); 
        } 
    }
    @media (max-width: 830px) {
        .good-item {
            width: calc(100%); 
        } 
    }
    .show-g-enter {
        transform: translateY(100px);
        opacity: 0;
    }
    .show-g-enter-active {
        transition: all ease 1s;
    }
    .show-g-to {
        opacity: 1;
        transform: translateY(0);
    }
    .goods-img {
        width: 250px;
        height: 250px;
    }
    .info > div {
        font-size: 18px;
        padding: 5px 0;
        letter-spacing: 2.5px;
    }
    .info .title {
        font-weight: 600;
    }
    .add-cart img {
        display: block;
    }
    .add-cart span{
        cursor: pointer;
        width: 100%;
        display: inline-block;
        border: 1px solid #000;
        text-align: center;
        margin-top: 10px; 
        padding: 5px 0;
        font-weight: 600;
        color: rgb(0, 0, 0);
        background-color: rgb(249,248,244);
    }
    .add-cart span:hover {
        color:rgb(255, 255, 255);
        background-color: rgb(38,27,20);
        transition: .5s;
    }
</style>