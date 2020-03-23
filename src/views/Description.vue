<template>
<div class="description">
    <navbar/>

   <div class="display">
       <b-container class="bv-example-row" fluid>
                <b-row>
                <b-col cols>
                  <div class="sticky">
                    <p class="cat">Categories</p>
                  <div class="big-image">
                    <img :src="product.image" alt="" width=350 heigth=250>
                    <div class="smallerimages" style="margin-top:50px">
                        <img :src="product.image" alt="" width=100 height=100>
                        <img :src="product.image" alt="" width=100 height=100>
                        <img :src="product.image" alt="" width=100 height=100>
                    </div>
                </div>


                  </div>
                  
                  </b-col>
                <b-col cols="8" style="margin-top:100px; height:500px">
                   <div class="Details">
                    <b-card bg-variant="dark" text-variant="white" :title=" product.name ">
                        
                        <div class="full">
                       <h5>Description</h5>
                           <p>{{product.information}}</p> 
                           <p>&#8358;{{ product.price }}</p>
                          </div>
                        <b-button block variant="warning" style="margin-top:50px; font-size:20px; font-weight:bold">Buy </b-button>
                        
                    </b-card>

                </div>
                  </b-col>
                </b-row>
            </b-container >
                
               
            </div>
            
            
      </div>

   

   
    
</template>

<script>
 import navbar from '../components/navbar.vue';

 
export default {
     name: 'Description',
    props: ['product'],
    data(){
        return{
      
        
    
             

        }

    },

    components:{
        navbar,
     
    }
    
}
</script>
<style scoped>
.description{
    margin-top: 100px;
};
.Details{
    width:500px;
    margin-top: 500px;
}
p{
    text-align: center;
    font-size: 18px;
}

</style>