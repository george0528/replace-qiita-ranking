import { Suspense } from 'react'
import RandomUsers from './RandomUsers'
export default function Random() {
  return (
    <div>
      <h1>Random Page</h1>
      <Suspense fallback={<p>Random Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <RandomUsers />
    </Suspense>
    </div>
  )
}
