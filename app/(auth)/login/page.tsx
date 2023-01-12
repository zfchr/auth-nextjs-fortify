'use client'
import Card from "@/components/Card";
import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page({searchParams}: any) {

  const {login} = useAuth({
    redirectIfAuthenticated: '/dashboard',
    middleware: 'guest'
  })


  const [errors, setErrors ] = useState<any>([]);
  const [status, setStatus] = useState<string>('');
  
  const [form, setForm] = useState(
    {
      email: '',
      password: ''
    }
  )
  const onChange = (e: { target:  {name : string; value: string }}) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,

    });
  };

  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    login({
      ...form,
      setStatus,
      setErrors
    })

  }

  useEffect( () => {
    if (searchParams?.status) {
      setStatus(searchParams?.status)
      
    } else {
      setStatus('')
    }
  })

  
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Login
        </Card.Title>
        <Card.Subtitle>
         Login if you have an account, <Link className='underline text-slate-400' href={"/register"}>Register</Link> if you dont't have an account
        </Card.Subtitle>
      </Card.Header>

      {status && status == 'password-reset-success' && (
         <div className={'text-sm font-medium text-green-500 mb-5'}>
         Your password has been reset. You can login with your new password.
      </div>
      )}

      <form onSubmit={submit}>

    

        <div className='mb-5'>
          <InputLabel htmlFor={'email'}>
              Email
          </InputLabel>
          <TextInput onChange={onChange} value={form.email} name='email' type={'email'} id={'email'} />
          <InputError message={errors?.email}/>
        </div>
 
        <div className='mb-5'>
          <InputLabel htmlFor={'password'}>
              Password
          </InputLabel>
          <TextInput onChange={onChange} value={form.password} name='password' type={'password'} id={'password'} />
          <InputError message={errors?.password}/>

        </div>

        <div className='flex items-center justify-end gap-x-3'>
          <Link className='underline text-slate-500' href={"/forgot-password"}>
            Forgot Password
          </Link>
          <PrimaryButton>
            Login
          </PrimaryButton>
        </div>

        
    
        

      </form>
    </Card>
  )
}
