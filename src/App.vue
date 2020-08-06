<template>
  <div class="container">
    <div class="row">
      <div class="col s12 12">
        <Shows />
      </div>
      <div class="col s12 m12">
        <NewShows />
      </div>
    </div>
  </div>
        
</template>

<script>
import Shows from './components/Shows.vue'
import NewShows from './components/NewShows.vue'

export default {
  name: 'App',
  components: {
    Shows,
    NewShows
  }
}
</script>

<style>
</style>
