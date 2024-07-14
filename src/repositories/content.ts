export interface Content {
  artistName: string
  trackName: string
  kind: string
  trackPrice: number
  artworkUrl100: string
}

export const getContents = async (keyword: string): Promise<Content[]> => {
  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${keyword}`)
    const data = await response.json()
    const { results } = data
    return results as Content[]
  } catch (error) {
    return Promise.reject(error)
  }
}
