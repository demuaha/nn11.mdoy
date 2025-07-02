import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
import { nextTick } from 'vue';
import Testimonials from '@/components/Testimonials.vue';

describe('Testimonials.vue', () => {
    it('automatically switches slides every 4 seconds', async () => {
        vi.useFakeTimers(); // Используем мок для таймеров
        const wrapper = mount(Testimonials);
        expect(wrapper.vm.currentIndex).toBe(0);
        vi.advanceTimersByTime(4000); // Пропускаем 4 секунды
        await nextTick();
        expect(wrapper.vm.currentIndex).toBe(1);
        vi.useRealTimers(); // Восстанавливаем реальные таймеры
    });

    it('renders correct number of dots and updates active dot on click', async () => {
        const wrapper = mount(Testimonials);
        const dots = wrapper.findAll('.dot');
        expect(dots.length).toBe(4); // Проверяем, что отображается 4 точки
        expect(dots[0].classes()).toContain('active'); // Первая точка активна изначально

        await dots[1].trigger('click'); // Клик по второй точке
        await nextTick();
        expect(wrapper.vm.currentIndex).toBe(1);
        expect(dots[1].classes()).toContain('active');
        expect(dots[0].classes()).not.toContain('active');
    });

    it('renders feedback section', () => {
        const wrapper = mount(Testimonials);
        const feedback = wrapper.find('.feedback');
        expect(feedback.exists()).toBe(true);
        expect(feedback.find('.title').text()).toBe('ОТЗЫВЫ');
        expect(feedback.find('p').text()).toContain('От лица Родителей и детей группы «Ромашка»');
        expect(feedback.find('.name p').text()).toBe('Елена');
    });
});