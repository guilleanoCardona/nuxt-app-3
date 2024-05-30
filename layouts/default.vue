<!-- import { _current } from '../../NuxtFirebase/.nuxt/types/tailwind.config';
import { Body } from '../.nuxt/components'; -->
<template>
  <div>
    <Navbar />
    <main class="container p-3 my-5 border rounded shadow">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
<script setup>
useHead({
  titleTemplate: "%s - Intro Nuxt",
  bodyAttrs: [
    {
      class: "text-center",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      integrity:
        "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
      crossorigin: "anonymous",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      //Body: true,
    },
  ],
});
</script>
