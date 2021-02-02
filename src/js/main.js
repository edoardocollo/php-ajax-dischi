import Vue from 'vue';
const axios = require('axios');
let app = new Vue({
  el:'#app',
  data:{
    text:'ciao',
  },
  methods: {
    getData: function(){
      axios.get('dist/php/dbVue.php')
        .then(resp =>{
          console.log(resp.data);
        })
        .catch(error => {
          console.log(error)
        });
    },
  },
  mounted(){
    this.getData();
  },
});
