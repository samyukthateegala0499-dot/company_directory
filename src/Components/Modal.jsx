
const CompanyModal = ({ company, onClose }) => {
  if (!company) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-black">
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-3">{company.name}</h2>

        <div className="grid grid-cols-1 gap-2 mb-4 text-gray-700">
          <div><strong>Location:</strong> {company.location}</div>
          <div><strong>Industry:</strong> {company.industry}</div>
          {company.employees !== undefined && <div><strong>Employees:</strong> {company.employees}</div>}
          {company.smallInfo && <div><strong>Info:</strong> {company.smallInfo}</div>}
        </div>

        <div className="text-gray-900 leading-relaxed">
          <strong>Description:</strong>
          <p className="mt-2">{company.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyModal;
