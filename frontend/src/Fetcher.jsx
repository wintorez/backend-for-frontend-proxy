import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Fetcher({ title, url }) {
  const { data, error, isLoading } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await axios.get(url)
      return response.data
    }
  })

  return (
    <fieldset>
      <legend>
        {title}: {url}
      </legend>
      {isLoading && <>Loading...</>}
      {error && <>{error.message}</>}
      {data && <>{data}</>}
    </fieldset>
  )
}