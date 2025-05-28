interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  color: 'primary' | 'secondary' | 'danger'
}
// type Props = React.InputHTMLAttributes<HTMLInputElement> &
//   React.FormHTMLAttributes<HTMLFormElement>

export default function Input({ color, ...restProps }: Props) {
  return (
    <form>
      <input {...restProps} />
    </form>
  )
}

// interface A {
//   color: number
// }
// interface B {
//   inputAttrs: number
// }

// const ab: A & B = {
//   color: 1,
//   inputAttrs: 2
// }

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// const { a, ...rest } = obj
// console.log(a) // 1
// console.log(rest) // { b: 2, c: 3 }

// const nums = [1, 2, 3, 4, 5]
// const [a, ...xyz] = nums
// console.log(b) // 2
// console.log(xyz) // [2, 3, 4, 5]
