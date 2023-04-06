<template>
  <div class="page">
    <div class="auth-container">
      <img src="@/assets/images/logo.png" alt="">
      <v-form>
        <h2 class="mb-8">Вход</h2>
        <div class="form-block mb-4">
          <label for="phone">Телефон</label>
          <input placeholder="+7(700) 000 00 00" type="text" id="phone">
        </div>
        <div class="form-block">
          <label for="password">Пароль</label>
          <input placeholder="Пароль" type="password" id="password">
        </div>
        <router-link :to="{name: 'restorePassword'}" class="d-block mb-8 mt-1 text-end">Забыли пароль?</router-link>
        <div class="d-flex align-center">
          <v-btn elevation="0" class="primary-btn" @click.prevent="$router.push({name: 'users'})">Вход</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const showPassword = ref(false)
</script>