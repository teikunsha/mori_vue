<template>
    <div class="nav-bar">
        <router-link to="/"><img class="logo" src="@/assets/img/mori-logo.png" alt=""></router-link>
        <div class="menu">
            <div class="ham-mask" @click="ham()"></div>
            <div class="ham"></div>
            <div class="ham-content">
                <router-link class="ham-about-t" to="/about">關於我們</router-link>
                <router-link class="ham-product-t" to="/goods">商品一覽</router-link>
                <div class="close">X</div>
            </div>
            <router-link class="about-t" to="/about">關於我們</router-link>
            <router-link class="product-t" to="/goods">商品一覽</router-link>
            <router-link class="cart-icon" to="/cart">
                <img class="cart-img" src="@/assets/img/shopping-cart_1.png" alt="">
                <transition name="icon">
                <div v-if="iconNum() <= 0"></div>
                <div v-else class="icon-amount">{{iconNum()}}</div>
                </transition>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            iconNum() {
                return this.$store.state.shopCart.goods.length
            }
        }
    },
    methods: {
        ham() {
            let mask = document.querySelector('.ham-mask')
            let ham = document.querySelector('.ham')
            let hamContent = document.querySelector('.ham-content')
            let close = document.querySelector('.close')
            mask.addEventListener('click', () => {
                mask.classList.add('ham-mask-close')
                ham.classList.add('ham-ani-close')
                hamContent.classList.add('ham-content-ani-open')
                mask.classList.remove('ham-mask-open')
                ham.classList.remove('ham-ani-open')
                hamContent.classList.remove('ham-content-ani-close')
            })
            close.addEventListener('click', () => {
                hamContent.classList.remove('ham-content-ani-open')
                mask.classList.remove('ham-mask-close')
                ham.classList.remove('ham-ani-close')
                hamContent.classList.add('ham-content-ani-close')
                mask.classList.add('ham-mask-open')
                ham.classList.add('ham-ani-open')
            })
        }
    },
    mounted() {
        this.ham();
    }
}
</script>

<style>
    .nav-bar {
        z-index: 999;
        position:fixed;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 80px;
        background-color: rgb(232, 220, 207, .8);
    }
    @media (max-width: 991px) {
        .nav-bar {
            /* max-width: 90%; */
        }
    }
    @media (max-width: 768px) {
        .nav-bar {
            /* max-width: 95%; */
        }
    }
    .logo {
        width: 110px;
        height: 35px;
    }
    .ham-mask {
        display: none;
        cursor: pointer;
        z-index: 99;
        position: relative;
        left: 30px;
        width: 30px;
        height: 22px;
        background-color: transparent;
    }
    .ham {
        display: none;
        position: relative;
    }
    @media (max-width: 768px) {
        .ham-mask, .ham {
            display: block;
        }
    }
    .ham-mask-close {
        opacity: 0;
    }
    .ham-mask-open {
        opacity: 1;
    }
    .ham-ani-close, .ham-content-ani-close {
        opacity: 0;
        transition: .5s;
    }
    .ham-content-ani-open {
        transition: .5s;
        transform: translate(-115%, 115%);
    }
    .ham-ani-open {
        opacity: 1;
        transition: .5s;
    }
    .ham-content {
        z-index: 98;
        position: fixed;
        top: -200px;
        right: -200px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 200px;
        height: 200px;
        background-color: rgba(95, 140, 160, 0.8);
        border-radius: 50%;
    }
    .close {
        z-index: 100;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 20px;
        width: 30px;
        height: 30px;
        background-color: rgb(220, 216, 210);
        border-radius: 50%;
        font-size: 14px;
        font-weight: 600;
        opacity: 1;
    }
    .ham-content > .ham-about-t, .ham-content > .ham-product-t{
        padding: 10px;
    }
    .ham, .ham::before, .ham::after {
        width: 26px;
        border: 2px solid #000;
        border-radius: 20px;
        background-color: rgb(0, 0, 0);
    }
    .ham::before {
        content: '';
        position: absolute;
        top: -11px;
        left: -2px;
    }
    .ham::after {
        content: '';
        position: absolute;
        top: 7px;
        left: -2px;
    }
    .menu {
        font-family: 'Zen Kurenaido';
        display: flex;
        align-items: center;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 3px;
        color: rgba(255, 255, 255)
    }
    @media (max-width: 768px) {
        .menu > .product-t, .menu > .about-t {
            display: none;
        }
    }
    a:link, a:visited {
        color: rgb(0, 0, 0);
        text-decoration: none;
    }
    .about-t, .product-t {
        margin-top: 3px;
    }
    .about-t::after, .product-t::after {
        content: '';
        display: block; 
        position: relative;
        top: 10px;
        width: 0%;
        border-bottom: 2px solid rgb(0, 0, 0);
        transition: .4s .2s;
    }
    .about-t:hover::after, .product-t:hover::after {
        width: 100%;
        transition: .4s .2s;
    }
    .menu > a, .menu > img {
        padding: 0 15px
    }
    .cart-icon{
        position: relative;
    }
    .cart-img {
        width: 30px;
        height: 30px;
    }
    .icon-amount {
        z-index: 99;
        position: absolute;
        top: -5px;
        left: 35px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: rgb(222, 104, 104);
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 4px;
        font-size: 12px;
        color:rgb(255, 255, 255);
    }
</style>

