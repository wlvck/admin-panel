<template>
  <div class="page">
    <div class="d-flex align-center">
      <icon icon-name="arrow-left" class="mr-2 pointer" @click.prevent="$router.push({name: 'stories'})"/>
      <div class="page-title">
        Загрузить сторис
      </div>
    </div>
    <div class="basic-border px-6 py-6 mt-9">
      <h6 class="mb-2">Файл</h6>
      <div class="basic-border py-4 px-4">
        <v-btn elevation="0" class="w-auto primary-btn text-none px-4 py-2 mr-4">
          Загрузить
        </v-btn>
        <span class="pointer conditions">Условия, формат загрузки файлов</span>
      </div>
    </div>
    <v-btn elevation="0" class="primary-btn text-none px-12 py-4 mt-8">Сохранить</v-btn>
  </div>
</template>

<script setup>
import Icon from '@/components/icon.vue';
</script>