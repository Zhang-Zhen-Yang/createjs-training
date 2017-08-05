let mixin = {
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
    created(){
        //alert('created');
    },
    computed:{
        x(){
            return this.element.x||0;
        },
        y(){
            return this.element.y||0;
        },
        scaleX(){
            return this.element.scaleX||1;
        },
        scaleY(){
            return this.element.scaleY||1;
        },
        skewX(){
            return this.element.skewX||0;
        },
        skewY(){
            return this.element.skewY||0;
        }
    }
    
}

export default mixin;