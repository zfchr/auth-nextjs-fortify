'use client'
import Card from "@/components/Card";

import PrimaryButton from "@/components/PrimaryButton";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";


export default function Page() {

  const [status, setStatus] = useState<string>('')

  const {resendEmailVerification, logout} = useAuth({
    redirectIfAuthenticated: '/dashboard',
    middleware: 'auth'
  })

    const resend = () => {
       resendEmailVerification({setStatus})
    }

  
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Verify your email address
        </Card.Title>
        <Card.Subtitle>
      Check your email for a verification link.
        </Card.Subtitle>
      </Card.Header>

      {status == 'verification-link-sent' && (
        <div className={'text-sm font-medium text-green-500 mb-5'}>
          Verification link has been sent to the email address.
        </div>
      )}

      <PrimaryButton onClick={resend}>
        Resend email verif link.
      </PrimaryButton>
    </Card>
  )
}
