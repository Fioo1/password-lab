import ToolCard from "../components/ToolCard";
import "../App.css";

function Home() {
  return (
    <main>

      <section className="hero">

        <h1>🔐 Password Lab</h1>

        <p>
          Generate secure passwords, analyze their strength
          and improve your online security.
        </p>

      </section>

      <section className="cards">

        <ToolCard
          icon="🔑"
          title="Password Generator"
          description="Generate strong and secure passwords instantly."
          link="/generator"
        />

        <ToolCard
          icon="🛡️"
          title="Strength Checker"
          description="Check how secure your password really is."
          link="/strength-checker"
        />

        <ToolCard
          icon="📝"
          title="Passphrase Generator"
          description="Create memorable and secure passphrases."
          link="/passphrase"
        />

      </section>

    </main>
  );
}

export default Home;