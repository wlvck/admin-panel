<template>
  <div class="page">
    <div class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <icon icon-name="arrow-left" class="mr-2 pointer" @click.prevent="$router.push({name: 'users'})"/>
        <div class="page-title">
          Иванов Иван Иванович
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
          Номер кладовки
        </th>
        <th class="text-left">
          Адресс кладовки
        </th>
        <th class="text-left">
          Объем кладовки
        </th>
        <th class="text-left">
          Дата начала аренды
        </th>
        <th class="text-left">
          Дата окончания аренды
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>№2453</td>
        <td>Адресс размещения</td>
        <td>145м2</td>
        <td>12.12.2022</td>
        <td class="d-flex align-center justify-space-between">-
          <v-btn elevation="0" class="d-inline-block px-2 py-1 status-blue text-none text-white">Разблокировать</v-btn>
        </td>
      </tr>
      <tr
          v-for="item in 9"
          :key="item"
      >
        <td>№2453</td>
        <td>Адресс размещения</td>
        <td>145м2</td>
        <td>12.12.2022</td>
        <td class="d-flex align-center justify-space-between">12.12.2023  <v-btn elevation="0" class="d-inline-block px-2 py-1 status-red text-none text-white">Заблокировать</v-btn></td>
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

<script>
import Icon from '@/components/icon.vue';

export default {
  name: 'users',
  components: { Icon }
}
</script>

<style scoped>

</style>