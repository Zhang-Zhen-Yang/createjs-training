<template>
  <div class="createjs-child">
  </div>
</template>

<script>
export default {
  name: 'createjs-child',
  props:{
    parent:{
      type:Object,
      default(){
        return null;
      }
    },
    element:{
      type:Object,
      default(){
        return null;
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      self:null,
      bitmap:null,
      render(){
        if(!this.parent){
          return;
        }
        switch(this.element.type){          
          case 'Text':
            let text = new createjs.Text("Hello World", "20px Arial", "#ff7700");
            text.x=this.element.x||0,
            text.y=this.element.y||0;
            this.self = text;
            this.parent.addChild(text);
            this.parent.update();
          break;
          case 'Bitmap':
            
            let bitmap = new Image(),Bitmap = new createjs.Bitmap(bitmap);
            this.bitmap = bitmap;
            bitmap.src = this.element.src;
            this.parent.addChild(Bitmap);
            bitmap.onload=()=>{
              this.parent.update()
            };
          break;
        }
      }      
    }
  },
  created(){
    //alert('created');
    this.render();
  },
  watch:{
    parent(nVal,oVal){
      if(nVal){
        this.render();
      }
    }
  }
}
</script>

<style>

</style>
