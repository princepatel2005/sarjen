import React from "react";
import "./pages.css";

class NewsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      error: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://gnews.io/api/v4/top-headlines?country=in&lang=en&apikey=e0a9efc366186bb9fd75ecba7dc29687"
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.articles) {
          this.setState({ error: "No news found" });
        } else {
          this.setState({ articles: data.articles });
        }
      })
      .catch(() => {
        this.setState({ error: "API Error" });
      });
  }

  render() {
    return (
      <div className="page">
        <h2>Latest News</h2>

        {this.state.error && <p className="error">{this.state.error}</p>}

        <div className="news-grid">
          {this.state.articles.map((a, i) => (
            <div className="news-card" key={i}>
              
              <img
                src={
                  a.image
                    ? a.image
                    : "https://via.placeholder.com/300"
                }
                alt="news"
              />

              <h3>{a.title}</h3>

              <p>{a.description}</p>

              <a href={a.url} target="_blank" rel="noreferrer">
                Read More →
              </a>

            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NewsApp;