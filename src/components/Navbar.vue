<template>
  <div class="px-8 py-4 navbar d-flex align-center justify-space-between">
    <icon class="logo" icon-name="navbar-logo"/>
    <div class="navbar-urls d-flex align-center">
      <router-link :to="{name: 'statistics'}">Статистика</router-link>
      <router-link :to="{name: 'users'}">Пользователи</router-link>
      <router-link :to="{name: 'storerooms'}">Кладовки</router-link>
      <router-link :to="{name: 'rates'}">Тарифы</router-link>
      <router-link :to="{name: 'promoCode'}">Промокод</router-link>
      <router-link :to="{name: 'stories'}">Сторис</router-link>
      <img src="@/assets/images/account.png" alt="">
      <p>Иванов Иван</p>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icon.vue";

export default {
  name: "Navbar",
  components: {Icon}
}
</script>

<style scoped>

</style>