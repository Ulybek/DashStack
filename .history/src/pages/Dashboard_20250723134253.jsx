import React, { useState } from 'react';
import { XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';
import data from '/src/data.js';
import './Dashboard.css';

export default function Dashboard({ darkMode, setDarkMode }) {
    const [selectedMonth, setSelectedMonth] = useState('October');
    return (
        <section className='dashboard-section'>
            <div className='title-box'><h3>Dashboard</h3></div>
            <div className='total-objects'>
                {data.total_objects.map((items) => (
                    <div className="card" key={items.id}>
                        <div className='upper-card'>
                            <div className='text-box'>
                                <h4>{items.label}</h4>
                                <h2>{items.number}</h2>
                            </div>
                            <img  src={darkMode ? items.iconLight: items.iconDark}
                                alt={items.label} />
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
                            tick={{ fill: '#E9EAEC', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={18}
                        />
                        <YAxis domain={[0.2, 1]}
                            tickFormatter={(value) => `${value * 100}%`}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#E9EAEC', fontSize: 12 }}
                            tickMargin={25}
                        />
                        <CartesianGrid
                            stroke="rgba(226, 226, 226, 1)"
                            strokeWidth={1}
                            strokeDasharray="0"
                            vertical={false} />
                        <Tooltip formatter={(value) => `${value * 100}%`} />
                        <Area
                            type="linear"
                            dataKey="value"
                            stroke="#4379EE"
                            fillOpacity={1}
                            fill="url(#colorSales)"
                            dot={{ r: 4 }}
                            activeDot={{ r: 8 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className='deals-container'>
                <div className="deals-header">
                    <h3>Deals Details</h3>
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
                <table className="deals-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Location</th>
                            <th>Date - Time</th>
                            <th>Piece</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.dealsData.map((deal) => (
                            <tr key={deal.id}>
                                <td className="product-cell">
                                    <img src={deal.productImg} alt={deal.productName} />
                                    <span>{deal.productName}</span>
                                </td>
                                <td>{deal.location}</td>
                                <td>{deal.dateTime}</td>
                                <td>{deal.piece}</td>
                                <td>{deal.amount}</td>
                                <td>
                                    <span className={`status ${deal.status.toLowerCase()}`}>
                                        {deal.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}