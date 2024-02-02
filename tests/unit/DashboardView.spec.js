import { mount } from '@vue/test-utils';
import DashboardView from '@/views/DashboardView.vue';

test("Prueba de existencia del componente", () => {
    const wrapper = mount(DashboardView);

    expect(wrapper.exists()).toBe(true);
});

