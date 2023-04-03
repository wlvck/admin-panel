<template>
  <div class="page">
    <div class="d-flex align-center justify-space-between">
      <div class="page-title">
        Промокод
      </div>
      <v-btn elevation="0" class="primary-btn">Создать</v-btn>
    </div>
    <v-table class="mt-6">
      <thead>
      <tr>
        <th class="text-left">
          Тип промокода
        </th>
        <th class="text-left">
          Название
        </th>
        <th class="text-left">
          Скидка
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