<template>
<div>
<div class="categorystyle" >
     <!-- <p>{{category.name}}</p> -->
    

<b-list-group  >
            <b-list-group-item href="#" variant="light" style=" font-size:15px;" >
                {{category.name}}
                </b-list-group-item> 
</b-list-group>

 

 </div>
 </div>
</template>

<script>
export default {
    name:"category",
    props:['category']
}
</script>

<style scoped>
.categorystyle{

 margin-top: 3px;
 text-align: center;
 text-transform: capitalize;
 font-weight: bold;
 

 
}

</style>