<template>
  <v-form>
    <h2 class="mb-8">Восстановление пароля</h2>
    <div class="form-block mb-4">
      <label for="password">Новый пароль</label>
      <div class="form-block-input">
        <input placeholder="Пароль" :type="showPassword1 ? 'text' : 'password'" id="password">
        <icon :icon-name="`${showPassword1 ? 'show-password' : 'hide-password'}`" class="pointer"
              @click="showPassword1 = !showPassword1"/>
      </div>
    </div>
    <div class="form-block mb-8">
      <label for="password">Подтвердить пароль</label>
      <div class="form-block-input">
        <input placeholder="Пароль" :type="showPassword2 ? 'text' : 'password'" id="password">
        <icon :icon-name="`${showPassword2 ? 'show-password' : 'hide-password'}`" class="pointer"
              @click="showPassword2 = !showPassword2"/>
      </div>
    </div>
    <div class="d-flex align-center">
      <v-btn elevation="0" class="primary-btn" @click.prevent="$router.push('/')">Отправить</v-btn>
    </div>
  </v-form>
</template>

<script setup>
import {ref} from "vue";
import Icon from "@/components/icon.vue";

const showPassword1 = ref(false)
const showPassword2 = ref(false)
</script>