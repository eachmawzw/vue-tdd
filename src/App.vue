<template>
  <div id="app">
    <h1>随机矩阵：</h1>
    <matrix />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Matrix from './components/Matrix.vue';

@Component({
  components: {
    Matrix
  }
})
export default class App extends Vue {}
</script>

