<template>


 <div class="hello">
  <div class="box">
   <img :src="movie.img" alt="affiche" width="250em" class="imgaffiche"   />
  
  
   </div>

   <div class="box">
     <p> {{movie.title}} <br> <br> {{movie.genres}} <br>  <br> {{movie.review}} <br> <br> {{movie.description}} <br>   </p>
     
     
     <router-link :to="{name: 'Movie', params: {id:movie.id, movie: movie} }">
     
     <v-btn type="button" color="danger">Afficher Détails</v-btn>

     </router-link>
     
     
   
   </div>

  <v-rating :v-model="movie.rating" name="vrating" :value="movie.rating" background-color="red lighten-3" color="red" length="10" readonly size="20"></v-rating>

  
   

         </div>
</template>
 
<script>



export default {

  
       
  
      
 name: 'Movie',
 props: {
    //  id: {
    //      type: Number,
    //      default: 0
    //  },
    //  title: {
    //      type: String,
    //  },
    //  genres: {
    //      type: [],
    //      default: () => []
    //  },
    //  rating: {
    //      type: Number,
    //      default: 0
    //  },
    //  review: {
    //      type: String,
    //      default: ""
    //  },
    //  description: {
    //      type: String,
    //      default: ""
    //  }
    movie: Object
 }
 
}

</script>

<style lang="scss">

$font-stack:   'Raleway', 'Helvetica Neue', Verdana, Arial, sans-serif;
$primary-color: rgb(29, 236, 39);
@debug darken(#2bf710, 20%); // #7c4465

body {
  font: 100% $font-stack;
  color: $primary-color;
  background-color: rgb(0, 0, 0);
  
  
}



body .box {
  width: 15%;
  padding:12px;
  display:inline-block;
  position:left;
  width:300px;
  

  

  
  


}

body .hello {

  
  justify-content: space-between;
  flex-flow: row wrap;
  color: #ffffff;
  
  
  
}

h3 {
  margin: 40px;
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

@import url(https://fonts.googleapis.com/css?family=Poiret+One);

@mixin button-bg($bg) {
  background: $bg;
  &:hover {
    background:darken($bg,8%);
    transition: all 0.3s ease;
  }
  &:active {
    background:darken($bg,25%);
  } 
}

.btn {
 color:white;
 text-decoration:none;
 padding:5px 10px;
 border-radius:3px;
 font-family: 'Poiret One', cursive;
 
}

.btn-green {
   @include button-bg(#2ecc71);
}

.btn-blue {
   @include button-bg(#3498db);
}

.btn-yellow{
   @include button-bg(#f1c40f);
}

.btn-red {
   @include button-bg(#e74c3c);
}

/*Other Stylez*/
.wrap {
  margin:0 auto;
  width:800px;
  text-align:center;
}

h1 {
  font-family: 'Poiret One', cursive;
  font-size:4em;
}

</style>