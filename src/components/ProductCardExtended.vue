<template>
    <div class="product-card-extended-wrap">
        <div class="product-card-extended-img-and-details">
            <div class="product-card-extended-img"></div>
            <div class="product-card-extended-details">
                <div class="details-name-and-provider">
                    <p class="details-name">Лосось с/с</p>
                    <p class="details-provider">от ИП Гедзун А.Н.</p>
                </div>
                <div class="details-desc">
                    <p class="details-composition">
                        <span>Состав: </span>лосось, соль, розмарин, перец чёрный, перец, душистый, лимон.
                    </p>
                    <p class="details-definition"><span>Описание: </span>нежный слабосоленый норвежский лосось.</p>
                </div>
                <div class="details-prices-and-button">
                    <div class="details-prices">
                        <label-comp width="54" height="24" fontSize="16" />
                        <div class="details-discount-price">
                            <p>1890 ₽/кг</p>
                        </div>
                        <div class="details-normal-price">
                            <p>2250 ₽/кг</p>
                        </div>
                    </div>
                    <button-comp
                        title="+ В корзину"
                        width="136"
                        height="40"
                        fontSize="16"
                        borderRadius="100px"
                        @click.stop
                    ></button-comp>
                </div>
            </div>
        </div>
        <div class="product-card-extended-footer">
            <p class="details-definition"><span>Масса: </span>200 г.</p>
            <p class="details-definition">
                <span>Пищевая ценность: </span>белки - 16,6 г., жиры - 7,7 г., углеводы - 5,7 г., на 100 г.
            </p>
            <p class="details-definition"><span>Энергетическая ценность: </span>158 ккал/661,45 кДж.</p>
            <p class="details-definition"><span>Срок годности: </span>30 суток.</p>
            <p class="details-definition"><span>Условия хранения: </span>при температуре от -18 °С.</p>
            <p class="details-definition"><span>Упаковка: </span>контейнер.</p>
            <p class="details-definition"><span>Место происхождения: </span>область Московская, Талдомский район.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "product-card-extended",
};
</script>

<style scoped>
.product-card-extended-wrap {
    max-width: 948px;
    /* padding: 50px; */
    /* overflow: visible; */
}

.product-card-extended-img-and-details {
    display: flex;
    gap: 32px;
    /* margin-bottom: 50px; */
}

.product-card-extended-img {
    width: 600px;
    height: 400px;
    background-image: url("https://avatars.dzeninfra.ru/get-zen_doc/5308396/pub_62175f2aae05623d0f02e954_62176f138459884847653267/scale_1200");
    background-size: cover;
    background-position: center;
    border-radius: 12px 0 0 0;
    /* margin-left: -50px;
    margin-top: -50px; */
}

.product-card-extended-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    width: 400px;
    margin: 50px 50px 0 0;
}

.details-name-and-provider {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.details-name {
    font-size: 24px;
}

.details-provider {
    font-weight: 400;
    font-size: 16px;
    color: #a0a0a0;
}

.details-desc {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    text-align: left;
    gap: 16px;
}
.details-definition {
    font-weight: 400;
}

.details-composition span,
.details-definition span {
    font-weight: 500;
}

.details-prices-and-button {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.details-prices {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
}

.details-discount-price {
    font-weight: 400;
    font-size: 32px;
}

.details-normal-price {
    font-weight: 400;
    font-size: 18px;
    text-decoration-line: line-through;
    color: #a0a0a0;
}
.product-card-extended-footer {
    border-radius: 0px 0px 20px 20px;
    padding: 26px 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    text-align: left;
}

@media (max-width: 768px) {
    .product-card-extended-img-and-details {
        flex-direction: column;
    }

    .product-card-extended-details {
        margin: 0 50px 50px 50px;
    }
    .product-card-extended-img {
        width: 100%;
        height: 300px;
        border-radius: 12px 12px 0 0;
    }

    .product-card-extended-footer {
        padding: 0 50px 100px 50px;
    }
}
</style>
