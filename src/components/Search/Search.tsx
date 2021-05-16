import React, { useState } from 'react'
import { Form, FacnyInput, ResultsTable, Spinner } from '../Common/Index'
import useCityDataAndFilter from '../../hooks/useCityDataAndFilter'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Search.scss'

const Search = () => {
    const [searchString, setSearchString] = useState("")
    const { isLoading, data } = useCityDataAndFilter(searchString)

    return (
        <div className="search-container">
            { !isLoading ? <div>
                <Form aria-label="search-form" sticky>
                    <FacnyInput 
                        value={searchString} 
                        onChange={(e) => setSearchString(e.target.value)}
                        icon={faSearch} 
                        iconColor="#fff"
                        type="text" 
                        placeholder="Search by city name..." 
                        aria-label="search-field"/>
                </Form>
                { data.length > 0 && <ResultsTable headers={["State", "City"]} data={data} /> }
            </div> : <Spinner color="blue" size="md" />}
        </div>
    )
}

export default Search