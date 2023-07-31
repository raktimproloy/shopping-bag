// for showing loading
import { Suspense } from 'react'
// import { PostFeed, Weather } from './Components'

export default function Page() {
    console.log("dash page")
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