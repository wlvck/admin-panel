<template>
  <component :is="$route.meta.layout">
    <router-view/>
  </component>
</template>

<script>
import auth from "@/layout/auth.vue";
import app from "@/layout/app.vue";
export default {
  components: {
    auth,
    app
  }
}
</script>
