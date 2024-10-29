import { useState } from "react";
import axios from "axios";

function LoanForm() {
  const [borrowerName, setBorrowerName] = useState("");
  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [termInYears, setTermInYears] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/loans", {
        borrowerName,
        amount,
        interestRate,
        termInYears,
      });
      alert("Loan application submitted!");
      // Clear form after submission
      setBorrowerName("");
      setAmount("");
      setInterestRate("");
      setTermInYears("");
    } catch (error) {
      console.error("There was an error submitting the loan:", error);
      alert("Failed to submit loan application.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Borrower Name:</label>
        <input
          type="text"
          value={borrowerName}
          onChange={(e) => setBorrowerName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Interest Rate:</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Term (Years):</label>
        <input
          type="number"
          value={termInYears}
          onChange={(e) => setTermInYears(e.target.value)}
          required
        />
      </div>
      <button type="submit">Apply</button>
    </form>
  );
}

export default LoanForm;
