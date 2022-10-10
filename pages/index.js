import { useState } from "react";
import axios from "axios";

export default function Lecture17() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [plan, setPlan] = useState("");

  async function submitForm() {
    const body = {
      email,
      pwd,
      address,
      gender,
      plan,
    };

    try {
      const resp = await axios.post("/api/register", body);
      if (resp.data.ok) alert("Register Successfully");
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <div>
      <p>CMU Marathon 2022</p>

      <label>Email</label>
      <br />
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        placeholder="6 - 12 characters"
        type="password"
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
      ></input>

      <br />
      <label>Address</label>
      <br />
      <textarea
        rows="5"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />
      <br />

      <label>Gender</label>
      <br />
      <select onChange={(e) => setGender(e.target.value)} value={gender}>
        <option value="">-</option>
        <option value="male">Male (เพศชาย)</option>
        <option value="female">Female (เพศหญิง)</option>
      </select>

      <br />
      <label>Plan</label>
      <br />
      <select onChange={(e) => setPlan(e.target.value)} value={plan}>
        <option value="">-</option>
        <option value="full">Full Marathon (42.195 KM)</option>
        <option value="half">Half Marathon (21.1 KM)</option>
        <option value="mini">Mini Marathon (10.5 KM)</option>
      </select>

      <br />
      <button onClick={() => submitForm()}>Register</button>
    </div>
  );
}
