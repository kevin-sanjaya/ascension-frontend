<template>
<div id="player-profile">
    <div class="player-data">
        <h3 class="name">
        <i v-if="roster.captain" class="fas fa-crown">&nbsp;</i>{{ roster.name }}</h3>
        <h3 class="nickname">{{ roster.nickname }}</h3>
        <br>
        <h3 class="extra-info"><strong>Age: </strong>{{ roster.age }}</h3>
        <h3 class="extra-info"><strong>Country: </strong>{{ roster.country }}</h3>
        <h3 class="extra-info"><strong>Position: </strong>
        {{ roster.position ? roster.position : "-" }}</h3>
    </div>
    <img v-bind:src="roster.avatarUrl" alt="player-avatar">
</div>
</template>

<style scoped>
#player-profile {
    border-top: 4px solid #faa61a;
    background-color: #f4f5f6;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 32%;
    margin-top: 1%;
    padding-bottom: 1.5%;
}

img {
    width: 8vw;
    height: 8vw;
    margin-top: 10%;
}

h3.name {
    font-size: 1.1vw;
    font-weight: bold;
    text-transform: uppercase;
}

h3.nickname {
    font-size: 1vw;
    color: #b8b9ba;
}

h3.extra-info {
    font-size: 0.8vw;
}

.player-data {
    width: 55%;
    margin-top: 10%;
}

@media (max-width: 1024px) {
    h3.name {
        font-size: 11.264px;
    }

    h3.nickname {
        font-size: 10.24px;
    }

    h3.extra-info {
        font-size: 8.192px;
    }

    img {
        width: 81.91px;
        height: 81.1px;
    }
}
</style>

<script>
export default {
  name: 'PlayerProfile',
  props: {
    roster: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {};
  },
};
</script>
