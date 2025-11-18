// src/pages/Companies.jsx
import { useContext, useMemo, useState, useEffect } from "react";
import CompanyContext from "../Context/CompanyContext";
import CompanyCard from "../Components/CompanyCard";
import CompanyModal from "../Components/Modal";
import Pagination from "../Components/Pagination";

export default function Companies() {
  const {
    companies = [],
    search,
    setSearch,
    locationFilter,
    setLocationFilter,
    industryFilter,
    setIndustryFilter,
    locations = [],
    industries = [],
    loading,
    error,
  } = useContext(CompanyContext);

  const [sortBy, setSortBy] = useState("name_asc");
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const [selectedCompany, setSelectedCompany] = useState(null);

  // sorted list derived from context-filtered companies
  const sorted = useMemo(() => {
    const list = companies.slice();
    switch (sortBy) {
      case "name_asc":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "name_desc":
        return list.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return list;
    }
  }, [companies, sortBy]);

  useEffect(() => {
    // reset to first page whenever filters or sorting change
    setPage(1);
  }, [search, locationFilter, industryFilter, sortBy]);

  const totalItems = sorted.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const visible = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page]);

  // Skeleton card for loading
  const Skeleton = () => (
    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow animate-pulse">
      <div className="h-5 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
      <div className="h-9 bg-gray-200 rounded w-full"></div>
    </div>
  );

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-start justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Company Directory</h1>

        <div className="flex gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded-md"
            aria-label="Sort companies"
          >
            <option value="">Sort By ↑</option>
            <option value="name_asc">Name ↑</option>
            <option value="name_desc">Name ↓</option>
          </select>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border rounded-md"
        />

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="p-3 border rounded-md"
        >
          {locations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
          className="p-3 border rounded-md"
        >
          {industries.map((ind, i) => (
            <option key={i} value={ind}>
              {ind}
            </option>
          ))}
        </select>

        <div className="hidden md:flex items-center">
          {/* placeholder to keep grid aligned on md */}
        </div>
      </div>

      {/* Content area */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: pageSize }).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <div className="p-6 bg-red-50 text-red-700 rounded">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.length === 0 ? (
              <div className="col-span-full p-6 text-gray-600">No companies found.</div>
            ) : (
              visible.map((c) => (
                <CompanyCard key={c.id} company={c} onDetails={(company) => setSelectedCompany(company)} />
              ))
            )}
          </div>

          {/* footer: count + pagination */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {visible.length} of {totalItems} result{totalItems !== 1 ? "s" : ""}
            </div>

            <Pagination currentPage={page} onPageChange={setPage} totalItems={totalItems} pageSize={pageSize} />
          </div>
        </>
      )}

      <CompanyModal company={selectedCompany} onClose={() => setSelectedCompany(null)} />
    </div>
  );
}
