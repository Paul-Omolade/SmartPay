import React, { useState, useEffect } from "react";
import api, { setCSRFToken } from "../api";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        await setCSRFToken(); // Get CSRF token before fetching data

        const { data } = await api.get("/categories");
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Handle new category submission
  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await setCSRFToken(); // Get CSRF token before fetching data

      const { data } = await api.post("/categories", { name });
      setCategories([...categories, data]); // Add the new category to the list
      setName(""); // Reset the input
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Manage Categories</h1>

      {/* Add Category Form */}
      <form onSubmit={handleAddCategory} className="mb-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Add Category
          </button>
        </div>
      </form>

      {/* Category List */}
      <ul className="list-group">
        {categories.map((category) => (
          <li
            key={category.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
