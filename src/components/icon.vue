<template>
  <component :is="iconName"/>
</template>

<script>
export default {
  name: 'icon',
  props: {
    iconName: String
  },
}
</script>

<style scoped>

</style>