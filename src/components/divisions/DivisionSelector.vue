<template>
<div id="division-selector">
<br>
    <button
        v-for="division in divisionList"
        v-on:click="selectDivision"
        v-bind:key="division.id"
        v-bind:id="division.id"
        v-bind:value="division.name"
        v-bind:class="{ 'active': division.id === selectedDivision.id }">
        <img v-bind:src="division.src">
        {{ division.name }}
    </button>
</div>
</template>

<style scoped>
#division-selector {
    width: 15%;
    height: 90vh;
    background-color: #11171a;
}

img {
    width: 20%;
    margin-right: 5%;
}

br {
    display: block;
    margin-top: 5%;
    content: "";
}

button {
    width: 95%;
    height: 8vh;
    padding: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1vw;
    color: #f4f5f6;
    text-align: left;
    background-color: #11171a;
    border: none;
    outline: none;
    border-left: 4px solid #11171a;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
}

button.active {
    border-left: 4px solid #faa61a;
    color: #faa61a;
}

button:hover {
    margin-left: 5%;
    border-left: 4px solid #faa61a;
    color: #faa61a;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
}

@media (max-width: 1024px) {
    button {
        font-size: 10.24px;
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
