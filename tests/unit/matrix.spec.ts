import { mount } from '@vue/test-utils'
import Matrix from "@/components/Matrix.vue"
import matrixApi from '../../mock/matrix.api'

describe('test api', () => {
  it('api', () => {
    return matrixApi().then(data => {
      expect(data).toMatchObject({code: 200});
    });
  })
})

describe('test matrix parser', () => {
  const matrixVm: any = mount(Matrix).vm
  it('output a random number', () => {
    expect(matrixVm.getRandom() + '').toMatch(/[0|1]/)
  })

  it('output a matrix', () => {
    const _matrix = matrixVm.parserMatrix(3, 2)
    expect(_matrix.length).toBe(3)
    expect(_matrix[0].length).toBe(2)
  })
})