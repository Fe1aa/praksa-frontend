import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="cards">
        <Card
          title="Prva kartica"
          description="Opis prve kartice."
          image="https://placehold.co/300x200"
        />
        <Card
          title="Druga kartica"
          description="Opis druge kartice."
          image="https://placehold.co/300x200"
        />
        <Card
          title="Treća kartica"
          description="Opis treće kartice."
          image="https://placehold.co/300x200"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
