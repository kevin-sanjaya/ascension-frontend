<template>
<div id="footer">
    © 2019 Ascension
</div>
</template>

<style scoped>
#footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5%;
    background-color: black;
    color: #f4f5f6;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 4px solid #faa61a;
    font-size: 0.9vw;
}

@media (max-width: 1024px) {
    #footer {
        font-size: 9.216px;
    }
}
</style>

<script>
export default {
  name: 'Footer',
};
</script>
