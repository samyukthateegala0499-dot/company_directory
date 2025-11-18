const CompanyModal = ({ company, onClose }) => {
  if (!company) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-3">{company.name}</h2>

        <p className="text-gray-700 mb-2">
          <strong>Location:</strong> {company.location}
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Industry:</strong> {company.industry}
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Short Info:</strong> {company.smallInfo}
        </p>

        <p className="text-gray-900 leading-relaxed">
          <strong>Description:</strong><br />
          {company.description}
        </p>
      </div>
    </div>
  );
};

export default CompanyModal;
