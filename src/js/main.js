import Vue from 'vue';
const axios = require('axios');
let app = new Vue({
  el:'#app',
  data:{
    text:'ciao',
    contentDB:'',
  },
  methods: {
    getData: function(){
      axios.get('dist/php/dbVue.php')
        .then(resp =>{
          this.contentDB = resp.data;
          // console.log(this.contentDB);

        })
        .catch(error => {
          console.log(error)
        });
    },
  },


  mounted(){
    this.getData();
  },
})
