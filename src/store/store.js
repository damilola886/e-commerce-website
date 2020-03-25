import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        products:[{
        id: 1,
        name: "Exercise bottle",
        price: " 5,000",
        image: require("../assets/bottle.jpg"),
        information:'With a sport top and carrying strap, this one is perfect for runners and bikers on the go.Unlike the classic Bobble, this guy has a cap thats attached to the bottle—that means its easy to carry and you wont lose the cap when it drops and rolls off the treadmill.',
        category_id: 1,
        slashedprice: "10,000",
        images:[
          require('../assets/bottle.jpeg'),
          require('../assets/bottle.jpg'),
           require('../assets/bottle2.jpeg')
        
        ]
      },
      {
         id: 2,
        name: "Exfoliating brush",
        price: "15,000",
        image:require("../assets/exfoliate.jpg"),
        information:'This super-light, water-resistant facial cleansing brush is one of the least expensive options on the list—but it still works amazingly well. It has a dual-speed rotating brush head that removes makeup and cleanses your skin .',
        category_id: 3,
        slashedprice: "9,000",
        images:[
          require('../assets/exfoliate1.jpg'),
          require('../assets/exfoliate.jpg'),
           require('../assets/exfoliate2.jpg')
        
        ]
      },
       {
         id: 3,
        name: "Men's tracksuit",
        price: "23,000",
        image:require("../assets/fitnesswear.jpg"),
        information:'Our mens tracksuit is comfortable, easy to wear, designed for comfort, affordable.',
        category_id: 2,
        slashedprice: "20,000",
        images:[
          require('../assets/men.jpg'),
          require('../assets/fitnesswear.jpg'),
           require('../assets/men2.jpg')
        
        ]
      },
      {
         id: 4,
        name: "Gym outfit for men",
        price: "35,000",
        information:'Our mens tracksuit is comfortable, easy to wear, designed for comfort, affordable.',
        image:require("../assets/men.jpg"),
        category_id: 2,
        slashedprice: "10,000",
        images:[
          require('../assets/fitnesswear.jpg'),
          require('../assets/men.jpg'),
           require('../assets/men2.jpg')
        
        ]
      },
      {
         id: 5,
        name: "Nike Trainers",
        price: "40,000",
        image:require("../assets/nike.jpg"),
        information:'This customised trainers make you feel like usainbolt, they are absorb heat making it practicable for exercise.',
        category_id: 4,
        slashedprice: "30,000",
        images:[
          require('../assets/trainers1.jpg'),
          require('../assets/nike.jpg'),
           require('../assets/trainers2.jpg')
        
        ]
      },
      {
         id: 6,
        name: "Protein Powder",
        price: "12,000",
        image:require("../assets/protein.jpg"),
        information:'With is protein powder, you can make amazing thirsty shakes for a cheap price, they provide 9g of protein to your daily  nutrition intake .',
        category_id: 2,
        slashedprice: "8,000",
        images:[
          require('../assets/protein1.jpg'),
          require('../assets/protein.jpg'),
           require('../assets/protein2.jpg')
        
        ]
      },
      {
         id: 7,
        name: "Skipping Rope",
        price: "3,000",
        image:require("../assets/rope.jpg"),
        information:'Looking to loose weight or become more physically active, buy this skipping rope, it counts your steps and calories lost .',
        category_id: 3,
        slashedprice: "4,000",
        images:[
          require('../assets/rope1.jpg'),
          require('../assets/rope.jpg'),
           require('../assets/rope2jpg.jpg')
        
        ]
      },
      {
         id: 8,
        name: "Portable Smoothie Maker",
        price: "22,000",
        image:require("../assets/smoothie.jpg"),
        information:'It is now possible to make smoothies wherever you go, with this mobile smoothie maker. it can be charged with yor laptop or phones for easy accessibility.This rechargeable electric juicer cup is convenient for making smoothie and extracting different fruit juice and vegetables. This rechargeable  DIY portable mini blender can not only make your life easier and also healthier . You can enjoy your fruit juice and smoothie anytime and anywhere. .',
        category_id: 2,
        slashedprice: "50,000",
        images:[
          require('../assets/smoothie1.jpg'),
          require('../assets/smoothie.jpg'),
           require('../assets/smoothie2.jpg')
        
        ]
      },
      {
         id: 9,
        name: "Thayers Layer Toner",
        price: "7,000",
        image:require("../assets/toner.jpg"),
        information:'This toner will give you a glowing skin in less than 7 days, Zendaya swears by it. its properties contains natural plants products that help detox and cleanse your skins. Ideal for those that have sensitive skin but experience breakouts along with it, this toner contains neem extract to control unwanted grease and remove impurities.',
        category_id: 2,
        slashedprice: "15,000",
        images:[
          require('../assets/toner1.jpg'),
          require('../assets/toner.jpg'),
           require('../assets/toner2.jpg')
        
        ]
      },
       {
         id: 10,
        name: "Energy boosting Vitamin",
        price: "5,000",
        image:require("../assets/vitamins.jpg"),
        information:'This vitamins help replenish nutrients you might have lost in the gym or from having a stressful day, it keeps you healthy and active. Vitamins and minerals are considered essential nutrients—because acting in concert, they perform hundreds of roles in the body. They help shore up bones, heal wounds, and bolster your immune system. ',
        category_id: 4,
        slashedprice: "13,000",
        images:[
          require('../assets/vitamins1.jpg'),
          require('../assets/vitamins.jpg'),
           require('../assets/vitamins2.jpg')
        
        ]
      },
       {
         id: 11,
        name: "Women's Gym wear",
        price: "17,000",
        image:require("../assets/wearwoman.jpg"),
        information:'This outfit comes in  all sizes to fit the shape of any woman that orders it. it absorbs sweat and has pockects to help reeduce the load in your bags. it comes in various colors .',
        category_id: 4,
        slashedprice: "20,000",
        images:[
          require('../assets/woman1.jpg'),
          require('../assets/wearwoman.jpg'),
           require('../assets/woman2.jpg')
        
        ]
      },
       {
         id: 12,
        name: "1.5 pounds weights",
        price: "7,000",
        image:require("../assets/weight.jpg"),
        information:'These weights are light and can be taken around to help build muscles and burn fat quick, they are inexpensive and worth it. These dumbells are effective for your weight loss journey, they are portable and come in various colours. ',
        category_id: 2,
        slashedprice: "40,800",
        images:[
          require('../assets/weights.jpg'),
          require('../assets/weight.jpg'),
           require('../assets/weights1.jpg')
        
        ]
      },
       {
         id: 13,
        name: "Yoga Mats",
        price: "1,000",
        image:require("../assets/yogamats.jpg"),
        information:'To help medidate, buy this yoga mats. They can be used for various yoga poses and are made of soft fabric so they do not bruise the skin when laid on. Non-slip gripping surface This is a very light weight mat. Because it is made from Rubber foam. It holds up even when exposed to moisture, chemicals, or oil-based products. ',
        category_id: 2,
        slashedprice: "20,000",
         images:[
          require('../assets/yoga.jpg'),
          require('../assets/yogamats.jpg'),
           require('../assets/yoga2.jpg')
        
        ]
      },
        {
         id: 14,
        name: "Body Scrub",
        price: "9,250",
        image:require("../assets/scrub.jpg"),
        information:'Let your skin glow with this scrub, they are on sale at the moment. ythey contain salt, sugar and oil to help scrub the skin and leave it shining.It exfoliates and hydrates your skin, leaving it smooth and soft. ',
        category_id: 3,
        slashedprice: "50,000",
        images:[
          require('../assets/scrub1.jpg'),
          require('../assets/scrub.jpg'),
           require('../assets/scrub2.jpg')
        
        ]
      },
      {
         id: 15,
        name: "Body mist",
        price: "2,125",
        image:require("../assets/mist.jpg"),
        information:'Your skin will smell divine when you buy this body mist, they come in various scents and also have his and hers offers. you could buy this as a present to give to someone special to you. Body mists help hydrate the skin, so, like perfume, they should be applied directly to the skin. ',
        category_id: 2,
        slashedprice: "10,000",
        images:[
          require('../assets/mist1.jpg'),
          require('../assets/mist.jpg'),
           require('../assets/mist2.jpg')
        
        ]
      },
       {
         id: 16,
        name: "Body Scrub",
        price: "9,250",
        image:require("../assets/scrub.jpg"),
        information:'Let your skin glow with this scrub, they are on sale at the moment. ythey contain salt, sugar and oil to help scrub the skin and leave it shining .It exfoliates and hydrates your skin, leaving it smooth and soft. ',
        category_id: 3,
        slashedprice: "20,000",
        images:[
          require('../assets/scrub1.jpg'),
          require('../assets/scrub.jpg'),
           require('../assets/scrub2.jpg')
        
        ]
      },
      	
      
      ],
      showProduct: null,
    },
    mutations: {
        setSelectProductValue(state, product){
            state.showProduct = product;
        }
    }


})
