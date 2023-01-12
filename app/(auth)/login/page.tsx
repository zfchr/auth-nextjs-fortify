import Card from "@/components/Card";
import InputLabel from "@/components/InputLabel";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import Link from "next/link";

export default function page() {
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

      <form>

    

        <div className='mb-5'>
          <InputLabel htmlFor={'email'}>
              Email
          </InputLabel>
          <TextInput type={'email'} id={'email'} />
        </div>

        <div className='mb-5'>
          <InputLabel htmlFor={'password'}>
              Password
          </InputLabel>
          <TextInput type={'password'} id={'password'} />
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
