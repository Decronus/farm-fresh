<template>
    <div class="header-wrap">
        <h1>{{ header }} <span>→</span></h1>
        <div class="controlls">
            <div class="controlls-back-wrap">
                <p>‹</p>
            </div>
            <div class="controlls-forw-wrap">
                <p>›</p>
            </div>
        </div>
    </div>
    <div class="container" ref="refContainer" @mousedown="mousedownEvent" @mousemove="mousemoveEvent">
        <div class="category-wrap" ref="refCategory">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "category-comp",
    props: {
        header: {
            type: String,
        },
    },
    data() {
        return {
            isPressedDown: false,
            cursorXSpace: null,
        };
    },
    methods: {
        mousedownEvent(event) {
            this.isPressedDown = true;
            this.cursorXSpace = event.pageX - this.$refs.refCategory.offsetLeft;
        },

        mousemoveEvent(event) {
            if (!this.isPressedDown) return;
            event.preventDefault();
            this.$refs.refCategory.style.left = `${event.pageX - this.cursorXSpace}px`;
            this.boundCards();
        },

        boundCards() {
            let containerRect = this.$refs.refContainer.getBoundingClientRect();
            let categoryRect = this.$refs.refCategory.getBoundingClientRect();

            if (parseInt(this.$refs.refCategory.style.left) > 0) {
                this.$refs.refCategory.style.left = 0;
            } else if (categoryRect.right < containerRect.right) {
                this.$refs.refCategory.style.left = `-${categoryRect.width - containerRect.width}px`;
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
}

.controlls-forw-wrap {
    padding-left: 1px;
}

/* .elem {
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
} */

.container {
    position: relative;
    max-width: 1160px;
    overflow-x: hidden;
}

.category-wrap {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    position: absolute;
    top: 0;
    left: 0;
}

/* .category-wrap::-webkit-scrollbar {
    width: 0;
    height: 0;
} */

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
