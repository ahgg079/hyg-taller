<script setup>
import {firestore } from '../firebase/init'
import { getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
import { ref, onMounted } from 'vue';

const ordenes = ref([])

const show = ref(false)

const data = ref({})

const isNew = ref(true)

onMounted(async() =>{
    let ordenesCollection = await getDocs(collection(firestore, 'ordenes'))
    ordenesCollection.forEach((orden) =>{
        ordenes.value.push({...orden.data(), id: orden.id})
    })
})

function tooggleComponent(docData = {}, isNewDoc = true){
    data.value = docData
    isNew.value = isNewDoc
    show.value = !show.value
}

async function deleteRecord(id){
  await deleteDoc(doc(firestore, 'ordenes', id))
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
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

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeAllModals();
    }
  });
});
</script>
<template>
  <div class="container is-widescreen">
    <add-or-update-order @close="tooggleComponent" v-if="show" :data="data" :isNew="isNew"></add-or-update-order>
<br>
    <button @click="tooggleComponent()" class="button is-success">Adicionar Orden de Servicio</button>
    <hr>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
            <tr>
            <th><abbr title="Nombre">Nombre</abbr></th>
            <th>Modelo</th>
            <th><abbr title="Played">Tipo de Servicio</abbr></th>
            <th><abbr title="Played">Actualizar</abbr></th>
            <th><abbr title="Played">Eliminar</abbr></th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="orden in ordenes" :key="orden.id" @click="tooggleComponent(orden, false)">
            <th> {{ orden.nombre }}</th>
            <td> {{ orden.modelo }}
            </td>
            <td>{{ orden.tiposervicio }}</td>
            <td> <button  class="button is-info" @click.stop="tooggleComponent(orden, false)">
            <span>Actualizar</span>
            </button></td>
            <td> <button  class="button is-danger" @click.stop="deleteRecord(orden.id)">
            <span>Eliminar</span>
            </button></td>
            </tr>
        </tbody>
    </table>
  </div>
   
</template>

<script>
  import AddOrUpdateOrder from '../views/AddOrUpdateOrder.vue';

  export default {
    name: 'App',
    components: {
        AddOrUpdateOrder,
    }
  };
</script>