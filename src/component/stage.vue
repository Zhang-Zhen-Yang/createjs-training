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
    }
  },
  computed:{
    child(){
      return this.opts.child||[];
    },
    optsJSONStringify(){
      return JSON.stringify(this.opts);
    }
  },
  created(){
    
  },
  mounted(){
    if(!this.stage){
      this.stage = new createjs.Stage(this.$refs.canvas);
    }
  },
  watch:{
    optsJSONStringify(nVal,oVal){
      this.$nextTick(()=>{
        this.stage.update();
      })
    }
  }
}
</script>

<style>

</style>
