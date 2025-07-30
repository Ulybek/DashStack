import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import data from "../data.js";
import "/src/pages/OrderLists.css";

export default function OrdersTable() {
    const [selectedDates, setSelectedDates] = useState([]);
    const [filters, setFilters] = useState({ type: [], status: [] });
    const [isStatusOpen, setIsStatusOpen] = useState(false);
    const [filteredData, setFilteredData] = useState([...data.order_data]);
    const [isOpen, setIsOpen] = useState(false);
    const [isTypeOpen, setIsTypeOpen] = useState(false);

    const typeRef = useRef(null);

    // Карта категорий: категория → список товаров
    const CATEGORY_MAP = {
        "Health & Medicine": ["Medicine", "Supplements", "Health Kit"],
        "Book & Stationary": ["Book", "Notebook", "Pen"],
        "Services & Industry": ["Consulting", "Repair"],
        "Fashion & Beauty": ["Clothes", "Makeup", "Perfume"],
        "Home & Living": ["Furniture", "Decor", "Appliance"],
        "Electronics": ["Laptop", "TV", "Camera"],
        "Mobile & Phone": ["Smartphone", "Tablet"],
        "Accessories": ["Watch", "Jewelry", "Bag"]
    };

    // Закрытие дропдауна при клике вне
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (typeRef.current && !typeRef.current.contains(e.target)) {
                setIsTypeOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleStatusToggle = (status) => {
        setFilters((prev) => {
            const exists = prev.status.includes(status);
            const updated = exists
                ? prev.status.filter((s) => s !== status)
                : [...prev.status, status];
            return { ...prev, status: updated };
        });
    };

    const handleDateClick = (date, event) => {
        const dateStr = date.toDateString();
        const exists = selectedDates.some(d => d.toDateString() === dateStr);

        const isMulti = event?.shiftKey || event?.type === "contextmenu";

        if (isMulti) {
            if (exists) {
                setSelectedDates(selectedDates.filter(d => d.toDateString() !== dateStr));
            } else {
                setSelectedDates([...selectedDates, date]);
            }
        } else {
            setSelectedDates([date]);
        }
    };

    const handleStatusChange = (e) => {
        setFilters((prev) => ({ ...prev, status: e.target.value }));
    };

    const applyFilter = () => {
        let filtered = [...data.order_data];

        // Фильтр по датам
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

        // Фильтр по категориям (с учетом карты)
        if (filters.type.length > 0) {
            filtered = filtered.filter(row =>
                filters.type.some(category =>
                    CATEGORY_MAP[category]?.includes(row.type)
                )
            );
        }

        // Фильтр по статусу
        if (filters.status) {
            filtered = filtered.filter(row => row.status === filters.status);
        }

        setFilteredData(filtered);
        setIsOpen(false);
        setIsTypeOpen(false);
    };

    const resetFilters = () => {
        setSelectedDates([]);
        setFilters({ type: [], status: "" });
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

                            {/* Фильтр по дате */}
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

                            {/* Фильтр по типу */}
                            <td className="filter-cell" ref={typeRef}>
                                <button
                                    className="dropdown-btn"
                                    onClick={() => setIsTypeOpen(!isTypeOpen)}
                                >
                                    {filters.type.length > 0
                                        ? `${filters.type.length} selected`
                                        : "Order Type"}
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
                                            {Object.keys(CATEGORY_MAP).map((type) => (
                                                <button
                                                    key={type}
                                                    className={`type-btn ${filters.type.includes(type) ? "selected" : ""}`}
                                                    onClick={() => handleTypeToggle(type)}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                        <p className="popup-hint">*You can choose multiple Order types</p>
                                        <button className="apply-btn" onClick={applyFilter}>
                                            Apply Now
                                        </button>
                                    </div>
                                )}
                            </td>

                            {/* Фильтр по статусу */}
                            <td className="filter-cell">
                                <button className="dropdown-btn" onClick={() => setIsStatusOpen(!isStatusOpen)}>
                                    {filters.status.length > 0
                                        ? `${filters.status.length} selected`
                                        : "Order Status"}
                                    <img
                                        src="/images/dropdown-black.png"
                                        alt="dropdown"
                                        className={`icon-dropdown ${isStatusOpen ? "open" : ""}`}
                                    />
                                </button>

                                {isStatusOpen && (
                                    <div className="status-popup">
                                        <h4 className="popup-title">Select Order Status</h4>
                                        <div className="status-options">
                                            {["Completed", "Processing", "Rejected", "On Hold", "In Transit"].map((status) => (
                                                <button
                                                    key={status}
                                                    className={`status-btn ${filters.status.includes(status) ? "selected" : ""}`}
                                                    onClick={() => handleStatusToggle(status)}
                                                >
                                                    {status}
                                                </button>
                                            ))}
                                        </div>
                                        <p className="popup-hint">*You can choose multiple Order Status</p>
                                        <button className="apply-btn" onClick={applyFilter}>Apply Now</button>
                                    </div>
                                )}
                            </td>

                            {/* Сброс фильтров */}
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

            {/* Таблица */}
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