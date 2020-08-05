<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content  yellow darken-1 white-text center-align">
            <span class="card-title">TV SHOWS</span>
          </div>
          <div class="card-content">   
            <table class="centered responsive-table highlight">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Network</th>
                  <th>Seasons</th>
                  <th>Genres</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="show in shows" :key="show.id">
                  <td>{{show.title}}</td>
                  <td>{{show.network}}</td>
                  <td>{{show.numberOfSeasons}}</td>
                  <td><span v-for="(genre, i) in show.genres" :key="i"> {{ genre }} </span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from '@/firebase';  

export default {
  name: 'Shows',
  data() {
        return {
            shows: []        // to start, the list is empty
        }
    },
    firestore() {           // adding this key/function
        return {
            shows: db.collection('shows')
        }
    }
}
</script>