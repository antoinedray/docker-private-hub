<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link class="navbar-brand" to="/">
      <font-awesome-icon :icon="['fab', 'docker']" class="mr-1" />
      Docker <span class="opacity-50">Private Hub</span>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="repository">Repository</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="about">About</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="search-bar form-control border-0 mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.form-control::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

.form-control:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: white;
}

.form-control::-ms-input-placeholder { /* Microsoft Edge */
  color: white;
}
.opacity-50 {
  opacity: 0.5;
}
.search-bar {
  color: #ffffff;
  background-color: rgba(255, 255, 255, .2);
}
</style>
