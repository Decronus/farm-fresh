<template>
    <div class="cart-product-wrap">
        <div class="cart-product-img-and-info">
            <div class="cart-product-img"></div>
            <div class="cart-product-info">
                <div class="cart-product-name">Сыр «Камамбер»</div>
                <!-- <div class="cart-product-provider">от ООО «Сырский дом»</div> -->
                <div class="cart-product-price">1990 ₽/кг</div>
            </div>
        </div>
        <div class="cart-amount-controlls">
            <div class="cart-amount-controlls-decrement">-</div>
            <p>1000&nbsp;г</p>
            <div class="cart-amount-controlls-increment">+</div>
        </div>
        <p class="cart-product-position-total-amount">1990&nbsp;₽</p>
        <div class="cart-delete-position">
            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.14286 19.5556C1.14286 20.9 2.17143 22 3.42857 22H12.5714C13.8286 22 14.8571 20.9 14.8571 19.5556V4.88889H1.14286V19.5556ZM16 1.22222H12L10.8571 0H5.14286L4 1.22222H0V3.66667H16V1.22222Z"
                    fill="#D2D2D2"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "product-card-in-cart",
};
</script>

<style>
.cart-product-wrap {
    display: grid;
    padding-bottom: 14px;
    margin-bottom: 14px;
    border-bottom: 1px solid #d2d2d2;
    grid-template-columns: 3fr 1fr 1fr 0fr;
    column-gap: 20px;
    align-items: center;
}

.cart-product-img-and-info {
    display: flex;
    gap: 20px;
    text-align: left;
}

.cart-product-img {
    height: 100px;
    width: 160px;
    border-radius: 12px;
    background-image: url("https://podacha-blud.com/uploads/posts/2022-10/1665571779_11-podacha-blud-com-p-sir-fud-foto-12.jpg");
    background-position: center;
    background-size: cover;
    flex-shrink: 0;
}

.cart-product-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

.cart-product-name {
    font-weight: 500;
    font-size: 16px;
    color: #2e2e34;
}

/* .cart-product-provider {
    font-weight: 400;
    font-size: 14px;
    color: #a0a0a0;
} */

.cart-product-price {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #2e2e34;
}

.cart-amount-controlls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.cart-amount-controlls div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    cursor: pointer;
    flex-shrink: 0;
}

.cart-amount-controlls div:hover {
    background: #57c053;
    color: #ffffff;
    border: none;
}

.inactive {
    pointer-events: none;
    opacity: 0.4;
}

.cart-amount-controlls p {
    font-weight: 400;
    font-size: 16px;
}

.cart-product-position-total-amount {
    font-size: 16px;
}

.cart-delete-position {
    cursor: pointer;
}

@media (max-width: 660px) {
    .cart-product-img-and-info {
        flex-direction: column;
        gap: 8px;
    }

    .cart-product-info {
        gap: 0;
    }

    .cart-product-wrap {
        grid-template-columns: 2fr 1fr 1fr 0fr;
    }

    .cart-product-provider {
        font-size: 12px;
    }

    .cart-product-price {
        font-size: 16px;
    }

    .cart-product-img {
        height: 80px;
        width: 80px;
    }

    .cart-amount-controlls p,
    .cart-product-position-total-amount {
        font-size: 14px;
    }

    .cart-delete-position svg {
        width: 12px;
        margin-top: 2px;
    }
}
</style>
