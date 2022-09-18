import React, { Component } from "react";

class Search extends Component {

  state = { artistQuery: "" }

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  }

  keyPressHandler = event => {
    if (event.key === "Enter") {
      this.findArtist();
    }
  }

  findArtist = () => {
    this.props.findArtist(this.state.artistQuery);
  }

  render() {
    return (
      <div>
        <input onChange={this.updateArtistQuery}
               onKeyDown={this.keyPressHandler}
               placeholder="Search for an artist"
        />
        <button onClick={this.findArtist}>Search</button>
      </div>
    );
  }
}

export default Search;
