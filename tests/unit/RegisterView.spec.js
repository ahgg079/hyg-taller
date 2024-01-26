import { mount } from '@vue/test-utils'
import RegisterView from '@/views/Auth/RegisterView.vue';

test("Prueba de inicio de sesion", () => {
    const wrapper = mount(<RegisterView />)

    expect(wrapper.html()).toContain("Registrarme")
})