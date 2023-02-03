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
            required: false,
        },
        width: {
            type: String,
            required: false,
            default: "140",
        },
        height: {
            type: String,
            required: false,
            default: "50",
        },

        fontSize: {
            type: String,
            required: false,
            default: "16",
        },
        borderRadius: {
            type: String,
            required: false,
            default: "12",
        },
    },
    computed: {
        style() {
            return {
                width: this.width + "px",
                height: this.height + "px",
                fontSize: this.fontSize + "px",
                borderRadius: this.borderRadius + "px",
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
    filter: drop-shadow(0px 4px 6px rgba(87, 192, 83, 0.5));
}

.button-title {
    margin-left: 10px;
}

.button:hover {
    background: #4bb248;
}
</style>
