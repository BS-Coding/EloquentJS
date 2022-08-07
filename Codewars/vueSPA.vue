<template>
  <div id="app">
    <nav>
      <a id="logoLink" @click="currentTab = 'heroSection'"><svg viewBox="0 0 512 512" width="100" title="hat-wizard" id="logo">
  <path d="M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z" />
  </svg></a>
      <ul>
        <a @click="currentTab = 'shoes'"><li>Shoes</li></a>
        <a @click="currentTab = 'shirts'"><li>Shirts</li></a>
        <a @click="currentTab = 'pants'"><li>Pants</li></a>
        <a @click="currentTab = 'loungewear'"><li>Loungewear</li></a>
        <a @click="currentTab = 'active'"><li>Active</li></a>
      </ul>
    </nav>
    <section id="heroSection" v-show="currentTab === 'heroSection'">
      <div id="mainLogo"><img src="https://media2.giphy.com/media/dz0rNs5nTd9RGbE19r/giphy.gif?cid=790b761156c505851f9648b4883b62c815fe9bd62d6daf05&rid=giphy.gif&ct=s"></img></div>
      <div id="mainText">
        <h2>Wiz Clothing Co.</h2>
        <h1>So comfy, it's like <span>MAGIC</span></h1>
      </div>
    </section>
    <section id="shoes" v-show="currentTab === 'shoes'">Shoes</section>
    <section id="shirts" v-show="currentTab === 'shirts'">Shirts</section>
    <section id="pants" v-show="currentTab === 'pants'">Pants</section>
    <section id="loungewear" v-show="currentTab === 'loungewear'">Loungewear</section>
    <section id="active" v-show="currentTab === 'active'">Active</section>
  </div>
</template>

<script>
export default {
  data() {
    return{
      currentTab: 'heroSection'
    }
  },
  methods: {
    
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Henny+Penny&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
  
  html{
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    margin: 0;
    padding: 0;
  }
  #app {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica;
    color: #2c3e50;
  }
  nav{
    position: sticky;
    padding: 0;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: center;
  }
  #logoLink{
    background-color: #4754c9;
    background-image: linear-gradient(to right, #e14ccd, #4754c9);
  }
  #logo{
    fill: white;
    padding: 10px 0;
    margin: 0px 15px;
    width: 50px;
    height: auto;
    transition-duration: 300ms;
  }
  #logo:hover{
    transform: rotateY(180deg);
  }
  ul{
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
  }
  li,a{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    color: inherit;
    transition-duration: 300ms;
  }
  ul>a{
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul>a:hover{
    background-color: #4754c9;
    color: white;
  }
  #heroSection{
    display: flex;
    margin: 0 auto;
    align-items: center;
    text-align: right;
    width: 100%;
    max-width: 990px;
    justify-content: space-between;
    padding: 0px 25px;
  }
  #mainText>h2{
    font-family: 'Henny Penny';
    font-weight: 700;
    color: #4754c9;
    font-size: 3.5rem;
    margin: 0;
  }
  #mainText>h1{
    margin: 0;
    text-align: center;
  }
  #mainText span{
    margin: 0;
    color: #e14ccd;
    text-decoration: underline;
  }
</style>