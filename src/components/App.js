import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Articles from "./Articles";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      tags: null,
      filtered: "all",
    };
  }

  componentDidMount() {
    fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=0`)
      .then((res) => res.json())
      .then((data) => this.setState({ articles: data.articles }))
      .catch((err) => console.log(err));
    fetch(`https://conduit.productionready.io/api/tags`)
      .then((res) => res.json())
      .then((data) => this.setState({ tags: data.tags }))
      .catch((err) => console.log(err));
  }
  handleTags = (tagName) => {
    console.log(tagName);
    if(tagName==="all"){
      fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=0`)
      .then((res) => res.json())
      .then((data) => this.setState({ articles: data.articles, filtered:tagName }))
      .catch((err) => console.log(err));
    } else {
      fetch(`https://conduit.productionready.io/api/articles?tag=${tagName}&limit=10&offset=0`)
      .then((res) => res.json())
      .then((data) => this.setState({ articles: data.articles, filtered:tagName }))
      .catch((err) => console.log(err));
    }

  };

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Articles
          articles={this.state.articles}
          tags={this.state.tags}
          tagChange={(tagName) => this.handleTags(tagName)}
          handleTags={this.handleTags}
          filtered={this.state.filtered}
        />
        <Footer />
      </>
    );
  }
}

export default App;
