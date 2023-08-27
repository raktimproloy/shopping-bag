// for showing loading
import { AuthRequiredError } from '@/lib/exceptions'
import { Suspense } from 'react'
// import { PostFeed, Weather } from './Components'

export default function Page() {
    throw new AuthRequiredError()
    // return(
    //     <section>
    //   <Suspense fallback={<p>Loading feed...</p>}>
    //     <PostFeed />
    //   </Suspense>
    //   <Suspense fallback={<p>Loading weather...</p>}>
    //     <Weather />
    //   </Suspense>
    // </section>
    // )
    return <h1>Hello, Dashboard Page!</h1>
  }