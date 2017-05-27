
<style scoped>


</style>

<template>
	<div>
		
		搜索界面

	</div>

</template>

<script>

	import axios from 'axios';

	export default {
  name: 'VoteSchool',
  data () {
    return {
     
    }
  },
  components: {
    
  },

  methods:{

  },
  
  mounted:function(){

      axios.get("http://localhost:7777/static/getmock/searchResult.json",{

           })
          .then(function (response) {

            var result =response.data;

              if(result.code==0){

              

                
              }else{

                console.log(result.msg)
              } 
             
          }.bind(this))
          .catch(function (error) {
              console.log(error);
          });


  }

 } 



</script>