<template>
    <header-comp />
    <router-view />
    <div class="container" ref="refContainer" @mousedown="mousedownEvent" @mousemove="mousemoveEvent">
        <div class="cards" ref="refCards">
            <div class="card">
                <h1>Карточка 1</h1>
                <p>Текст карточки</p>
            </div>
            <div class="card">
                <h1>Карточка 2</h1>
                <p>Текст карточки</p>
            </div>
            <div class="card">
                <h1>Карточка 3</h1>
                <p>Текст карточки</p>
            </div>
            <div class="card">
                <h1>Карточка 4</h1>
                <p>Текст карточки</p>
            </div>
            <div class="card">
                <h1>Карточка 5</h1>
                <p>Текст карточки</p>
            </div>
            <div class="card">
                <h1>Карточка 6</h1>
                <p>Текст карточки</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPressedDown: false,
            cursorXSpace: null,
        };
    },
    methods: {
        mousedownEvent(event) {
            this.isPressedDown = true;
            this.cursorXSpace = event.pageX - this.$refs.refCards.offsetLeft;
            console.log("offsetX", event.offsetX);
            console.log("offsetLeft", this.$refs.refCards.offsetLeft);
        },

        mousemoveEvent(event) {
            if (!this.isPressedDown) return;
            event.preventDefault();
            this.$refs.refCards.style.left = `${event.pageX - this.cursorXSpace}px`;
            this.boundCards();
        },

        boundCards() {
            let containerRect = this.$refs.refContainer.getBoundingClientRect();
            let cardsRect = this.$refs.refCards.getBoundingClientRect();

            if (parseInt(this.$refs.refCards.style.left) > 0) {
                this.$refs.refCards.style.left = 0;
            } else if (cardsRect.right < containerRect.right) {
                this.$refs.refCards.style.left = `-${cardsRect.width - containerRect.width}px`;
            }
        },
    },

    created() {
        window.addEventListener("mouseup", () => {
            this.isPressedDown = false;
        });
    },

    destroyed() {
        window.removeEventListener("mouseup");
    },
};
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
