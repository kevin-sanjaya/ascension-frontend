<template>
<div id="results">
    <DivisionSelector @selectDivision="selectDivision" />
    <ScrimResults v-bind:selectedDivision="selectedDivision"
                  v-bind:scrimmageResults="scrimmageResults"
                  @finishedLoading="finishLoading" />
    <TournamentResults v-bind:selectedDivision="selectedDivision"
                       v-bind:tournamentResults="tournamentResults"
                       @finishedLoading="finishLoading" />
    <template v-if="isLoading">
        <div class="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i>
        </div>
    </template>
</div>
</template>

<style scoped>
#results {
  display: flex;
  flex-direction: row;
}

i {
    font-size: 3vw;
}

.loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #f4f5f6;
}
</style>

<script>
import DivisionSelector from '@/components/divisions/DivisionSelector.vue';
import ScrimResults from '@/components/results/ScrimResults.vue';
import TournamentResults from '@/components/results/TournamentResults.vue';
import * as mockScrimmages from '../assets/mocks/results/scrimmages.json';
import * as mockTournaments from '../assets/mocks/results/tournaments.json';

export default {
  name: 'Schedules',
  components: {
    ScrimResults,
    TournamentResults,
    DivisionSelector,
  },
  data() {
    return {
      selectedDivision: {},
      scrimmageResults: [],
      tournamentResults: [],
      isLoading: true,
    };
  },
  methods: {
    selectDivision(selectedDivision) {
      this.selectedDivision = selectedDivision;
    },
    setScrimmageResults(scrimmageResults) {
      this.scrimmageResults = scrimmageResults;
    },
    setTournamentResults(tournamentResults) {
      this.tournamentResults = tournamentResults;
    },
    finishLoading() {
      this.isLoading = false;
    },
  },
  mounted() {
    setTimeout(() => this.setScrimmageResults(mockScrimmages.default.scrimmages), 2000);
    setTimeout(() => this.setTournamentResults(mockTournaments.default.tournaments), 2000);
  },
};
</script>
