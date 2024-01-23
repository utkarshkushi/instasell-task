'use client'
import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

type Props = {}

const Piechart = (props: Props) => {
    const [data, setData] = useState([
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group D', value: 200 },
    ]);
    const [COLORS, setCOLORS] = useState(['#E5A500', '#956F00', '#5E4200', '#FFDDB6', '#FFC879']);

    // useEffect(() => {
    //     data.map((ele) => {
    //         setPieData([
    //             ...pieData,
    //             {name: ele.name, value: ele.value }
    //           ]);
    //     })
    // })

    

    return (
        <PieChart height={200} width={200}>

            <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={30}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>

        </PieChart>
    )
}

export default Piechart