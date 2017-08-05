<template>
  <div>
    {{ index }}
    {{ element }}
    x{{x}}
  </div>
</template>

<script>
import mixins from './Mixins'
export default {
  name: 'Bitmap',
  mixins:[mixins],
  data () {
    return {
      self:null,
      bitmap:null,
      render(){
        if(!this.self){
          if(!this.parent) return;
          let bitmap = new Image(),Bitmap = new createjs.Bitmap(bitmap);
          this.bitmap = bitmap;
          this.self = Bitmap;
          bitmap.src = this.element.src;
          this.self.x = this.x;
          this.self.y = this.y;
          this.self.scaleX = this.scaleX;
          this.self.scaleY = this.scaleY;
          this.self.skewX = this.skewX;
          this.self.skewY = this.skewY;
          this.parent.addChild(Bitmap);
          bitmap.onload=()=>{
            this.parent.update()
          };
        }else{

        }
        
      }
    }
  },
  computed:{
    //图片链接
    src(){
      return this.element.src;
    },
  },
  created(){
    this.render();
  },
  watch:{
    parent(nVal,oVal){
      if(nVal){
        this.render({which:'parent'});
      }
    },
    index(nVal,oVal){
      if(typeof nVal == 'number' && this.self){
        this.self.index = nVal;
      }
    },
    src(nVal,oVal){
      if(nVal && this.bitmap){
        this.bitmap.src = nVal;
        this.bitmap.onload = ()=>{
          this.parent.update();
        }
      }
    },
    x(nVal,oVal){
      if(nVal && this.self){        
        this.self.x = nVal;
      }
    },
    y(nVal,oVal){
      if(nVal && this.self){
        this.self.y = nVal;
      }
    },
    scaleX(nVal,oVal){
      if(nVal && this.self){
        this.self.scaleX = nVal;
      }
    },
    scaleY(nVal,oVal){
      if(nVal && this.self){
        this.self.scaleY = nVal;
      }
    },
    skewX(nVal,oVal){
      if(nVal && this.self){
        this.self.skewX = nVal;
      }
    },
    skewY(nVal,oVal){
      if(nVal && this.self){
        this.self.skewY = nVal;
      }
    },

  }
}
</script>

<style>

</style>
