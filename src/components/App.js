import React, {Component} from "react";
import Artist from "./Artist";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  state = { artistQuery: "", artist: null, tracks: [] };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  }

  keyPressHandler = event => {
    if (event.key === "Enter") {
      this.findArtist();
    }
  }

  findArtist = () => {
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
      .then(response => response.json())
      .then(json => {

        if (json.artists.total > 0) {
          const artist = json.artists.items[0];

          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  }

  render() {
    console.log("this.state", this.state);

    return (
      <div>
        <h2>Artist Finder</h2>
        <input onChange={this.updateArtistQuery}
               onKeyDown={this.keyPressHandler}
               type="text"
               placeholder="Search for an artist"
        />
        <button onClick={this.findArtist}>Search</button>
        <Artist artist={this.state.artist} />
      </div>
    );
  }
}

export default App;
