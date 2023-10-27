<script setup>
import  {defineComponent,  ref} from 'vue'
import {firestore } from '../firebase/init'
import { addDoc, collection } from 'firebase/firestore';

const  props = defineProps({
    data: Object,
    isNew: Boolean
})
defineComponent({
    name: 'AddOrUpdateOrder'
})

const emits = defineEmits(['close'])

const order = ref({
    nombre :'',
    marca : '',
    tiposervicio : ''
})

async function addOrUpdate(){
    console.log(props.isNew)
    if(props.isNew){
        await addDoc(collection(firestore, 'ordenes'), order.value ).then((res) =>{
            emits('close')
        })
    }
}

</script>
<template>
    <transition name="modal">
        <div class="modal is-active" >
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Agregar Orden</p>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <label class="label">Nombre del Cliente</label>
                        <div class="control">
                            <input class="input" type="text" v-model="order.nombre" placeholder="Text input">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Modelo</label>
                        <div class="control">
                            <input class="input" type="text" v-model="order.modelo" placeholder="Text input">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Tipo de Servicio</label>
                        <div class="control">
                            <input class="input" type="text" v-model="order.tiposervicio" placeholder="Text input">
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                <button @click="addOrUpdate()"  class="button is-success">{{isNew  ? 'Crear' : 'Actualizar' }}</button>
                <button @click="emits('close')" class="button">Cancelar</button>
                </footer>
            </div>
        </div>
    </transition>
</template>
<script>
  export default {
    name: 'AddOrUpdateOrder',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
  

</script>