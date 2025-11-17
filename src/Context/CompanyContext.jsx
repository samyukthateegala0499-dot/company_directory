import { createContext, useContext, useState, useEffect } from "react";
import companiesData from "../assets/company.json";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState(companiesData);
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");

  // Filter logic
  const filteredCompanies = companies.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchIndustry = industry ? c.industry === industry : true;
    return matchSearch && matchIndustry;
  });

  return (
    <CompanyContext.Provider
      value={{
        companies: filteredCompanies,
        search,
        setSearch,
        industry,
        setIndustry,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => useContext(CompanyContext);
