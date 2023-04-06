<template>
  <v-form>
    <h2 class="mb-8">Восстановление пароля</h2>
    <div class="form-block mb-8">
      <label for="phone">Телефон</label>
      <div class="form-block-input">
        <input placeholder="+7(700) 000 00 00" type="text" id="phone">
      </div>
    </div>
    <div class="d-flex align-center">
      <v-btn elevation="0" class="primary-btn" @click.prevent="$router.push({name: 'checkOtp'})">Отправить</v-btn>
    </div>
  </v-form>
</template>
