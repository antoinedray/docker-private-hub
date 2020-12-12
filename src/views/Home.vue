<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import { HTTP } from '@/utils/http'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
        images: []
    }
  },
  async created () {
    try {
      const response = await HTTP.get('/v2/_catalog')
      this.images = response.data
    } catch (error) {
      console.info('Error', error.message)
    }
  },
}
</script>
