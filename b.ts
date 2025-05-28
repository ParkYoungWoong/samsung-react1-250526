// import abc from './a'
// import { y } from './a'

// import abc, { y, z, type T, type U } from './a'
import abc, { y as number, z } from './a'
import type { T } from './a'

console.log(abc) // 1
console.log(number) // 3
console.log(z) // 4

const a: T = {
  a: 1
}
console.log(a)
