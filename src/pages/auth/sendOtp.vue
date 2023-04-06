<template>
  <div class="page">
    <div class="auth-container">
      <img src="@/assets/images/logo.png" alt="">
      <v-form>
        <h2 class="mb-8">Восстановление пароля</h2>
        <div class="form-block mb-4">
          <label for="phone">Телефон</label>
          <div class="form-block-input">
            <input placeholder="+7(700) 000 00 00" type="text" id="phone">
          </div>
        </div>
        <div class="d-flex align-center">
          <v-btn elevation="0" class="primary-btn">Отправить</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>
