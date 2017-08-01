<template>
  <canvas ref="canvas" id="canvas" :width="size.width" :height="size.height">

  </canvas>
</template>

<script>
export default {
  name: 'Stage',
  props:{
    size:{
      type:Object,
      default(){
        return {
          width:300,
          height:150
        }
      }
    }
  },
  data () {
    return {
     
    }
  },
  computed:{
    
  },
  created(){
    
  },
  mounted(){
    if(!this.stage){
      this.stage = new createjs.Stage(this.$refs.canvas);
      var image = new createjs.Bitmap("src/assets/logo.png");
      this.stage.addChild(image);
      setTimeout(()=>{
        this.stage.update();
      },1000) 
    }
  }
}
</script>

<style>

</style>
