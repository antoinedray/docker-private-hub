<template>
  <div class="home text-left">
    <div class="container-xl text-left">
      <div class="my-4">
        <div class="mb-3">
          <form class="repository-search">
            <div class="form-group has-search">
              <font-awesome-icon icon="search" class="form-control-feedback" />
              <input type="text"
                     v-model="filter"
                     class="form-control"
                     aria-describedby="search"
                     placeholder="Search by repository name...">
            </div>
          </form>
        </div>
        <div class="repository-list">
          <div v-for="repository in repositories" :key="repository" class="mb-3">
            <router-link class="repository d-block link-unstyled border rounded p-3" :to="`/repositories/${repository}`">
              <div class="content">
                <span>
                  {{ registry }}
                </span>
                <span> / </span>
                <span class="font-weight-bold">
                  {{ repository }}
                </span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
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
      registry: process.env.VUE_APP_DOCKER_REGISTRY,
      static_repositories: [],
      repositories: [],
      filter: null
    }
  },
  async created () {
    try {
      const response = await HTTP.get('/_catalog')
      this.static_repositories = response.data.repositories
      this.repositories = this.static_repositories
    } catch (error) {
      console.error('Error', error.message)
    }
  },
  watch: {
    filter: function(value) {
      this.repositories = this.static_repositories.filter(repo => repo.includes(value))
    }
  }
}
</script>

<style scoped lang="scss">
.repository {
  background-color: white !important;
}

.repository:hover {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.link-unstyled {
  &,
  &:visited,
  &:hover,
  &:active,
  &:focus,
  &:active:hover {
    font-style: inherit;
    color: inherit;
    background-color: transparent;
    font-size: inherit;
    text-decoration: none;
    font-variant: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
    border-radius: inherit;
    border: inherit;
    outline: inherit;
    box-shadow: inherit;
    padding: inherit;
    vertical-align: inherit;
  }
}

.has-search .form-control-feedback {
  color: #aaa;
}

.repository-search {
  max-width: 288px;
}
</style>
