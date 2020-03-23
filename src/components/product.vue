<template>
    <div class="productList" @click="navigate(product.id)">
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
   <img :src="product.image" width="200" height="200" style="border-radius: 10px" >
   
                <b-card-text style="padding-top:5px;font-size:19px; font-style:italic; color:#302f31; ">
                  {{product.name}}
                </b-card-text>
    
                    <p> &#8358; {{product.price}}</p>
               <b-button block variant="warning">Buy Now</b-button>
  </b-card>
 


    
            
    </div>

</template>


<script>
export default {
    name:"product",
    props:['product'],
data(){
    return{

      products:[{
        id: 1,
        name: "Exercise bottle",
        price: " 5,000",
        image: require("../assets/bottle.jpg"),
        information:'With a sport top and carrying strap, this one is perfect for runners and bikers on the go.Unlike the classic Bobble, this guy has a cap thats attached to the bottle—that means its easy to carry and you wont lose the cap when it drops and rolls off the treadmill.',
        category_id: 1
      },
      {
         id: 2,
        name: "Exfoliating brush",
        price: "15,000",
        image:require("../assets/exfoliate.jpg"),
        information:'This super-light, water-resistant facial cleansing brush is one of the least expensive options on the list—but it still works amazingly well. It has a dual-speed rotating brush head that removes makeup and cleanses your skin .',
        category_id: 3
      },
       {
         id: 3,
        name: "Men's tracksuit",
        price: "23,000",
        image:require("../assets/fitnesswear.jpg"),
        information:'Our mens tracksuit is comfortable, easy to wear, designed for comfort, affordable.',
        category_id: 2
      },
      {
         id: 4,
        name: "Gym outfit for men",
        price: "35,000",
        information:'Our mens tracksuit is comfortable, easy to wear, designed for comfort, affordable.',
        image:require("../assets/men.jpg"),
        category_id: 2
      },
      {
         id: 5,
        name: "Nike Trainers",
        price: "40,000",
        image:require("../assets/nike.jpg"),
        information:'This customised trainers make you feel like usainbolt, they are absorb heat making it practicable for exercise.',
        category_id: 4
      },
      {
         id: 6,
        name: "Protein Powder",
        price: "12,000",
        image:require("../assets/protein.jpg"),
        information:'With is protein powder, you can make amazing thirsty shakes for a cheap price, they provide 9g of protein to your daily  nutrition intake .',
        category_id: 2
      },
      {
         id: 7,
        name: "Skipping Rope",
        price: "3,000",
        image:require("../assets/rope.jpg"),
        information:'Looking to loose weight or become more physically active, buy this skipping rope, it counts your steps and calories lost .',
        category_id: 3
      },
      {
         id: 8,
        name: "Portable Smoothie Maker",
        price: "22,000",
        image:require("../assets/smoothie.jpg"),
        information:'It is now possible to make smoothies wherever you go, with this mobile smoothie maker. it can be charged with yor laptop or phones for easy accessibility .',
        category_id: 2
      },
      {
         id: 9,
        name: "Thayers Layer Toner",
        price: "7,000",
        image:require("../assets/toner.jpg"),
        information:'This toner will give you a glowing skin in less than 7 days, Zendaya swears by it. its properties contains natural plants products that help detox and cleanse your skins .',
        category_id: 2
      },
       {
         id: 10,
        name: "Energy boosting Vitamin",
        price: "5,000",
        image:require("../assets/vitamins.jpg"),
        information:'This vitamins help replenish nutrients you might have lost in the gym or from having a stressful day, it keeps you healthy and active.',
        category_id: 4
      },
       {
         id: 11,
        name: "Women's Gym wear",
        price: "17,000",
        image:require("../assets/wearwoman.jpg"),
        information:'This outfit comes in  all sizes to fit the shape of any woman that orders it. it absorbs sweat and has pockects to help reeduce the load in your bags. it comes in various colors .',
        category_id: 4
      },
       {
         id: 12,
        name: "1.5 pounds weights",
        price: "7,000",
        image:require("../assets/weight.jpg"),
        information:'These weights are light and can be taken around to help build muscles and burn fat quick, they are inexpensive and worth it .',
        category_id: 2
      },
       {
         id: 13,
        name: "Yoga Mats",
        price: "1,000",
        image:require("../assets/yogamats.jpg"),
        information:'To help medidate, buy this yoga mats. They can be used for various yoga poses and are made of soft fabric so they do not bruise the skin when laid on .',
        category_id: 2
      },
        {
         id: 14,
        name: "Body Scrub",
        price: "9,250",
        image:require("../assets/scrub.jpg"),
        information:'Let your skin glow with this scrub, they are on sale at the moment. ythey contain salt, sugar and oil to help scrub the skin and leave it shining .',
        category_id: 3
      },
      {
         id: 15,
        name: "Body mist",
        price: "2,125",
        image:require("../assets/mist.jpg"),
        information:'Your skin will smeall divine when you buy this body mist, they come in various scents and also have his and hers offers. you could buy this as a present to give to someone special to you .',
        category_id: 2
      },
       {
         id: 16,
        name: "Body Scrub",
        price: "9,250",
        image:require("../assets/scrub.jpg"),
        information:'Let your skin glow with this scrub, they are on sale at the moment. ythey contain salt, sugar and oil to help scrub the skin and leave it shining .',
        category_id: 3
      },
      	
      
      ],
}
},


     methods:   {
         
            navigate(id) {
                let Data = this.products.filter((item) => {
                return item.id === id
            });
            console.log(Data[0])
            let descriptionitem = {
                name: 'Description',
                params: {
                    product: Data[0]
                }
            };
                this.$router.push(descriptionitem );
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