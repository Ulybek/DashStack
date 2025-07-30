import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';
import data from '/src/data.js';
import './Dashboard.css';

export default function Dashboard({ darkMode, setDarkMode }) {
    // --- Состояние выбранного месяца для фильтрации (используется в выпадающих списках) ---
    const [selectedMonth, setSelectedMonth] = useState('October');

    // --- Цвета для графика в зависимости от темы ---
    const chartColors = {
        axis: darkMode ? '#E9EAEC' : '#2B3034',                   // подписи осей
        grid: darkMode ? 'rgba(226, 226, 226, 0.4)' : 'rgba(0, 0, 0, 0.1)', // линии сетки
        gradientStart: darkMode ? '#4A90E2' : '#6C63FF',          // цвет градиента (фон графика)
        line: darkMode ? '#4379EE' : '#FF6F61',                   // линия графика
    };

    // --- Кастомный компонент для подписей осей ---
    const CustomTick = ({ x, y, payload, vertical }) => {
        const width = window.innerWidth;

        let fontSize = 12;
        let dx = 0;
        let dy = 0;

        if (width < 768) {
            fontSize = 10;
            dx = vertical ? -5 : 0;
            dy = vertical ? 0 : 5;
        } else if (width < 1200) {
            fontSize = 11;
            dx = vertical ? -8 : 0;
            dy = vertical ? 0 : 8;
        } else {
            fontSize = 12;
            dx = vertical ? -10 : 0;
            dy = vertical ? 0 : 10;
        }

        // Форматируем только для Y-оси
        const label = vertical ? `${(payload.value * 100).toFixed(0)}%` : payload.value;

        return (
            <text
                x={x}
                y={y}
                dx={dx}
                dy={dy}
                fill="#bbb"
                fontSize={fontSize}
                textAnchor={vertical ? 'end' : 'middle'}
            >
                {label}
            </text>
        );
    };

    return (
        <section className='dashboard-section'>
            {/* Заголовок страницы */}
            <div className='title-box'><h3>Dashboard</h3></div>

            {/* Блок карточек с общими метриками (Total Objects) */}
            <div className='total-objects'>
                {data.total_objects.map((items) => (
                    <div className="card" key={items.id}>
                        {/* Верхняя часть карточки: название + число + иконка */}
                        <div className='upper-card'>
                            <div className='text-box'>
                                <h4>{items.label}</h4>
                                <h2>{items.number}</h2>
                            </div>
                            <img
                                src={darkMode ? items.iconLight : items.iconDark}
                                alt={items.label}
                            />
                        </div>

                        {/* Нижняя часть карточки: динамика в процентах (рост или падение) */}
                        <div className='down-card'>
                            <div className='group-one'>
                                <img src={items.pathImg} alt="" />
                                <span
                                    style={{
                                        color: items.pathImg.includes('down') ? '#FF4C61' : '#1CC88A'
                                    }}
                                >
                                    {items.percent}
                                </span>
                            </div>
                            <p>{items.action}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* График (Sales Details) */}
            <div className="chart-container">
                <div className="sales-header">
                    <h3>Sales Details</h3>

                    {/* Выпадающий список выбора месяца */}
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
                        <FaChevronDown className="select-arrow" />
                    </div>
                </div>

                {/* Адаптивный контейнер с графиком (Recharts) */}
                <ResponsiveContainer>
                    <AreaChart data={data.chart_data}>
                        {/* Градиент для заливки области под графиком */}
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="20%" stopColor="#4A90E2" stopOpacity={0.5} />
                                <stop offset="100%" stopColor="#4A90E2" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        {/* Ось X (имена категорий, например, дни или недели) */}
                        <XAxis
                            dataKey="name"
                            tick={<CustomTick vertical={false} />}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={18}
                        />

                        {/* Ось Y (значения, отображаются в процентах) */}
                        <YAxis
                            domain={[0.2, 1]}
                            ticks={[0.2, 0.4, 0.6, 0.8, 1]}
                            tickFormatter={(v) => `${v * 100}%`}
                            axisLine={false}
                            tickLine={false}
                            tick={<CustomTick vertical={true} />}
                            tickMargin={25}
                        />

                        {/* Сетка (только горизонтальные линии) */}
                        <CartesianGrid
                            stroke="rgba(234, 234, 234, 1)"
                            strokeWidth={1}
                            strokeDasharray="0"
                            vertical={false}
                        />

                        {/* Подсказки (tooltip) при наведении */}
                        <Tooltip formatter={(value) => `${value * 100}%`} />

                        {/* Линия и заливка (график продаж) */}
                        <Area
                            type="linear"
                            dataKey="value"
                            stroke="rgba(67, 121, 238, 1)"
                            fillOpacity={1}
                            fill="url(#colorSales)"
                            dot={{ r: 4 }}         // точки на линии
                            activeDot={{ r: 8 }}   // увеличенная точка при наведении
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Таблица сделок (Deals Details) */}
            <div className='deals-container'>
                <div className="deals-header">
                    <h3>Deals Details</h3>

                    {/* Выпадающий список выбора месяца (аналогично Sales) */}
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
                        <FaChevronDown className="select-arrow" />
                    </div>
                </div>

                {/* Таблица с данными по сделкам */}
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
                                    {/* Статус сделки (цвет задаётся через CSS-классы по статусу) */}
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