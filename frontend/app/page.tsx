import Ranks from './Ranks'
import { Suspense } from 'react'
import { Metadata } from 'next';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1>ホームページ</h1>
      <Suspense fallback={<p>Loading ...</p>}>
        {/* @ts-expect-error Server Component */}
        <Ranks />
      </Suspense>
    </main>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {title: 'Home'}
}
