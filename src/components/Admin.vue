<template>  
<div class='admin'>
<h3> Home View </h3>
</div>     
</template>

<script>




export default {
  name: "Admin",
  components: {
    

    
    
  },

  filteredItems: function () {
      if (this.dataFiler === "") {
        return this.movies;
      } else {
        return this.movies.filter((movie) =>
          movie.genres.includes(this.dataFiler)
        );
      }
    },

    movieTotal() {
      let totalNote = 0;
      for (let movie of this.movies) {
        totalNote += movie.rating;
      }
      return totalNote;
    },
 
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

    mounted() {
    EventBus.$on("emit-test", (payLoad) => {
      console.log("Film bien ajouté");
      this.addMovie(payLoad);
    });
  },
  
};

 
    
  
</script>