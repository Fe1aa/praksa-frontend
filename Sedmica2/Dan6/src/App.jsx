import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header />
      <div className="divider"></div>
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
