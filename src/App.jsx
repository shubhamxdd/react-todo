import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, createRoutesFromElements, Route, BrowserRouter } from "react-router-dom";
import FinalTodoComp from "./components/FinalTodoComp";


function App() {

  

  return (
    <>
      <Header title="Todo list" contact2={false} />
      <FinalTodoComp/>
      <Footer />
    </>
  );
}

export default App;
