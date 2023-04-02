<template>
  <component :is="iconName"/>
</template>

<script>
import NavbarLogo from "@/components/icons/NavbarLogo.vue";
import Account from "@/components/icons/Account.vue";

export default {
  name: 'icon',
  props: {
    iconName: String
  },
  components: {
    Account,
    NavbarLogo,
  }
}
</script>

<style scoped>

</style>