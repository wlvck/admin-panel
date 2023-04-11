<template>
  <div class="page services">
    <v-row>
      <v-col>
        <div class="block">
          <h4>Общее количество пользователей</h4>
          <div class="d-flex align-center justify-space-between">
            <h1>45 654</h1>
            <div class="d-flex align-center status green">
              <span>23%</span>
              <icon class="ml-3" icon-name="up"/>
            </div>
          </div>
        </div>
      </v-col>
      <v-col>
        <div class="block">
          <h4>Новых пользователей за месяц</h4>
          <div class="d-flex  align-center justify-space-between">
            <h1>2 456</h1>
            <div class="d-flex align-center status red">
              <span>23%</span>
              <icon class="ml-3" icon-name="down"/>
            </div>
          </div>
        </div>
      </v-col>
      <v-col>
        <div class="block">
          <h4>Количество аренд за месяц</h4>
          <div class="d-flex  align-center justify-space-between">
            <h1>146</h1>
            <div class="d-flex align-center status green">
              <span>23%</span>
              <icon class="ml-3" icon-name="up"/>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Icon from "@/components/icon.vue";

export default {
  name: "statistics",
  components: {Icon}
}
</script>

<style scoped>

</style>