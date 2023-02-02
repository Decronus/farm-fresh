<template>
    <div class="button" :style="style">
        <slot></slot>
        <p v-if="title">{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: "button-comp",
    props: {
        title: {
            type: String,
        },
        width: {
            type: String,
            default: "140",
        },
        height: {
            type: String,

            default: "50",
        },
    },
    computed: {
        style() {
            return {
                width: this.width + "px",
                height: this.height + "px",
            };
        },
    },
};
</script>

<style scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #57c053;
    color: #ffffff;
    border-radius: 12px;
    cursor: pointer;
    flex-shrink: 0;
    font-weight: 500;
}

.button-title {
    margin-left: 10px;
}

.button:hover {
    background: #4bb248;
}
</style>
