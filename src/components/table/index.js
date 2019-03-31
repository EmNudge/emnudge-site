import React from 'react'
import './index.scss'

const Table = props => (
    <div className="table-container">
        {props.rows.map((row, index) => (
            <div className="row" key={index}>
                {row.map(item => (
                    <div>{item}</div>
                ))}
            </div>
        ))}
    </div>
)

export default Table