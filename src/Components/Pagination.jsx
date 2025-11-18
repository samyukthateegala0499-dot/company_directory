import React from "react";

export default function Pagination({ currentPage, onPageChange, totalItems, pageSize }) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  if (totalPages <= 1) return null;

  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  for (let p = start; p <= end; p++) pages.push(p);

  return (
    <nav className="flex items-center gap-2" aria-label="Pagination">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md border bg-white text-sm disabled:opacity-50"
      >
        First
      </button>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md border bg-white text-sm disabled:opacity-50"
      >
        Prev
      </button>

      {start > 1 && <span className="px-2 text-gray-500">...</span>}

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          aria-current={p === currentPage ? "page" : undefined}
          className={`px-3 py-1 rounded-md border text-sm ${p === currentPage ? "bg-blue-600 text-white" : "bg-white"}`}
        >
          {p}
        </button>
      ))}

      {end < totalPages && <span className="px-2 text-gray-500">...</span>}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md border bg-white text-sm disabled:opacity-50"
      >
        Next
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md border bg-white text-sm disabled:opacity-50"
      >
        Last
      </button>
    </nav>
  );
}
