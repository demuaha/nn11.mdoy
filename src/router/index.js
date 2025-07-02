import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import EventsPage from '../components/EventsPage.vue';
import GalleryPage from '../components/GalleryPage.vue';

const routes = [
    { path: '/', name: 'HomePageRoute', component: HomePage },
    { path: '/events', name: 'EventsPageRoute', component: EventsPage },
    { path: '/gallery', name: 'GalleryPageRoute', component: GalleryPage },
    { path: '/event/:id', name: 'EventDetailRoute', component: EventsPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;