import { Link } from "react-router-dom";

function PassphraseGenerator() {
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
        Passphrase Generator
      </h1>

      <p>
        Create memorable and secure passphrases.
      </p>

    </main>
  );
}

export default PassphraseGenerator;