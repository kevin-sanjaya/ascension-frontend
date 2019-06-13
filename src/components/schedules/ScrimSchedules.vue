<template>
<div id="scrim-schedules">
    <div class="schedule-tile" v-if="scrimmageSchedules.length">
        <h3>Upcoming
            <span>{{ selectedDivision.name }}</span> Scrimmage
        </h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Time</th>
                    <th scope="col">Opponent</th>
                    <th scope="col">Format</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan="5" v-if="filteredSchedules.length === 0">
                    There are no schedules available.
                </td>
            </tr>
                <template v-for="(scrimmage, index) in filteredSchedules">
                    <tr v-bind:key="scrimmage.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ formatTime(scrimmage.time) }}</td>
                        <td>{{ scrimmage.opponent }}</td>
                        <td>{{ scrimmage.format }}</td>
                        <td><button
                            class="detail-button"
                            data-toggle="collapse"
                            v-bind:data-target="bindDataTarget(scrimmage.id, true)">
                            <i class="fas fa-angle-down"></i>
                        </button></td>
                    </tr>
                    <tr v-bind:key="index">
                        <td colspan="5" class="match-detail">
                            <div class="collapse" v-bind:id="bindDataTarget(scrimmage.id, false)">
                            Match type:
                                <span>{{ scrimmage.online ? "Online" : "LAN" }}</span> <br>
                            Server region:
                                <span>{{ scrimmage.server }}</span> <br>
                            Additional info:
                                <span>{{ scrimmage.info ? scrimmage.info : "-" }}</span>
                            </div>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</div>
</template>

<style scoped>
#scrim-schedules {
    width: 35%;
}

.schedule-tile {
    background-color: #11171a;
    border-top: 4px solid #faa61a;
    border-bottom: 20px solid #faa61a;
}

td.match-detail {
    text-align: left;
    padding-top: 0;
    padding-bottom: 10px;
}

.collapse {
    border-left: 4px solid #faa61a;
    padding-left: 3%;
}

button.detail-button {
    border-radius: 50%;
    border: none;
    color: #faa61a;
    background-color: #11171a;
}

h3 {
    text-transform: uppercase;
    margin: 5px;
    text-align: center;
    color: #f4f5f6;
    font-size: 1.5vw;
}

span {
    font-weight: bold;
    color: #faa61a;
}

table,
td {
    text-align: center;
    color: #f4f5f6;
    border-top: none;
    border-bottom: none;
    font-size: 0.8vw;
    margin-bottom: 0;
}

@media (max-width: 1024px) {
    h3 {
        font-size: 15.36px;
    }
}
</style>

<script>
export default {
  name: 'ScrimSchedules',
  components: {},
  props: {
    scrimmageSchedules: {
      type: Array,
      default: () => null,
    },
    selectedDivision: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {};
  },
  computed: {
    filteredSchedules() {
      return this.scrimmageSchedules.filter(data => data.teamId === this.selectedDivision.id);
    },
  },
  methods: {
    formatTime(time) {
      return `${new Date(time).toLocaleDateString()} ${new Date(time).toLocaleTimeString()}`;
    },
    bindDataTarget(index, button) {
      return button ? `#match-detail${index}` : `match-detail${index}`;
    },
  },
  mounted() {},
};
</script>
