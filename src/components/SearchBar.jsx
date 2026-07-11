// Import Lucide icons
import { Search, ListFilter } from "lucide-react";
import "../styles/components/SearchBar.css";
export default function SearchBar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}) {
  return (
    <div className="search-bar">
      <div className="search-box">
        <Search size={18} className="search-icon" />

        <input
          className="search-input"
          type="text"
          value={search}
          placeholder="Search by title or description..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filters">
        <div className="filter-item">
          <ListFilter size={18} />
          <select
            className="filter-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className="filter-item">
          <ListFilter size={18} />
          <select
            className="filter-select"
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
