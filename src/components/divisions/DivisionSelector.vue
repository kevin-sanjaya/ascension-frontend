<template>
<div id="division-selector">
  <div class="selector btn-group-vertical">
    <button class="btn"
            v-for="division in divisionList"
            v-on:click="selectDivision"
            v-bind:key="division.id"
            v-bind:id="division.id"
            v-bind:value="division.name"
            v-bind:class="{ 'active': division.id === selectedDivision.id }">
            {{ division.name }}
    </button>
  </div>
</div>
</template>

<style scoped>
#division-selector {
    width: 15%;
}

button {
    padding: 5%;
    font-size: 1.2vw;
    color: #11171a;
    font-weight: bold;
    text-transform: uppercase;
}

button.active {
    border-left: 4px solid #faa61a;
    color: #faa61a;
}

.selector {
    width: 100%;
    background-color: white;
}

@media (max-width: 1024px) {
    button {
        font-size: 12.288px;
    }
}
</style>

<script>
import * as mockDivisions from '../../assets/mocks/divisions/divisions.json';

export default {
  name: 'DivisionSelector',
  data() {
    return {
      divisionList: [],
      selectedDivision: {},
    };
  },
  methods: {
    selectDivision(event) {
      this.selectedDivision = {
        id: Number(event.target.id),
        name: event.target.value,
      };
      this.$emit('selectDivision', this.selectedDivision);
    },
    setDivisionList(divisionList) {
      this.divisionList = divisionList;
      [this.selectedDivision] = divisionList;
      this.$emit('selectDivision', this.selectedDivision);
    },
  },
  mounted() {
    setTimeout(() => this.setDivisionList(mockDivisions.default.divisions), 2000);
  },
};
</script>
