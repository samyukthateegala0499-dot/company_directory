import { createContext, useState, useEffect } from "react";
import companiesData from "../assets/company.json";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState(companiesData);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [filtered, setFiltered] = useState(companiesData);

  useEffect(() => {
    let data = companies;

    if (search.trim() !== "") {
      data = data.filter((company) =>
        company.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (locationFilter !== "All") {
      data = data.filter((company) => company.location === locationFilter);
    }

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
