<script setup>
import {firestore } from '../firebase/init'
import { getDocs, collection } from 'firebase/firestore';
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
    <add-or-update-order @close="tooggleComponent" v-if="show" :data="data" :isNew="isNew"></add-or-update-order>
    <button @click="tooggleComponent()">Add New</button>
    <table class="table">
        <thead>
            <tr>
            <th><abbr title="Nombre">Nombre</abbr></th>
            <th>Modelo</th>
            <th><abbr title="Played">Tipo de Servicio</abbr></th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="orden in ordenes" :key="orden.id">
            <th> {{ orden.nombre }}</th>
            <td> {{ orden.modelo }}
            </td>
            <td>{{ orden.tiposervicio }}</td>
            </tr>
        </tbody>
    </table>
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