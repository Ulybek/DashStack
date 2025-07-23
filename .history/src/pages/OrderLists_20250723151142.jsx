import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import ReactPaginate from "react-paginate";
import { IoIosArrowDown } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import "react-paginate/theme/basic/react-paginate.css";
import data from "../data.js";
import "/src/pages/OrderLists.css";

export default function OrdersTable({ darkMode, setDarkMode }) {
    const [selectedDates, setSelectedDates] = useState([]);
    const [filters, setFilters] = useState({ type: [], status: [] });
    const [filteredData, setFilteredData] = useState([...data.order_data]);

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRefs = {
        date: useRef(null),
        type: useRef(null),
        status: useRef(null),
    };

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

    // Закрытие дропдаунов по клику вне
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                openDropdown &&
                dropdownRefs[openDropdown]?.current &&
                !dropdownRefs[openDropdown].current.contains(e.target)
            ) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openDropdown]);

    const toggleDropdown = (key) => {
        setOpenDropdown((prev) => (prev === key ? null : key));
    };

    const handleStatusToggle = (status) => {
        setFilters((prev) => {
            const exists = prev.status.includes(status);
            const updated = exists
                ? prev.status.filter((s) => s !== status)
                : [...prev.status, status];
            return { ...prev, status: updated };
        });
    };

    const handleTypeToggle = (type) => {
        setFilters((prev) => {
            const exists = prev.type.includes(type);
            const updated = exists
                ? prev.type.filter((t) => t !== type)
                : [...prev.type, type];
            return { ...prev, type: updated };
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

    const applyFilter = () => {
        let filtered = [...data.order_data];

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

        if (filters.type.length > 0) {
            filtered = filtered.filter(row =>
                filters.type.some(category =>
                    CATEGORY_MAP[category]?.includes(row.type)
                )
            );
        }

        if (filters.status.length > 0) {
            filtered = filtered.filter(row => filters.status.includes(row.status));
        }

        setFilteredData(filtered);
        setCurrentPage(1);
        setOpenDropdown(null);
    };

    const resetFilters = () => {
        setSelectedDates([]);
        setFilters({ type: [], status: [] });
        setFilteredData([...data.order_data]);
        setCurrentPage(1);
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

    // Пагинация — вычисляем диапазон
    const startIndex = (currentPage - 1) * rowsPerPage;
    const displayedData = filteredData.slice(startIndex, startIndex + rowsPerPage);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const showingFrom = filteredData.length === 0 ? 0 : startIndex + 1;
    const showingTo = Math.min(startIndex + rowsPerPage, filteredData.length);

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
                            <td className="filter-cell" ref={dropdownRefs.date}>
                                <div
                                    onClick={() => toggleDropdown("date")}
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
                                        className={`icon-dropdown ${openDropdown === "date" ? "open" : ""}`}
                                    />
                                </div>
                                {openDropdown === "date" && (
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
                            <td className="filter-cell" ref={dropdownRefs.type}>
                                <button
                                    className="dropdown-btn"
                                    onClick={() => toggleDropdown("type")}
                                >
                                    {filters.type.length > 0
                                        ? `${filters.type.length} selected`
                                        : "Order Type"}
                                    <img
                                        src="/images/dropdown-black.png"
                                        alt="dropdown"
                                        className={`icon-dropdown ${openDropdown === "type" ? "open" : ""}`}
                                    />
                                </button>
                                {openDropdown === "type" && (
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
                                        <button className="apply-btn" onClick={applyFilter}>Apply Now</button>
                                    </div>
                                )}
                            </td>

                            {/* Фильтр по статусу */}
                            <td className="filter-cell" ref={dropdownRefs.status}>
                                <button className="dropdown-btn" onClick={() => toggleDropdown("status")}>
                                    {filters.status.length > 0
                                        ? `${filters.status.length} selected`
                                        : "Order Status"}
                                    <IoIosArrowDown
                                        className={`icon-dropdown ${openDropdown === "date" ? "open" : ""}`}
                                    />
                                </button>
                                {openDropdown === "status" && (
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

                            {/* Сброс */}
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
                        {displayedData.length > 0 ? (
                            displayedData.map((row) => (
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
            {/* Пагинация + индикатор */}
            <div className="pagination-wrapper">
                <div className="pagination-info">
                    Showing {showingFrom}–{showingTo} of {filteredData.length}
                </div>
                {filteredData.length > rowsPerPage && (
                    <ReactPaginate
                        previousLabel={"←"}
                        nextLabel={"→"}
                        breakLabel={"..."}
                        pageCount={totalPages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={({ selected }) => setCurrentPage(selected + 1)}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        previousClassName={"page-item"}
                        nextClassName={"page-item"}
                        pageClassName={"page-item"}
                        breakClassName={"page-item"}
                        disabledClassName={"disabled"}
                        forcePage={currentPage - 1}
                    />
                )}
            </div>
        </div>
    );
}
