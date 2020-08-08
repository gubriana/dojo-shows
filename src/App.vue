<template>
  <div id="bg-gray">
    <div class="container">
      <router-view />
  <!--     <Shows /> 
      <Details /> -->
    </div>
  </div>
</template>

<script>
/* import Shows from '@/components/Shows.vue'
import Details from '@/components/Details.vue' */

export default {
  name: 'App',
/*   components: {
    Shows,
    Details
  } */
}
</script>

<style>
  #bg-gray{
    background-color:#424242;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
  }

  [type="radio"]:checked + span:after,
  [type="radio"].with-gap:checked + span:before,
  [type="radio"].with-gap:checked + span:after {
    border: 2px solid #ef5350;
  }

  [type="radio"]:checked + span:after,
  [type="radio"].with-gap:checked + span:after {
    background-color: #ef5350;
  }
  .card {
    margin: 3rem 0 3rem 0;
  }
</style>
    
