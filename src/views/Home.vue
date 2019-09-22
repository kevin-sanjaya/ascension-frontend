<template>
<div id="home">
    <DivisionSelector @selectDivision="selectDivision" />
    <Chart v-bind:selectedDivision="selectedDivision" />
</div>
</template>

<style scoped>
#home {
  display: flex;
  flex-direction: row;
}

.performance-chart {
  padding: 1%;
  border-left: 4px solid #faa61a;
  background-color: #f4f5f6;
  width: 50%;
}
</style>

<script>
import DivisionSelector from '@/components/divisions/DivisionSelector.vue';
import Chart from '@/components/home/Chart.vue';

export default {
  name: 'Home',
  components: {
    DivisionSelector,
    Chart,
  },
  data() {
    return {
      selectedDivision: {},
    };
  },
  methods: {
    selectDivision(selectedDivision) {
      this.selectedDivision = selectedDivision;
    },
  },
  mounted() {},
};
</script>
