interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.RefObject<HTMLInputElement | null>
  color?: 'primary' | 'secondary' | 'danger'
}

export default function Input({ ref, color, ...restProps }: Props) {
  console.log(color)
  return (
    <>
      <input
        {...restProps}
        ref={ref}
        className="h-[30px] rounded-md border-2 border-gray-300 px-2 duration-200 outline-none focus:border-blue-500"
      />
    </>
  )
}
