// 기본 내보내기(Default Export)
// - 1개 내보내기 가능
// - 이름이 무의미!
export default 1

// 이름 내보내기(Named Export)
// - 여러 개 내보내기 가능
// - 이름이 필수!
export const x = 2
export const y = 3
export const z = 4

export interface T {
  a: number
}
export type U = string | number

const abc = 1
