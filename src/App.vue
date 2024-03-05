<template>
  <div id="app">
    <word-counter></word-counter>
  </div>
</template>

<script>
import WordCounter from './components/WordCounter.vue';

export default {
  name: 'App',
  components: {
    WordCounter,
  },
};
</script>

