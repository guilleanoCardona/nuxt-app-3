<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">Intro Nuxt</NuxtLink>
      <button
        type="button"
        aria-expanded="false"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        aria-label="Toggle navigation"
        aria-controls="navbarSupportedContent"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/">
              Default
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/home">
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/about">
              About
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/posts">
              Posts
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/posts123"
              aria-current="page"
              class="nav-link active"
            >
              Error
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
