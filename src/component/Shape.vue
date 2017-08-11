<template>
  <div >
    {{ index }}
    {{ element }}
    x{{x}}
  </div>
</template>

<script>
import mixins from './Mixins'
export default {
  name: 'Shape',
  mixins:[mixins],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      self:null,
      bitmap:null,
      render(){
        if(!this.self){
          if(!this.parent) return;
          let Shape = new createjs.Shape();
          this.self = Shape;
          this.self.x = this.x;
          this.self.y = this.y;
          this.self.scaleX = this.scaleX;
          this.self.scaleY = this.scaleY;
          this.self.skewX = this.skewX;
          this.self.skewY = this.skewY;
          this.self.graphics.beginFill("#ff0000").drawRect(100, 100, 200, 200);
          this.parent.addChild(Shape);
        
          
        }else{

        }
        
      }
    }
  },
  created(){
    this.render();
  },
  watch:{
    parent(nVal,oVal){
      if(nVal){
        this.render({which:'parent'});
      }
    }
  }
}
</script>

<style>

</style>
