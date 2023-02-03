<template>
    <div class="main">
        <category-slider header="Популярные продукты">
            <product-card v-for="(n, index) in 5" :key="index"></product-card>
        </category-slider>

        <category-slider header="Специальные предложения">
            <product-card v-for="(n, index) in 9" :key="index"></product-card>
        </category-slider>
    </div>
</template>

<script>
export default {
    name: "MainView",
};
</script>

<style scoped></style>
