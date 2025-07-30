import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import data from "../data.js";
import "/src/pages/OrderLists.css";

export default function OrdersTable() {
    const [selectedDates, setSelectedDates] = useState([]);
    const [filters, setFilters] = useState({ date: null, type: "", status: "" });
    const [filteredData, setFilteredData] = useState([...data.order_data]);
    const [isOpen, setIsOpen] = useState(false);
    const [isTypeOpen, setIsTypeOpen] = useState(false);

    const typeRef = useRef(null);

    // Закрываем дропдаун при клике вне его
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (typeRef.current && !typeRef.current.contains(e.target)) {
                setIsTypeOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleTypeSelect = (value) => {
        setFilters((prev) => ({ ...prev, type: value }));
        setIsTypeOpen(false);
    };

    // Обработка выбора дат
    const handleDateClick = (date, event) => {
        const dateStr = date.toDateString();
        const exists = selectedDates.some(d => d.toDateString() === dateStr);

        const isMulti = event?.shiftKey || event?.type === "contextmenu";
        // contextmenu (long press) для мобильных можно использовать

        if (isMulti) {
            // Мультивыбор
            if (exists) {
                setSelectedDates(selectedDates.filter(d => d.toDateString() !== dateStr));
            } else {
                setSelectedDates([...selectedDates, date]);
            }
        } else {
            // Сбросить и выбрать только одну дату
            setSelectedDates([date]);
        }
    };

    const handleTypeChange = (e) => {
        setFilters((prev) => ({ ...prev, type: e.target.value }));
    };

    const handleStatusChange = (e) => {
        setFilters((prev) => ({ ...prev, status: e.target.value }));
    };

    const toggleDate = (date) => {
        const exists = selectedDates.some(
            (d) => d.toDateString() === date.toDateString()
        );
        if (exists) {
            setSelectedDates(selectedDates.filter(
                (d) => d.toDateString() !== date.toDateString()
            ));
        } else {
            setSelectedDates([...selectedDates, date]);
        }
    };

    const applyFilter = () => {
        let filtered = [...data.order_data];

        // Фильтр по нескольким датам
        if (selectedDates.length > 0) {
            const formattedDates = selectedDates.map(d =>
                d.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })
            );
            filtered = filtered.filter(row => formattedDates.includes(row.date));
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
        setSelectedDates([]);
        setFilters({ type: "", status: "" });
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
                            <td className="filter-cell">
                                <img src="/images/filter.png" alt="Filter" className="filter-icon" />
                            </td>
                            <td className="filter-cell">
                                <span className="filter-label">Filter By</span>
                            </td>

                            {/* Date Filter */}
                            <td className="filter-cell">
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="date-trigger"
                                >
                                    <span>
                                        {selectedDates.length > 0
                                            ? `${selectedDates.length} date(s)`
                                            : "Date"}
                                    </span>
                                    <img
                                        src="/images/dropdown-black.png"
                                        alt="dropdown"
                                        className={`icon-dropdown ${isOpen ? "open" : ""}`}
                                    />
                                </div>
                                {isOpen && (
                                    <div className="datepicker-popup">
                                        <DatePicker
                                            inline
                                            highlightDates={selectedDates}
                                            onChange={(date, e) => handleDateClick(date, e)}
                                        />
                                        <p className="datepicker-hint">
                                            *Hold Shift (or long tap) to select multiple dates
                                        </p>
                                        <button className="apply-now-btn" onClick={applyFilter}>
                                            Apply Now
                                        </button>
                                    </div>
                                )}
                            </td>


                            {/* Type Filter */}
                            <td className="filter-cell" ref={typeRef}>
                                <button
                                    className="dropdown-btn"
                                    onClick={() => setIsTypeOpen(!isTypeOpen)}
                                >
                                    {filters.type || "Order Type"}
                                    <img
                                        src="/images/dropdown-black.png"
                                        alt="dropdown"
                                        className={`icon-dropdown ${isTypeOpen ? "open" : ""}`}
                                    />
                                </button>

                                {isTypeOpen && (
                                    <div className="type-popup">
                                        <h4 className="popup-title">Select Order Type</h4>
                                        <div className="type-options">
                                            {[
                                                "Health & Medicine",
                                                "Book & Stationary",
                                                "Services & Industry",
                                                "Fashion & Beauty",
                                                "Home & Living",
                                                "Electronics",
                                                "Mobile & Phone",
                                                "Accessories"
                                            ].map((type) => (
                                                <button
                                                    key={type}
                                                    className={`type-btn ${filters.type?.includes(type) ? "selected" : ""
                                                        }`}
                                                    onClick={() => handleTypeToggle(type)}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                        <p className="popup-hint">*You can choose multiple Order type</p>
                                        <button className="apply-btn" onClick={applyFilter}>
                                            Apply Now
                                        </button>
                                    </div>
                                )}
                            </td>


                            {/* Status Filter */}
                            <td className="filter-cell">
                                <select value={filters.status} onChange={handleStatusChange}>
                                    <option value="">Order Status</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="On Hold">On Hold</option>
                                    <option value="In Transit">In Transit</option>
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
                            <th className="orders-table__header">ID</th>
                            <th className="orders-table__header">NAME</th>
                            <th className="orders-table__header">ADDRESS</th>
                            <th className="orders-table__header">DATE</th>
                            <th className="orders-table__header">TYPE</th>
                            <th className="orders-table__header">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((row) => (
                                <tr key={row.id} className="orders-table__row">
                                    <td className="orders-table__cell">{row.id}</td>
                                    <td className="orders-table__cell">{row.name}</td>
                                    <td className="orders-table__cell">{row.address}</td>
                                    <td className="orders-table__cell">{row.date}</td>
                                    <td className="orders-table__cell">{row.type}</td>
                                    <td className="orders-table__cell status-cell">
                                        <span className={getStatusClass(row.status)}>{row.status}</span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="orders-table__empty">
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    );
}