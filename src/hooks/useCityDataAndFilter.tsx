import { useState, useEffect } from 'react'
import * as cities from '../data/cities.json'
import { KeyValuePairs, normalize } from '../components/Common/Table/noramlizer'

const useCityDataAndFilter = (filter: string) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([] as KeyValuePairs[])

    const getAndFilterData = () => {
        setIsLoading(true)
        const noramlized: KeyValuePairs[] = normalize(cities).sort((a,b) => a.key.localeCompare(b.key, 'en', { sensitivity: 'base' }))
        
        //only return values if search param is provided
        if (filter.length > 0) {
            setData(noramlized.filter(f => f.value.toLowerCase().includes(filter.toLowerCase())))
        } else {
            setData([])
        }

        setIsLoading(false)
    }

    useEffect(() => {
        getAndFilterData()
    }, [cities, filter])

    return { isLoading, data }
}

export default useCityDataAndFilter