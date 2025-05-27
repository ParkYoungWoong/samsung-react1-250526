import Loader from '@/components/Loader'

export default function Button({
  loading,
  children
}: {
  loading?: boolean
  children: React.ReactNode
}) {
  return <button className="relative">{loading ? <Loader /> : children}</button>
}

// <Button loading={true}>추가</Button>
// <Button>취소</Button>
