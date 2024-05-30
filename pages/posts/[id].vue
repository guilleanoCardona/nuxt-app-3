<template>
  <div>
    <Head>
      <Title>Post {{ id }}</Title>
    </Head>
    <h3>Bienvenido al Post # {{ id }}</h3>
  </div>
</template>
<script setup>
const { id } = useRoute().params;

definePageMeta({
  validate: async (route) => {
    const nuxtApp = useNuxtApp();

    if (!/^[0-9]+$/.test(route.params.id)) {
      throw createError({
        statusCode: 500,
        statusMessage: "Params type is invalid",
      });
    }

    return true;
    /* const regex = /^[0-9]+$/.test(route.params.id);
    return regex; */
  },
});
</script>
