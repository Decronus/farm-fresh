<template>
    <div class="main">
        <category-slider header="Популярные продукты">
            <product-card v-for="(n, index) in 8" :key="index"></product-card>
        </category-slider>

        <category-slider header="Специальные предложения">
            <product-card v-for="(n, index) in 9" :key="index"></product-card>
        </category-slider>
    </div>

    <!-- Расширенная продуктовая карточка -->
    <modal-comp
        :visibility="$store.state.modalProductCardVisibility"
        @close="$store.commit('toggleModalProductCard', false)"
    >
        <product-card-extended />
    </modal-comp>
</template>

<script>
export default {
    name: "MainView",
};
</script>

<style scoped></style>
