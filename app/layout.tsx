import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Nunito } from 'next/font/google'

const inter = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Booking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Modal actionLabel='Submit' isOpen />
          <Navbar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
