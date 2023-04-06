export const routes = [
    {
        path: '/',
        redirect: {name: 'users'}
    },
    {
        path: '/statistics',
        name: 'statistics',
        component: () => import("@/pages/statistics.vue")
    },
    {
        path: '/users',
        name: 'users',
        component: () => import("@/pages/users.vue")
    },
    {
        path: '/rates',
        name: 'rates',
        component: () => import("@/pages/rates.vue")
    },
    {
        path: '/storerooms',
        name: 'storerooms',
        component: () => import("@/pages/storerooms.vue")
    },
    {
        path: '/stories',
        name: 'stories',
        component: () => import("@/pages/stories.vue")
    },
    {
        path: '/promo-code',
        name: 'promoCode',
        component: () => import("@/pages/promoCode.vue")
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import("@/pages/auth/auth.vue"),
        meta: {
            type: 'auth'
        }
    },
    {
        path: '/restore-password',
        name: 'restorePassword',
        component: () => import("@/pages/auth/restorePassword.vue"),
        meta: {
            type: 'auth'
        }
    },
];
