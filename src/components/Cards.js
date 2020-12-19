import React from 'react'
import NumberFormat from 'react-number-format';

function Cards({ borderClass, title, values, desc }) {
    return (
        <div className="col-lg-4 col-sm-12">
            <div className={`card mb-3 ${borderClass}`} >
                <div className="card-header">{title}</div>
                <div className="card-body text-secondary">
                    <h5 className="card-title">
                        <NumberFormat value={values.value} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} /></h5>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        </div >
    )
}

export default Cards
