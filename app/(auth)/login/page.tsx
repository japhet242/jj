import { ProfileForm } from "@/components/ui/auth/login";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {

    return <div >
        <div className=" md:max-w-[600px] container mx-auto px-4">
            <div>
                <ProfileForm/>
            </div>
           <div>
             <hr className=" mt-9 mb-9"/>
            <div className=" flex justify-between">
             <Button className=" flex justify-between w-full mx-4" >
                <FaGithub/> <span>Github</span>
             </Button>
             <Button className=" flex justify-between w-full" >
             <FcGoogle /> <span>Google</span>
             </Button>
             </div>
           </div>
           <div className=" text-center mt-6">
            <Link href="/register" className=" underline hover:text-cyan-500">
               n'as-tu pas un compte ? : <span className=" text-emerald-600">crée </span>
            </Link>
            
           </div>
        </div>
    
    </div>
}