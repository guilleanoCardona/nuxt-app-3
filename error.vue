<template>
  <div>
    <h2>Error encontrado</h2>
    <h3>{{ error.statusCode }} - {{ error.statusMessage }}</h3>

    <button type="button" class="btn btn-outline-danger" @click="handleError">
      Clean Errors
    </button>
  </div>
</template>
<script setup>
const route = useRoute();

const { error } = defineProps({
  error: Object,
});

const path = route.path === error.url ? "/" : route.path;

const handleError = () => {
  clearError({
    redirect: path,
  });
};
</script>
<style scoped>
div {
  text-align: center;
  padding: 20px;
}
</style>
