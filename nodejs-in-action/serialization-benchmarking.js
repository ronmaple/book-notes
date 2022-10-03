const bytes = require('pretty-bytes')
const obj = {}
for (let i = 0; i < 200000; i++) {
  obj[i] = {
    [Math.random()]: Math.random()
  }
}

// benchmarking example - serialization and deserialization
console.time('serialise')
const jsonString = JSON.stringify(obj)
console.timeEnd('serialise')
console.log('Serialised Size', bytes(Buffer.byteLength(jsonString))) // ~10mb
console.time('deserialise')
const obj2 = JSON.parse(jsonString)
console.timeEnd('deserialise')
