import { useEffect, useState } from 'react'

import { RequestInit } from '../types'

export function useFetch<IData = unknown> (initialUrl?: string) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<IData>(null)
  const [error, setError] = useState(null)

  const fetcher = async (url: string, options?: RequestInit) => {
    setIsLoading(true)

    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await fetch(url, options)
          if (!response.ok) throw new Error(response.statusText)
          const data: IData = await response.json()
          setData(data)
          resolve(data)
          setError(null)
        } catch (error) {
          setError(`${error} Could not Fetch Data `)
          reject(new Error(`${error} Could not Fetch Data `))
        } finally {
          setIsLoading(false)
        }
      }, 1500)
    })
  }

  useEffect(() => {
    // if (isInitialMount.current) { // Comprobar si es el montaje inicial
    //   isInitialMount.current = false // Actualizar el estado de montaje inicial
    //   return
    // }

    if (initialUrl) {
      fetcher(initialUrl)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialUrl])

  return { data, isLoading, error, fetcher }
}
