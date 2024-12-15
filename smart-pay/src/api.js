import axios from "axios";

// Set the CSRF token for API requests
export const setCSRFToken = async () => {
  try {
    // Get CSRF cookie
    await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
      withCredentials: true, // Ensure cookies are included in the request
    });
  } catch (error) {
    console.error("Error fetching CSRF cookie:", error);
  }
};

// Create an Axios instance with the CSRF token included
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true, // Send cookies with requests (necessary for CSRF)
});

// Add the CSRF token to the headers
api.interceptors.request.use((config) => {
  const token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
  if (token) {
    config.headers["X-CSRF-TOKEN"] = token; // Set CSRF token in headers
  }
  return config;
});

export default api;
