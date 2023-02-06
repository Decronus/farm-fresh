<template>
    <div class="card-container" @click="$store.commit('toggleModalProductCard', true)">
        <div class="product-card-wrap">
            <div class="product-card-img-container">
                <div class="product-card-img"></div>
            </div>

            <div class="product-card-details">
                <div class="details-first-row">
                    <div class="product-name-and-provider">
                        <p class="product-name">Лосось слабосоленый</p>
                        <p class="product-provider">от ИП Гедзун А.Н.</p>
                    </div>
                    <label-comp />
                </div>
                <div class="details-second-row">
                    <button-comp
                        :title="isInCart ? '✓ В корзине' : '+ В корзину'"
                        width="114"
                        height="36"
                        fontSize="14"
                        borderRadius="100px"
                        :style="inCartStyle"
                        @click.stop="addToCart"
                    ></button-comp>
                    <div class="product-prices">
                        <div class="discount-price">
                            <p>1890 ₽/кг</p>
                        </div>
                        <div class="normal-price">
                            <p>2250 ₽/кг</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "product-card",
    data() {
        return {
            isInCart: false,
        };
    },
    methods: {
        addToCart() {
            this.$store.commit("addToCart");
            this.isInCart = true;
        },
    },

    computed: {
        inCartStyle() {
            if (this.isInCart)
                return {
                    pointerEvents: "none",
                    background: "#9EAC9D",
                    filter: "none",
                };
        },
    },
};
</script>

<style>
.card-container {
    width: 275px;
}

.product-card-wrap {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 275px;
    height: 100%;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    overflow: hidden;
    cursor: pointer;
}

.product-card-img {
    width: 100%;
    height: 160px;
    background-image: url("https://avatars.dzeninfra.ru/get-zen_doc/5308396/pub_62175f2aae05623d0f02e954_62176f138459884847653267/scale_1200");
    background-size: cover;
    border-radius: 12px 12px 0 0;
}

.product-card-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border: 1px solid #e8e8e8;
    border-top: none;
    border-radius: 0 0 12px 12px;
    padding: 10px 14px;
    gap: 10px;
}

.product-name-and-provider {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.product-provider {
    font-size: 12px;
    color: #a0a0a0;
}

.details-first-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    gap: 10px;
}

.details-second-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-prices {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.normal-price {
    color: #a0a0a0;
    text-decoration: line-through;
}

.discount-price {
    font-size: 18px;
}

/* @media (max-width: 900px) {
    .product-card-wrap {
        width: 335px;
    }
} */
</style>
