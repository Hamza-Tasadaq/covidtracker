import React from 'react'

function Table({ data }) {
    return (
        <div className="col-lg-7 col-sm-12no">
            <h2 className="text-center" >All Countries Data</h2>
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table mb-0 table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Infacted</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((country, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{country.Country}</th>
                                    <td>{country.TotalConfirmed}</td>
                                    <td>{country.TotalRecovered}</td>
                                    <td>{country.TotalDeaths}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
