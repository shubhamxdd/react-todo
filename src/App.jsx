import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import FinalTodoComp from "./components/FinalTodoComp";

function App() {
  return (
    <>
      <Header title="Todo list" contact2={false} />
      <Routes>
        <Route path="/" element={<FinalTodoComp />} />
        <Route path="/" index element={<FinalTodoComp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
