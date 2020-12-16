import React from 'react'

function Cards({ borderClass, title, values, desc }) {
    return (
        <div className="col-lg-4 col-sm-12">
            <div className={`card mb-3 ${borderClass}`} >
                <div className="card-header">{title}</div>
                <div className="card-body text-secondary">
                    <h5 className="card-title">{values.value}</h5>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        </div >
    )
}

export default Cards
