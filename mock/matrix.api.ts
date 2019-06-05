const matrixApi = function() {
  return new Promise((resolve) => {
    resolve({
      code: 200,
      data: {
        row: 10,
        col: 10
      }
    })
  })
}
export default matrixApi