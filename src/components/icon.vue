<template>
  <component :is="iconName"/>
</template>

<script>
import NavbarLogo from "@/components/icons/NavbarLogo.vue";
import Account from "@/components/icons/Account.vue";
import Search from "@/components/icons/Search.vue";
import Eye from "@/components/icons/Eye.vue";
import Trash from "@/components/icons/Trash.vue";
import hidePassword from "@/components/icons/hidePassword.vue";
import showPassword from "@/components/icons/showPassword.vue";

export default {
  name: 'icon',
  props: {
    iconName: String
  },
  components: {
    Account,
    showPassword,
    hidePassword,
    Eye,
    Trash,
    NavbarLogo,
    Search,
  }
}
</script>

<style scoped>

</style>