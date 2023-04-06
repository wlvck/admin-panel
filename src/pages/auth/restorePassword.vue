<template>
  <div class="page">
    <div class="auth-container">
      <img src="@/assets/images/logo.png" alt="">
      <v-form>
        <h2 class="mb-8">Восстановление пароля</h2>
        <div class="form-block mb-8">
          <label for="phone">Телефон</label>
          <input placeholder="+7(700) 000 00 00" type="text" id="phone">
        </div>
        <div class="d-flex align-center">
          <v-btn elevation="0" class="primary-btn">Отправить</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const showPassword = ref(false)
</script>