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
    console.log(tagName, "handleeetaggsss");
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
        />
        <Footer />
      </>
    );
  }
}

export default App;
