import { useContext } from "react";
import CompanyContext from "../Context/CompanyContext";

const Companies = () => {
  const {
    companies,
    search,
    setSearch,
    locationFilter,
    setLocationFilter,
    industryFilter,
    setIndustryFilter,
    locations,
    industries,
  } = useContext(CompanyContext);

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Company Directory</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search by company name..."
          className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Location Filter */}
        <select
          className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          {locations.map((loc, i) => (
            <option key={i} value={loc}>{loc}</option>
          ))}
        </select>

        {/* Industry Filter */}
        <select
          className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
        >
          {industries.map((ind, i) => (
            <option key={i} value={ind}>{ind}</option>
          ))}
        </select>
      </div>

      {/* Company Cards */}
      {companies.length === 0 ? (
        <p className="text-gray-500 text-lg">No companies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="p-6 bg-white shadow-md rounded-xl border hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
              
              <p className="text-gray-600">
                <strong>Location:</strong> {company.location}
              </p>
              
              <p className="text-gray-600">
                <strong>Industry:</strong> {company.industry}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Companies;
