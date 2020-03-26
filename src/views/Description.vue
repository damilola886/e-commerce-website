<template>
<div class="roots">
    <navbar/>
    <div class="description">
        <div class="display">
       
                  <div class="big" >
                    <div class="big-image" >
                    <img :src="product.image" alt="" width=200 height=180>
                    <div class="smallerimages" style="margin-top:20px; margin-bottom:20px">
                      
                        <img :src="product.images[0]" alt="" width=60 height=60 @click="changeimage1" class="small">
                        <img :src="product.images[1]" alt="" width=60 height=60 @click="changeimage2" class="small">
                        <img :src="product.images[2]" alt="" width=60 height=60 @click="changeimage3" class="small">
              
                    
                </div>
                <hr>
                <div class="share">
                    <p style="font-weight:bold;">SHARE THIS PRODUCT</p>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                </div>
                
                  </div>
                <div class="full" style="width:500px; margin-right:10px;">
                <h3>{{product.name}}</h3>
                <div style="margin-left:150px">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <a href="">(100 ratings)</a>
                </div>
                
                     <hr style="color:white"> 
                       <h4>Product Description</h4>
                       <div style="margin-bottom:7px">
                           <p class="paragraph">{{product.information}}</p> 
                           </div>
                               <!-- <star-rating v-model="rating"></star-rating> -->
                               <hr>
                            
                           <p class="price">&#8358;{{ product.price }}</p>
                        <del>&#8358;{{ product.slashedprice }}</del>
                        <div class="button" style="margin-bottom:10px">
                        <b-button block variant="warning" style="margin-top:20px; font-size:18px; font-weight:bold; color:white;height:50px"><i class="fas fa-shopping-cart"></i>Add to Cart </b-button>
                        </div>
                         <hr>
                         <div>
                              <p style="font-weight:bold;">PROMOTION</p>
                              <div>
                              <i class="fas fa-star" style="color:black; font-size:20px;"></i>
                              <span style="margin-left:10px; font-size:18px">Enjoy your shopping experience with us.</span><br>
                              </div>
                              <div>
                               <i class="fas fa-thumbs-up" style="color:black; font-size:20px;"></i>
                              <span style="margin-left:10px; font-size:18px">We will be having 50% discount sales for our customers.</span>
                              </div>
                         </div>
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
                                        <h5 style="margin-top: 3px;">Information on how to become Seller here</h5>
                                      
                                        </div>

                                        <p >
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
*{
    margin: auto 0;
}
.roots{
  background-color:#f7f7f7;
   width:1500px
}

.description{
  
    display: flex;
    width:1500px
    
    
};


.small{
     
     border: 1px solid #808080;
     margin-bottom: 10px;
}
.small:hover{
    border: 3px solid orange;
    cursor: pointer;

   
}
.price{
 text-align: center;
 font-size: 19px;
 font-weight: bold;
}
.paragraph{
    margin-top: 20px;
 font-size: 17px;
 
}
p{
    font-size:16px
}
h4{
     font-size:20px;
    color:black
}
h3{
    font-size:19px;
 text-align: center;
 text-transform:uppercase;
 color:black
}
.display{

   
    border: 1px solid #a9a9a9;
    width: 900px;
    height: 500px;
    margin-left: 30px;
     margin-top: 98px;
     border-radius: 7px;
     background-color: white;
     display: inline-block;
}
.big-image{
     margin-top:50px; 
     width:300px; 
     margin-left:15px;
     margin-right: 15px;

}
.refunds{
    width: 450px;
  
    margin-left: 20px;
    margin-right: 10px;
    margin-top: 100px;
   
}
.head{
    text-align: normal;
text-transform: capitalize;
 color:#7a7a7a;
 margin-left: 0px;
 font-size:20px;

 

}
.fa-truck,
.fa-undo-alt,
.fa-paper-plane{
    font-size:20px;
  
    
}
.fa-facebook,
.fa-twitter,
.fa-instagram{
    font-size:20px;
   
    margin-left: 10px;
   

}
.fa-shopping-cart{
 float: left;
}
.house{
    display: flex;
    width:500px;

}
.leftIcon{
    width:90px;
  
}
.right{
    width:320px
}
.underRefunds{
    margin-top:20px
}
.fa-star{
    color:#ffbf00;
    text-align: center;
 } 
 .big{
      display: flex;
    flex-direction: column;
 }
 del{
     margin-left:170px;
     color:grey; 
     font-size:17px
 }
 .share{
     margin-top:10px
 }
 @media only screen and (min-width: 600px) {
    .big {
        display: flex;
        flex-direction: row;
    } 
}



</style>