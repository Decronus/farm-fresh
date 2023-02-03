<template>
    <div>
        <div class="header-wrap">
            <h1>{{ header }} <span>→</span></h1>
            <div class="controlls">
                <div class="controlls-back-wrap" ref="refControllsBackWrap" @click="stepBack()">
                    <p>‹</p>
                </div>
                <div class="controlls-forw-wrap" ref="refControllsForwWrap" @click="stepForw()">
                    <p>›</p>
                </div>
            </div>
        </div>
        <div>
            <div class="category-container" ref="refContainer" @mousedown="mousedownEvent" @mousemove="mousemoveEvent">
                <div class="category-wrap" ref="refCategory">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
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
            isPressedDown: false,
            cursorXSpace: null,
            stepWidth: 295,
        };
    },
    methods: {
        mousedownEvent(event) {
            console.log(event);
            this.$refs.refCategory.style.transition = "none";
            this.isPressedDown = true;
            this.cursorXSpace = event.pageX - this.$refs.refCategory.offsetLeft;
        },

        mousemoveEvent(event) {
            if (!this.isPressedDown) return;
            event.preventDefault();
            this.$refs.refCategory.style.left = `${event.pageX - this.cursorXSpace}px`;
            // this.boundCards();
        },

        boundCards() {
            this.$refs.refCategory.style.transition = "all 0.2s ease-in-out";

            let containerRect = this.$refs.refContainer.getBoundingClientRect();
            let categoryRect = this.$refs.refCategory.getBoundingClientRect();

            if (parseInt(this.$refs.refCategory.style.left) > 0) {
                this.$refs.refCategory.style.left = 0;
                this.$refs.refControllsBackWrap.style.opacity = "0.4";
            } else if (categoryRect.right < containerRect.right) {
                this.$refs.refCategory.style.left = `-${categoryRect.width - containerRect.width}px`;
                this.$refs.refControllsForwWrap.style.opacity = "0.4";
            } else {
                this.$refs.refControllsBackWrap.style.opacity = "1";
                this.$refs.refControllsForwWrap.style.opacity = "1";
            }
        },

        stepBack() {
            this.$refs.refControllsForwWrap.style.opacity = "1";
            this.$refs.refCategory.style.transition = "all 0.3s ease-in-out";

            if (+this.$refs.refCategory.style.left.slice(0, this.categoryLeftLength - 2) + this.stepWidth < 0) {
                this.$refs.refCategory.style.left =
                    +this.$refs.refCategory.style.left.slice(0, this.categoryLeftLength - 2) + this.stepWidth + "px";
            } else {
                this.$refs.refCategory.style.left = 0;
                this.$refs.refControllsBackWrap.style.opacity = "0.4";
            }
        },

        stepForw() {
            this.$refs.refControllsBackWrap.style.opacity = "1";
            this.$refs.refCategory.style.transition = "all 0.3s ease-in-out";

            let containerRect = this.$refs.refContainer.getBoundingClientRect();
            let categoryRect = this.$refs.refCategory.getBoundingClientRect();

            if (categoryRect.right - this.stepWidth > containerRect.right) {
                this.$refs.refCategory.style.left =
                    +this.$refs.refCategory.style.left.slice(0, this.categoryLeftLength - 2) - this.stepWidth + "px";
            } else {
                this.$refs.refCategory.style.left = `-${categoryRect.width - containerRect.width}px`;
                this.$refs.refControllsForwWrap.style.opacity = "0.4";
            }
        },
    },

    computed: {
        categoryLeftLength() {
            return this.$refs.refCategory.style.left.length;
        },
    },

    created() {
        window.addEventListener("mouseup", () => {
            this.isPressedDown = false;
            this.boundCards();
        });
    },

    destroyed() {
        window.removeEventListener("mouseup");
    },
};
</script>

<style scoped>
.header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
}

h1 {
    font-size: 30px;
}

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
    background: #dae8d9;
    cursor: pointer;
}

.controlls p {
    margin-bottom: 2px;
}

.controlls-back-wrap {
    padding-right: 1px;
    opacity: 0.4;
}

.controlls-forw-wrap {
    padding-left: 1px;
}

.category-container {
    position: relative;
    max-width: 1160px;
    overflow: hidden;
    min-height: 340px;
}

.category-wrap {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    position: absolute;
    top: 0;
    left: 0;
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
}

@media (max-width: 600px) {
    .category-wrap {
        grid-template-columns: 1fr;
    }
} */
</style>
