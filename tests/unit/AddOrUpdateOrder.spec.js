import { mount } from '@vue/test-utils';
import AddOrUpdateOrder from '@/views/AddOrUpdateOrder.vue';

test("Prueba de existencia del componente", () => {
    const wrapper = mount(AddOrUpdateOrder);

    expect(wrapper.exists()).toBe(true);
});

it ("Prueba para agregar orden", () => {
    const wrapper = mount(AddOrUpdateOrder);

    expect(wrapper.html()).toContain("Agregar Orden");
});

it ("Prueba para Tipo de Servicio", () => {
    const wrapper = mount(AddOrUpdateOrder);

    expect(wrapper.html()).toContain("Tipo de Servicio");
});