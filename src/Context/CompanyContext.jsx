// src/context/CompanyContext.jsx
import { createContext, useState, useEffect } from "react";
import companiesData from "../assets/company.json";

const CompanyContext = createContext({
  companies: [],
  search: "",
  setSearch: () => {},
  locationFilter: "All",
  setLocationFilter: () => {},
  industryFilter: "All",
  setIndustryFilter: () => {},
  locations: [],
  industries: [],
  loading: false,
  error: null,
});

export const CompanyProvider = ({ children }) => {
  const [rawCompanies, setRawCompanies] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate API fetch (replace with fetch() if you have backend)
  useEffect(() => {
    setLoading(true);
    setError(null);
    const t = setTimeout(() => {
      try {
        setRawCompanies(companiesData);
        setCompanies(companiesData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load company data.");
        setLoading(false);
      }
    }, 650);
    return () => clearTimeout(t);
  }, []);

  // Apply filters
  useEffect(() => {
    let data = rawCompanies.slice();

    if (search.trim() !== "") {
      const q = search.trim().toLowerCase();
      data = data.filter((c) => c.name.toLowerCase().includes(q));
    }

    if (locationFilter !== "All") {
      data = data.filter((c) => c.location === locationFilter);
    }

    if (industryFilter !== "All") {
      data = data.filter((c) => c.industry === industryFilter);
    }

    setCompanies(data);
  }, [rawCompanies, search, locationFilter, industryFilter]);

  const locations = ["All", ...Array.from(new Set(rawCompanies.map((c) => c.location)))];
  const industries = ["All", ...Array.from(new Set(rawCompanies.map((c) => c.industry)))];

  return (
    <CompanyContext.Provider
      value={{
        companies,
        search,
        setSearch,
        locationFilter,
        setLocationFilter,
        industryFilter,
        setIndustryFilter,
        locations,
        industries,
        loading,
        error,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
