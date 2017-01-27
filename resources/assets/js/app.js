
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Load vue-router
const VueRouter = require('vue-router');
Vue.use(VueRouter);

// Setup async components for some pages
const FooPage = resolve => {
    require.ensure([], require => resolve(require('./components/FooPage.vue')), 'foo');
};
const FooBarPage = resolve => {
    require.ensure([], require => resolve(require('./components/FooBarPage.vue')), 'foobar');
};

// Setup the router
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('./components/HomePage.vue')
        },
        {
            path: '/foo',
            component: FooPage
        },
        {
            path: '/foo/bar',
            component: FooBarPage
        }
    ]
});

const Example = require('./components/Example.vue');
const app = new Vue({
    el: '#app',
    router,
    render: r => r(Example)
});
