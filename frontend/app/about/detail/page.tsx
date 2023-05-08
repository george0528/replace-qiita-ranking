import { Suspense } from 'react'
import UserList from './UserList'

const Detail = () => {
  return (
    <>
      <h1>detailページ</h1>
      <Suspense fallback={<p className="mt-4">ユーザデータ　Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <UserList />
      </Suspense>
    </>
  )
}

export default Detail
