<template>
    <header-comp />
    <router-view />
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::before,
*::after {
    box-sizing: border-box;
}

*::placeholder {
    font-family: Fira Sans;
}

body {
    color: #2e2e34;
}

h1,
h2,
h3 {
    text-align: left;
    font-weight: 500;
}

input {
    font-family: Fira Sans;
}

#app {
    font-family: Fira Sans, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.container {
    position: relative;
    max-width: 1200px;
    height: 400px;
    overflow: hidden;
}

.cards {
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 50px;
}

.card {
    background: #c8c8c8;
    width: 200px;
    height: 200px;
    pointer-events: none;
}
</style>
