<script setup>
import {firestore } from '../firebase/init'
import { getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
import { ref, onMounted } from 'vue';

// Almacenar la lista de órdenes
const ordenes = ref([])

// Componente de agregar o actualizar orden
const show = ref(false)

// Almacenar datos de una orden específica
const data = ref({})

// Indicar si se está creando una nueva orden o actualizando una existente
const isNew = ref(true)

onMounted(async() =>{
  // Obtener las órdenes de la colección 'ordenes' y almacenarlas en la 'Firesbase'
    let ordenesCollection = await getDocs(collection(firestore, 'ordenes'))
    ordenesCollection.forEach((orden) =>{
        ordenes.value.push({...orden.data(), id: orden.id})
    })
})

// Función para agregar o actualizar orden
function tooggleComponent(docData = {}, isNewDoc = true){
    data.value = docData
    isNew.value = isNewDoc
    show.value = !show.value
}

// Función para eliminar un registro de la base de datos
async function deleteRecord(id) {
  if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
    await deleteDoc(doc(firestore, 'ordenes', id))
    location.reload();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Funciones para abrir y cerrar un modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Agregar un evento da clic en los botones para abrir un modal específico
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

   // Agregar un evento de clic en varios elementos secundarios para cerrar el modal padre
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeAllModals();
    }
  });
});
</script>
<template>
  <div class="container is-widescreen">
     <!-- Codigo para agregar o actualizar órdenes -->
    <add-or-update-order @close="tooggleComponent" v-if="show" :data="data" :isNew="isNew"></add-or-update-order>
<br>
    <img src="../assets/latonero.jpg" class="custom-image"/>
    
<br>
<!-- Botón para agregar una nueva orden -->
    <button @click="tooggleComponent()" class="button is-success">Adicionar Orden de Servicio</button>
    <hr>
    <!-- Tabla para mostrar las órdenes existentes -->
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
            <tr>
            <th>Fecha</th>
            <th><abbr title="Nombre">Nombre</abbr></th>
            <th>Modelo</th>
            <th>Placa</th>            
            <th><abbr title="Played">Tipo de Servicio</abbr></th>
            <th><abbr title="Played">Valor</abbr></th>
            <th><abbr title="Played">Actualizar</abbr></th>
            <th><abbr title="Played">Eliminar</abbr></th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="orden in ordenes" :key="orden.id" @click="tooggleComponent(orden, false)">
            <td> {{ orden.fecha }}</td>
            <td> {{ orden.nombre }}</td>
            <td> {{ orden.modelo }}</td>
            <td> {{ orden.placa }}</td>
            <td>{{ orden.tiposervicio }}</td>
            <td>${{ orden.valor }}</td>
            <td> <button  class="button is-info" @click.stop="tooggleComponent(orden, false)">
            <span>Actualizar</span>
            </button></td>
            <!-- Botón para eliminar una orden -->
            <td> <button  class="button is-danger" @click.stop="deleteRecord(orden.id)">
            <span>Eliminar</span>
            </button></td>
            </tr>
        </tbody>
    </table>
  </div>
   
</template>
<style scoped>
.custom-image {
  /* Estilo para ajustar el tamaño de la imagen */
  width: 1200px;
  height: 180px;
  
}
</style>

<script>
  import AddOrUpdateOrder from '../views/AddOrUpdateOrder.vue';

  export default {
    name: 'App',
    components: {
        AddOrUpdateOrder,
    }
  };
</script>