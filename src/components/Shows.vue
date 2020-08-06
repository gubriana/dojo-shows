<template>
<div>
  <div class="row">
    <div class="col s12 m6">
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
                <th>Is current</th>
                <th>Accions</th>
                <!-- <th>Seasons</th>
                <th>Genres</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="show in shows" :key="show.id">
                <td>{{show.title}}</td>
                <td>{{show.network}}</td>
                <td>{{show.isCurrent}}</td>
                <td></td>
                <!-- <td>{{show.numberOfSeasons}}</td>
                <td><span v-for="(genre, i) in show.genres" :key="i"> {{ genre }} </span></td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card">
          <div class="card-content  yellow darken-1 white-text center-align">
            <span class="card-title">NEW SHOW</span>
          </div>
          <div class="card-content">
              <form @submit="addShow">
                  <div class="row">
                      <div class="input-field col s12">
                          <input id="Title" type="text" class="validate" v-model="title" required>
                          <label for="Title">Title</label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="input-field col s12">
                          <input id="Network" type="text" class="validate" v-model="network" required>
                          <label for="Network">Network</label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="input-field col s12">
                          <input id="genres" type="text" class="validate" v-model="genres" required>
                          <label for="genres">Genres</label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="input-field col s12">
                          <input id="seasons" type="number" class="validate" v-model="numberOfSeasons" required>
                          <label for="seasons">Number of seasons</label>
                      </div>
                  </div>
                  <div class="col s6 m6 center-align">
                      <p class="grey-text">Is current</p>
                      <br>
                      <p>
                      <label>
                          <input name="group1" type="radio" value="yes" v-model="isCurrent" />
                          <span>Yes</span>
                      </label> / 
                      <label>
                          <input name="group1" type="radio" value="no" v-model="isCurrent" checked/>
                          <span>No</span>
                      </label>
                      </p>
                  </div>
                  <div class="row center-align">
                      <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                  </div>
              </form>
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
        shows: [],
        title: '',
        network: '',
        numberOfSeasons: '',
        genres:[],
        isCurrent: true
    } 
  },
  methods: {
    addShow: function(ev){
      ev.preventDefault();
      console.log(this.title, this.network, this.genres, this.numberOfSeasons, this.isCurrent)
      db.collection("shows").add({
          title: this.title,
          network: this.network,
          numberOfSeasons: parseInt(this.numberOfSeasons),
          genres: this.genres.split(","),
          isCurrent: this.isCurrent == 'true' ? true : false,
      });
      alert('Has agregado un nuevo show a Dojo-Show')

      // Ahora vaciamos el formulario
      this.title = '';
      this.network = '';
      this.numberOfSeasons = '';
      this.genres = [];
      this.isCurrent = true;
    },
  },
  firestore() {           // adding this key/function
    return {
      shows: db.collection('shows')
    }
  }
}
</script>