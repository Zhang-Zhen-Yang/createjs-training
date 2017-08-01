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
      child:[],
      render(){
        this.opts.child.forEach((item)=>{
          switch(item.type){
            case 'Bitmap':let img=new Image(),bitmap = new createjs.Bitmap(img);img.src=item.src;img.onload=()=>{this.update()};
              this.stage.addChild(bitmap);
              
              //this.child.push({type:'Bitmap',ref:bitmap,bitmapRef:bitmap})
              break;
            case 'Text':let text = new createjs.Text("Hello World", "20px Arial", "#ff7700");text.x=item.x||0,text.y=item.y||0;
              this.stage.addChild(text);
              //this.child.push({type:text});
              
              break;
          }
        })
        this.update();
      },
      update(){
        this.stage.update();
      }
    }
  },
  computed:{
    
  },
  created(){
    
  },
  mounted(){
    if(!this.stage){
      this.stage = new createjs.Stage(this.$refs.canvas);
      /*var image = new createjs.Bitmap("src/assets/logo.png");
      this.stage.addChild(image);
      setTimeout(()=>{
        this.stage.update();
      },1000) */
      this.render();
    }
  },
  watch:{
    opts(nVal,oVal){

    }
  }
}
</script>

<style>

</style>
