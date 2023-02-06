<template>
    <h1 class="cart-header">{{ $store.state.productsInCart.length > 0 ? "Корзина" : "Корзина пуста!" }}</h1>
    <div v-if="$store.state.productsInCart.length > 0">
        <product-card-in-cart v-for="(card, index) in 3" :key="index" />
    </div>
    <p v-else class="cart-no-items-desc">Но так быть не должно. Переходите в каталог, делайте заказы.</p>
</template>

<script>
export default {};
</script>

<style>
.cart-no-items-desc {
    font-weight: 400;
}
</style>
