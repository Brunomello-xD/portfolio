import { useState, useEffect } from 'react'
import { AxiosRequestConfig } from 'axios'
import api from '../services/api'

/**
 * T = unknown = definindo que o T é desconhecido
 */
export function useFetch<T = unknown>(
    url: string,
    options?: AxiosRequestConfig
) {
    /**
     * T | null = pode ser T ou null
     */
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        api.get(url, options)
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                setError(err)
            }) /**
            finally = irá executar independente se a chamada der sucesso ou erro */
            .finally(() => {
                setIsFetching(false)
            })
    }, [])

    return { data, error, isFetching }
}
