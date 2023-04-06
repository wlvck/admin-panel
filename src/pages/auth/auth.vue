<template>
  <v-form>
    <h2 class="mb-8">Вход</h2>
    <div class="form-block mb-4">
      <label for="phone">Телефон</label>
      <div class="form-block-input">
        <input placeholder="+7(700) 000 00 00" type="text" id="phone">
      </div>
    </div>
    <div class="form-block">
      <label for="password">Пароль</label>
      <div class="form-block-input">
        <input placeholder="Пароль" :type="showPassword ? 'text' : 'password'" id="password">
        <icon :icon-name="`${showPassword ? 'show-password' : 'hide-password'}`" class="pointer"
              @click="showPassword = !showPassword"/>
      </div>
    </div>
    <router-link :to="{name: 'sendOtp'}" class="d-block mb-8 mt-1 text-end">Забыли пароль?</router-link>
    <div class="d-flex align-center">
      <v-btn elevation="0" class="primary-btn" @click.prevent="$router.push('/')">Вход</v-btn>
    </div>
  </v-form>
</template>

<script setup>
import {ref} from "vue";
import Icon from "@/components/icon.vue";

const showPassword = ref(false)
</script>