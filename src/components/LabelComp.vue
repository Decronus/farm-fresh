<template>
    <div class="label" :style="style">
        <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: "label-comp",
    props: {
        title: {
            type: String,
            required: false,
            default: "–28%",
        },
        width: {
            type: String,
            required: false,
            default: "50",
        },
        height: {
            type: String,
            required: false,
            default: "26",
        },
        fontSize: {
            type: String,
            required: false,
            default: "14",
        },
        borderRadius: {
            type: String,
            required: false,
            default: "4px",
        },
        background: {
            type: String,
            required: false,
            default: "#e65823",
        },
    },
    computed: {
        style() {
            return {
                width: this.width + "px",
                height: this.height + "px",
                fontSize: this.fontSize + "px",
                borderRadius: this.borderRadius,
                background: this.background,
            };
        },
    },
};
</script>

<style>
.label {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}
</style>
