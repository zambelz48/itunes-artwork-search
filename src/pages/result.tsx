import Container from "@/components/Container"
import NavBar from "@/components/NavBar"
import SearchModal from "@/components/SearchModal"
import { useRouter } from "next/router"
import React from "react"

interface PageProps {
  keyword: string
}

interface Query {
  query: {
    q: string
  }
}

export async function getServerSideProps({ query }: Query) {
  return {
    props: {
      keyword: query.q || "",
    },
  }
}

export default function WebPage({ keyword }: PageProps) {
  const router = useRouter()
  const [showSearch, setShowSearch] = React.useState(false)

  return (
    <>
      <Container>
        <NavBar
          onBackToHome={() => router.push("/")}
          onSearch={() => setShowSearch(true)}
        />
        <h1 className="text-4xl font-bold">Search Result</h1>
        <p>
          Keyword:
          {keyword}
        </p>
      </Container>
      <SearchModal
        show={showSearch}
        onClose={() => setShowSearch(false)}
        onSearch={() => {}}
      />
    </>
  )
}
