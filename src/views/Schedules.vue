<template>
<div id="schedules">
    <DivisionSelector v-bind:divisionList="divisionList" @selectDivision="selectDivision" />
    <ScrimSchedules  v-bind:selectedDivision="selectedDivision"
                     v-bind:scrimmageSchedules="scrimmageSchedules" />
    <TournamentSchedules  v-bind:selectedDivision="selectedDivision"
                          v-bind:tournamentSchedules="tournamentSchedules" />
</div>
</template>

<style scoped>
#schedules {
  margin: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

<script>
import DivisionSelector from '@/components/divisions/DivisionSelector.vue';
import ScrimSchedules from '@/components/schedules/ScrimSchedules.vue';
import TournamentSchedules from '@/components/schedules/TournamentSchedules.vue';
import * as mockDivisions from '../assets/mocks/divisions/divisions.json';
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
      selectedDivision: 'Dota 2',
      divisionList: [],
      scrimmageSchedules: [],
      tournamentSchedules: [],
    };
  },
  methods: {
    selectDivision(selectedDivision) {
      this.selectedDivision = selectedDivision;
    },
    setDivisionList(divisionList) {
      this.divisionList = divisionList;
    },
    setScrimmageSchedules(scrimmageSchedules) {
      this.scrimmageSchedules = scrimmageSchedules;
    },
    setTournamentSchedules(tournamentSchedules) {
      this.tournamentSchedules = tournamentSchedules;
    },
  },
  mounted() {
    setTimeout(() => this.setDivisionList(mockDivisions.default.divisions), 2000);
    setTimeout(() => this.setScrimmageSchedules(mockScrimmages.default.scrimmages), 2000);
    setTimeout(() => this.setTournamentSchedules(mockTournaments.default.tournaments), 2000);
  },
};
</script>
