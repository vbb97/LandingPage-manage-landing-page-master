import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'

const vietnam = Be_Vietnam_Pro({
  weight: ['400', '500' , '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="all" className={vietnam.className}>{children}</body>
    </html>
  )
}
