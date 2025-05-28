import Loader from '@/components/Loader'

export default function Button({
  color,
  loading,
  children,
  onClick
}: {
  color?: string
  loading?: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      className="relative h-[30px] min-w-[50px] shrink-0 cursor-pointer rounded-md bg-blue-500 text-white duration-200 hover:bg-blue-400"
      onClick={onClick}>
      {loading ? (
        <Loader
          color="#fff"
          size={16}
          weight={2}
        />
      ) : (
        children
      )}
    </button>
  )
}

// <Button loading={true}>추가</Button>
// <Button>취소</Button>
