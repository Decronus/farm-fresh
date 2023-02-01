<template>
    <header-comp />
    <router-view />
</template>

<style>
@font-face {
    font-family: "Artegra Sans";
    src: local("Artegra Sans Regular"), local("Artegra-Sans-Regular"),
        url("fonts/ArtegraSans-Regular/ArtegraSans-Regular.woff2")
            format("woff2"),
        url("fonts/ArtegraSans-Regular/ArtegraSans-Regular.woff") format("woff"),
        url("fonts/ArtegraSans-Regular/ArtegraSans-Regular.ttf")
            format("truetype");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "Artegra Sans";
    src: local("Artegra Sans Medium"), local("Artegra-Sans-Medium"),
        url("fonts/ArtegraSans-Medium/ArtegraSans-Medium.woff2") format("woff2"),
        url("fonts/ArtegraSans-Medium/ArtegraSans-Medium.woff") format("woff"),
        url("fonts/ArtegraSans-Medium/ArtegraSans-Medium.ttf")
            format("truetype");
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: "Artegra Sans";
    src: local("Artegra Sans SemiBold"), local("Artegra-Sans-SemiBold"),
        url("fonts/ArtegraSans-SemiBold/ArtegraSans-SemiBold.woff2")
            format("woff2"),
        url("fonts/ArtegraSans-SemiBold/ArtegraSans-SemiBold.woff")
            format("woff"),
        url("fonts/ArtegraSans-SemiBold/ArtegraSans-SemiBold.ttf")
            format("truetype");
    font-weight: 600;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Artegra Sans, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
