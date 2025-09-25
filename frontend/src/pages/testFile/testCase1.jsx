import { useState } from "react";

export default function TestCase() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  // input change handle karne ke liye
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // form submit hone par
  const handleSubmit = (e) => {
    e.preventDefault(); // page reload na ho
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded w-80 space-y-3">
      <h2 className="text-xl font-bold">Simple Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <textarea
        name="address"
        placeholder="Enter Address"
        value={formData.address}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
