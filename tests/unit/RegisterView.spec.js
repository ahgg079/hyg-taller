import { mount } from '@vue/test-utils'
import RegisterView from '@/views/Auth/RegisterView.vue';

test("Prueba de Registro", () => {
    const wrapper = mount(<RegisterView />)

    expect(wrapper.html()).toContain("Registrarme")
});

it ("Prueba de campos iniciales", () => {
    const wrapper = mount(RegisterView);
    expect(wrapper.vm.name).toBe('');
    expect(wrapper.vm.email).toBe('');
    expect(wrapper.vm.password).toBe('');
    expect(wrapper.vm.error).toBe('');
});

it ("Prueba mensaje de error ", async () => {
    const wrapper = mount(RegisterView);
    await wrapper.vm.register();

    expect(wrapper.vm.error).toBe('Todos los campos son requeridos');
});

it ("Prueba de existencia del componente RegisterView", () => {
    const wrapper = mount(RegisterView);
    expect(wrapper.exists()).toBe(true);
});
