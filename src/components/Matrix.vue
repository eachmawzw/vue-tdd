<template>
  <div id="matrix">
    <table border="1">
      <tr v-for="(row, i) in matrixList" :key="i">
        <td v-for="(col, _i) in row" :key="_i" :class="col === 1 ? 'grey' : ''">{{col}}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import matrixApi from '../../mock/matrix.api'
@Component({})
export default class Matrix extends Vue {
  mounted() {
    this.getMatrixParams()
  }
  data() {
    return {
      matrixList: [[1, 2], [2, 2]]
    }
  }
  getMatrixParams(): void {
    matrixApi().then(res => {
      if (res.code === 200) {
        this.matrixList = this.parserMatrix(res.data.row, res.data.col)
      }
    })
  }
  parserMatrix(row: number, col: number): any {
    const matrix = []
    for (let i=0; i<row; i++) {
      const rolArr = []
      for(let j=0; j<col; j++) {
        rolArr.push(this.getRandom())
      }
      matrix.push(rolArr)
    }
    return matrix
  }
  getRandom(): number {
    return Math.random() < 0.5 ? 0 : 1
  }
}
</script>

<style lang="scss">
table {
  border-spacing: 0;
  td {
    width: 20px;
    height: 20px;
    text-align: center;
  }
}
.grey {
  background-color: #c9c9c9;
}
</style>