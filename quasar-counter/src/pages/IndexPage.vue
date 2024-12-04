<template>
  <q-page 
    v-touch-pan.vertical.prevent.mouse="handlePan"
  class="flex flex-center text-black">

  <div class="row">
  <q-input 
  v-model="data.name"
  imput-class="text-center text-h5 text-white"
  color="teal"
  placeholder="Counter" 
  filled  
  />
  </div>
  <div class="row full-width items-center">
  <div class="col text-center">
  <q-btn 
  @click="decreaseCounter"
  v-touch-repeat:300:300:300:300:50.
  mouse="decreaseCouter"
  icon="remove" 
  size="xl"

  round
  />
  </div> 
  <div class="col text-center text-h2">
  {{ data.counter }}
  </div> 
  <div class="col text-center">
  <q-btn 
  @click="increaseCounter"
  v-touch-repeat:300:300:300:300:50.
  mouse="increaseCouter"
  icon="add_circle" 
  size="xl"
  round
  />
  </div> 
  </div>
  <div class="row">
  <q-btn 
  @click="resetCounter"
  icon="restart_alt" 
  size="xl"
  round
  />
  </div>
  </q-page>
</template>

<style scoped>
.q-page {
  max-width: 700px;
  margin: 0 auto;
}
</style>

<script setup>

import { reactive } from 'vue'

const data = reactive({
  counter: 0,
  name: ''
})

const increaseCounter = () => {
  data.counter++
}

const decreaseCounter = () => {
  if (data.counter > 0) data.counter--
}

const resetCounter = () => {
  data.counter = 0
}

const handlePan = () => {
  console.log(e.delta.y)
  if (e.delta.y < 0) increaseCouter()
  else decreaseCouter()
}

</script>
