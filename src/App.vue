<template>
  <div id="app" class="p-4 mx-auto max-w-xl">
    <h1 class="text-4xl mb-6">
      <RouterLink :to="{ name: 'home' }">
        {{ $t('app.title') }}
      </RouterLink>
    </h1>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
