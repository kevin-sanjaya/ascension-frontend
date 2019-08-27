<template>
<div id="home">
    <div class="performance-chart">
      <canvas id="performance"></canvas>
    </div>
</div>
</template>

<style scoped>
#home {
  padding: 1%;
}

.performance-chart {
  width: 500px;
}
</style>

<script>
import * as mockTournaments from '../assets/mocks/results/tournaments.json';
import * as mockDivisions from '../assets/mocks/divisions/divisions.json';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      title: 'Home',
      tournamentResults: [],
      divisionList: [],
      chartDataset: [
        {
          label: 'Win',
          borderColor: '#3dfc03',
          data: [],
        },
        {
          label: 'Lost',
          borderColor: '#f2112b',
          data: [],
        },
      ],
    };
  },
  methods: {
    setTournamentResults(tournamentResults) {
      this.tournamentResults = tournamentResults;
      this.tournamentResults.forEach((result) => {
      });
    },
    setDivisionList(divisionList) {
      divisionList.forEach(division => this.divisionList.push(division.name));
    },
  },
  mounted() {
    setTimeout(() => this.setDivisionList(mockDivisions.default.divisions), 2000);
    setTimeout(() => this.setTournamentResults(mockTournaments.default.tournaments), 2000);

    const chartContext = document.getElementById('performance').getContext('2d');
    const performanceChart = new Chart(chartContext, {
      type: 'line',
      data: {
        labels: this.divisionList,
        datasets: this.chartDataset,
      },
      options: {},
    });
  },
};
</script>
