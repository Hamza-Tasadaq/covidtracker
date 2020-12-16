import React, { useState } from 'react'

function Form({set}) {
    const [temp,setTemp]=useState(''); 
    const onSubmit=(e)=>{
        e.preventDefault()
        set(temp)
        setTemp('')
    }
    return (
        <div className="container">
            <form className="d-flex" onSubmit={onSubmit}>
                <input value={temp} onChange={(e)=>setTemp(e.target.value)} className="form-control me-2" type="search" placeholder="Enter Country Name..." aria-label="Search" />
                <button className="btn " type="submit">Search</button>
            </form>
        </div>
    )
}

export default Form
