// import "./App.css";
import Contact from "./TailBlocksComponents/Contact";
import Footer from "./TailBlocksComponents/Footer";
import Header from "./TailBlocksComponents/Header";
import Hero from "./TailBlocksComponents/Hero";
import Portfolio from "./TailBlocksComponents/Portfolio";

function App() {
  let username = "Bilal";
  let login = true;
  let products = [
    { name: "Potato", key: 1 },
    { name: "Tomato", key: 2 },
    { name: "Carbage", key: 3 },
    { name: "Lemon", key: 4 },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
