import React from 'react'
import Input from '../components/input/Input'
import Link from 'next/link'

function SignupForm() {
  return (
    <>
      <Input label={"Full Name"} type={"text"}/>
      <Input label={"Phone Number"} type={"number"}/>
      <Input label={"Verfication Code from SMS"} type={"number"}/>
      <p>resend</p>
      <Input label={"Password"} type={"password"}/>
    </>
  )
}

export default SignupForm