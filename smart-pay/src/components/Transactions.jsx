import React, { useState, useEffect } from "react";
import API from "../api";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  // Fetch transactions
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await API.get("/transactions");
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  // Add transaction
  const handleAddTransaction = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/transactions", { description, amount });
      setTransactions([...transactions, data]); // Update the transaction list
      setDescription("");
      setAmount("");
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Transactions</h1>

      {/* Add Transaction Form */}
      <form onSubmit={handleAddTransaction} className="mb-4">
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            id="description"
            className="form-control"
            placeholder="Transaction description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            placeholder="Transaction amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Transaction</button>
      </form>

      {/* Transactions List */}
      <ul className="list-group">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="list-group-item d-flex justify-content-between">
            <span>{transaction.description}</span>
            <span className="fw-bold">${transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
