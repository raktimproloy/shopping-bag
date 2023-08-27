'use client'

import Link from "next/link";

const error = ({
  error,
  reset
}: {
  error: Error;
  reset: () => void
}) => {

  return (
    <>
    <main className="grid min-h-full place-items-center px-6 py-24 sm: py-32 lg:px-8 bg-gray-800">
      <div className="text-center">
        <p className="text-base font-semibold text-emerald-700 dark:text-emerald-500">
          There was a problem
        </p>
        <h1 className="mt-4 text-3x1 font-bold traking-tight text-zinc-900">
          {error.message || "Something went wrong"}
        </h1>
        <p>
          Please try again later or contact support if the problem not solved
        </p>
        <div>
          <button onClick={reset}>Try again</button>
          <Link href="/"> Go back home</Link>
        </div>
      </div>
    </main>
    </>
  )
}

export default error