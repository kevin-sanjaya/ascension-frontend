<template>
<div id="division-selector">
  <template v-if="divisionList">
    <div class="selector btn-group-vertical">
    <button class="btn"
            v-for="division in divisionList"
            v-on:click="selectDivision"
            v-bind:key="division.id"
            v-bind:value="division.name"
            v-bind:class="{ 'active': division.name === selectedDivision }">
            {{ division.name }}
    </button>
    </div>
  </template>
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
export default {
  name: 'DivisionSelector',
  props: {
    divisionList: {
      default: null,
      type: Array,
    },
  },
  data() {
    return {
      selectedDivision: 'Dota 2',
    };
  },
  methods: {
    selectDivision(event) {
      this.selectedDivision = event.target.value;
      this.$emit('selectDivision', event.target.value);
    },
  },
  mounted() {},
};
</script>
