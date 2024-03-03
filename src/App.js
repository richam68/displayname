import {useState} from "react"
import './App.css';

function App() {
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('')
 const [fullName, setFullName] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault();
  const concatenatedName = `${firstName} ${lastName}`
  setFullName(concatenatedName);
 }

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit= {handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
            id="firstName"
            type="text"
            required
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value.replace(/[^a-zA-Z0-9_@.!/#&+-]/g, ""))}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value.replace(/[^a-zA-Z0-9_@.!/#&+-]/g, ""))}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>

      </form>
       {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
