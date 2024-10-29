import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoanForm from "./components/LoanForm.jsx";
import LoanList from "./components/LoanList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoanForm />} />
        <Route path="/loans" element={<LoanList />} />
      </Routes>
    </Router>
  );
}

export default App;
