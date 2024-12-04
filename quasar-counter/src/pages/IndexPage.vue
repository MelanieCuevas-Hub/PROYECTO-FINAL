<template>
  <q-page 
    v-touch-pan.vertical.prevent.mouse="handlePan"
    class="flex flex-center text-black">
    <div class="row">
      <q-input
        v-model="data.name"
        input-class="text-center text-h5 text-black"
        color="orange"
        placeholder="Counter"
        filled 
      />
    </div>
    <div class="row full-width items-center">
      <div class="col text-center">
        <q-btn
          @click="decreaseCouter"
          v-touch-repeat:300:300:300:300:50.mouse="decreaseCouter"
          icon="remove_circle_outline"
          size="xl"
          round 
        />
      </div>
      <div class="col text-center text-h2">
        <span 
          :key="animationKey"
          class="animated-number"
        >
          {{ data.counter }}
        </span>
      </div>
      <div class="col text-center">
        <q-btn
          @click="increaseCouter"
          v-touch-repeat:300:300:300:300:50.mouse="increaseCouter"
          icon="add_circle_outline"
          size="xl"
          round 
        />
      </div>
    </div>
    <div class="row">
      <q-btn
        @click="resetCouter"
        icon="restart_alt"
        size="xl"
        round 
      />
    </div>
    <div v-if="inspirationalMessage" class="row text-center q-mt-md">
      <q-banner dense class="bg-primary text-white">
        {{ inspirationalMessage }}
      </q-banner>
    </div>
  </q-page>
</template>

<style scoped>
.q-page {
  max-width: 700px;
  margin: 0 auto;
}

.animated-number {
  display: inline-block;
  animation: pop 0.5s ease-in-out;
}

@keyframes pop {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>

<script setup>
// Imports
import { reactive, watch, computed, ref } from 'vue';
import { useQuasar } from 'quasar';

// Quasar instance
const $q = useQuasar();

// Data
const data = reactive({
  counter: 0,
  name: ''
});

const animationKey = ref(0);

const messages = [
  { value: 5, message: "¡Sigue así! 🚀" },
  { value: 10, message: "¡Eres increíble! 🌟" },
  { value: 20, message: "¡No te detengas! 💪" },
  { value: 50, message: "¡Eres imparable! 🔥" },
  { value: 100, message: "¡Meta alcanzada! 🎉🎯" },
];

// State for the inspirational message
const inspirationalMessage = computed(() => {
  const message = messages.find((m) => m.value === data.counter);
  return message ? message.message : null;
});

// Load saved data
const savedData = $q.localStorage.getItem('data');
if (savedData) Object.assign(data, savedData);

// Watch data to save updates
watch(data, (value) => {
  $q.localStorage.set('data', value);
});

// Counter methods
const increaseCouter = () => {
  data.counter++;
  triggerAnimation();
};

const decreaseCouter = () => {
  if (data.counter > 0) {
    data.counter--;
    triggerAnimation();
  }
};

const resetCouter = () => {
  data.counter = 0;
  triggerAnimation();
};

// Handle touch pan
const handlePan = (e) => {
  if (e.delta.y < 0) increaseCouter();
  else decreaseCouter();
};

// Trigger animation
const triggerAnimation = () => {
  animationKey.value++;
};
</script>
