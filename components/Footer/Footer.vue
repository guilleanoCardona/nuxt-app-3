<template>
  <footer class="mt-5 bg-dark text-white p-5">
    &copy; GOPC {{ currentYear }}
  </footer>
</template>
<script setup>
const currentYear = new Date().getFullYear();
</script>
<style scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
