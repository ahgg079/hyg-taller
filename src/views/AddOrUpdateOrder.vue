<script setup>
import  {defineComponent,  ref, onMounted} from 'vue'
import {firestore } from '../firebase/init'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';

// Propiedades del componente 
const  props = defineProps({
    data: Object,
    isNew: Boolean
})
// Definición del componente
defineComponent({
    name: 'AddOrUpdateOrder'
})

// const para cerrar el componente
const emits = defineEmits(['close'])

onMounted(()=>{
    order.value = {...order.value, ...props.data}
})

const order = ref({
    fecha :'',
    nombre :'',
    modelo :'',
    marca : '',
    tiposervicio : ''
})

// Función para agregar o actualizar la orden
async function addOrUpdate(){
    console.log(props.isNew)
    if(props.isNew){
         // Agregar una nueva orden a la colección 'ordenes'
        await addDoc(collection(firestore, 'ordenes'), order.value ).then((res) =>{
            emits('close')
        })
    }
    else{
         // Actualizar una orden existente
        await updateDoc(doc(firestore, 'ordenes', props.data.id), order.value).then((res) =>{
            emits('close')
        })
    }
    
    location.reload();
}
 // Codigo para Agregar orden de Servicio
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
                        <label class="label">Fecha</label>
                        <div class="control">
                            <input type="date" v-model="order.fecha" />
                        </div>
                    </div>
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
                        <label class="label">Placa</label>
                        <div class="control">
                            <input class="input" type="text" maxlength="6" v-model="order.placa" placeholder="Text input">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Tipo de Servicio</label>
                        <div class="control">
                            <input class="input" type="text" v-model="order.tiposervicio" placeholder="Text input">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Valor</label>
                        <div class="control">
                            <input class="input" type="number" v-model="order.valor" placeholder="$">
                            
                        </div>
                        
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <!-- Botones para actualizar o cancelar los cambios -->
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