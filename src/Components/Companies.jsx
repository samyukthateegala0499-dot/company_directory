import { useCompany } from "../Context/CompanyContext.jsx";

const Companies = () => {
  const { companies, search, setSearch, industry, setIndustry } = useCompany();

  const industries = ["Software", "Manufacturing", "Finance", "Marketing", "Construction"];

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Company Listings</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search by name..."
          className="px-4 py-2 border rounded-lg w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Industry Filter */}
        <select
          className="px-4 py-2 border rounded-lg w-full md:w-1/3"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        >
          <option value="">All Industries</option>
          {industries.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      {/* Company Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div key={company.id} className="border rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{company.name}</h3>
            <p className="text-gray-600 mt-2">{company.industry}</p>
            <p className="text-sm text-gray-500">{company.location}</p>
          </div>
        ))}
      </div>

      {/* If none found */}
      {companies.length === 0 && (
        <p className="text-gray-500 mt-10 text-center">No companies match the filters.</p>
      )}
    </div>
  );
};

export default Companies;
