import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
import Gallery from '@/components/Gallery.vue';

describe('Gallery.vue', () => {
    it('navigates to /gallery when "Вся галерея" is clicked', async () => {
        const $router = { push: vi.fn() }; // Мок роутера
        const wrapper = mount(Gallery, {
            global: {
                mocks: { $router },
            },
        });
        await wrapper.find('button').trigger('click'); // Клик по кнопке
        expect($router.push).toHaveBeenCalledWith('/gallery');
    });

    it('renders gallery images', () => {
        const wrapper = mount(Gallery);
        const images = wrapper.findAll('img');
        expect(images.length).toBe(5); // Проверяем, что отображается 5 изображений
        expect(images[0].attributes('src')).toBe('/src/images/galery1.png'); // Обновлен путь
        expect(images[0].attributes('alt')).toBe('Событие 1'); // Проверка атрибута alt
    });
});