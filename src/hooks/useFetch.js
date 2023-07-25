import {
  useState,
  useEffect
} from 'react'

import Request from '../Request'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)

      try {
        const response = await Request.get(url)

        setData(response.data.data)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [url])

  return {
    data,
    error,
    loading
  }
}

export default useFetch
