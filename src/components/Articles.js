import React from "react";
import Tags from "./Tags";
import uuid from "react-uuid";

function Articles(props) {
  return (
    <section className="main container">
      <div className="row">
        <article className="articles">
          <ul className="tagflex" >
            <h3 className="globalfeed" onClick={()=> props.handleTags("all")}>Global Feed</h3>
            {props.filtered !== "all" ? (
                <h3 className="tagfeed"  onClick={()=>props.handleTags(props.filtered)}>#{props.filtered}</h3>
            ):""}
          </ul>
          <hr />

          {props.articles
            ? props.articles.map((data) => {
                return (
                  <div key={uuid()}>
                    <div className="article-meta">
                      <div className="info">
                        <a  className="imgresponsive">
                          <img
                            className="imgauthor"
                            src={data.author.image}
                            alt={data.author.username}
                          />
                        </a>
                        <div className="margin">
                          <a >
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

        <Tags tags={props.tags} tagChange={(e) => props.tagChange(e)} />
      </div>
    </section>
  );
}

export default Articles;
