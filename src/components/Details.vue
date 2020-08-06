<template>
    <div>
        <h1>{{title}}</h1>
        <p>Network: {{network}}</p>
        <p>Is current: {{isCurrent}}</p>
        <p>Seasons: {{numberOfSeasons}}</p>
        <p>Genres: {{genres}}</p>    
    </div>

  <!-- <div class="card">
    <div class="card-content  yellow darken-1 white-text center-align">
        <span>Titulo</span>
        <span class="card-title" v-for="show in shows" :key="show.id">{{show.title}}</span>
    </div>
    <div class="card-content">   
      <table class="centered responsive-table highlight">
        <thead>
          <tr>
            <th>Network</th>
            <th>Is current</th>
            <th>Seasons</th>
            <th>Genres</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="show in shows" :key="show.id">
            <td>{{show.network}}</td>
            <td>{{show.isCurrent}}</td>
             <td>{{show.numberOfSeasons}}</td>
             <td><span v-for="(genre, i) in show.genres" :key="i"> {{ genre }} </span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> -->
</template>
<script>
import { db } from '@/firebase'; 

export default {
    name: 'Details',
    data() {
        return {
            title: '',
            network: '',
            isCurrent: false,
            numberOfSeasons: 0,
            genres: []
        }
    },
    mounted() {
      db.collection("shows").doc(this.$route.params.id).get()
      .then(datos => {
        // acá capturamos los datos de mi mascota, entonces los podemos asociar al objeto data
        const show = datos.data();
        console.log(show)
        this.title = show.title;
        this.network = show.network;
        this.isCurrent = show.isCurrent;
        this.numberOfSeasons = show.numberOfSeasons;
        this.genres = show.genres;
      });
    }
}
/* 
import { db } from '@/firebase';  

export default {
  name: 'Details',
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
} */
</script>