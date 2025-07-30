import { useEffect, useRef, useState } from "react";
import Choices from "choices.js";
import data from '/src/data.js'
import '/src/pages/OrderLists.css';
  const order_data = [
    { id: "00001", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "14 Feb 2019", type: "Electric", status: "Completed" },
    { id: "00002", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "14 Feb 2019", type: "Book", status: "Processing" },
    { id: "00003", name: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", type: "Medicine", status: "Rejected" },
    { id: "00004", name: "Gilbert Johnston", address: "768 Destiny Lake Suite 600", date: "14 Feb 2019", type: "Mobile", status: "Completed" },
    { id: "00005", name: "Alan Cain", address: "042 Mylene Throughway", date: "14 Feb 2019", type: "Watch", status: "Processing" },
    { id: "00006", name: "Alfred Murray", address: "543 Weimann Mountain", date: "14 Feb 2019", type: "Medicine", status: "Completed" },
  ]

export default function OrdersTable() {
    const [filters, setFilters] = useState({ date: "", type: "", status: "" });
    const [filteredData, setFilteredData] = useState([data.order_data]);

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
        let filtered = [data.order_data];
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
        setFilteredData([data.order_data]);
    };

    return (
        <div className="orderlists-section">
            <div className='title-box'><h3>Products</h3></div>
            <div class="menu-order">
                <table class="filter-table">
                    <tr>
                        <td className='filter-cell'>
                            <img src="/images/filter.png" alt="Filter" class="filter-icon" />
                        </td>
                        <td class="filter-cell">
                            <span class="filter-label">Filter By</span>
                        </td>
                        <td class="filter-cell">
                            <select ref={dateSelectRef} name="date" defaultValue="">
                                <option value="">Date</option>
                                <option value="14 Feb 2019">14 Feb 2019</option>
                            </select>
                        </td>
                        <td class="filter-cell">
                            <span>Order Type</span>
                            <img src="/images/dropdown-black.png" alt="Arrow" class="icon-dropdown" />
                        </td>
                        <td class="filter-cell">
                            <span>Order Status</span>
                            <img src="/images/dropdown-black.png" alt="Arrow" class="icon-dropdown" />
                        </td>
                        <td class="filter-cell reset-cell">
                            <button class="reset-filter-button">
                                <img src="/images/reset-icon.png" alt="Reset" class="icon-reset" />
                                Reset Filter
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
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
                            </td>
                            <td className="filter-cell">
                                <select ref={typeSelectRef} name="type" defaultValue="">

                                </select>
                            </td>
                            <td className="filter-cell">
                                <select ref={statusSelectRef} name="status" defaultValue="">

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
            <table className="orders-table">
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
                            <td colSpan="6" className="no-results">
                                No results
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
