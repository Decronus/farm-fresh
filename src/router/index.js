import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import CartView from "../views/CartView.vue";
import ModalComp from "../components/ModalComp.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component: MainView,
        children: [
            {
                path: "/catalog",
                name: "modal-comp",
                component: ModalComp,
            },
        ],
    },

    {
        path: "/cart",
        name: "cart",
        component: CartView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
