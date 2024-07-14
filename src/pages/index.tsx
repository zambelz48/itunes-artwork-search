import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
        <p className="text-lg">Welcome to your Next.js site.</p>
      </div>
    </main>
  )
}
