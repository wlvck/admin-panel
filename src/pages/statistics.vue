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
    <v-row no-gutters class="mt-5">
      <v-col cols="6" class="pr-3">
        <div class="basic-border px-6 py-6">
          <h3 class="chart-title">Денежные поступления</h3>
          <div class="d-flex align-center">
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">1 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">3 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">6 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn-selected">1 год</v-btn>
          </div>
          <LineChart :options="lineChartOptions" :chartData="lineChartData"/>
        </div>
      </v-col>
      <v-col cols="6"  class="pl-2">
        <div class="basic-border px-6 py-6">
          <h3 class="chart-title">Количество аренд</h3>
          <div class="d-flex align-center">
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">1 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">3 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">6 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn-selected">1 год</v-btn>
          </div>
          <LineChart :options="lineChartOptions" :chartData="lineChartData"/>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-5">
      <v-col cols="6" class="pr-3">
        <div class="basic-border px-6 py-6">
          <h3 class="chart-title">Количество пользователей</h3>
          <div class="d-flex align-center">
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">1 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">3 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">6 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn-selected">1 год</v-btn>
          </div>
          <LineChart :options="lineChartOptions" :chartData="lineChartData"/>
        </div>
      </v-col>
      <v-col cols="6" class="pl-2">
        <div class="basic-border px-6 py-6">
          <h3 class="chart-title">Количество новых пользователей</h3>
          <div class="d-flex align-center">
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">1 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">3 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn mr-1">6 мес</v-btn>
            <v-btn elevation="0" class="px-6 w-auto py-1 text-none chart-btn-selected">1 год</v-btn>
          </div>
          <LineChart :options="lineChartOptions" :chartData="lineChartData"/>
        </div>
      </v-col>
    </v-row>

  </div>
</template>

<script setup>
import Icon from '@/components/icon.vue';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const lineChartOptions = {
  type: 'line',
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    }
  }
}
const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '',
      data: [0, 800, 1000, 850, 1700, 500, 1300, 800, 650, 1700, 500, 1300],
      fill: false,
      borderColor: '#00A0E3',
      tension: 0
    },
  ]
};
</script>
<style>
canvas {
  height: 450px !important;
}
</style>