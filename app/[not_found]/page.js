"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const notFound = () => {
    const router = useRouter();
    useEffect(() => {
        // setTimeout(() => {
        //     router.push("/");
        // }, 3000);
    }, []);
    return ( <div className="py-4 bg-white -rotate-1 w-full flex flex-col items-center ">
        <h1 className="text-3xl">404</h1>
        <p className="text-2xl">Page not found</p>
        
        <Link className="hover:scale-105 transition duration-150" href='/'>Go Back To Home</Link>
    </div> );
}
 
export default notFound; 