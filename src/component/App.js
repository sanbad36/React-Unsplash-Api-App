import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  // this function is called by the child component, Search component.
  onSearchSubmit = async (term) => {
    // this is a callback function
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // .then((response) => {
    //   console.log(response.data.results);
    // });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar runMeWhenUserSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
