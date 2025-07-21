import { useEffect, useRef, useState } from "react";
import Choices from "choices.js";
import { order_data } from '/src/data.js'
import '/src/pages/OrderLists.css';

export default function OrdersTable() {
    const [filters, setFilters] = useState({ date: "", type: "", status: "" });
    const [filteredData, setFilteredData] = useState([order_data]);

    const dateSelectRef = useRef(null);
    const typeSelectRef = useRef(null);
    const statusSelectRef = useRef(null);

    const dateChoicesRef = useRef(null);
    const typeChoicesRef = useRef(null);
    const statusChoicesRef = useRef(null);

    useEffect(() => {
        // Инициализация Choices.js для всех селектов
        dateChoicesRef.current = new Choices(dateSelectRef.current, { searchEnabled: false, itemSelectText: "" });
        typeChoicesRef.current = new Choices(typeSelectRef.current, { searchEnabled: false, itemSelectText: "" });
        statusChoicesRef.current = new Choices(statusSelectRef.current, { searchEnabled: false, itemSelectText: "" });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFilters((prev) => ({ ...prev, [name]: value }));
        };

        dateSelectRef.current.addEventListener("change", handleChange);
        typeSelectRef.current.addEventListener("change", handleChange);
        statusSelectRef.current.addEventListener("change", handleChange);

        return () => {
            dateChoicesRef.current.destroy();
            typeChoicesRef.current.destroy();
            statusChoicesRef.current.destroy();
        };
    }, []);

    useEffect(() => {
        let filtered = [order_data];
        if (filters.date) filtered = filtered.filter((row) => row.date === filters.date);
        if (filters.type) filtered = filtered.filter((row) => row.type === filters.type);
        if (filters.status) filtered = filtered.filter((row) => row.status === filters.status);
        setFilteredData(filtered);
    }, [filters]);

    const resetFilters = () => {
        setFilters({ date: "", type: "", status: "" });
        dateChoicesRef.current.setChoiceByValue("");
        typeChoicesRef.current.setChoiceByValue("");
        statusChoicesRef.current.setChoiceByValue("");
        setFilteredData([order_data]);
    };

    return (
        <div>
            {/* Фильтры (верхний блок) */}
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
                            <td className="filter-cell">
                                <select ref={dateSelectRef} name="date" defaultValue="">
                                    <option value="">Date</option>
                                    <option value="14 Feb 2019">14 Feb 2019</option>
                                </select>
                                <img src="/images/dropdown-black.png" alt="Arrow" className="icon-dropdown" />
                            </td>
                            <td className="filter-cell">
                                <select ref={typeSelectRef} name="type" defaultValue="">
                                    <option value="">Order Type</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Book">Book</option>
                                    <option value="Medicine">Medicine</option>
                                    <option value="Mobile">Mobile</option>
                                    <option value="Watch">Watch</option>
                                </select>
                                <img src="/images/dropdown-black.png" alt="Arrow" className="icon-dropdown" />
                            </td>
                            <td className="filter-cell">
                                <select ref={statusSelectRef} name="status" defaultValue="">
                                    <option value="">Order Status</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                                <img src="/images/dropdown-black.png" alt="Arrow" className="icon-dropdown" />
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

            <table className="border w-full text-left mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((row, idx) => (
                            <tr key={row.id || idx}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.address}</td>
                                <td>{row.date}</td>
                                <td>{row.type}</td>
                                <td>{row.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center p-4">
                                No results
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}