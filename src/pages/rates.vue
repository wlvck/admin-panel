<template>
  <div class="page">
    <div class="d-flex align-center justify-space-between">
      <div class="page-title">
        Тарифы
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
          Категория
        </th>
        <th class="text-left">
          Стоимость за 1 мес
        </th>
        <th class="text-left">
          Стоимость за 3 мес
        </th>
        <th class="text-left">
          Стоимость за 6 мес
        </th>
        <th class="text-left">
          Стоимость за 1 год
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in 10"
          :key="item"
      >
        <td>Большая</td>
        <td>200 тг.</td>
        <td>600 тг.</td>
        <td>1000 тг.</td>
        <td>1200 тг.</td>
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
import Icon from "@/components/icon.vue";

export default {
  name: "users",
  components: {Icon}
}
</script>

<style scoped>

</style>