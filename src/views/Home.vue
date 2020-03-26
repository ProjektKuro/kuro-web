<template>
  <div class="home">
    <div class>
      {{greeting}}
    </div>
    
    <!-- <HelloWorld msg="Kuro"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: () => {
    return {
      greeting: "hallo",
    }
  },
  components: {
    // HelloWorld§
  }
}
</script>

<style scoped>


</style>