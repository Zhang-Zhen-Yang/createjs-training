<template>
  <canvas ref="canvas" id="canvas" :width="size.width" :height="size.height">
    <ChildComponent 
      v-for="(childElement,index) in child" 
      :parent="stage" 
      :element="childElement"
      :index="index">
    </ChildComponent>
  </canvas>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
export default {
  name: 'Stage',
  components:{ ChildComponent },
  props:{
    size:{
      type:Object,
      default(){
        return {
          width:300,
          height:150
        }
      }
    },
    opts:{
      type:Object,
      default(){
        return {
          child:[]
        }
      }
    }
  },
  data () {
    return {
      stage:null,
      render(){
         /* this.opts.child.forEach((item)=>{
          switch(item.type){
          case 'Bitmap':let img=new Image(),bitmap = new createjs.Bitmap(img);img.src=item.src;img.onload=()=>{this.update()};
              this.stage.addChild(bitmap);
              break;*/
            /*case 'Text':let text = new createjs.Text("Hello World", "20px Arial", "#ff7700");text.x=item.x||0,text.y=item.y||0;
              this.stage.addChild(text);              
              break;
          }
        })
        this.update();*/
      },
      update(){
        this.stage.update();
      }
    }
  },
  computed:{
    child(){
      return this.opts.child||[];
    }
  },
  created(){
    
  },
  mounted(){
    if(!this.stage){
      this.stage = new createjs.Stage(this.$refs.canvas);
      this.render();
    }
  },
  watch:{
    opts(nVal,oVal){
      this.$nextTick(()=>{

      })
    }
  }
}
</script>

<style>

</style>
