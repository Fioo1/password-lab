import { Link } from "react-router-dom";

function StrengthChecker() {
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
        Strength Checker
      </h1>

      <p>
        Analyze password strength.
      </p>

    </main>
  );
}

export default StrengthChecker;