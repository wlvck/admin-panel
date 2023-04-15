<template>
  <div class="page">
    <div class="d-flex align-center justify-space-between">
      <div class="page-title">
        Пользователи
      </div>
      <div class="page-input d-flex align-center">
        <icon class="mr-4" icon-name="search"/>
        <input type="text" placeholder="Поиск" class="flex-shrink-1 flex-grow-1">
      </div>
    </div>
    <v-table class="mt-6">
      <thead>
      <tr class="pointer" @click.prevent="$router.push({name: 'userDetail', params: {id: 1}})">
        <th class="text-left">
          ФИО
        </th>
        <th class="text-left">
          Номер телефона
        </th>
        <th class="text-left">
          Количество арендованых кладовок
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in 10"
          :key="item"
          class="pointer" @click.prevent="$router.push({name: 'userDetail', params: {id: 1}})"
      >
        <td>Иванов Иван Иванович</td>
        <td>Номер телефона</td>
        <td>Количество арендованых кладовок</td>
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