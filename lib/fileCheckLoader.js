exports.default =  (function () {
  let count = 0
  return function (source) {
    count++
    // console.log('here source', source)
    console.log('this', this.resourcePath)
    return source
  }
})()