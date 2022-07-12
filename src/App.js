import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Container/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import Departments from "./Container/Deparments/Departments";
import About from "./Container/About/About";
import Contact from "./Container/Contact/Contact";
import FormL from "./Container/Form/FormL";
import Medicines from "./Container/Medicines/Medicines";
import Appoinment from "./Container/Appoinment/Appoinment";
import Doctor from "./Container/Doctor/Doctor";
import Refexample from "./Container/Refexample/RefExample";
import ListAppoinment from "./Container/Appoinment/ListAppoinment";
import Public from "./PublicRoute/Public";
import Private from "./PrivatRoute/Private";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Public path={"/"} exact component={Home} />
        <Public path={"/department"} exact component={Departments} />
        <Public path={"/doctor"} exact component={Doctor} />
        <Public path={"/about"} exact component={About} />
        <Public path={"/contact"} exact component={Contact} />
        <Public path={"/refexample"} exact component={Refexample} />
        <Private path={"/appointment"} exact component={Appoinment} />
        <Private path={"/list_appointment"} exact component={ListAppoinment} />
        <Public path={"/form"} restricted={true} exact component={FormL} />
        <Public path={"/medicines"} exact component={Medicines} />
        
      </Switch>

      <Footer />
    </>
  );
}

export default App;
