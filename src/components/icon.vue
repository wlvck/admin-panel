<template>
  <component :is="iconName"/>
</template>

<script>
import NavbarLogo from "@/components/icons/NavbarLogo.vue";
import Account from "@/components/icons/Account.vue";
import Search from "@/components/icons/Search.vue";

export default {
  name: 'icon',
  props: {
    iconName: String
  },
  components: {
    Account,
    NavbarLogo,
    Search,
  }
}
</script>

<style scoped>

</style>