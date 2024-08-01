<template>
  <div class="indexImg">
    <nav-bar></nav-bar>
    <transition appear name="index-t">
      <div class="Title">
          <p>森 -mori-</p>
          <p>木製品工作室</p>
      </div>
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'

export default {
    name: 'IndexImg',
    components: {
      NavBar,
    },
    mounted: {
      bg() {
            
      },
    }
}
</script>

<style>
  .indexImg {
        height: 100vh;
        background-image: url('@/assets/img/index.jpg');
        background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, .0)), url('@/assets/img/index.jpg') no-repeat 0% 0%/ cover;
  }
  .index-t-enter {
    opacity: 0;
  }
  .index-t-enter-active {
      transition: all ease 2.5s .5s;
  }
  .index-t-to {
    opacity: 1;
  }
  .Title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background-color: rgb(215, 233, 233, .7);
    }
    .Title p{
        font-family: 'Zen Kurenaido';
        font-size: 36px;
        letter-spacing: 3px;
        font-weight: 600;
    }
</style>