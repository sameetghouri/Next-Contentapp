"use client";
import Link  from 'next/link';
import { usePathname } from 'next/navigation';
const Nav = () => {
    const path = usePathname();
    return (
    <nav className='w-full  flex flex-col justify-center items-center mb-4 p-3 bg-black text-yellow-400 '>
        
        <Link href="/" className="w-full flex flex-col items-center ">
            <h1 className='text-5xl font-bold' >JINOMOTO</h1>
            <h2 className='text-2xl'>SPREAD THE JOY</h2>
        </Link>
        <ul className='flex gap-5 mt-3 '>
            <li><Link href='/' className='hover:text-white font-bold'>Home</Link></li>
            <li><Link href='/recipes/details' className='hover:text-white font-bold'>Recipes</Link></li>
        </ul>

    </nav>);
}
export default Nav;