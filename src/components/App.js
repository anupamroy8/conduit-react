import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Articles from "./Articles";
import Signin from "./Signin";
import Signup from "./Signup";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Switch>
          <Route path="/" component={Articles} exact />
          <Route path="/login" component={Signin} />
          <Route path="/register" component={Signup} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
