import { faSearchMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { KeyValuePairs } from './noramlizer'
import './ResultsTable.scss'

interface ResultsTableProps {
    headers: string[]
    data: KeyValuePairs[]
}

const ResultsTable = (props: ResultsTableProps) => {
    
    return (
        <div className="data-table-container">
            <table>
                <thead>
                    <tr key={0}>
                        {props.headers.map((h,i) => {
                            return <td key={i}>{h}</td> 
                        })}
                    </tr>
                </thead>
                <tbody>
                    { props.data && props.data.length > 0 ? props.data.map((d, i) => {
                        return (<tr key={i}>
                            <td>{d.key}</td>
                            <td>{d.value}</td>
                        </tr>)
                    }) : 
                        <tr>
                            <td align="center" colSpan={props.headers.length}>
                                <FontAwesomeIcon icon={faSearchMinus} size="1x" />
                                <span style={{ margin: "1rem" }}>No Results</span>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ResultsTable
