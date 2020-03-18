<template>
<div>
    <b-list-group  v-for="quote in inspire" :key="quote.id">
            <b-list-group-item href="#" variant="light" style=" font-size:16px; font-style:italic" >
                            {{quote.text}}
                </b-list-group-item> 
</b-list-group>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            inspire:[{
                  id: 1,
                  text: "Invest in your skin. It is going to represent you for a very long time." 
            },
            {
                  id: 2,
                  text: "Glowing skin is a result of proper skin care. It means you can wear less make up and let skin shine through." 
            },
             {
                  id: 3,
                  text: "Be fit and live longer ;)" 
            },
             {
                  id: 4,
                  text: "You can do it :)" 
            },


            ]
        }
    }
    
}
</script>