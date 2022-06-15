import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Container/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import Departments from "./Container/Deparments/Departments";
import Doctor from "./Container/Doctor/Doctor";
import About from "./Container/About/About";
import Contact from "./Container/Contact/Contact";
import FormL from "./Container/Form/FormL";
function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/department"} exact component={Departments} />
        <Route path={"/doctor"} exact component={Doctor} />
        <Route path={"/about"} exact component={About} />
        <Route path={"/contact"} exact component={Contact} />
        <Route path={"/form"} exact component={FormL} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
