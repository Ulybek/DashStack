import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import data from "../data.js";
import "/src/pages/OrderLists.css";

export default function OrdersTable() {
    const [filters, setFilters] = useState({ date: null, type: "", status: "" });
    const [filteredData, setFilteredData] = useState([...data.order_data]);
    const [isOpen, setIsOpen] = useState(false);

    const handleDateChange = (date) => {
        setFilters((prev) => ({ ...prev, date }));
    };

    const handleTypeChange = (e) => {
        setFilters((prev) => ({ ...prev, type: e.target.value }));
    };

    const handleStatusChange = (e) => {
        setFilters((prev) => ({ ...prev, status: e.target.value }));
    };

    const applyFilter = () => {
        let filtered = [...data.order_data];

        if (filters.date) {
            const selectedDate = filters.date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            });
            filtered = filtered.filter((row) => row.date === selectedDate);
        }
        if (filters.type) {
            filtered = filtered.filter((row) => row.type === filters.type);
        }
        if (filters.status) {
            filtered = filtered.filter((row) => row.status === filters.status);
        }

        setFilteredData(filtered);
        setIsOpen(false);
    };

    const resetFilters = () => {
        setFilters({ date: null, type: "", status: "" });
        setFilteredData([...data.order_data]);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "Completed":
                return "status-completed";
            case "Processing":
                return "status-processing";
            case "Rejected":
                return "status-rejected";
            case "On Hold":
                return "status-onhold";
            case "In Transit":
                return "status-intransit";
            default:
                return "status-default";
        }
    };
    return (
        <div className="orderlists-section">
            <div className="title-box"><h3>Order Lists</h3></div>
            <div className="menu-order">
                <table className="filter-table">
                    <tbody>
                        <tr>
                            <td className='filter-cell'>
                                <img src="/images/filter.png" alt="Filter" className="filter-icon" />
                            </td>
                            <td className="filter-cell">
                                <span className="filter-label">Filter By</span>
                            </td>

                            {/* Дата */}
                            <td className="filter-cell">
                                <div onClick={() => setIsDateOpen(!isDateOpen)} className="date-trigger">
                                    <span>
                                        {filters.dates.length
                                            ? `${filters.dates.length} selected`
                                            : "Date"}
                                    </span>
                                    <img src="/images/dropdown-black.png" alt="dropdown" className="icon-dropdown" />
                                </div>
                                {isDateOpen && (
                                    <div className="datepicker-popup">
                                        <DatePicker
                                            selected={null}
                                            onChange={handleDateChange}
                                            inline
                                            highlightDates={filters.dates}
                                        />
                                        <p className="datepicker-hint">*Click to toggle dates</p>
                                    </div>
                                )}
                            </td>

                            {/* Order Type */}
                            <td className="filter-cell">
                                <select name="type" value={filters.type} onChange={handleSelectChange}>
                                    <option value="">All Types</option>
                                    {orderTypes.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </td>

                            {/* Order Status */}
                            <td className="filter-cell">
                                <select name="status" value={filters.status} onChange={handleSelectChange}>
                                    <option value="">All Statuses</option>
                                    {orderStatuses.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </td>

                            {/* Reset */}
                            <td className="filter-cell reset-cell">
                                <button className="reset-filter-button" onClick={resetFilters}>
                                    <img src="/images/reset-icon.png" alt="Reset" className="icon-reset" />
                                    Reset Filter
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="box-table">
                <table className="orders-table">
                    <thead className="orders-table__head">
                        <tr>
                            <th className="orders-table__header" >ID</th>
                            <th className="orders-table__header">NAME</th>
                            <th className="orders-table__header">ADDRESS</th>
                            <th className="orders-table__header">DATE</th>
                            <th className="orders-table__header">TYPE</th>
                            <th className="orders-table__header">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length ? (
                            filteredData.map(row => (
                                <tr key={row.id} className="orders-table__row">
                                    <td className="orders-table__cell">{row.id}</td>
                                    <td className="orders-table__cell" >{row.name}</td>
                                    <td className="orders-table__cell">{row.address}</td>
                                    <td className="orders-table__cell">{row.date}</td>
                                    <td className="orders-table__cell">{row.type}</td>
                                    <td className={`status-cell orders-table__cell ${getStatusClass(row.status)}`}>
                                        {row.status}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="6" className="orders-table__empty">No results found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
