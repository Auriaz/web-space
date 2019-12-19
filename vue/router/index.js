import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import auth from "../firebase/auth"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { requiresGuest: true },
  },
  {
    path: "/projects",
    name: "projects",
    meta: { requiresGuest: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Projects.vue")
  },
  {
    path: "/team",
    name: "team",
    meta: { requiresGuest: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Team.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue")
  },
  {
    path: "/dashboard/calendar",
    name: "calendar",
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Calendar.vue")
  },
  {
    path: "/accounts",
    name: "accounts",
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Accounts.vue")
  },
  {
    path: "/account",
    name: "account",
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Account.vue")
  },
  {
    path: "/settings",
    name: "settings",
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Settings.vue")
  },
  {
    path: "/inbox",
    name: "inbox",
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Inbox.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Guards
router.beforeEach((to, from, next)=> {
  // check for requiresAuth guard
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest);
  const isAuthenticated = true;



  if (requiresAuth) {
    // Check if Not legged in
    if (!isAuthenticated) {
      // Go to homepage
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });

    } else {
      // Proceed to rout
      next();
    }
  } else if (requiresGuest) {
    // Check if legged in
    if (isAuthenticated) {
      next();
    } else {
      // Proceed to rout
      next();
    }
  } else {
    // Proceed to rout
    next();
  }
})

// router.beforeResolve((to, from, next) => {
//   // If this isn't an initial page load.
//   if (to.name) {
//     // Start the route progress bar.
//     VPreloader.start()
//   }
//   next()
// })

// router.afterEach(() => {
//   // Complete the animation of the route progress bar.
 
//   VPreloader.done()
  

// })

export default router
