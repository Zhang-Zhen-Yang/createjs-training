<template>
  <div id="app">
    <Stage :size="{width:1000,height:700}" :opts="opts">

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
          {type:'Bitmap',src:'http://wx2.sinaimg.cn/mw690/d6acdda5ly1fi7m7wvx6aj20m80vddoq.jpg'},
          {type:'Text',words:'ddddfasfdefgdf',x:200,y:50}
        ]
      }
    }
  },
  created(){
    setTimeout(()=>{
      this.opts.child.push({
        type:'Text',
        words:'8 月 4 日更新视觉图与先导 PV',
        x:200,
        y:100
      });
      setTimeout(()=>{
        //this.opts.child[1]={type:'Text',words:'1234567898',x:200,y:50}
        this.opts.child[1].words = '789544545552';
        this.opts.child.splice(2,1);
        setTimeout(()=>{
          this.opts.child.push({
            type:'Bitmap',
            src:'http://donghua.dmzj.com/image/cover/4/10379/9/title_thum.jpg',
            x:0,
            y:10,
            scaleX:0.5,
            scaleY:0.5,
            skewX:10
          });
          setTimeout(()=>{
            this.opts.child[2].src="http://img1.gtimg.com/comic/pics/hv1/54/239/2229/145001724.jpg";
            this.$set(this.opts.child[2],'x',20);
          },1000)
        },100)
      },1000)
    },1000)
  },
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
