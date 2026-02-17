import { Footer } from "../footer/footer"
import { Header } from "../header/header"
import { Inter } from 'next/font/google'

type LayoutProps = {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${inter.className} relative flex min-h-screen flex-col bg-gray-700`}>
      <Header />
      <main className="flex-1 flex flex-col mt-10 mb-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}