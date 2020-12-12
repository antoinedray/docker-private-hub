<template>
  <div class="repository text-left">
    <div class="header row px-3 py-5">
      <div class="col-8">
        <h1>
          Python
        </h1>
      </div>
      <div class="col-4">
        <div class="text-gray-500 m-2">
          Copy and paste to pull this image
        </div>
        <div class="d-flex bg-dark text-light rounded p-2 m-2">
          <input readonly value="docker pull python">
          <font-awesome-icon :icon="['far', 'copy']" class="copy-code" />
        </div>
      </div>
    </div>
    <div class="tags-list p-3">
      <div class="tag-list-item border p-4">
        <div class="tag-list-header mb-2">
          <div class="text-uppercase text-gray-500 font-weight-bold">
            Tag
          </div>
          <div class="font-weight-bold">
            <a href="#">rc-buster</a>
          </div>
        </div>
        <div class="tags-image-header row text-uppercase text-gray-500">
          <div class="col-sm">Digest</div>
          <div class="col-sm">OS/Arch</div>
          <div class="col-sm text-right">Compressed Size</div>
        </div>

        <!-- Loop here -->
        <div class="tags-image-list-item row text-left">
          <div class="col-sm"><span class="text-primary">39561151512</span></div>
          <div class="col-sm">linux/arm</div>
          <div class="col-sm text-right text-uppercase">332 mb</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { HTTP } from '@/utils/http'

export default {
  name: 'Repository',
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

<style scoped lang="scss">
.header {
  background-color: #fff;
}

.copy-code {
  position: relative;
  -ms-flex-item-align: center;
  align-self: center;
  cursor: pointer;
  margin-right: 12px;
}

.tag-list-item {
  background-color: #fff;
  font-size: 13px;
}

.tags-image-list-item:hover {
  background-color: #f2f8ff;
  cursor: pointer;
}
</style>
