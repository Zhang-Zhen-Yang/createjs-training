<template>
  <div>
    {{ index }}
    {{ element }}
   
  </div>
</template>

<script>
import mixins from './Mixins'
export default {
  name: 'Text',
  mixins:[mixins],
  data () {
    return {
      msg: 'Text',
      self:null,
      render(){
        if(!this.self){
          if(!this.parent) return;
          let text = new createjs.Text(this.element.words, "20px Arial", "#ff7700");
          text.x=this.element.x||0,
          text.y=this.element.y||0;
          this.self = text;
          this.parent.addChild(text);
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
        this.render();
      }
    }
  }
}
</script>

<style>

</style>
