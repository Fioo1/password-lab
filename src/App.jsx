import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PasswordGenerator from "./pages/PasswordGenerator";
import StrengthChecker from "./pages/StrengthChecker";
import PassphraseGenerator from "./pages/PassphraseGenerator";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/generator"
          element={<PasswordGenerator />}
        />

        <Route
          path="/strength-checker"
          element={<StrengthChecker />}
        />

        <Route
          path="/passphrase"
          element={<PassphraseGenerator />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;