'use client'
import React from 'react';
import Chart from 'react-apexcharts';

const MostVisitedChart = () => {
    const chartOptions = {
        chart: {
            type: 'bar',
            height: 350,
        },
        title: {
            text: 'Most Visited Places in the World - 2024',
            align: 'center',
        },
        xaxis: {
            categories: [
                'Paris, France',
                'Bangkok, Thailand',
                'Dubai, UAE',
                'Tokyo, Japan',
                'Istanbul, Turkey',
                'Rome, Italy',
                'London, UK',
                'New York, USA',
                'Singapore',
                'Bali, Indonesia',
            ],
        },
        yaxis: {
            title: {
                text: 'Number of Visitors (in millions)',
            },
        },
        dataLabels: {
            enabled: true,
        },
    };

    const chartSeries = [
        {
            name: 'Visitors',
            data: [35, 33, 32, 28, 27, 26, 25, 22, 21, 20],
        },
    ];

    return (
        <>
         
            <div className="chart-container mx-auto p-4 bg-white shadow-md rounded-md">
                <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
            </div>
           

        </>
    );
};

export default MostVisitedChart;
