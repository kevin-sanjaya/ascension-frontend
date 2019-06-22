<template>
<div id="schedules">
    <DivisionSelector @selectDivision="selectDivision" />
    <ScrimSchedules  v-bind:selectedDivision="selectedDivision"
                     v-bind:scrimmageSchedules="scrimmageSchedules"
                     @finishedLoading="finishLoading" />
    <TournamentSchedules  v-bind:selectedDivision="selectedDivision"
                          v-bind:tournamentSchedules="tournamentSchedules"
                          @finishedLoading="finishLoading" />
    <template v-if="isLoading">
        <div class="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i>
        </div>
    </template>
</div>
</template>

<style scoped>
#schedules {
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
import ScrimSchedules from '@/components/schedules/ScrimSchedules.vue';
import TournamentSchedules from '@/components/schedules/TournamentSchedules.vue';
import * as mockScrimmages from '../assets/mocks/schedules/scrimmages.json';
import * as mockTournaments from '../assets/mocks/schedules/tournaments.json';

export default {
  name: 'Schedules',
  components: {
    ScrimSchedules,
    TournamentSchedules,
    DivisionSelector,
  },
  data() {
    return {
      selectedDivision: {},
      scrimmageSchedules: [],
      tournamentSchedules: [],
      isLoading: true,
    };
  },
  methods: {
    selectDivision(selectedDivision) {
      this.selectedDivision = selectedDivision;
    },
    setScrimmageSchedules(scrimmageSchedules) {
      this.scrimmageSchedules = scrimmageSchedules;
    },
    setTournamentSchedules(tournamentSchedules) {
      this.tournamentSchedules = tournamentSchedules;
    },
    finishLoading() {
      this.isLoading = false;
    },
  },
  mounted() {
    setTimeout(() => this.setScrimmageSchedules(mockScrimmages.default.scrimmages), 2000);
    setTimeout(() => this.setTournamentSchedules(mockTournaments.default.tournaments), 2000);
  },
};
</script>
