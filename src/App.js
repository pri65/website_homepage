import React from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Info from "./components/Info";
import Categories4 from "./components/Categories4";
import Cards from "./components/Cards";
import UserForm from "./components/UserForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <HeroBanner/>
      <Info/>
      <Categories4/>
      <Cards/>
      <UserForm/>
      <Footer/>
    </div>
  );
}

export default App;
