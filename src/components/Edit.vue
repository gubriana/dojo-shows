<template>
    <div class="col s12 m6">
        <div class="card">
            <div class="card-content red darken-1 white-text center-align">
                <span class="card-title">EDIT SHOW</span>
            </div>
            <div class="card-content">
                <form @submit.prevent="editShow">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="Title" type="text" class="validate" v-model="title" required>
                            <label for="Title" class="active">Title</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="Network" type="text" class="validate" v-model="network" required>
                            <label for="Network" class="active">Network</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="genres" type="text" class="validate" v-model="genres" required>
                            <label for="genres" class="active">Genres</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="seasons" type="number" class="validate" v-model="numberOfSeasons" required>
                            <label for="seasons" class="active">Number of seasons</label>
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
                        <div class="row center-align">
                            <button class="btn red waves-effect waves-light" type="submit" name="action">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {db} from '@/firebase';

export default {
    name: 'Edit',
    data() {
        // datos para editar
        return {
            title: '',
            network: '',
            numberOfSeasons: 1,
            genres:'',
            isCurrent: '',
        }
    },
    // se hereda del padre
    props: {
        id: String
    },
    //Trae cada 
    mounted(){
        db.collection("shows").doc(this.$route.params.id).get()
        .then(datos => {
            const editedShow = datos.data();
            this.title = editedShow.title;
            this.network = editedShow.network;
            this.numberOfSeasons = editedShow.numberOfSeasons;
            this.isCurrent = editedShow.isCurrent ? 'yes' : 'no';
            this.genres = editedShow.genres;
        });
    },
    methods: {
        editShow: function(){
            //actualiza cada elemento
            db.collection("shows").doc(this.$route.params.id).update({
                title: this.title,
                network: this.network,
                numberOfSeasons: this.numberOfSeasons,
                genres: this.genres,
                isCurrent: this.isCurrent,
            })
            //para que vuelva a inicio despues de submit
            .then(() => {
                this.$router.push('/');
            })
        }
    }
}
</script>
<style>

</style>