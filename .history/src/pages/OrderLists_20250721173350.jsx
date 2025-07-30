import { useEffect, useRef, useState } from "react";
import Choices from "choices.js";

const data = [
  { id: "00001", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "14 Feb 2019", type: "Electric", status: "Completed" },
  { id: "00002", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "14 Feb 2019", type: "Book", status: "Processing" },
  { id: "00003", name: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", type: "Medicine", status: "Rejected" },
  { id: "00004", name: "Gilbert Johnston", address: "768 Destiny Lake Suite 600", date: "14 Feb 2019", type: "Mobile", status: "Completed" },
  { id: "00005", name: "Alan Cain", address: "042 Mylene Throughway", date: "14 Feb 2019", type: "Watch", status: "Processing" },
  { id: "00006", name: "Alfred Murray", address: "543 Weimann Mountain", date: "14 Feb 2019", type: "Medicine", status: "Completed" },
];

export default function OrdersTable() {
  const [filters, setFilters] = useState({ type: "", status: "" });
  const [filteredData, setFilteredData] = useState(data);

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
    let filtered = data;

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
    setFilteredData(data);
  };

  return (
    <div>
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
