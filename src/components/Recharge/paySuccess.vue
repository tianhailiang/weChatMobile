<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>


<template>
  <div>
    <v-msgSuccess></v-msgSuccess>
  </div>


</template>

<script>
  import msgSuccess from  '../tools/msg_success';
    export default {
        name: 'paySuccess',
        data () {
            return {}
        },
        components: {
         "v-msgSuccess":msgSuccess
        }

    }
</script>
