import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const nanumSquare = localFont({
  src: [
    {
      path: '../../public/styles/fonts/NanumSquareRoundOTFL.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/styles/fonts/NanumSquareRoundOTFR.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/styles/fonts/NanumSquareRoundOTFB.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/styles/fonts/NanumSquareRoundOTFEB.otf',
      weight: '900',
      style: 'normal',
    }
  ]
})

export const metadata: Metadata = {
  title: 'mello',
  description: 'mello company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nanumSquare.className}>{children}</body>
    </html>
  )
}
