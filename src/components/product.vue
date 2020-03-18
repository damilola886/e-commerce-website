<template>
    <div class="productList">
            <!-- <img :src="product.image" >
            <p>
                {{product.name}}

            </p>

            <span> &#8358; {{product.price}}</span>
            
              
               <b-button variant="outline-dark">Buy Now</b-button> -->
               
    <b-card
    img-alt="Image"
    img-top
    tag="article"
    style="max-width:22rem;border:1px solid #C0C0C0; box-shadow: 5px 5px #e8e8e9; "
    class="mb-2"
    
  >
   <b-img-lazy :src="product.image" width="200" height="200" style="border-radius: 10px"></b-img-lazy>
                <b-card-text style="padding-top:5px;font-size:19px; font-style:italic; color:#302f31; ">
                  {{product.name}}
                </b-card-text>

                    <p > &#8358; {{product.price}}</p>
               <b-button block variant="warning">Buy Now</b-button>
  </b-card>
 

    
            
    </div>

</template>


<script>
export default {
    name:"product",
     props:['product']
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