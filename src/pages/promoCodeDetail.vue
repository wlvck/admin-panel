<template>
  <div class="page">
    <div class="d-flex align-center">
      <icon icon-name="arrow-left" class="mr-2 pointer" @click.prevent="$router.push({name: 'promoCode'})"/>
      <div class="page-title">
        Создать промокод
      </div>
    </div>
    <v-row class="basic-border px-6 py-6 mt-9">
      <v-col cols="4">
        <div class="grid-title mb-2">Тип промокода</div>
        <v-tabs
            v-model="tab"
        >
          <v-tab value="disposable" class="text-white text-none">Одноразовый</v-tab>
          <v-tab value="constant" class="text-white text-none">Постоянный</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="4">
        <div class="grid-title mb-2">Название</div>
        <div class="basic-border grid-input px-4 py-4">
          <input placeholder="Введите текст" type="text">
        </div>
      </v-col>
      <v-col cols="4">
        <div class="grid-title mb-2">Скидка</div>
        <div class="basic-border grid-input d-flex align-center justify-space-between px-4 py-4">
          <input min="0" placeholder="0" type="number">
          <span>%</span>
        </div>
      </v-col>
    </v-row>
    <v-btn elevation="0" class="text-none text-white primary-btn mt-8">Сохранить</v-btn>
  </div>
</template>

<script setup>
import Icon from '@/components/icon.vue';
import { onMounted, ref } from 'vue';

const tab = ref()
onMounted(() => {
  tab.value = 'disposable'
})
</script>