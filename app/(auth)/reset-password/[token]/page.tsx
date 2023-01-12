'use client'
import { useState } from "react";

import Card from "@/components/Card";
import InputLabel from "@/components/InputLabel";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";

import useAuth from "@/hooks/useAuth";
import InputError from "@/components/InputError";


export default function Page({params, searchParams} : any) {
  const {resetPassword} = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard'
    
  });

  const onChange = (e: {target: {name: any; value: any }}) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value

    });
  };
  const [errors, setErrors] = useState<any>([])


  const[form, setForm] = useState({
    token: params.token,
    email: searchParams.email,

    password: '',

    password_confirmation: '',

    
  })

  const submit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    resetPassword({
        ...form,
        setErrors
    }).then((r) => r)
  }

  
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Reset Password
        </Card.Title>
        <Card.Subtitle>
          You can reset password now.
        </Card.Subtitle>
      </Card.Header>

      <form onSubmit={submit}>

     

        <div className='mb-5'>
          <InputLabel htmlFor={'email'}>
              Email
          </InputLabel>
          <TextInput onChange={onChange} value={form.email} name='email' type={'email'} id={'email'} />
          <InputError  message={errors.email}/>

        </div>

        <div className='mb-5'>
          <InputLabel htmlFor={'password'}>
              Password
          </InputLabel>
          <TextInput onChange={onChange} value={form.password} name='password' type={'password'} id={'password'} />
          <InputError  message={errors.password}/>

        </div>

        
        <div className='mb-5'>
          <InputLabel htmlFor={'password_confirmation'}>
              Confirm Password
          </InputLabel>
          <TextInput onChange={onChange} value={form.password_confirmation} name='password_confirmation' type={'password'} id={'password_confirmation'} />
          <InputError  message={errors.password_confirmation}/>

        </div>

        <div className='mb-5'>
          <PrimaryButton>
            Reset Password
          </PrimaryButton>
        </div>
     

        

      </form>
    </Card>
  )
}
