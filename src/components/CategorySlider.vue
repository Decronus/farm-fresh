<template>
    <!-- <div> -->
    <div class="header-wrap">
        <h1>{{ header }}&nbsp;<span>→</span></h1>
        <div class="controlls">
            <div class="controlls-back-wrap inactive" ref="refControllsBackWrap" @click.stop="stepBack()">
                <p>‹</p>
            </div>
            <div class="controlls-forw-wrap" ref="refControllsForwWrap" @click.stop="stepForw()">
                <p>›</p>
            </div>
        </div>
    </div>
    <div>
        <div class="category-container" ref="refContainer" @mousedown="mousedownEvent" @mousemove="mousemoveEvent">
            <div class="category-wrap" ref="refCategory" style="transform: translateX(0)">
                <slot></slot>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<script>
export default {
    name: "category-slider",
    props: {
        header: {
            type: String,
        },
    },
    data() {
        return {
            // mouseupListener: null,
            isPressedDown: false,
            cursorXSpace: null,
            stepWidth: 295,
        };
    },
    methods: {
        mousedownEvent(event) {
            this.$refs.refCategory.style.transition = "none";
            this.isPressedDown = true;
            this.cursorXSpace = event.pageX - +parseInt(this.$refs.refCategory.style.transform.slice(11));
        },

        mousemoveEvent(event) {
            if (!this.isPressedDown) return;
            event.preventDefault();
            this.$refs.refCategory.style.transform = `translateX(${event.pageX - this.cursorXSpace}px)`;
            this.$store.commit("toggleSliderMoving", true);
            // this.boundCards();
        },

        boundCards() {
            this.$refs.refCategory.style.transition = "all 0.2s ease-in-out";

            let containerRect = this.$refs.refContainer.getBoundingClientRect();

            if (+parseInt(this.$refs.refCategory.style.transform.slice(11)) > 0) {
                this.$refs.refCategory.style.transform = "translateX(0)";
                // this.$refs.refControllsBackWrap.style.opacity = "0.4";
                this.$refs.refControllsBackWrap.classList.add("inactive");
            } else if (
                this.categoryWidth - Math.abs(+parseInt(this.$refs.refCategory.style.transform.slice(11))) <
                containerRect.width
            ) {
                this.$refs.refCategory.style.transform = `translateX(-${this.categoryWidth - containerRect.width}px)`;

                // this.$refs.refControllsForwWrap.style.opacity = "0.4";
                this.$refs.refControllsForwWrap.classList.add("inactive");
            } else {
                //Корректные стили при крайних состояниях слайдера
                if (this.$refs.refCategory.style.transform !== "translateX(0px)") {
                    // this.$refs.refControllsBackWrap.style.opacity = "1";
                    this.$refs.refControllsBackWrap.classList.remove("inactive");
                }
                if (
                    this.$refs.refCategory.style.transform !==
                    `translateX(-${this.categoryWidth - containerRect.width}px)`
                ) {
                    // this.$refs.refControllsForwWrap.style.opacity = "1";
                    this.$refs.refControllsForwWrap.classList.remove("inactive");
                }
            }
        },

        stepBack() {
            this.$refs.refControllsForwWrap.classList.remove("inactive");
            // this.$refs.refControllsForwWrap.style.opacity = "1";
            this.$refs.refCategory.style.transition = "all 0.3s ease-in-out";

            if (parseInt(this.$refs.refCategory.style.transform.slice(11)) + this.stepWidth < 0) {
                this.$refs.refCategory.style.transform = `translateX(${
                    parseInt(this.$refs.refCategory.style.transform.slice(11)) + this.stepWidth
                }px)`;
            } else {
                this.$refs.refCategory.style.transform = "translateX(0)";
                // this.$refs.refControllsBackWrap.style.opacity = "0.4";
                this.$refs.refControllsBackWrap.classList.add("inactive");
            }
        },

        stepForw() {
            this.$refs.refControllsBackWrap.classList.remove("inactive");
            // this.$refs.refControllsBackWrap.style.opacity = "1";
            this.$refs.refCategory.style.transition = "all 0.3s ease-in-out";

            let containerRect = this.$refs.refContainer.getBoundingClientRect();

            if (
                this.categoryWidth -
                    Math.abs(parseInt(this.$refs.refCategory.style.transform.slice(11))) -
                    this.stepWidth >
                containerRect.width
            ) {
                this.$refs.refCategory.style.transform = `translateX(${
                    parseInt(this.$refs.refCategory.style.transform.slice(11)) - this.stepWidth
                }px)`;
            } else {
                this.$refs.refCategory.style.transform = `translateX(-${this.categoryWidth - containerRect.width}px)`;
                // this.$refs.refControllsForwWrap.style.opacity = "0.4";
                this.$refs.refControllsForwWrap.classList.add("inactive");
            }
        },

        mouseupListener() {
            this.isPressedDown = false;
            this.boundCards();
        },
    },

    computed: {
        categoryLeftLength() {
            return this.$refs.refCategory.style.left.length;
        },
        categoryWidth() {
            let cardWidth = parseInt(getComputedStyle(this.$refs.refCategory.children[0]).width);
            let cardsAmount = this.$refs.refCategory.children.length;
            let gapWidth = parseInt(getComputedStyle(this.$refs.refCategory).gap);

            let allGapsWidth = (this.$refs.refCategory.children.length - 1) * gapWidth;
            let allCardsWidth = cardsAmount * cardWidth;

            return allGapsWidth + allCardsWidth;
        },
    },

    created() {
        window.addEventListener("mouseup", this.mouseupListener);
    },

    unmounted() {
        window.removeEventListener("mouseup", this.mouseupListener);
    },
};
</script>

<style scoped>
.header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    gap: 20px;
}

/* h1 {
    font-size: 30px;
} */

h1 span {
    cursor: pointer;
}

.controlls {
    display: flex;
    gap: 10px;
}

.controlls div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    cursor: pointer;
}

.controlls div:hover {
    background: #57c053;
    color: #ffffff;
    border: none;
}

.inactive {
    pointer-events: none;
    opacity: 0.4;
}

.controlls p {
    margin-bottom: 2px;
}

.controlls-back-wrap {
    padding-right: 1px;
}

.controlls-forw-wrap {
    padding-left: 1px;
}

.category-container {
    /* position: relative; */
    max-width: 1160px;
    overflow-x: hidden;
    margin-bottom: 50px;
    /* min-height: 340px; */
}

.category-wrap {
    display: flex;
    gap: 20px;
    /* position: absolute; */
    top: 0;
    left: 0;
    transform: translateX(0);
}

/* @media (max-width: 1200px) {
    h1 {
        text-align: center;
    }
    .category-wrap {
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }
}

@media (max-width: 900px) {
    .category-wrap {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 750px) {
    .category-wrap {
        grid-template-columns: 1fr;
    }
} */

@media (max-width: 660px) {
    .category-container {
        margin-bottom: 30px;
    }
}
</style>
