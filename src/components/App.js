import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Articles from "./Articles";
import Signin from "./Signin";
import Signup from "./Signup";
import Error from "./Error";

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userInfo: null,
    };
  }

  componentDidMount() {
    if (localStorage.authToken) {
      let url = "https://conduit.productionready.io/api/user";
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Token ${localStorage.authToken}`,
        },
      })
        .then((res) => res.json())
        .then(({ user }) =>
          this.setState({ isLoggedIn: true, userInfo: user })
        );
    }
  }

  updateLoggedIn = (status) => {
    this.setState({ isLoggedIn: status });
  };

  render() {
    let { isLoggedIn } = this.state;
    return (
      <>
        <Header isLoggedIn={isLoggedIn} />
        <Switch>
          <Route path="/" component={Articles} exact />
          <Route
            path="/login"
            render={() => <Signin updateLoggedIn={this.updateLoggedIn} />}
          />
          <Route path="/register" component={Signup} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
