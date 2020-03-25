<template>
<div class="roots">
    <navbar/>
    <div class="description">
        <div class="display">
       
                  <div class="big" style="display:flex; width:100%">
                    <div class="big-image" >
                    <img :src="product.image" alt="" width=350 height=300>
                    <div class="smallerimages" style="margin-top:10px">
                      
                        <img :src="product.images[0]" alt="" width=100 height=100 @click="changeimage1" class="small">
                        <img :src="product.images[1]" alt="" width=100 height=100 @click="changeimage2" class="small">
                        <img :src="product.images[2]" alt="" width=100 height=100 @click="changeimage3" class="small">
              
                    
                </div>
                
                  </div>
                <div class="full" style="width:57%; margin-right:10px;">
                <h3>{{product.name}}</h3>
                <div style="margin-left:190px">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                </div>
                
                     <hr style="color:white"> 
                       <h4>Product Description</h4>
                       
                           <p class="paragraph">{{product.information}}</p> 
                           
                               <!-- <star-rating v-model="rating"></star-rating> -->
                            
                           <p class="price">&#8358;{{ product.price }}</p>
                        <del style="margin-left:210px;color:grey; font-size:22px" >&#8358;{{ product.slashedprice }}</del>
                        <b-button block variant="warning" style="margin-top:30px; font-size:20px; font-weight:bold; color:white"><i class="fas fa-shopping-cart"></i>Add to Cart </b-button>
                    </div>
                    </div>
                 
                  </div>
                  
                

                    <div class="refunds">
                                <b-list-group>
                            <b-list-group-item href="#" class="flex-column align-items-start">
                                <div class="house">
                                            <div class="leftIcon"> 
                                                <h5 class="mb-1"><i class="fas fa-paper-plane"></i></h5>
                                            </div>
                                <div class="right">
                                    <h4 class="head">Refunds and Delivery</h4>
                                    
                                </div>
                                 </div>
                                
                                     
                               
                            </b-list-group-item>

                            <b-list-group-item href="#" class="flex-column align-items-start">
                                
                                    <div class="house">
                                            <div class="leftIcon"> 
                                                <h5 class="mb-1"><i class="fas fa-truck"></i></h5>
                                            </div>
                                <div class="right">
                                    <h4 class="head">Delivery Information</h4>
                                    <p> We deliver only on weekdays, please check yor emails and messages for updates on the location of your order before arrival.</p>
                                </div>
                                 </div>
                                
                            </b-list-group-item>

                            <b-list-group-item href="#" class="flex-column align-items-start">    
                                <div class="house">
                                            <div class="leftIcon"> 
                                                <h5 class="mb-1"><i class="fas fa-undo-alt"></i></h5>
                                            </div>
                                <div class="right">
                                    <h4 class="head">Return Policy</h4>
                                    <p> Currently, we have no return policy or warranty, so we operate a no refund policy. however, you can relay your reasons for return and we would try to make your shopping experience more enjoyable. </p>
                                </div>
                                 </div>
                            </b-list-group-item>
                            </b-list-group>
                            <div class="underRefunds">
                                <b-list-group>
                                    <b-list-group-item href="#" class="flex-column align-items-start">
                                        <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">SELLER INFORMATION</h5>
                                        <small><i class="fas fa-greater-than"></i></small>
                                        </div>
                                    </b-list-group-item>

                                    <b-list-group-item href="#" class="flex-column align-items-start">
                                        <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">Information on being Seller here</h5>
                                      
                                        </div>

                                        <p class="mb-1">
                                        Interested in selling your products from our store, well this is now possible after some verification has been done. Click below for more information.
                                        </p>

                                         <b-button  variant="warning" style="margin-top:10px; color;white">Click here </b-button>
                                    </b-list-group-item>
                                    </b-list-group>
                            </div>
                    </div>


    
             </div> 
            
                
               
         
            <div class="footer">
                <Footer/>
                </div>
            
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
        Footer,
        // StarRating
     
    }
    
}
</script>
<style scoped>
.roots{
  background-color:#f7f7f7;
    height: 2000px;
}

.description{
  
    display: flex;
    width: 100%;
    
};
.Details{
    width:500px;
    margin-top: 30px;
}

.small{
     margin-left: 7px;
     border: 1px solid #808080;
     margin-bottom: 10px;
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
    color:black
}
h3{
 text-align: center;
 text-transform:uppercase;
 color:black
}
.display{

   
    border: 1px solid #a9a9a9;
    width: 65%;
    height: 500px;
    margin-left: 30px;
     margin-top: 98px;
     border-radius: 7px;
     background-color: white;
     display: inline-block;
}
.big-image{
     margin-top:50px; 
     width:40%; 
     display:inline-block; 
     margin-left:15px;
     margin-right: 15px;

}
.refunds{
    width: 32%;
    display: block;
    margin-left: 20px;
    margin-right: 10px;
    margin-top: 100px;
   
}
.head{
    text-align: normal;
text-transform: capitalize;
 color:#7a7a7a;
 margin-left: 0px;

}
.fa-truck,
.fa-undo-alt,
.fa-paper-plane{
    font-size:30px;
  
    
}
.fa-shopping-cart{
 float: left;
}
.house{
    display: flex;
    width:100%;

}
.leftIcon{
    width:20%;
  
}
.right{
    width:78%
}
.underRefunds{
    margin-top:20px
}
.fa-star{
    color:#ffbf00;
    text-align: center;
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