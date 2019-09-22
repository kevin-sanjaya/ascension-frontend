<template>
<div id="chart">
    <div class="scrimmage-performance">
        <h3><span>{{ selectedDivision.name }}</span> Scrimmage Performance</h3>
        <div class="performance-chart">
            <canvas id="scrimmage"></canvas>
        </div>
        <h4><span>Season win rate: </span>{{ scrimmageWinRate }}%</h4>
        <h4><span>Win count: </span>{{ scrimmageChartData[0] }}</h4>
        <h4><span>Lose count: </span>{{ scrimmageChartData[1] }}</h4>
        <h4><span>Opponent of the season: </span>-</h4>
    </div>

    <div class="tournament-performance">
        <h3><span>{{ selectedDivision.name }}</span> Tournament Performance</h3>
        <div class="performance-chart">
            <canvas id="tournament"></canvas>
        </div>
        <h4><span>Season win rate: </span>{{ tournamentWinRate }}%</h4>
        <h4><span>Win count: </span>{{ tournamentChartData[0] }}</h4>
        <h4><span>Lose count: </span>{{ tournamentChartData[1] }}</h4>
        <h4><span>Opponent of the season: </span>-</h4>
    </div>
</div>
</template>

<style scoped>
#chart {
    width: 85%;
    padding: 1%;
    background-color: #11171a;
    display: flex;
    flex-direction: row;
}

.scrimmage-performance {
    width: 50%;
    padding: 1%;
}

.tournament-performance {
    width: 50%;
    padding: 1%;
}

.performance-chart {
    padding: 1%;
    background-color: #f4f5f6;
    border-left: 4px solid #faa61a;
}

h3 {
    text-transform: uppercase;
    text-align: center;
    color: #f4f5f6;
    font-size: 1.5vw;
}

h4 {
    margin-top: 1%;
    text-transform: uppercase;
    color: #f4f5f6;
}

span {
    color: #faa61a;
}
</style>

<script>
import * as mockTournaments from '../../assets/mocks/results/tournaments.json';
import * as mockScrimmages from '../../assets/mocks/results/scrimmages.json';

export default {
  name: 'Chart',
  props: {
    selectedDivision: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      scrimmageResults: [],
      tournamentResults: [],
      scrimmageChart: null,
      scrimmageChartData: [0, 0],
      tournamentChart: null,
      tournamentChartData: [0, 0],
      scrimmageWinRate: 0,
      tournamentWinRate: 0,
    };
  },
  watch: {
    selectedDivision(newValue, oldValue) {
      this.scrimmageChartData = [0, 0];
      this.tournamentChartData = [0, 0];
      this.scrimmageResults.forEach((result) => {
        if (result.match_detail.teamId === newValue.id) {
          result.win ? this.scrimmageChartData[0]++ : this.scrimmageChartData[1]++;
        }
      });
      this.winRate = this.scrimmageChartData[0] / (this.scrimmageChartData[0] + this.scrimmageChartData[1]) * 100;
      this.tournamentResults.forEach((result) => {
        if (result.match_detail.teamId === newValue.id) {
          result.win ? this.tournamentChartData[0]++ : this.tournamentChartData[1]++;
        }
      });
      this.tournamentWinRate = this.tournamentChartData[0] / (this.tournamentChartData[0] + this.tournamentChartData[1]) * 100;
      this.scrimmageChart.destroy();
      this.tournamentChart.destroy();
      this.drawPerformanceChart('scrimmage');
      this.drawPerformanceChart('tournament');
    },
  },
  methods: {
    setScrimmageResults(scrimmageResults) {
      this.scrimmageResults = scrimmageResults;
      this.scrimmageResults.forEach((result) => {
        if (result.match_detail.teamId === this.selectedDivision.id) {
          result.win ? this.scrimmageChartData[0]++ : this.scrimmageChartData[1]++;
        }
      });
      this.winRate = this.scrimmageChartData[0] / (this.scrimmageChartData[0] + this.scrimmageChartData[1]) * 100;
      this.drawPerformanceChart('scrimmage');
    },
    setTournamentResults(tournamentResults) {
      this.tournamentResults = tournamentResults;
      this.tournamentResults.forEach((result) => {
        if (result.match_detail.teamId === this.selectedDivision.id) {
          result.win ? this.tournamentChartData[0]++ : this.tournamentChartData[1]++;
        }
      });
      this.tournamentWinRate = this.tournamentChartData[0] / (this.tournamentChartData[0] + this.tournamentChartData[1]) * 100;
      this.drawPerformanceChart('tournament');
    },
    drawPerformanceChart(param) {
      const chartContext = document.getElementById(param).getContext('2d');
      const chartData = new Chart(chartContext, {
        type: 'pie',
        data: {
          labels: ['Win', 'Lose'],
          datasets: [
            {
              backgroundColor: ['#faa61a', '#11171a'],
              data: param === 'scrimmage' ? this.scrimmageChartData : this.tournamentChartData,
            },
          ],
        },
        options: {},
      });
      if (param === 'scrimmage') {
        this.scrimmageChart = chartData;
      } else {
        this.tournamentChart = chartData;
      }
    },
    drawTournamentChart() {

    },
  },
  mounted() {
    setTimeout(() => this.setTournamentResults(mockTournaments.default.tournaments), 2000);
    setTimeout(() => this.setScrimmageResults(mockScrimmages.default.scrimmages), 2000);
  },
};
</script>
