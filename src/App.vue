<template>
  <div>
    <navbar v-if="$route.meta.type !== 'auth'"/>
    <router-view/>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
