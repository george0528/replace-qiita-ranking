import Ranks from './Ranks'
import { Suspense } from 'react'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1>ホームページ</h1>
      <Suspense fallback={<p className="mt-4">Loading ... </p>}>
        {/* @ts-expect-error Server Component */}
        <Ranks />
      </Suspense>
    </main>
  )
}
