import { mount } from '@vue/test-utils';
import AddOrUpdateOrder from '@/views/AddOrUpdateOrder.vue';

test("Prueba de existencia del componente", () => {
    const wrapper = mount(AddOrUpdateOrder);

    expect(wrapper.exists()).toBe(true);
});