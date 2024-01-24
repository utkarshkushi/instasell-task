'use client'
import React, { useEffect, useState } from 'react'

import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';


type Props = {
    dataItems: Number[],
    colors: String[]
}

const Piechart = (props: Props) => {

    Chart.register(ArcElement);
    const labels = [
        'Pending',
        'Intrasit',
        'Exception',
        'Out for delivery',
        'Delivered'
    ];
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Doughnut chart',
                data: props.dataItems,
                backgroundColor: [
                    'rgb(229,165,0)',
                    'rgb(149,111,0)',
                    'rgb(94,66,0)',
                    'rgb(255,221,182)',
                    'rgb(255,200,121)'
                ],
                borderWidth: 1,
                hoverBorderWidth: 5,
            }
        ],
    };




    return (
        <div className="flex justify-center items-center">
				<Doughnut
					data={data}
					options={{
						maintainAspectRatio: false
					}}
          
				/>
			</div>
    )
}

export default Piechart