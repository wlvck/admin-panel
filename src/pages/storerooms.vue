<template>
  <div class="page">
    <div class="d-flex align-center justify-space-between">
      <div class="page-title">
        Кладовки
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
          Оставшегося периода аренды
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in 3"
          :key="item"
      >
        <td>
          <v-btn elevation="0" class="status-btn blue">Свободно</v-btn>
        </td>
        <td>№4567</td>
        <td>146 дней</td>
      </tr>
      <tr
          v-for="item in 5"
          :key="item"
      >
        <td>
          <v-btn elevation="0" class="status-btn red">Занято</v-btn>
        </td>
        <td>№4567</td>
        <td>146 дней</td>
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