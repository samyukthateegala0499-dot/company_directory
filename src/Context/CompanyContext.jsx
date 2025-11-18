import { createContext, useState, useEffect } from "react";
import companiesData from "../assets/company.json";

// Default safe values
const CompanyContext = createContext({
  companies: [],
  search: "",
  setSearch: () => {},
  locationFilter: "All",
  setLocationFilter: () => {},
  industryFilter: "All",
  setIndustryFilter: () => {},
  locations: [],
  industries: []
});

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState(companiesData);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [filtered, setFiltered] = useState([]);

  // Load initial data
  useEffect(() => {
    setCompanies(companiesData);
  }, []);

  // Apply all filters
  useEffect(() => {
    let data = companies;

    // Search filter
    if (search.trim() !== "") {
      data = data.filter((company) =>
        company.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Location filter
    if (locationFilter !== "All") {
      data = data.filter((company) => company.location === locationFilter);
    }

    // Industry filter
    if (industryFilter !== "All") {
      data = data.filter((company) => company.industry === industryFilter);
    }

    setFiltered(data);
  }, [search, locationFilter, industryFilter, companies]);

  const locations = ["All", ...new Set(companies.map((c) => c.location))];
  const industries = ["All", ...new Set(companies.map((c) => c.industry))];

  return (
    <CompanyContext.Provider
      value={{
        companies: filtered,
        search,
        setSearch,
        locationFilter,
        setLocationFilter,
        industryFilter,
        setIndustryFilter,
        locations,
        industries
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
