<template>
    <div class="cart">
        <nav-bar></nav-bar>
        <transition appear name="show-c-def">
        <div class="def" v-if="goods.length == 0">
            <span>購物車空無一物</span>
        </div>
        <div v-else class="title-c">
            <div class="content">
                <p class="title-g-c">購物車</p>
                <div class="title-c-i">
                    <div class="name-t">商品</div>
                    <div class="amount-t">數量</div>
                    <div class="total-t">合計</div>
                </div>
                <div class="deco-t"></div>
                <div class="cart-item" v-for="g, item in goods" :key="item">
                    <div class="info-c-i">
                        <img :src="g.img" alt="">
                        <div class="name-g">
                            <div class="name-g-t">{{g.name}}</div>
                            <div class="price-g">NT ${{g.price}}</div>
                        </div>
                        <div class="amount-g">
                            <div class="amount-g-i">
                                <div class="sub" @click="if(g.num > 1) sub(g.num--)">－</div>
                                <div class="amount">{{g.num}}</div>
                                <div class="add" @click="add(g.num++)">＋</div>
                            </div>
                            <div class="del" @click="delA(g)">刪除</div>
                        </div>
                        <div class="price-t">${{g.price * g.num}}</div>
                    </div>
                    <div class="deco"></div>
                </div>
                <div class="total">合計：NT ${{totalPrice}}</div>
                <div class="purchase">
                    <a href=""><span>確認訂單</span></a>
                </div>
            </div>
        </div>
        </transition>
        <footer-i></footer-i>
    </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import FooterI from '@/components/footer/Footer'

import {mapState, mapActions, mapGetters} from 'vuex'

export default {
    name: 'Cart',
    components: {
        NavBar,
        FooterI
    },
    methods: {
    ...mapActions('shopCart', ['delA']),
    },
    computed: {
        ...mapState({
            goods: state => state.shopCart.goods
        }),
        ...mapGetters('shopCart', ['totalPrice'])
    }
}
</script>

<style>
    .delCartIcon {
        z-index: 999;
        position: fixed;
        top: 70px;
        right: 280px;
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
    .delCartIcon.showing {
        opacity: 1;
    }
    .def {
        padding-top: 80px; 
        height: calc(100vh - 130px);
        background-color: rgb(249, 248, 244);
        font-size: 50px;
        letter-spacing: 3px;
    }
    .def span{
        display: block;
        position: relative;
        top: 35%;
        text-align: center;
        padding: 10px;
    }
    .show-c-def-enter {
        opacity: 0;
        
    }
    .show-c-def-enter-active {
        transition: .8s;
    }
    .show-c-def-to {
        opacity: 1;
    }
    .content {
        height: 100%;
        background-color: rgb(249, 248, 244);
        padding: 0 5%;
    }
    @media (max-width: 991px) {
        .content {
            padding: 0;
        }
    }
    .title-c {
        padding-top: 80px
    }
    .title-g-c {
        font-size: 26px;
        text-align: center;
        margin: 0;
        padding: 30px;
        letter-spacing: 2px;
    }
    .title-c-i {
        display: flex;
        width: 80%;
        margin: 0 auto;
        padding-bottom: 20px;
    }
    .name-t {
        width: 60%;
        padding-left: 30px;
    }
    .amount-t {
        width: 20%;
        padding-left: 15%; 
    }
    @media (max-width: 991px) {
        .amount-t {
            padding-left: 0%; 
        }
    }
    .total-t {
        width: 20%;
        text-align: start;
    }
    .deco-t {
        width: 73%;
        height: 1px;
        background-color: rgb(186, 184, 184);
        margin-left: 10%
        
    }
    .info-c-i {
        display: flex;
    }
    .cart-item {
        width: 80%;
        margin: 0 auto;
    }
    .info-c-i > img {
        width: 20%;
        margin: 30px 0 30px 30px;
    }
    .name-g {
        width: 40%;
        padding-left: 30px;
        margin: 30px 0 30px 30px;
    }
    .name-g-t {
        padding-top:15px;
    }
    .price-g {
        padding-top: 30px;
    }
    .amount-g {
        width: 20%;
        margin: 30px 0 30px 30px;
    }
    .amount-g-i {
        display: flex;
        border: 1px solid rgb(194, 190, 190);
        width: 80px;
        margin: 15px 0;
        padding: 10px;
    }
    .amount{
        flex: 1;
        text-align: center;
    }
    .sub, .add {
        cursor: pointer;
        color: rgb(117, 115, 115);
        font-weight: 600;
    }
    .del {
        cursor: pointer;
        display: inline-block;
        width: 100px;
        text-align: center;
    }
    .price-t {
        width: 20%;
        text-align: start;
        padding: 60px 0
    }
    @media (max-width: 991px) {
        .name-g {
        width: 20%;
        margin: 30px 0 30px 0px;
        }
    }
    @media (max-width: 620px) {
    .info-c-i > img {
        margin: 30px 0 30px 0px;
    }
    .name-g {
        width: 25%;
        margin: 30px 0 30px 0px;
    }
    .price-t {
        padding: 40px 0 40px 60px
    }
    .amount-g {
        margin: 30px 0 30px 0px;
    }
    }
    .deco {
        width: 91%;
        height: 1px;
        background-color: rgb(186, 184, 184);
    }
    .total {
        width: 80%;
        text-align: end;
        padding-top: 50px;
    }
    .purchase {
        width: 80%;
        text-align: end;
        padding: 50px 0;
    }
    .purchase a span {
        font-size: 16px;
        letter-spacing: 4px;
        color:rgb(255, 255, 255);
        background-color: rgb(38,27,20);
        font-weight: 600;
        border: 1px solid #000;
        padding: 15px 50px;
        transition: .5s;
    }
    .purchase a span:hover {
        color: rgb(0, 0, 0);
        background-color: rgb(249,248,244);
        transition: .5s;
    }
</style>