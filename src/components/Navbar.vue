<template>
  <div class="px-8 py-4 navbar d-flex align-center justify-space-between">
    <icon class="logo" icon-name="navbar-logo"/>
    <div class="navbar-urls d-flex align-center">
      <router-link :to="{name: 'statistics'}">Статистика</router-link>
      <router-link :to="{name: 'users'}" :class="{'router-link-active': ['users', 'userDetail'].includes($route.name)}">Пользователи</router-link>
      <router-link :to="{name: 'storerooms'}" :class="{'router-link-active': ['storerooms', 'storeroomDetail'].includes($route.name)}">Кладовки</router-link>
      <router-link :to="{name: 'rates'}" :class="{'router-link-active': ['rates', 'rateDetail'].includes($route.name)}">Тарифы</router-link>
      <router-link :to="{name: 'promoCode'}" :class="{'router-link-active': ['promoCode', 'promoCodeDetail'].includes($route.name)}">Промокод</router-link>
      <router-link :to="{name: 'stories'}" :class="{'router-link-active': ['stories', 'createStory'].includes($route.name)}">Сторис</router-link>
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