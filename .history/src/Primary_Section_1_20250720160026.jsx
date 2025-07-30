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
                <div className="sales-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <h3>Sales Details</h3>
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        style={{
                            padding: '6px 12px',
                            borderRadius: '6px',
                            border: '1px solid #ccc',
                            fontSize: '14px',
                            cursor: 'pointer',
                        }}
                    >
                        {data.months.map((month) => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                </div>
                <ResponsiveContainer>
                    <AreaChart data={data.chart_data}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="20%" stopColor="#4A90E2" stopOpacity={0.5} />
                                <stop offset="100%" stopColor="#4A90E2" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis domain={[20 + '%', 100 + '%']} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area
                            type="monotone"
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