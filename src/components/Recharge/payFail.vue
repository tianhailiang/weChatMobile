<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>


<template>
  <div>
    <v-msgFail></v-msgFail>
  </div>


</template>

<script>
  import msgFail from  '../tools/msg_fail';
  export default {
    name: 'paySuccess',
    data () {
      return {}
    },
    components: {
      "v-msgFail":msgFail
    }

  }
</script>
