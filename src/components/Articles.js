import React from "react";
import Tags from "./Tags";
import uuid from "react-uuid";

class Articles extends React.Component {
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
    if (tagName === "all") {
      fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=0`)
        .then((res) => res.json())
        .then((data) =>
          this.setState({ articles: data.articles, filtered: tagName })
        )
        .catch((err) => console.log(err));
    } else {
      fetch(
        `https://conduit.productionready.io/api/articles?tag=${tagName}&limit=10&offset=0`
      )
        .then((res) => res.json())
        .then((data) =>
          this.setState({ articles: data.articles, filtered: tagName })
        )
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <section className="main container">
        <div className="row">
          <article className="articles">
            <ul className="tagflex">
              <h3
                className="globalfeed"
                onClick={() => this.handleTags("all")}
              >
                Global Feed
              </h3>
              {this.state.filtered !== "all" ? (
                <h3
                  className="tagfeed"
                  onClick={() => this.handleTags(this.state.filtered)}
                >
                  #{this.state.filtered}
                </h3>
              ) : (
                ""
              )}
            </ul>
            <hr />

            {this.state.articles
              ? this.state.articles.map((data) => {
                  return (
                    <div key={uuid()}>
                      <div className="article-meta">
                        <div className="info">
                          <a className="imgresponsive">
                            <img
                              className="imgauthor"
                              src={data.author.image}
                              alt={data.author.username}
                            />
                          </a>
                          <div className="margin">
                            <a>
                              <div>{data.author.username}</div>
                            </a>
                            <div>{data.updatedAt}</div>
                          </div>
                        </div>
                        <div className="likes">
                          <button>Likes {data.favoritesCount}</button>
                        </div>
                      </div>
                      <div className="article-preview">
                        <h1>
                          <a href="#">{data.title}</a>{" "}
                        </h1>
                        <p>{data.body}</p>
                        <span>Readmore...</span>
                        <ul className="taglist">
                          {data.tagList
                            ? data.tagList.map((tag) => {
                                return (
                                  <a href="#" key={uuid()} className="tag">
                                    {tag}
                                  </a>
                                );
                              })
                            : ""}
                        </ul>
                        <hr />
                      </div>
                    </div>
                  );
                })
              : ""}
          </article>

          <Tags tags={this.state.tags} tagChange={(tag) => this.handleTags(tag)} />
        </div>
      </section>
    );
  }
}
export default Articles;
