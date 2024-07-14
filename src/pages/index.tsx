import Image from "next/image"
import { useRouter } from "next/router"
import Container from "@/components/Container"
import SearchComponent from "@/components/SearchComponent"

export default function WebPage() {
  const router = useRouter()

  const handleSearch = (search: string) => {
    router.push(`/result?q=${search}`)
  }

  return (
    <Container className="items-center justify-center bg-gradient-to-r from-violet-600 to-purple-600">
      <Image src="/logo.png" alt="logo" width={75} height={85} />
      <div className="absolute w-full inset-x-0 bottom-8 pl-8 pr-8">
        <SearchComponent onSearch={handleSearch} />
      </div>
    </Container>
  )
}
