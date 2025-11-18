import { useContext, useState } from "react";
import CompanyContext from "../Context/CompanyContext";
import CompanyModal from "../Components/Modal"

const Companies = () => {
  const { companies, search, setSearch, locationFilter, setLocationFilter, industryFilter, setIndustryFilter, locations, industries } =
    useContext(CompanyContext);

  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">Company Directory</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search company..."
          className="border p-2 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Location Filter */}
        <select
          className="border p-2 rounded-lg"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          {locations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* Industry Filter */}
        <select
          className="border p-2 rounded-lg"
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
        >
          {industries.map((ind, i) => (
            <option key={i} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg border"
          >
            <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
            <p className="text-gray-600 text-sm mb-1">
              📍 {company.location}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              🏢 {company.industry}
            </p>

            <p className="text-gray-700 text-sm mt-3 mb-4">
              {company.smallInfo}
            </p>

            <button
              onClick={() => setSelectedCompany(company)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <CompanyModal 
        company={selectedCompany} 
        onClose={() => setSelectedCompany(null)} 
      />
    </div>
  );
};

export default Companies;
