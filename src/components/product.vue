<template>
    <div class="productLists" >
     <div class="productList" v-for="product in allProducts"  :key="product.id" @click="displayProduct(product)">
               
    <b-card
    img-alt="Image"
    img-top
    tag="article"
    style="max-width:22rem;border:1px solid #C0C0C0; box-shadow: 5px 5px #e8e8e9; "
    class="mb-2"
    
  >
   <img :src="product.image" width="200" height="200" style="border-radius: 10px" >
   
                <b-card-text style="padding-top:5px;font-size:19px; font-style:italic; color:#302f31; ">
                  {{product.name}}
                </b-card-text>
    
                    <p> &#8358; {{product.price}}</p>
               <b-button block variant="warning">Buy Now</b-button>
  </b-card>
 


    </div>
            
    </div>

</template>


<script>
export default {
    name:"product",
    props:['product'],
data(){
    return{

      
}
},
  computed: {
        allProducts(){
            return this.$store.state.products;
        },
    },
    methods:{
        displayProduct(product){
            this.$store.commit("setSelectProductValue", product)

            this.$router.push({path:"/description"})
        }
    },


    



}
</script>


<style scoped>
.productList{
    display: inline-block;
    margin-left: 10px ;
    margin-right: 10px;
    width: 300px
}
p{
    color:#000000;
    font-size: 17 px;
   text-align: center;
   font-weight: bold;

}
.productList:hover{
    border: 1px solid #bcbbbe;
    background-color: #bcbbbe;
    cursor: pointer;
}



</style>