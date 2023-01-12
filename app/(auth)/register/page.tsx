'use client'
import { useState } from "react";

import Card from "@/components/Card";
import InputLabel from "@/components/InputLabel";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import InputError from "@/components/InputError";


export default function Register() {
  const {register} = useAuth({
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
    name: '',
    email: '',

    password: '',

    password_confirmation: '',

    
  })

  const submit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    register ({
      setErrors,
      ...form
    })
    
  }

  
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Register
        </Card.Title>
        <Card.Subtitle>
          Register for an account, <Link className='underline text-slate-400' href={"/login"}>Login</Link> if you already an account
        </Card.Subtitle>
      </Card.Header>

      <form onSubmit={submit}>

      <div className='mb-5'>
          <InputLabel htmlFor={'name'}>
              Name
          </InputLabel>
          <TextInput onChange={onChange} value={form.name} name='name' type={'text'} id={'name'} />
          <InputError  message={errors.name}/>
        </div>
    

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
            Register
          </PrimaryButton>
        </div>
     

        

      </form>
    </Card>
  )
}
