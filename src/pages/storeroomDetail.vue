<template>
  <div class="page">
    <div class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <icon icon-name="arrow-left" class="mr-2 pointer" @click.prevent="$router.push({name: 'storerooms'})"/>
        <div class="page-title">
          Кладовка №5678
        </div>
      </div>
      <div class="page-input d-flex align-center">
        <icon class="mr-4" icon-name="search"/>
        <input type="text" placeholder="Поиск" class="flex-shrink-1 flex-grow-1">
      </div>
    </div>
    <v-table class="mt-6">
      <thead>
      <tr>
        <th class="text-left">
          Статус
        </th>
        <th class="text-left">
          Номер кладовки
        </th>
        <th class="text-left">
          ФИО арендаря
        </th>
        <th class="text-left">
          Номер телефона
        </th>
        <th class="text-left">
          Оставшегося периода аренды
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <v-btn elevation="0" class="status-btn blue">Свободно</v-btn>
        </td>
        <td>№4567</td>
        <td>Иванов Иван Иванович</td>
        <td>+7 (495) 782-72-10</td>
        <td class="d-flex align-center justify-space-between">146 дней
          <v-btn elevation="0" class="text-none text-white d-inline-block px-2 py-1 status-blue">Освободить кладовку</v-btn>
        </td>
      </tr>
      </tbody>
    </v-table>
    <div class="d-flex align-end justify-end mt-4">
      <v-pagination
          :length="15"
          :total-visible="7"
      ></v-pagination>
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/icon.vue';
</script>

<style scoped>

</style>