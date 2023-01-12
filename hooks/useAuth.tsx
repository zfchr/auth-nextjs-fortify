import { useRouter } from "next/navigation";
import useSWR from 'swr'
import axios from '@/lib/axios'

interface useAuthProps {
    middleware?: string,
    redirectIfAuthenticated?: string,
}
interface errorType {
    setErrors: (error: any) => void;
}

export default function useAuth({middleware, redirectIfAuthenticated}: useAuthProps = {}) {
    const router = useRouter();

    const {data: user, error, mutate} = useSWR('/api/user', () =>
    axios('/api/user')
    .then((res) => res.data) 
    .catch(error => {
        if (error.response.status !== 403) throw error; 
        router.push('/verify-email')
            
        
    })
    
    )
    const csrf = () => axios('/sanctum/csrf-cookie');
    const register = async ({setErrors, ...props}: errorType) => {

        try {
            await csrf(); 
            await axios.post('/register', props);
            await mutate();
            
        } catch (error: any) {
        if (error?.response?.status !== 422 ) throw error;
        setErrors(error?.response?.data?.errors)
            
        
            
        }

    }


    return  {
        register ,
        user,
        mutate,

    }

}


