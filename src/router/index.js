import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/Views/Index.vue';
import Blog from '@/Views/Blog.vue';
import Podcast from '@/Views/Podcast.vue';
import About from '@/Views/About.vue';
import Contact from '@/Views/Contact.vue';
import SearchResults from '@/Views/SearchResults.vue';
import Index from "@/Views/Index.vue";
import DangKy from "@/components/DangKy.vue";
import DangNhap from "@/components/DangNhap.vue";
import PostBlog from "@/components/PostBlog.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/blog', component: Blog },
    { path: '/podcast', component: Podcast },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/search', component: SearchResults },
    { path: '/register', component: DangKy },
    { path: '/login', component: DangNhap },
    { path: '/blogpost', component: PostBlog },

];

// Tạo router
    const router = createRouter({
        history: createWebHistory(),
        routes,
    });

router.beforeEach((to, from, next) => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (to.matched.some(record => record.meta.requiresAuth) && !loggedInUser) {
        next('/login');
    } else {
        next();
    }
});

export default router;