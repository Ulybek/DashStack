
import { useEffect, useRef, useState } from "react";
import Choices from "choices.js";
import data from '/src/data.js'
import '/src/pages/OrderLists.css';

export default function OrdersTable() {
    const [filters, setFilters] = useState({ type: "", status: "" });
    const [filteredData, setFilteredData] = useState(data.order_data);

    const typeSelectRef = useRef(null);
    const statusSelectRef = useRef(null);

    useEffect(() => {
        // Инициализация Choices.js
        const typeChoices = new Choices(typeSelectRef.current, { searchEnabled: false, itemSelectText: "" });
        const statusChoices = new Choices(statusSelectRef.current, { searchEnabled: false, itemSelectText: "" });

        typeSelectRef.current.addEventListener("change", (e) => {
            setFilters((prev) => ({ ...prev, type: e.target.value }));
        });

        statusSelectRef.current.addEventListener("change", (e) => {
            setFilters((prev) => ({ ...prev, status: e.target.value }));
        });

        return () => {
            typeChoices.destroy();
            statusChoices.destroy();
        };
    }, []);

    useEffect(() => {
        let filtered = data.order_data;

        if (filters.type) {
            filtered = filtered.filter((row) => row.type === filters.type);
        }
        if (filters.status) {
            filtered = filtered.filter((row) => row.status === filters.status);
        }

        setFilteredData(filtered);
    }, [filters]);

    const resetFilters = () => {
        setFilters({ type: "", status: "" });
        typeSelectRef.current.value = "";
        statusSelectRef.current.value = "";
        setFilteredData(data.order_data);
    };

    return (
        <div className="orderlists-section">
            <div className="flex gap-4 mb-4">
                <select ref={typeSelectRef}>
                    <option value="">All Types</option>
                    <option value="Electric">Electric</option>
                    <option value="Book">Book</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Watch">Watch</option>
                </select>

                <select ref={statusSelectRef}>
                    <option value="">All Statuses</option>
                    <option value="Completed">Completed</option>
                    <option value="Processing">Processing</option>
                    <option value="Rejected">Rejected</option>
                </select>

                <button onClick={resetFilters} className="text-pink-500 font-bold">
                    Reset Filter
                </button>
            </div>

            <table className="border w-full text-left">
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
                    {filteredData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.address}</td>
                            <td>{row.date}</td>
                            <td>{row.type}</td>
                            <td>{row.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}