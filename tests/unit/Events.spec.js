import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
import Eventis from '@/components/Eventis.vue';

describe('Eventis.vue', () => {
    it('navigates to /events when "Все мероприятия" is clicked', async () => {
        const $router = { push: vi.fn() }; // Мок роутера
        const wrapper = mount(Eventis, {
            global: {
                mocks: { $router },
            },
        });
        await wrapper.find('.all-events-button').trigger('click'); // Клик по кнопке "Все мероприятия"
        expect($router.push).toHaveBeenCalledWith('/events');
    });

    it('renders event cards', () => {
        const wrapper = mount(Eventis);
        const eventCards = wrapper.findAll('.event-card');
        expect(eventCards.length).toBe(3); // Проверяем, что отображается 3 карточки
        const firstCard = eventCards[0];
        expect(firstCard.find('.event-card-title').text()).toBe('8 марта'); // Проверка заголовка
        expect(firstCard.find('.event-card-date').text()).toBe('08.03.2025 | 12:00'); // Проверка даты и времени
    });

    it('navigates to event detail when "Подробнее" is clicked', async () => {
        const $router = { push: vi.fn() };
        const wrapper = mount(Eventis, {
            global: {
                mocks: { $router },
            },
        });
        const firstButton = wrapper.findAll('.event-card-button')[0];
        await firstButton.trigger('click'); // Клик по первой кнопке "Подробнее"
        expect($router.push).toHaveBeenCalledWith('/event/1'); // Проверяем переход для первого события
    });
});