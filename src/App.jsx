import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Companies from "./Components/Companies";
import { CompanyProvider } from "./Context/CompanyContext";

const App = () => {
  return (
    <CompanyProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
    </CompanyProvider>
  );
};

export default App;
