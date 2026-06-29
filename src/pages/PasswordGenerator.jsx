import { Link } from "react-router-dom";

function PasswordGenerator() {
  return (
    <main>

      <Link
        to="/"
        style={{
          color:"#60a5fa",
          textDecoration:"none",
          fontSize:"18px"
        }}
      >
        ← Back
      </Link>

      <h1 style={{marginTop:"30px"}}>
        Password Generator
      </h1>

      <p>
        Generate secure passwords.
      </p>

    </main>
  );
}

export default PasswordGenerator;