import Card from "@/components/Card"
import Container from "@/components/Container"
import NavBar from "@/components/NavBar"
import SearchModal from "@/components/SearchModal"
import { Content, getContents } from "@/repositories/content"
import { useRouter } from "next/router"
import React from "react"

interface PageProps {
  keyword: string
  items: Content[]
  error?: string
}

interface Query {
  query: {
    q: string
  }
}

export async function getServerSideProps({ query }: Query) {
  const searchKeyword = query.q || ""
  if (!searchKeyword) {
    return {
      props: {
        keyword: query.q || "",
        items: [],
        error: "Please provide a search keyword",
      },
    }
  }

  try {
    const items = await getContents(searchKeyword)
    return {
      props: {
        keyword: searchKeyword,
        items,
      },
    }
  } catch {
    return {
      props: {
        keyword: searchKeyword,
        items: [],
        error: "Failed to fetch data",
      },
    }
  }
}

export default function WebPage({ keyword, items, error }: PageProps) {
  const router = useRouter()
  const [showSearch, setShowSearch] = React.useState(false)

  return (
    <>
      <Container className="items-center justify-start bg-gray-200">
        <NavBar
          onBackToHome={() => router.push("/")}
          onSearch={() => setShowSearch(true)}
        />
        <div className="flex flex-col w-full h-screen">
          <p className="text-center my-10">
            <span className="text-sm text-gray-500">
              Search Result for :
            </span>
            {" "}
            <span className="text-lg text-violet-500 font-bold">
              {keyword}
            </span>
          </p>
          {error && (
            <p className="text-center text-red-500 font-bold">
              {error}
            </p>
          )}
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.artistName}
              description={item.trackName}
              genre={item.kind}
              price={item.trackPrice}
              thumbnail={item.artworkUrl100}
            />
          ))}
        </div>
      </Container>
      <SearchModal
        show={showSearch}
        onClose={() => setShowSearch(false)}
        onSearch={(newSearchKeyword) => {
          setShowSearch(false)
          router.push(`/result?q=${newSearchKeyword}`)
        }}
      />
    </>
  )
}
