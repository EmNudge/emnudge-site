import React, { useState, createRef } from 'react'
import './index.scss'

const Table = props => {
    const [rows, setRows] = useState(props.rows)
    const theadRef = createRef()

    function handleHeadClick(index, e) {
        for (const th of theadRef.current.querySelectorAll('th')) {
            if (th === e.target) continue
            th.className = ""
        }
        
        if (e.target.classList.contains('down')) {
            e.target.classList.remove('down')
            e.target.classList.add('up')
            setRows([...rows].sort( (a, b) => a[index] < b[index] ? 1 : -1 ))
            return;
        }
        
        e.target.classList.remove('up')
        e.target.classList.add('down')
        setRows([...rows].sort( (a, b) => a[index] > b[index] ? 1 : -1 ))
    }

    function getTextForItem(item) {
        if (typeof item === "string") return item
        return item.text
    }
    
    function getItem(item) {
        if (typeof item === "string") return item
        
        if (item.link) return <a href={item.link}>{item.text}</a>;

        return <div style={{ width: 100 }}> 
            <i className={item.icon} style={{ paddingRight: 10 }}></i>
            {item.text}
        </div>
    }

    return (
        <table className="table-container">
            <thead ref={theadRef}>
                <tr>
                    {props.head.map((column, index) => (
                        <th onClick={e => handleHeadClick(index, e)} key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {row.map(item => (
                            <td key={getTextForItem(item)}>
                                {getItem(item)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table