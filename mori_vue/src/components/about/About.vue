<template>
  <div class="about">
    <nav-bar></nav-bar>
    <div class="content">
      <div class="title-a">關於　森-mori-</div>
      <transition appear name="show-a-img-1">
        <div class="about-img"></div>
      </transition>
      <div class="intro-1">
        <transition appear name="show-a-img-2">
          <div>
            <img src="@/assets/img/about_intro_1.jpg" alt="" />
          </div>
        </transition>
        <transition appear name="intro-t">
        <div class="intro-text-a">
          <p>
            森-mori- 木製品工作室創立於２０２０年，工作室成員皆擁有５年以上木工經驗。
            設計、木質挑選、製作、品質檢測，將職人的熱情與堅持具體化，並且時刻精進技術與手藝，
            創造出獨一無二的作品。
          </p>
        </div>
        </transition>
      </div>
      <div class="intro-2">
        <div class="intro-text-b">
          <p>
              從小型的裝飾品到大型家具，依據個人的生活形態與喜好，創造散發木的溫暖與安穩的治癒空間。
          </p>
        </div>
        <div>
          <img class="intro-b-img" src="@/assets/img/about_2.jpg" alt="" />
        </div>
      </div>
    </div>
  <footer-i></footer-i>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar"
import FooterI from '@/components/footer/Footer'

export default {
  name: "About",
  components: {
    NavBar,
    FooterI
  },
  methods: {
  },
  mounted() {
    let textElement = document.querySelector('.intro-text-b')
    let imgElement = document.querySelector('.intro-b-img')
    document.addEventListener('scroll', () => {
        const textElementDistance = textElement.getBoundingClientRect().top + textElement.clientHeight * .1
        if(window.innerHeight > textElementDistance) {
          textElement.classList.add('show')
        }
        const imgElementDistance = imgElement.getBoundingClientRect().top + imgElement.clientHeight * .4
        if(window.innerHeight > imgElementDistance) {
          imgElement.classList.add('show')
        }
    })
  }
}
</script>

<style>
.content {
  padding-top: 80px;
  background-color: rgb(249, 248, 244);
}
.title-a {
  font-family: Zen Kurenaido;
  width: 100%;
  font-size: 26px;
  padding: 30px 0;
  text-align: center;
  letter-spacing: 2px;
}
.show-a-img-1-enter, .intro-t-enter {
    transform: translateY(80px);
    opacity: 0;
}
.show-a-img-1-enter-active, .show-a-img-2-enter-active, .intro-t-enter-active {
    transition: all ease 1s;
}
.show-a-img-1-to, .intro-t-to {
    opacity: 1;
    transform: translateY(0);
}
.show-a-img-2-enter {
    transform: translateY(-100px);
    opacity: 0;
}
.show-a-img-2-to {
    opacity: 1;
    transform: translateY(0);
}
.about-img {
  max-width: 70%;
  width: 100%;
  height: 250px;
  margin: 0 auto;
  background-image: url("@/assets/img/about_img.jpg");
  background-position: center 35%;
  background-size: cover;
  background-repeat: no-repeat;
}
@media (max-width: 880px) {
  .about-img {
    max-width: 100%;
  }
}
.intro-1, .intro-2 {
  position: relative;
  display: flex;
  max-width: 65%;
  width: 100%;
  margin: 0 auto;
  padding: 150px 0 50px;;
}
@media (max-width: 880px) {
  .intro-1 {
    flex-direction: column;
    padding: 40px 0 20px;;
  }
  .intro-2 {
    flex-direction: column-reverse;
    padding: 40px 0 50px;;
  }
}
.intro-1 > div, .intro-2 > div {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.intro-1 img, .intro-2 img {
  padding: 5px 0;
  width: 100%;
}
.intro-b-img{
  position: relative;
  top: -200px;
  opacity: 0;
  
}
.intro-1 .intro-text-a, .intro-2 .intro-text-b {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
}
.intro-1 .intro-text-a {
  padding-left: 50px;
}
.intro-2 .intro-text-b {
  padding-right: 50px;
}
@media (max-width: 880px) {
  .intro-1 .intro-text-a, .intro-2 .intro-text-b {
    width: 80%;
    margin: 0 auto;
  }
  .intro-1 .intro-text-a {
    padding: 15px 0 0;
    
  }
  .intro-2 .intro-text-b {
    padding: 15px 0 0;
  }
}
.intro-text-b {
  position: relative;
  top: 200px;
  opacity: 0;
}
.intro-text-a p, .intro-text-b p {
  margin: 0;
  letter-spacing: 3px;
  font-size: 22px;
  line-height: 2rem;
}
.show {
  position: relative;
  opacity: 1;
  top: 0px;
  transition: 1s;
}
</style>