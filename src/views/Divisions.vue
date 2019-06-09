<template>
<div id="divisions">
    <DivisionSelector v-bind:divisionList="divisionList" @selectDivision="selectDivision" />
    <DivisionRosters
      v-bind:selectedDivision="selectedDivision"
      v-bind:divisionRosterList="divisionRosterList[selectedDivision]" />
</div>
</template>

<style scoped>
#divisions {
    margin: 1%;
    display: flex;
    flex-direction: row;
}
</style>

<script>
/* import axios from 'axios'; */
import DivisionSelector from '@/components/divisions/DivisionSelector.vue';
import DivisionRosters from '@/components/divisions/DivisionRosters.vue';
import * as mockRosters from '../assets/mocks/rosters/rosters.json';
import * as mockDivisions from '../assets/mocks/divisions/divisions.json';
/* import END_POINT from '@/app.config'; */

export default {
  name: 'Divisions',
  components: {
    DivisionSelector,
    DivisionRosters,
  },
  data() {
    return {
      selectedDivision: 'Dota 2',
      divisionRosterList: [],
      divisionList: [],
    };
  },
  methods: {
    selectDivision(selectedDivision) {
      this.selectedDivision = selectedDivision;
    },
    getRosterList() {
      /* axios.get(`${END_POINT}/rosters`)
        .then(response => this.setRosterList(response.data))
        .catch(error => console.log(error)); */
    },
    getDivisionList() {
      /* axios.get(`${END_POINT}/divisions`)
        .then(response => this.setDivisionList(response.data))
        .catch(error => console.log(error)); */
    },
    setRosterList(divisionRosterList) {
      this.divisionRosterList = divisionRosterList;
    },
    setDivisionList(divisionList) {
      this.divisionList = divisionList;
    },
  },
  mounted() {
    /* mock service */
    setTimeout(() => this.setRosterList(mockRosters.default.rosters), 2000);
    setTimeout(() => this.setDivisionList(mockDivisions.default.divisions), 2000);
  },
};
</script>
