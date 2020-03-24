<template>
<!-- check the main.js for complete steps on how you used font awesome here  -->
<div class="footer" style="margin-top:0">
    <mdb-footer color="stylish-color-dark" class="font-small pt-4 mt-4">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="text-center text-md-left mt-3 pb-3">
        <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-3 font-weight-bold " style="color: #ffbf00" >Skin, Health and Body Shop</h6>
           <hr />
          <p class="left">  Because we value our customers "you" so much, we have decided to provide free shipping to all our orders above &#8358; 400,000, so keep shopping. We've got you and don't forget to love your skin and body the way we love you @Skin, Health and Body Shop. </p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="2" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold" style="color: #ffbf00">Products</h6>
           <hr />
          <p><a href="#!">Toners</a></p>
          <p><a href="#!">Gym Wears</a></p>
          <p><a href="#!">Body Mists</a></p>
          <p><a href="#!">Protein Shakes</a></p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="3" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold" style="color: #ffbf00">Useful Tips</h6>
           <hr />
          <p class="secondcolumn"><a href="#!">Wash your hands regulary</a></p>
          <p class="secondcolumn"><a href="#!">Try to stop touching your face</a></p>
          <p class="secondcolumn"><a href="#!">Be more active</a></p>
          <p class="secondcolumn"><a href="#!">Help</a></p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold" style="color: #ffbf00">Contact</h6>
           <hr />
          <p><i class="fas fa-home mr-3"></i> TIIDELab, Penthouse Estate, Abuja. Nigeria </p>
          <p><i class="fas fa-envelope mr-3"></i> dami@gmail.com</p>
          <p><i class="fas fa-phone mr-3"></i> + 234 2419 567 880</p>
          <p><i class="fas fa-print mr-3"></i> + 234 200 500 000</p>
        </mdb-col>
      </mdb-row>
      <hr />
      <mdb-row class="d-flex align-items-center">
        <mdb-col md="8" lg="8">
          <p class="text-center text-md-left grey-text" id="copyright">&copy; 2020 Copyright: <a href="https://www.MDBootstrap.com" style="color: #ffbf00">
              Created by Damilola Kehinde Oladimeji </a></p>
        </mdb-col>
        <mdb-col md="4" lg="4" class="ml-lg-0">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-twitter"></i> </a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-google"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-instagram"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-youtube-square"></i></a></li>
            </ul>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>
</div>
    
</template>
<script>
 import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
export default {
    name: 'Footer',
    components:{
        mdbFooter,
        mdbContainer,
        mdbRow,
        mdbCol,
    }
   
  
}
</script>
<style scoped>

.left{
    font-style: italic;
}
a{
    color:white;
    text-decoration: none;
}
.footer{
    background-color:#2e2e2e;
    color: white;
}
.fa-facebook, 
.fa-twitter, 
.fa-google, 
.fa-linkedin,
.fa-instagram,
.fa-youtube-square{
        font-size: 25px;
        cursor: pointer;
}
#copyright{
    color: rgb(150, 148, 148);
    font-style: italic;
}
</style>