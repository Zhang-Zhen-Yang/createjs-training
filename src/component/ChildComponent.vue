<template>
  <Bitmap v-if="element.type=='Bitmap'" 
      :parent="parent" 
      :element="element"
      :index="index"></Bitmap>
  <CText v-else-if="element.type=='Text'"></CText>
  <Shape v-else-if="element.type=='Shape'" 
      :parent="parent" 
      :element="element"
      :index="index"></Shape>
</template>

<script>
import Bitmap from './Bitmap.vue'
import CText from './Text.vue'
import Shape from './Shape.vue'
export default {
  name: 'createjs-child',
  components:{ Bitmap, CText, Shape },
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
    },
    index:{
      type:Number,
      default:0
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      self:null,
      bitmap:null,
      render({which}){
        if(!this.parent){
          return;
        }
        switch(this.element.type){          
          case 'Text':
            /*if(which == 'parent'){
              let text = new createjs.Text(this.element.words, "20px Arial", "#ff7700");
              text.x=this.element.x||0,
              text.y=this.element.y||0;
              this.self = text;
              this.parent.addChild(text);
             
            }else{
              this.self.text = this.element.words;
             
            }*/
            
          break;
          case 'Bitmap':
            if(which == 'parent'){
              /*let bitmap = new Image(),Bitmap = new createjs.Bitmap(bitmap);
              this.bitmap = bitmap;
              this.self = Bitmap;
              bitmap.src = this.element.src;
              this.parent.addChild(Bitmap);
              bitmap.onload=()=>{
                this.parent.update()
              };*/
            }else{

            }            
            
          break;
        }
      }      
    }
  },
  created(){
    //alert('created');
    this.render({which:'parent'});
  },
  destroyed(){
    this.parent.removeChild(this.self);
    this.parent.update();
  },
  computed:{
    elementJSONStringify(){
      return JSON.stringify(this.element);
    }
  },
  watch:{
    parent(nVal,oVal){
      if(nVal){
        this.render({which:'parent'});
      }
    },
    elementJSONStringify:function(nVal,oVal){
      //alert(nVal);     
　　　 this.render({which:'self'});
    }
  }
}
</script>

<style>

</style>
