import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest'; // Добавлен импорт vi
import HomePage from '@/components/HomePage.vue';

// Мок IntersectionObserver
global.IntersectionObserver = class {
    constructor(callback) {
        this.callback = callback;
        this.observe = vi.fn();
        this.unobserve = vi.fn();
        this.disconnect = vi.fn();
    }
    observe() { this.callback([{ isIntersecting: true }], this); }
    unobserve() {}
    disconnect() {}
};

describe('HomePage.vue', () => {
    it('renders all child components', () => {
        const $router = { push: vi.fn() }; // Мок роутера
        const wrapper = mount(HomePage, {
            global: {
                mocks: { $router },
                stubs: {
                    'router-view': true,
                    Header: true,
                    HeroSection: true,
                    Contacts: true,
                    Footer: true,
                    Eventis: true,
                    Gallery: true,
                    Testimonials: true,
                },
            },
        });

        expect(wrapper.findComponent({ name: 'Header' }).exists()).toBe(true);
        expect(wrapper.findComponent({ name: 'HeroSection' }).exists()).toBe(true);
        expect(wrapper.findComponent({ name: 'Eventis' }).exists()).toBe(true);
        expect(wrapper.findComponent({ name: 'Testimonials' }).exists()).toBe(true);
        expect(wrapper.findComponent({ name: 'Gallery' }).exists()).toBe(true);
        expect(wrapper.findComponent({ name: 'Contacts' }).exists()).toBe(true);
        expect(wrapper.findComponent({ name: 'Footer' }).exists()).toBe(true);
    });
});