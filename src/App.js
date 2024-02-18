import {useState} from "react"
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button", formData);

    setFormData({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
            id="firstName"
            type="text"
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="lastName">
          Last Name:
          <input
            id="lastName"
            type="text"
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>

        <p>Full Name: {formData.firstName} {formData.lastName}</p>
      </form>
    </div>
  );
}

export default App;
