import { mount } from '@vue/test-utils';
import DashboardView from '@/views/DashboardView.vue';

test("Prueba de existencia del componente", () => {
    const wrapper = mount(DashboardView);

    expect(wrapper.exists()).toBe(true);
});

it ("Prueba adicionar Orden de Servicio", () => {
    const wrapper = mount(DashboardView);

    expect(wrapper.html()).toContain("Adicionar Orden de Servicio");
});

  