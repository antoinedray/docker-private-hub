<template>
  <div class="repository text-left">
    <nav aria-label="breadcrumb" class="border-bottom bg-white">
      <div class="container-xl">
        <ol class="breadcrumb bg-white mb-0">
          <li class="breadcrumb-item"><a href="#">Repositories</a></li>
          <li class="breadcrumb-item active" aria-current="page">repository-name / my-first-repo</li>
        </ol>
      </div>
    </nav>


    <nav class="border-bottom bg-white mb-4">
      <div class="container-xl">
        <div class="nav nav-pills" id="nav-tab" role="tablist">
          <a class="nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true">Home</a>
          <a class="nav-link"
              id="nav-tags-tab"
              data-toggle="tab"
              href="#nav-tags"
              role="tab"
              aria-controls="nav-tags"
              aria-selected="false">Tags</a>
          <a class="nav-link"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false">Settings</a>
        </div>
      </div>
    </nav>

    <div class="tab-content" id="nav-tabContent">

      <!-- Home tab -->
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <div class="container-xl">
          <div class="card-main bg-white rounded border p-5">
            <div class="row">
              <div class="col-md-7">
                <h4>
                  <font-awesome-icon icon="globe-americas" class="mr-3 text-gray-500" />
                  deccldkv / <span class="font-weight-bold">{{repository}}</span>
                </h4>
              </div>
              <div class="col-6 col-md-5">
                <div class="mb-3">
                  To push a new tag to this repository,
                </div>
                <input class="form-control bg-gray-700 no-highlight-input text-light border-0 rounded p-2" readonly :value="`docker push deccldkv/${repository}:tagname`" >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / Home tab -->

      <!-- Tags tab -->
      <div class="tab-pane fade" id="nav-tags" role="tabpanel" aria-labelledby="nav-tags-tab">
        <div class="container-xl">
          <div class="mb-3">
            <form class="tags-search">
              <div class="form-group has-search">
                <font-awesome-icon icon="search" class="form-control-feedback" />
                <input type="text" v-model="filter" class="form-control" aria-describedby="search" placeholder="Filter Tags">
              </div>
            </form>
          </div>
          <div class="tags-list">
            <div v-for="tag in tags" :key="tag.tag" class="tag-list-item border rounded mb-3 p-4">
              <div class="tag-list-header mb-3">
                <div class="text-uppercase text-gray-500 font-weight-bold">
                  Tag
                </div>
                <div class="d-flex flex-row">
                  <div class="w-100">
                    <a href="#" class="font-weight-bold">{{tag.name}}</a>
                  </div>
                  <div class="flex-shrink-1">
                    <div class="has-copy-to-clipboard">
                      <font-awesome-icon :icon="['far', 'copy']"
                                         class="form-control-feedback text-primary" />
                      <input :id="`tag-${tag.name}`" class="form-control bg-gray-200 no-highlight-input text-nowrap border-0 rounded px-2 py-1" style="width:250px" readonly :value="`docker pull fgkjdfnkgnj/${repository}:${tag.name}`">
                    </div>
                  </div>
                </div>
              </div>
              <div class="tags-image-header row text-uppercase text-gray-500">
                <div class="col-sm">Digest</div>
                <div class="col-sm">OS/Arch</div>
                <div class="col-sm text-right">Compressed Size</div>
              </div>

              <!-- Loop here -->
              <div v-for="manifest in tag['manifests']" :key="manifest.digest" class="tags-image-list-item row text-left">
                <div class="col-sm">
                  <span class="text-primary">
                    {{ manifest['digest'].replace('sha256:','').substring(0,12) }}
                  </span>
                </div>
                <div class="col-sm">
                  {{ manifest['platform']['os'] + ((manifest['platform']['os'] === '') ? '' : '/') + manifest['platform']['architecture'] }}
                </div>
                <div class="col-sm text-right text-uppercase">
                  {{ humanFileSize(manifest['size']) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / Tags tab -->

      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        ...
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import JQuery from 'jquery'
// import { HTTP } from '@/utils/http'
// import { serialize } from '@/utils/manifests'
import { humanFileSize } from '@/utils/size'

export default {
  name: 'Repositories',
  components: {
  },
  data() {
    return {
      repository: this.$route.params.name,
      images: [],
      static_tags: [],
      tags: [],
      filter: null
    }
  },
  async created () {
    // Fix tooltip jquery
    JQuery(document).ready(function () {
      JQuery('body').tooltip({ selector: '[data-toggle=tooltip]' })
    })

    const manifest_list_v2_header = 'application/vnd.docker.distribution.manifest.list.v2+json'
    console.log(manifest_list_v2_header)
    try {
      //const response = await HTTP.get(`/v2/${this.repository}/tags/list`)
      //simple_tags = response.data
      //for (t in simple_tags) {
      //  const response = await HTTP.get(`/v2/${this.repository}/manifests/${t}`, {headers: {"Accept": manifest_list_v2_header}})
      //  const manifests = response.data
      //  this.static_tags.push({
      //    'name': t,
      //    'manifests': serialize(manifests)
      //  })
      //}
      this.static_tags.push({
        'name': '1.0-amd64',
        'manifests': [
          {
            "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
            "size": 7143,
            "digest": "sha256:e692418e4cbaf90ca69d05a66403747baa33ee08806650b51fab815ad7fc331f",
            "platform": {
              "architecture": "ppc64le",
              "os": "linux",
            }
          },
          {
            "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
            "size": 7682,
            "digest": "sha256:5b0bcabd1ed22e9fb1310cf6c2dec7cdef19f0ad69efa1f392e94a4333501270",
            "platform": {
              "architecture": "amd64",
              "os": "linux"
            }
          }
        ]
      })
      this.tags = this.static_tags
    } catch (error) {
      console.info('Error', error.message)
    }
  },
  methods: {
    humanFileSize(value) {
      return humanFileSize(value)
    },
    copyToClipboard(element) {
      /* Get the text field */
      var copyText = document.getElementById(element);

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");
    }
  },
  watch: {
    filter: function(value) {
      this.tags = this.static_tags.filter(repo => repo.name.includes(value))
    }
  }
}
</script>

<style scoped lang="scss">
.nav-link {
  color: #6c757d !important;
}

.nav-link.active {
  border-radius: 0 !important;
  background-color: inherit !important;
  color: #099cec !important;
  border-bottom: 2px solid #099cec;
}

.has-copy-to-clipboard .form-control {
  font-size: 14px;
  padding-left: 2.1rem !important;
}

.has-copy-to-clipboard .form-control-feedback {
  margin-right: 0.7em;
  margin-left: 0.7em;
  position: absolute;
  z-index: 2;
  display: block;
  height: 2.1rem;
  line-height: 2.1rem;
  text-align: center;
  pointer-events: none;
}

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

.has-search .form-control-feedback {
  color: #aaa;
}

.tags-search {
  max-width: 288px;
}

.tag-list-item {
  background-color: #fff;
  font-size: 14px;
}

.tags-image-list-item:hover {
  background-color: #f2f8ff;
  cursor: pointer;
}
</style>
