<template>
    <div class="header-wrap">
        <h1>{{ header }} <span>→</span></h1>
        <div class="controlls">
            <div class="controlls-back-wrap">
                <p>‹</p>
            </div>
            <div class="controlls-forw-wrap">
                <p>›</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="category-wrap">
            <slot></slot>
        </div>
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
.header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
}

h1 {
    font-size: 30px;
}

h1 span {
    cursor: pointer;
}

.controlls {
    display: flex;
    gap: 10px;
}

.controlls div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #dae8d9;
    cursor: pointer;
}

.controlls p {
    margin-bottom: 2px;
}

.controlls-back-wrap {
    padding-right: 1px;
}

.controlls-forw-wrap {
    padding-left: 1px;
}

/* .elem {
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
} */

.container {
    position: relative;
    max-width: 1160px;
    overflow-x: hidden;
}

.category-wrap {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    position: absolute;
    top: 0;
    left: 0;
}

/* .category-wrap::-webkit-scrollbar {
    width: 0;
    height: 0;
} */

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
