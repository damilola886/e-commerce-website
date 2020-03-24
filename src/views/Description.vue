<template>
<div class="description">
    <navbar/>

   <div class="display">
       <b-container class="bv-example-row" fluid>
                <b-row style="height:470px">
                <b-col cols >
                  
                  <div class="big-image"  style="margin-top:50px;">
                    <img :src="product.image" alt="" width=350 height=300>
                    <div class="smallerimages" style="margin-top:10px">
                      
                        <img :src="product.images[0]" alt="" width=100 height=100 @click="changeimage1" class="small">
                        <img :src="product.images[1]" alt="" width=100 height=100 @click="changeimage2" class="small">
                        <img :src="product.images[2]" alt="" width=100 height=100 @click="changeimage3" class="small">
                         
                    
                </div>


                  </div>
                  
                  </b-col>
                <b-col cols="8" style="margin-top:50px; height:500px">
                   <div class="Details">
                    <b-card bg-variant="dark" text-variant="white" >

                        <h3>{{product.name}}</h3>
                        <div class="full">
                       <h4>Product Description</h4>
                       <hr style="color:white">
                           <p class="paragraph">{{product.information}}</p> 
                           <p class="price">&#8358;{{ product.price }}</p>
                          </div>
                        <b-button block variant="warning" style="margin-top:30px; font-size:20px; font-weight:bold">BUY </b-button>
                        
                    </b-card>

                </div>
                  </b-col>
                </b-row>
            </b-container >
                
               
            </div>
            <!-- <div class="footer">
                <Footer/>
                </div> -->
            
      </div>

   

   
    
</template>

<script>
 import navbar from '../components/navbar.vue';
 import Footer from '../components/Footer.vue';
 
export default {
     name: 'Description',
    // props: ['product'],
    data(){
        return{          

        }

    },
    computed: {
        product(){
            return this.$store.state.showProduct;
        },
    },
    methods:{
        changeimage1:function(){
                this.product.image = this.product.images[0]          
        },
         changeimage2:function(){
                this.product.image = this.product.images[1]          
        },
         changeimage3:function(){
                this.product.image = this.product.images[2]          
        }
    },
 

    components:{
        navbar,
        Footer
     
    }
    
}
</script>
<style scoped>


.description{
    margin-top: 70px;
};
.Details{
    width:500px;
    margin-top: 300px;
}

.small{
     margin-right: 5px;
     border: 1px solid #000;
}
.small:hover{
    border: 3px solid orange;
    cursor: pointer;

   
}
.price{
 text-align: center;
 font-size: 20px;
 font-weight: bold;
}
.paragraph{
    margin-top: 20px;
 font-size: 20px;
}
h4{
    color:#FFBF00
}
h3{
 text-align: center;
 text-transform:uppercase;
 color:#FFBF00
}
/* @media all and (max-width: 500px){
.footer{
    margin-top: 100px;
};
.bigimage{
    height:100px
}
} */


</style>