import React from 'react'
import Cards from './Cards'

function Card({ item }) {
    const { confirmed, recovered, deaths } = item
    return (
        <div className="container">
            <div className="row">
                <Cards borderClass={"infected"} title={"Infacted"} values={confirmed} desc={"Number of active cases from COVID-19."} />
                <Cards borderClass={"recovered"} title={"Recovered"} values={recovered} desc={"Number of recoveries from COVID-19."} />
                <Cards borderClass={"death"} title={"Death"} values={deaths} desc={"Number of deaths caused by COVID-19."} />
            </div>
        </div>
    )
}

export default Card
