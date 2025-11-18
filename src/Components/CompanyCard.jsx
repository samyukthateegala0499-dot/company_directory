import React from "react";

export default function CompanyCard({ company, onDetails }) {
  return (
    <article className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
      <h3 className="text-lg font-semibold mb-2">{company.name}</h3>

      <div className="text-sm text-gray-600 mb-3 space-y-1">
        <div> {company.location}</div>
        <div> {company.industry}</div>
      </div>

      <p className="text-gray-500 text-sm mb-4 italic line-clamp-3">
        {company.smallInfo ? company.smallInfo : (company.description || "").slice(0, 100) + "..."}
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onDetails(company)}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </button>
        {company.employees !== undefined && (
          <div className="px-3 py-2 rounded-lg border text-sm text-gray-700">
            {company.employees} emp
          </div>
        )}
      </div>
    </article>
  );
}
