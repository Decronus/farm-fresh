<template>
    <div class="main">
        <category-comp header="Популярные продукты">
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
        </category-comp>
    </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import CategoryComp from "@/components/CategoryComp.vue";
export default {
    name: "MainView",
    components: { ProductCard, CategoryComp },
};
</script>
