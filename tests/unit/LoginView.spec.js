import { mount } from '@vue/test-utils';
import LoginView from '@/views/Auth/LoginView.vue';

test("Prueba de inicio de sesión", () => {
    const wrapper = mount(LoginView);

    expect(wrapper.html()).toContain("Iniciar Sesion");
});