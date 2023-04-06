<template>
  <v-form>
    <h2 class="mb-4 text-center">Подтверждение номера телефона</h2>
    <p class="text-center mb-8">Введите код подтверждения, который мы отправили Вам на указанный номер</p>
    <div class="d-flex align-center justify-center">
      <div style="display: flex; flex-direction: row">
        <v-otp-input
            ref="otpInput"
            v-model:value="bindModal"
            input-classes="otp-input"
            separator=""
            :num-inputs="4"
            :should-auto-focus="true"
            input-type="letter-numeric"
            @on-change="handleOnChange"
            @on-complete="handleOnComplete"
        />
      </div>
    </div>
    <div class="d-flex align-center justify-center mt-4 mb-8">
      <button class="resend-sms">Отправить код повторно</button>
    </div>
    <div class="d-flex align-center">
      <v-btn elevation="0" class="primary-btn" @click.prevent="$router.push({name: 'restorePassword'})">Отправить</v-btn>
    </div>
  </v-form>
</template>

<script setup>
import VOtpInput from "vue3-otp-input";
import {ref} from "vue";

const bindModal = ref()
const handleOnChange = () => {
}
const handleOnComplete = () => {
}
</script>