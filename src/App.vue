<template>
  <div id="app">
    <Stage :size="{width:500,height:500}" :opts="opts">

    </Stage>
  </div>
</template>

<script>
import Stage from './component/stage.vue'
export default {
  name: 'app',
  components:{ Stage },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      opts:{
        child:[
          {type:'Bitmap',src:'http://donghua.dmzj.com/image/cover/4/10379/9/title_thum.jpg'},
          {type:'Text',words:'ddddfasfdefgdf',x:200,y:50}
        ]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
