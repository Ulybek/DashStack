import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';
import data from './data.js';
import './Primary_Section_1.css';

export default function Primary_Section_1() {
    const [selectedMonth, setSelectedMonth] = useState('October');
    return (
        <section className='primary-section-1'>
            <div className='title-box'><h3>Dashboard</h3></div>
            <div className='total-objects'>
                {data.total_objects.map((items) => (
                    <div className="card" key={items.id}>
                        <div className='upper-card'>
                            <div className='text-box'>
                                <h4>{items.label}</h4>
                                <h2>{items.number}</h2>
                            </div>
                            <img src={items.iconImg} alt={items.label} />
                        </div>
                        <div className='down-card'>
                            <img src={items.pathImg} alt="" />
                            <span style={{ color: items.pathImg.includes('down') ? '#FF4C61' : '#1CC88A' }}>
                                {items.percent}
                            </span>
                            <p>{items.action}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="chart-container">
                <div className="sales-header">
                    <h3>Sales Details</h3>
                    <div className="select-wrapper">
                        <select
                            className="select-button"
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                        >
                            {data.months.map((month) => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                        <img src="/images/dropdown.png" className="select-arrow" alt="▼" />
                    </div>
                </div>
                <ResponsiveContainer>
                    <AreaChart data={data.chart_data}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="20%" stopColor="#4A90E2" stopOpacity={0.5} />
                                <stop offset="100%" stopColor="#4A90E2" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name"
                            tick={{ fill: 'rgba(43, 48, 52, 0.4)', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={18}
                        />
                        <YAxis domain={[0.2, 1]}
                            tickFormatter={(value) => `${value * 100}%`}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'rgba(43, 48, 52, 0.4)', fontSize: 12 }}
                            tickMargin={25}
                        />
                        <CartesianGrid
                            stroke="rgba(234, 234, 234, 1)"
                            strokeWidth={1}
                            strokeDasharray="0"
                            vertical={false} />
                        <Tooltip formatter={(value) => `${value * 100}%`} />
                        <Area
                            type="linear"
                            dataKey="value"
                            stroke="#4A90E2"
                            fillOpacity={1}
                            fill="url(#colorSales)"
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}