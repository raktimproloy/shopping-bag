import React from 'react'
import Input from '../components/input/Input'
import Link from 'next/link'

function LoginForm() {
  return (
    <>
        <Input label={"Phone Number or Email"} type={"text"}/>
        <Input label={"Password"} type={"password"}/>
        <Link
        href="/forget"
        className="text-xs text-blue-600 hover:underline"
        >
        Forget Password?
        </Link>
    </>
  )
}

export default LoginForm