<template>
  <div class="hello">
    <h1></h1>
    <select v-model="dataFiler">
        <option disabled value>Choisissez</option>
        <option>comedy</option>
        <option>thriller</option>
        <option>drama</option>
      </select>
      <span>Sélectionné : {{ dataFiler }}</span>
     <li v-for="value in filteredItems" :key="value.id">
    <movie :movie="value" />
     </li>
     <h2>Nombre de film : {{ filteredItems.length }}</h2>
  </div>
</template>

<script>
import Movie from "../components/Movie.vue";
export default {
  name: 'HelloWorld',
  props: {
    movies:[],
  },
   components: {
    Movie,
    
  },
  data: function(){
    return{
        dataFiler: "",
    }
  },
  computed: {
    filteredItems: function () {
      if (this.dataFiler === "") {
        return this.movies;
      } else {
        return this.movies.filter((movie) =>
          movie.genres.includes(this.dataFiler)
        );
      }
    },
   
    
  },
  watch: {
      dataFiler: function () {
        console.log("La liste est chargé")
        alert("La liste est chargé")
      }
     },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
