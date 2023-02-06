<template>
    <h1 class="cart-header">Корзина</h1>
    <product-card-in-cart v-for="(card, index) in 3" :key="index" />
</template>

<script>
export default {};
</script>

<style>
.cart-header {
    font-size: 30px;
    margin-bottom: 14px;
}
</style>
