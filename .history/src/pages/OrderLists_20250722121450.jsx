import { useEffect, useRef, useState } from "react";
import Choices from "choices.js";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import data from "../data.js";
import "/src/pages/OrderLists.css";

export default function OrdersTable() {
    const [filters, setFilters] = useState({ date: "", type: "", status: "" });
    const [filteredData, setFilteredData] = useState([...data.order_data]);

    const dateSelectRef = useRef(null);
    const typeSelectRef = useRef(null);
    const statusSelectRef = useRef(null);

    const dateChoicesRef = useRef(null);
    const typeChoicesRef = useRef(null);
    const statusChoicesRef = useRef(null);

    useEffect(() => {
        const uniqueDates = [...new Set(data.order_data.map(row => row.date))];
        const uniqueTypes = [...new Set(data.order_data.map(row => row.type))];
        const uniqueStatuses = [...new Set(data.order_data.map(row => row.status))];

        const fillSelect = (select, placeholder, values) => {
            select.innerHTML = "";
            const defaultOpt = document.createElement("option");
            defaultOpt.value = "";
            defaultOpt.textContent = placeholder;
            defaultOpt.selected = true;
            defaultOpt.disabled = true;
            defaultOpt.hidden = true;
            select.appendChild(defaultOpt);

            values.forEach(v => {
                const opt = document.createElement("option");
                opt.value = v;
                opt.textContent = v;
                select.appendChild(opt);
            });
        };

        // fillSelect(dateSelectRef.current, "Date", uniqueDates);
        // fillSelect(typeSelectRef.current, "Order Type", uniqueTypes);
        // fillSelect(statusSelectRef.current, "Order Status", uniqueStatuses);

        const options = {
            searchEnabled: false,
            itemSelectText: "",
            shouldSort: false,
            placeholder: true,
            placeholderValue: null,
        };

        // dateChoicesRef.current = new Choices(dateSelectRef.current, options);
        // typeChoicesRef.current = new Choices(typeSelectRef.current, options);
        // statusChoicesRef.current = new Choices(statusSelectRef.current, options);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFilters(prev => ({ ...prev, [name]: value }));
        };

        // dateSelectRef.current.addEventListener("change", handleChange);
        // typeSelectRef.current.addEventListener("change", handleChange);
        // statusSelectRef.current.addEventListener("change", handleChange);

        // return () => {
        //     dateChoicesRef.current.destroy();
        //     typeChoicesRef.current.destroy();
        //     statusChoicesRef.current.destroy();
        // };
    }, []);


    useEffect(() => {
        let filtered = [...data.order_data];
        if (filters.date) filtered = filtered.filter(row => row.date === filters.date);
        if (filters.type) filtered = filtered.filter(row => row.type === filters.type);
        if (filters.status) filtered = filtered.filter(row => row.status === filters.status);
        setFilteredData(filtered);
    }, [filters]);

    const resetFilters = () => {
        setFilters({ date: "", type: "", status: "" });
        dateChoicesRef.current.setChoiceByValue("");
        typeChoicesRef.current.setChoiceByValue("");
        statusChoicesRef.current.setChoiceByValue("");
        setFilteredData([...data.order_data]);
    };

    // Функция для определения класса
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
                return "status-default";
        }
    }

    return (
        <div className="orderlists-section">
            <div className="title-box"><h3>Order Lists</h3></div>
            {/* <div className="menu-order">
                <table className="filter-table">
                    <tbody>
                        <tr>
                            <td className="filter-cell icon-cell">
                                <img src="/images/filter.png" alt="Filter" className="filter-icon" />
                            </td>
                            <td className="filter-cell label-cell">Filter By</td>
                            <td className="filter-cell">
                                <select ref={dateSelectRef} name="date" defaultValue=""></select>
                            </td>
                            <td className="filter-cell">
                                <select ref={typeSelectRef} name="type" defaultValue=""></select>
                            </td>
                            <td className="filter-cell">
                                <select ref={statusSelectRef} name="status" defaultValue=""></select>
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
            </div> */}
            <div className="menu-order">
                <table className="filter-table">
                    <tr>
                        <td className='filter-cell'>
                            <img src="/images/filter.png" alt="Filter" className="filter-icon" />
                        </td>
                        <td className="filter-cell">
                            <span className="filter-label">Filter By</span>
                        </td>
                        {/* <td className="filter-cell">
                            <span>Date</span>
                            <img src="/images/dropdown-black.png" alt="Arrow" className="icon-dropdown" />
                        </td> */}
                        <td className="filter-cell">
                            <Flatpickr
                                value={filters.date}
                                options={{
                                    dateFormat: "d M Y",
                                }}
                                onChange={(selectedDates, dateStr) => {
                                    setFilters(prev => ({ ...prev, date: dateStr }));
                                }}
                                placeholder="Select Date"
                                className="date-picker"
                            />
                        </td>
                        <td className="filter-cell">
                            <span>Order Type</span>
                            <img src="/images/dropdown-black.png" alt="Arrow" className="icon-dropdown" />
                        </td>
                        <td className="filter-cell">
                            <span>Order Status</span>
                            <img src="/images/dropdown-black.png" alt="Arrow" className="icon-dropdown" />
                        </td>
                        <td className="filter-cell reset-cell">
                            <button className="reset-filter-button">
                                <img src="/images/reset-icon.png" alt="Reset" className="icon-reset" />
                                Reset Filter
                            </button>
                        </td>
                    </tr>
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
                    <tbody className="orders-table__body">
                        {filteredData.length > 0 ? (
                            filteredData.map((row) => (
                                <tr key={row.id} className="orders-table__row">
                                    <td className="orders-table__cell">{row.id}</td>
                                    <td className="orders-table__cell">{row.name}</td>
                                    <td className="orders-table__cell">{row.address}</td>
                                    <td className="orders-table__cell">{row.date}</td>
                                    <td className="orders-table__cell">{row.type}</td>
                                    <td className={`status-cell orders-table__cell ${getStatusClass(row.status)}`}>{row.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="orders-table__empty"
                                >
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