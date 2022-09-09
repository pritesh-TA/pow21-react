import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Footer from "./ui/footer/footer";
import Header from "./ui/header/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
