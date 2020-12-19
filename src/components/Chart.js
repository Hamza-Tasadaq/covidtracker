import React from 'react';
import { Pie } from 'react-chartjs-2';



export default function Chart({ chartData }) {

    const { confirmed, recovered, deaths } = chartData
    const chartdata = [confirmed.value, recovered.value, deaths.value]
    const data = {
        labels: [
            'Infacted',
            'Recover',
            'Deaths'
        ],
        datasets: [{
            data: chartdata,
            backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
            ],
            hoverBackgroundColor: [
                'rgba(0, 0, 255, 0.7)',
                'rgba(0, 255, 0, 0.7)',
                'rgba(255, 0, 0, 0.7)'
            ]
        }]
    };
    return (
        <div className="col-lg-5 col-sm-12 graph">
            <h2 className="text-center">Graph</h2>
            <Pie data={data} />
        </div>
    );
}