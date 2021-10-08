<template>
  <div class="form">
    <p>Titre:</p>
      
        
      <input type="text"  autocomplete="off"  v-model="add.newTitle" @keyup="getResult" />      

    <v-col cols="2">
    <v-autocomplete
            v-model="add"
            :items="AutoCompletefilm"
            item-text="title"
            dense
            filled
            label="Recherche Film"
            
          ></v-autocomplete>
          </v-col>
        
     
    

    <p>Review:</p>
    <input type="text" v-model="add.newReview" />

   

    <p>Description:</p>
    <input type="text" v-model="add.newDescription" />

     <p>Image:</p>
    <input type="text" v-model="add.Newimg" />

     <br>
      <br>

    <p>
      <input
        type="checkbox"
        id="jack"
        value="horreur"
        v-model="add.newGenres"
      />
      <label for="jack">Horreur</label>
    </p>

    <p>
      <input
        type="checkbox"
        id="john"
        value="jouissif"
        v-model="add.newGenres"
      />
      <label for="john">Jouissif</label>
    </p>

    <p>
      <input
        type="checkbox"
        id="mike"
        value="comedie"
        v-model="add.newGenres"
      />
      <label for="mike">Comedie</label>
    </p>

   

    <p>
      <input
        type="checkbox"
        id="mike"
        value="policier"
        v-model="add.newGenres"
      />
      <label for="mike">Policier</label>
    </p>

    <v-rating
      name="vrating"
      :v-model="add.newRating"
      background-color="red lighten-3"
      color="red"
      length="10"
      size="20"
    ></v-rating>

    <button @click="emitTest" name="vote" value="Poster un Film">
      Ajouter
    </button>
  </div>
</template>







<script>
import EventBus from "../plugins/event-bus.js";
import axios from "axios"

export default {
  name: "MovieCreation",
  props: {
    moviecreation: Function,
  },

  data: function () {
    return {
      
     AutoCompletefilm: [],

      add: {
        title: "",
        newGenres: [],
        newRating: 0,
        newReview: "",
        newDescription: "",
      },
    };

    

  },

  



  methods: {
    emitTest() {
      EventBus.$emit("emit-test", this.add);
    },
    
 
  getResult(){
    this.loading = true;
      axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=80d0dd074cbffeb2db4b0123882c7f44&query=" + this.add.newTitle)
        .then((response) => {
          console.log(response.data.data)
          this.AutoCompletefilm = response.data.results;
          this.loading = false;
        })
        .catch(function (error) {
          this.error = error;
        })
        .then(function () {});

        this.loading = true;
      axios
        .get("https://api.themoviedb.org/3/movie/{movie_id}/lists?api_key=80d0dd074cbffeb2db4b0123882c7f44&language=en-US&page=1" + this.add.newTitle)
        .then((response) => {
          console.log(response.data.data)
          this.AutoCompletefilm = response.data.results;
          this.loading = false;
        })
        .catch(function (error) {
          this.error = error;
        })
        .then(function () {});
    

  }
   
  },

  destroyed(){
    console.log("Mon composant est detruit")
  }

   
  }
    
  

</script>






<style lang="scss">
body .form {
  background-color: rgb(0, 0, 0);
  text-align: center;

  color: rgb(119, 106, 106);
}

input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 3px solid rgb(14, 7, 7);
  border-radius: 4px;
  background-color: #e41313;
  height: 25px;
  width: 400px;
  align-items: center;
}

button {
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  color: #ff0000;
}

body .form {
  margin: 0 auto;
}
</style>




