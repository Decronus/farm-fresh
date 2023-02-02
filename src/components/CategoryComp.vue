<template>
    <h1>{{ header }}</h1>
    <div class="category-wrap">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "category-comp",
    props: {
        header: {
            type: String,
        },
    },
};
</script>

<style>
h1 {
    margin-bottom: 10px;
}

.elem {
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.category-wrap {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    overflow-x: auto;
}

.category-wrap::-webkit-scrollbar {
    width: 0;
    height: 0;
}

/* @media (max-width: 1200px) {
    h1 {
        text-align: center;
    }
    .category-wrap {
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }
}

@media (max-width: 900px) {
    .category-wrap {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 750px) {
    .category-wrap {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .category-wrap {
        grid-template-columns: 1fr;
    }
} */
</style>
