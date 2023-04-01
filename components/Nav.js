"use client";
import Link  from 'next/link';
import { usePathname } from 'next/navigation';
const Nav = () => {
    const path = usePathname();
    return (
    <nav className='w-full mb-4 p-3 flex justify-center items-center '>
        
        <Link href="/" className=" flex flex-col items-center">
            <h1 className='text-3xl '>JUST ADD</h1>
            <h1 className='text-5xl font-bold' >MARMITE</h1>
            <h2 className='text-2xl'>SPREAD THE JOY</h2>
        </Link>

    </nav>);
}
export default Nav;