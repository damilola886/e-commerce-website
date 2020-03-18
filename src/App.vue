<template>
  <div id="app">
     <navbar/>
     
      <div class="flex">
            <b-container class="bv-example-row" fluid>
                <b-row>
                <b-col cols>
                  <div class="sticky">
                    <p class="cat">Categories</p>
                  <category v-for="element in sections" :category="element" :key="element.id"/>

                  </div>
                  
                  </b-col>
                <b-col cols="5">
                  <carousel/>
                  </b-col>
                  
                  <b-col cols="3">
                    <div class="space">
                      <p class="prod">Achieve your skin & health goals</p>
                         <advert/>
                    </div>
                    
                  </b-col>
                </b-row>
            </b-container>
            <p class="prod">Our Products</p>
            <product v-for="item in products" :product="item" :key="item.id" />
    
      </div>
     
    <!-- <profile v-for="person in fellows" :user="person" :key="person.id"/>  --> 
   
  </div>
</template>

<script>
  import product from './components/product.vue'
  import navbar from './components/navbar.vue'
  import category from './components/category.vue'
  import carousel from './components/Carousel.vue'
  import advert from './components/advert.vue'

export default {
  name: 'App',
  data(){
    return{

      products:[{
        id: 1,
        name: "Exercise bottle",
        price: " 5,000",
        image: require("./assets/bottle.jpg"),
        category_id: 1
      },
      {
         id: 2,
        name: "Exfoliating brush",
        price: "15,000",
        image:require("./assets/exfoliate.jpg"),
        category_id: 3
      },
       {
         id: 3,
        name: "Men's tracksuit",
        price: "23,000",
        image:require("./assets/fitnesswear.jpg"),
        category_id: 2
      },
      {
         id: 4,
        name: "Gym outfit for men",
        price: "35,000",
        image:require("./assets/men.jpg"),
        category_id: 2
      },
      {
         id: 5,
        name: "Nike Trainers",
        price: "40,000",
        image:require("./assets/nike.jpg"),
        category_id: 4
      },
      {
         id: 6,
        name: "Protein Powder",
        price: "12,000",
        image:require("./assets/protein.jpg"),
        category_id: 2
      },
      {
         id: 7,
        name: "Skipping Rope",
        price: "3,000",
        image:require("./assets/rope.jpg"),
        category_id: 3
      },
      {
         id: 8,
        name: "Portable Smoothie Maker",
        price: "22,000",
        image:require("./assets/smoothie.jpg"),
        category_id: 2
      },
      {
         id: 9,
        name: "Thayers Layer Toner",
        price: "7,000",
        image:require("./assets/toner.jpg"),
        category_id: 2
      },
       {
         id: 10,
        name: "Energy boosting Vitamin",
        price: "5,000",
        image:require("./assets/vitamins.jpg"),
        category_id: 4
      },
       {
         id: 11,
        name: "Women's Gym wear",
        price: "17,000",
        image:require("./assets/wearwoman.jpg"),
        category_id: 4
      },
       {
         id: 12,
        name: "1.5 pounds weights",
        price: "7,000",
        image:require("./assets/weight.jpg"),
        category_id: 2
      },
       {
         id: 13,
        name: "Yoga Mats",
        price: "1,000",
        image:require("./assets/yogamats.jpg"),
        category_id: 2
      },
        {
         id: 14,
        name: "Body Scrub",
        price: "9,250",
        image:require("./assets/scrub.jpg"),
        category_id: 3
      },
      {
         id: 15,
        name: "Body mist",
        price: "2,125",
        image:require("./assets/mist.jpg"),
        category_id: 2
      }
      	
      
      ],
       
       sections:[{
            id: 1,
           name:"Facial care"
  
       },
       {
            id: 2 ,
           name:"Skin Care"
  
       },
       {
          id: 3,
          name:"Gym equipment"
  
       },
       {
         id: 4,
         name:"Supplements"
       },
       {
          id: 5,
         name:"Fitness Gadgets"
       },
       {
         id: 6,
         name:"Gym Wear"
       }

       ]
      
    }
      
  },

  components: {
   product,
   navbar,
   category,
   carousel,
   advert

  }
}
</script>

<style>
#app {
  margin-top: 100px;
}
.prod{
  text-transform: uppercase;
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
  font-style: italic;
}
.cat{
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
    font-weight: bolder;
    font-style: italic;
}
.sticky{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.space{
  padding-left:0;
  margin-left: 0;
}

</style>
