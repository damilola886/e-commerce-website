<template>
<div class="slide">
    <carousel :per-page="1" :autoplay="true"  :speed="3000" :loop="true">
    <slide v-for="image in images" :key="image.id">
      
    
          <b-img-lazy :src="image.path" width="450" height="320" style="margin-left:5px; margin-top:5px" ></b-img-lazy>
        
    </slide>
  </carousel>
</div>
    
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';


export default {
    components:{
    Carousel,
    Slide
    },  
    data(){
        return{
        images:[{
            id:1,
            path:require("../assets/black.jpeg")

        },
        {
            id:2,
            path:require("../assets/body.jpeg")

        },
         {
            id:3,
            path:require("../assets/guy.jpeg")

        },
         {
            id:4,
            path:require("../assets/cream.jpeg")

        },
         {
            id:5,
            path:require("../assets/skin.jpeg")

        },
        {
            id:6,
            path:require("../assets/body.jpeg")

        },

        ],
    }


    
  },
 

}
</script>
<style scoped>
.slide{
  align-content: center;
  margin-left: 30px;
}
</style>