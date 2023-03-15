import { useState, useEffect } from 'react'
import axios from 'axios'

function Fetcher({ title, url }) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setLoading] = useState()

  async function fetchData() {
    try {
      setLoading(true)

      const response = await axios.get(url)

      setData(response.data)
      setError(null)
    } catch (error) {
      setData(null)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

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

export default Fetcher
