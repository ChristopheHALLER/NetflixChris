<template>


  <v-app>

  


    <div class="app">
      <h1>NETFLEX</h1>
      <h2>LA PASSION DU CINEMA QUI MARCHE PAS</h2>
      <router-link  class="btn btn-red">Voir les informations </router-link>

      <div id="nav">
        
          <router-link :to="{name: 'Home' ,params:{
            movie:movie,
            movies:movies,
          }}">Home</router-link>
          |
          <router-link :to="{name: 'Admin'}">Admin</router-link>

          

      
          </div>
          
          <router-view></router-view>


      <br />
      <br />
      <br />
     

      <div class="wrap"></div>
      

      

      

      <ul id="" class="demo">
       
          <!-- <h2> Film n° {{ value.id }} : {{ value.title }} </h2>
    <p> Ratings : {{ value.rating }} </p>
    <ul>
      <li v-for="(genre, index) in value.genres" :key="index">
        {{ genre }} </li>
    </ul>
    <p>{{ value.review }} </p>
    <p>{{ value.description }} </p>
  </li> -->
          
       
      </ul>

      
    </div>
  </v-app>
</template>



<script>


import EventBus from "./plugins/event-bus.js";



export default {
  name: "App",
  components: {
    
    
  },

  data: function () {
    return {
      
      movies: [
        {
          id: 1,
          title: "Belmondo Le marginal ",
          genres: ["comedy"],
          rating: 4,
          review: "Un coup de coeur",
          description:
            "Le Marginal est un film français réalisé par Jacques Deray, sorti en 1983. Écrit par Deray et Jean Herman, et dialogué par Michel Audiard, il met en vedette Jean-Paul Belmondo dans le rôle d'un commissaire de police",
          img: "http://ekladata.com/2BXmgJt3gqoWdXrDsmbn1EE49DI.jpg",
        },

        {
          id: 2,
          title: "Belmondo Le professionnel ",
          genres: ["drama"],
          rating: 9,
          review:
            "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description:
            "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won.",
          img: "marginal.jpg",
        },

        {
          id: 3,
          title: "Belmondo Peur sur la Ville",
          genres: ["thriller"],
          rating: 9,
          review:
            "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description:
            "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won.",
          img: "peurville.jpg",
        },
        {
          id: 4,
          title: "Luca",
          genres: ["Enfant - Gamin"],
          rating: 9,
          review: "Jouissif",
          description:
            "Pour réaliser le plus gros casse de l'histoire, un homme mystérieux nommé The Professor recrute une bande de huit braqueurs",
          img: "https://flox-demo.pyxl.dev/assets/poster/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
        },
        {
          id: 5,
          title: "Dear Evan Hansen",
          genres: ["Crime - Drama"],
          rating: 3,
          review: "Intriguant",
          description:
            "Une famille en pleines vacances tropicales découvre que la plage sur laquelle elle s'est posée pour quelques heures fait rapidement vieillir les membres, résumant leur vie entière en l'espace d'une seule journée.",
          img: "https://flox-demo.pyxl.dev/assets/poster/11sowWt2GlQj6lGG4foLldXMyzF.jpg",
        },
        {
          id: 6,
          title: "Big Brother",
          genres: ["Peur - Walah"],
          rating: 9,
          review: "Intriguant",
          description:
            "Pour réaliser le plus gros casse de l'histoire, un homme mystérieux nommé The Professor recrute une bande de huit braqueurs",
          img: "https://image.tmdb.org/t/p/w185/9Gkcvdz89Q7w0glDDga1c8m5vaW.jpg",
        },
        {
          id: 7,
          title: "Luca",
          genres: ["Enfant - Gamin"],
          rating: 9,
          review: "Jouissif",
          description:
            "Pour réaliser le plus gros casse de l'histoire, un homme mystérieux nommé The Professor recrute une bande de huit braqueurs",
          img: "https://flox-demo.pyxl.dev/assets/poster/7BCTdek5LFHglcgl7shsm7igJAH.jpg",
        },
        {
          id: 8,
          title: "Old",
          genres: ["Crime - Drama"],
          rating: 9,
          review: "Intriguant",
          description:
            "Une famille en pleines vacances tropicales découvre que la plage sur laquelle elle s'est posée pour quelques heures fait rapidement vieillir les membres, résumant leur vie entière en l'espace d'une seule journée.",
          img: "https://flox-demo.pyxl.dev/assets/poster/jbMZkxLHVDSKiZh0HppCthRW96k.jpg",
        },
        {
          id: 9,
          title: "Big Brother",
          genres: ["Peur - Walah"],
          rating: 9,
          review: "Intriguant",
          description:
            "Pour réaliser le plus gros casse de l'histoire, un homme mystérieux nommé The Professor recrute une bande de huit braqueurs",
          img: "https://flox-demo.pyxl.dev/assets/poster/amwo4CjYKynZ2yKvKMxoiRSsaE1.jpg",
        },
      ],
    };
    
  },

  methods: {
    addMovie: function (add) {
      let newMovie = {
        id: this.movies.length + 1,
        title: add.newTitle,
        genres: add.newGenres,
        rating: add.newRating,
        review: add.newReview,
        description: add.newDescription,
        img: add.Newimg,
      };
      console.log(newMovie);
      this.movies.push(newMovie);
    },
  },
  
  

  mounted() {
    EventBus.$on("emit-test", (payLoad) => {
      console.log("Film bien ajouter");
      this.addMovie(payLoad);
    });
  },
 
   

   goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
};

 
    

</script>





<style lang="scss">



$primary-color: rgb(255, 0, 0);
$secondary-color: rgb(247, 3, 3);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $secondary-color;
  margin-top: 60px;
}
h1 {
  font-size: 120px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  text-decoration: underline;
  color: $primary-color;

  
 
  

  @import url(https://fonts.googleapis.com/css?family=Poiret+One);

  @mixin button-bg($bg) {
    background: $bg;
    &:hover {
      background: darken($bg, 8%);
      transition: all 0.3s ease;
    }
    &:active {
      background: darken($bg, 25%);
    }
  }

  .btn {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 3px;
    font-family: "Poiret One", cursive;
    font-size: 2em;
  }

  .btn-green {
    @include button-bg(#2ecc71);
  }

  .btn-blue {
    @include button-bg(#3498db);
  }

  .btn-yellow {
    @include button-bg(#f1c40f);
  }

  .btn-red {
    @include button-bg(#e74c3c);
  }

  /*Other Stylez*/
  .wrap {
    margin: 0 auto;
    width: 800px;
    text-align: center;
  }

  




}


</style>
