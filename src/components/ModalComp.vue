<template>
    <transition name="modal">
        <div class="modal-background" v-if="visibility" @click="$emit('close')">
            <div class="modal-component-wrap" @click.stop>
                <div class="close-icon" @click="$emit('close')">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z"
                            fill="#D8D8D8"
                        />
                    </svg>
                </div>

                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "modal-comp",
    props: {
        visibility: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        visibility() {
            this.visibility ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
        },
    },
};
</script>

<style>
.modal-background {
    position: fixed;
    display: flex;
    width: 100%;
    height: 110%;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
}

.modal-component-wrap {
    position: relative;
    min-width: 300px;
    min-height: 200px;
    background: #ffffff;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    margin-bottom: 10%;
}

.close-icon {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
}

.modal-enter-active {
    transition: all 0.3s ease-out;
}

.modal-leave-active {
    transition: all 0.3s ease-out;
}

.modal-enter-from,
.modal-leave-to {
    transform: translateY(-70px);
    opacity: 0;
}
</style>
