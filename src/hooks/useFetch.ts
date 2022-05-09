import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetch<T = unknown>(url: string) {
    /**
     * T | null = pode ser T ou null
     */
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
        axios.get(url).then(response => {
            setData(response.data)
        })
    }, [])

    return { data }
}
