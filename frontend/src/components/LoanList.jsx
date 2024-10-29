import { useEffect, useState } from "react";
import axios from "axios";

function LoanList() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/loans")
      .then((response) => setLoans(response.data))
      .catch((error) => console.error("Error fetching loans:", error));
  }, []);

  return (
    <div>
      <h2>Loan Applications</h2>
      {loans.length === 0 ? (
        <p>No loans available.</p>
      ) : (
        <ul>
          {loans.map((loan) => (
            <li key={loan.id}>
              <strong>{loan.borrowerName}</strong> - ${loan.amount} -{" "}
              {loan.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LoanList;
