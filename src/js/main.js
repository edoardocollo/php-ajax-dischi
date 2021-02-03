import Vue from 'vue';
const axios = require('axios');


let app = new Vue({
  el:'#app',
  data:{
    genreList:['Tutti',],
    contentDB:'',
    selectedGenre:'Tutti',
  },
  methods: {
    getData: function(){
      axios.get('dist/php/dbVue.php')
        .then(resp =>{
          this.contentDB = resp.data;
          // console.log(this.contentDB);
          this.contentDB.forEach((item, i) => {
            if (!this.genreList.includes(item.genre)) {
              this.genreList.push(item.genre);
            }
          });

        })
        .catch(error => {
          console.log(error)
        });
    },
    selectGenre: function(event){
      const value = event.target.value;

      // this.selectedGenre = genre;
      this.selectedGenre = value;
    },
  },

  mounted(){
    this.getData();
  },
})
