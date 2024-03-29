export const routes = [
    {
        path: '/',
        redirect: {name: 'statistics'}
    },
    {
        path: '/statistics',
        name: 'statistics',
        component: () => import("@/pages/statistics.vue"),
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/users',
        name: 'users',
        component: () => import("@/pages/users.vue"),
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/users/:id',
        name: 'userDetail',
        component: () => import("@/pages/userDetail.vue"),
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/rates',
        name: 'rates',
        component: () => import("@/pages/rates.vue"),
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/rates/:id',
        name: 'rateDetail',
        component: () => import("@/pages/rateDetail.vue"),
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/storerooms',
        name: 'storerooms',
        component: () => import("@/pages/storerooms.vue"),
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/storerooms/:id',
        name: 'storeroomDetail',
        component: () => import("@/pages/storeroomDetail.vue"),
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/stories',
        name: 'stories',
        component: () => import("@/pages/stories.vue"),
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/create-story',
        name: 'createStory',
        component: () => import("@/pages/createStory.vue"),
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/promo-code',
        name: 'promoCode',
        component: () => import("@/pages/promoCode.vue"),
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/promo-code/:id',
        name: 'promoCodeDetail',
        component: () => import("@/pages/promoCodeDetail.vue"),
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import("@/pages/auth/auth.vue"),
        meta: {
            layout: 'auth'
        }
    },
    {
        path: '/restore-password',
        name: 'restorePassword',
        component: () => import("@/pages/auth/restorePassword.vue"),
        meta: {
            layout: 'auth'
        }
    },
    {
        path: '/send-otp',
        name: 'sendOtp',
        component: () => import("@/pages/auth/sendOtp.vue"),
        meta: {
            layout: 'auth'
        }
    },
    {
        path: '/check-otp',
        name: 'checkOtp',
        component: () => import("@/pages/auth/checkOtp.vue"),
        meta: {
            layout: 'auth'
        }
    },
];
