<template>
  <div>
    <NuxtRouteAnnouncer />
    <Index />
  </div>
</template>

<script lang="ts">
  import Index from './pages/index.vue';

  export default {
    components: {
      Index
    }
};

</script>