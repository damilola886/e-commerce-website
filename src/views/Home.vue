<template>
  <div id="home">
     <navbar/>
     
      
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
            </b-container >
            <p class="prod"  >Our Products</p>
        
            <!-- <product v-for="item in allProducts" :product="item" :key="item.id" /> -->
            <product/>
            <Footer/>

    
     
     
    <!-- <profile v-for="person in fellows" :user="person" :key="person.id"/>  --> 
   
  </div>
</template>

<script>
  import product from '../components/Product.vue'
  import navbar from '../components/navbar.vue'
  import category from '../components/category.vue'
  import carousel from '../components/Carousel.vue'
  import advert from '../components/advert.vue'
  import Footer from '../components/Footer.vue'


export default {
  name: 'home',
  data(){
    return{
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
   advert,
   Footer

  }
}
</script>

<style>
#home {
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
