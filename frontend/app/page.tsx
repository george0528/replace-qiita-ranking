import Ranks from './Ranks'
import { Suspense } from 'react'
import { Loader } from './common/components';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1>ホームページ</h1>
      <Suspense fallback={<Loader />}>
        {/* @ts-expect-error Server Component */}
        <Ranks />
      </Suspense>
    </main>
  )
}
