<template>
  <div class="page">
    <div class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <icon icon-name="arrow-left" class="mr-2 pointer" @click.prevent="$router.push({name: 'rates'})"/>
        <div class="page-title">
          Тарифы
        </div>
      </div>
    </div>
    <div class="grid-container basic-border px-6 py-6">
      <v-row no-gutters class="mb-6">
        <v-col cols="6">
          <div class="grid-title mb-2">Категория</div>
          <div class="grid-text">Большая</div>
        </v-col>
        <v-col cols="6">
          <div class="grid-title mb-2">Адресс</div>
          <div class="grid-text">Любимая улица, дом 135</div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="6">
          <div class="grid-title mb-2">Тип кладовки</div>
          <div class="grid-text">Тип</div>
        </v-col>
        <v-col cols="6">
          <div class="grid-title mb-2">Объем</div>
          <div class="grid-text">45м2</div>
        </v-col>
      </v-row>
    </div>
    <v-row class="mt-8">
      <v-col cols="3">
        <div class="grid-text mb-4">1 месяц</div>
        <div class="basic-border px-6 py-6">
          <div class="grid-title mb-1">Стоимость</div>
          <div class="basic-border grid-input d-flex align-center justify-space-between px-4 py-4">
            <input min="0" placeholder="0" type="number">
            <span>тг.</span>
          </div>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="grid-text mb-4">3 месяц</div>
        <div class="basic-border px-6 py-6">
          <div class="grid-title mb-1">Стоимость</div>
          <div class="basic-border grid-input d-flex align-center justify-space-between px-4 py-4">
            <input min="0" placeholder="0" type="number">
            <span>тг.</span>
          </div>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="grid-text mb-4">6 месяц</div>
        <div class="basic-border px-6 py-6">
          <div class="grid-title mb-1">Стоимость</div>
          <div class="basic-border grid-input d-flex align-center justify-space-between px-4 py-4">
            <input min="0" placeholder="0" type="number">
            <span>тг.</span>
          </div>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="grid-text mb-4">1 год</div>
        <div class="basic-border px-6 py-6">
          <div class="grid-title mb-1">Стоимость</div>
          <div class="basic-border grid-input d-flex align-center justify-space-between px-4 py-4">
            <input min="0" placeholder="0" type="number">
            <span>тг.</span>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-btn class="primary-btn mt-8" elevation="0">Сохранить</v-btn>
  </div>
</template>

<script setup>
import Icon from '@/components/icon.vue';
</script>