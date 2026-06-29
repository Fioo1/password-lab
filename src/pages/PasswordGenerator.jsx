import { Link } from "react-router-dom";
import { useState } from "react";

function PasswordGenerator() {

  const [password, setPassword] = useState("");

  const [length, setLength] = useState(16);

  const [uppercase, setUppercase] = useState(true);

  const [lowercase, setLowercase] = useState(true);

  const [numbers, setNumbers] = useState(true);

  const [symbols, setSymbols] = useState(true);

  return (
    <main>

      <Link
        to="/"
        className="back-link"
      >
        ← Back
      </Link>

      <section className="generator-container">

        <h1>🔑 Password Generator</h1>

        <p>
          Generate secure and customizable passwords.
        </p>

        <input
          type="text"
          value={password}
          readOnly
          className="password-input"
        />

        <div className="length-container">

          <label>

            Password Length

          </label>

          <span>

            {length}

          </span>

        </div>

        <input
          type="range"
          min="8"
          max="64"
          value={length}
          onChange={(e)=>setLength(e.target.value)}
        />

        <div className="options">

          <label>

            <input
              type="checkbox"
              checked={uppercase}
              onChange={()=>setUppercase(!uppercase)}
            />

            Uppercase

          </label>

          <label>

            <input
              type="checkbox"
              checked={lowercase}
              onChange={()=>setLowercase(!lowercase)}
            />

            Lowercase

          </label>

          <label>

            <input
              type="checkbox"
              checked={numbers}
              onChange={()=>setNumbers(!numbers)}
            />

            Numbers

          </label>

          <label>

            <input
              type="checkbox"
              checked={symbols}
              onChange={()=>setSymbols(!symbols)}
            />

            Symbols

          </label>

        </div>

        <button>

          Generate Password

        </button>

      </section>

    </main>
  );

}

export default PasswordGenerator;