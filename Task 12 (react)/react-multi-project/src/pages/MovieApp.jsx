import React from "react";
import "./pages.css";

class MovieApp extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      movies: [],
      error: ""
    };
  }

  searchMovie() {
    if (!this.state.search) return;

    fetch(
      `https://www.omdbapi.com/?s=${this.state.search}&apikey=8aa4cdcb`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "False") {
          this.setState({ error: "Movie not found", movies: [] });
        } else {
          this.setState({ movies: data.Search, error: "" });
        }
      });
  }

  render() {
    return (
      <div className="page">
        <h2>Movie Search</h2>

        <div className="movie-input">
          <input
            type="text"
            placeholder="Search movie..."
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <button onClick={() => this.searchMovie()}>Search</button>
        </div>

        {/* Error */}
        {this.state.error && <p className="error">{this.state.error}</p>}

        {/* Movie List */}
        <div className="movie-grid">
          {this.state.movies.map((m, i) => (
            <div className="movie-card" key={i}>
              
              <img
                src={
                  m.Poster !== "N/A"
                    ? m.Poster
                    : "https://via.placeholder.com/150"
                }
                alt={m.Title}
              />

              <h3>{m.Title}</h3>
              <p>📅 Year: {m.Year}</p>
              <p>🎬 Type: {m.Type}</p>

            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieApp;