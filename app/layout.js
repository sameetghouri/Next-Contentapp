import Nav from '@/components/Nav'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col items-center bg-[url(/back.svg)] bg-no-repeat bg-center bg-cover bg-fixed'>
      {/* style={{"background-image": "url(/back.svg)"}} */}
      <Nav/>
        <main className='min-h-screen w-full max-w-6xl p-5'>
        
        {children}
        </main>
        <footer className='w-full bg-black text-center py-8 text-xl text-white'>
          <p>Copyright 2023 Just Add Marmite :) </p>
        </footer>
        </body>

    </html>
  )
}
