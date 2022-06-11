import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Container/Home";
import Footer from "./Components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Departments from "./Container/Departments";
import Doctor from "./Container/Doctor";
import About from "./Container/About";
import Contact from "./Container/Contact";
import Form from "./Container/Form";

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
     <Route path={"/form"} exact component={Form} />
   </Switch>

   

   <Footer />
   </>
  );
}

export default App;
