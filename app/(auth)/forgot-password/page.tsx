'use client'
import Card from "@/components/Card";
import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";

export default function page() {

  const {forgotPassword} = useAuth({
    
    middleware: 'guest'
  })


  const [errors, setErrors ] = useState<any>([]);
  const [status, setStatus] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  


  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    forgotPassword({
      email,
      setStatus,
      setErrors
    })

  }

  
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Reset Password
        </Card.Title>
        <Card.Subtitle>
         Enter your email address well send you a link to reset your password.
        </Card.Subtitle>
      </Card.Header>

      {status == 'password-reset-link-sent' && (
         <div className={'text-sm font-medium text-green-500 mb-5'}>
          Password reset link has been sent to your email.
       </div>
      )}

      <form onSubmit={submit}>

    

        <div className='mb-5'>
          <InputLabel htmlFor={'email'}>
              Email
          </InputLabel>
          <TextInput onChange={(e: {target: {value:string}}) =>
        setEmail(e.target.value)
        } value={email} name='email' type={'email'} id={'email'} />
          <InputError message={errors?.email}/>
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
