import { useRef, useState, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import data from "../data.js";
import "/src/pages/OrderLists.css";

export default function OrdersTable() {
    const [filters, setFilters] = useState({ date: "", type: "", status: "" });
    const [filteredData, setFilteredData] = useState([...data.order_data]);
    const flatpickrRef = useRef(null);

    const openCalendar = () => {
        if (flatpickrRef.current?.flatpickr) {
            flatpickrRef.current.flatpickr.open();
        }
    };

    // уникальные значения для селектов
    const types = [...new Set(data.order_data.map(row => row.type))];
    const statuses = [...new Set(data.order_data.map(row => row.status))];

    useEffect(() => {
        let filtered = [...data.order_data];
        if (filters.date) filtered = filtered.filter(row => row.date === filters.date);
        if (filters.type) filtered = filtered.filter(row => row.type === filters.type);
        if (filters.status) filtered = filtered.filter(row => row.status === filters.status);
        setFilteredData(filtered);
    }, [filters]);

    const resetFilters = () => {
        setFilters({ date: "", type: "", status: "" });
        flatpickrRef.current?.flatpickr.clear();
    };

    function getStatusClass(status) {
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
                return "";
        }
    }

    return (
        <div className="orderlists-section">
            <div className="title-box"><h3>Order Lists</h3></div>

            <div className="menu-order">
                <table className="filter-table">
                    <tbody>
                        <tr>
                            <td className="filter-cell">
                                <img src="/images/filter.png" alt="Filter" className="filter-icon" />
                            </td>
                            <td className="filter-cell">
                                <span className="filter-label">Filter By</span>
                            </td>

                            {/* Date */}
                            <td className="filter-cell">
                                <div onClick={openCalendar} className="date-trigger">
                                    <span>{filters.date || "Date"}</span>
                                    <img src="/images/dropdown.png" alt="dropdown" className="icon-dropdown" />
                                </div>
                                <Flatpickr
                                    ref={flatpickrRef}
                                    value={filters.date}
                                    options={{ dateFormat: "d M Y" }}
                                    onChange={(selectedDates, dateStr) => {
                                        setFilters(prev => ({ ...prev, date: dateStr }));
                                    }}
                                    className="hidden-datepicker"
                                />
                            </td>

                            {/* Type */}
                            <td className="filter-cell">
                                <select
                                    value={filters.type}
                                    onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                                    className="custom-select"
                                >
                                    <option value="">Order Type</option>
                                    {types.map((type, i) => (
                                        <option key={i} value={type}>{type}</option>
                                    ))}
                                </select>
                            </td>

                            {/* Status */}
                            <td className="filter-cell">
                                <select
                                    value={filters.status}
                                    onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                                    className="custom-select"
                                >
                                    <option value="">Order Status</option>
                                    {statuses.map((status, i) => (
                                        <option key={i} value={status}>{status}</option>
                                    ))}
                                </select>
                            </td>

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
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>ADDRESS</th>
                            <th>DATE</th>
                            <th>TYPE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.address}</td>
                                    <td>{row.date}</td>
                                    <td>{row.type}</td>
                                    <td className={getStatusClass(row.status)}>{row.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" style={{ textAlign: "center" }}>No results found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}