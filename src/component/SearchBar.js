import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    // callback function
    event.preventDefault();
    this.props.runMeWhenUserSubmit(this.state.term); // now see here, we have our data which user hass input in the variable term,
    // now we have to pass this value of term to the parent i.e App component. To pass this value, we pass a callback as a prop to this component from the parent.
    // here named as, runMeWhenUserSubmit.
    // to call that function, and pass the term value with that, Now to call that function we have to call it through the props, and to access the props in the class components, we have to use this.
    // and pass the term as an argument to it. In the App component we can do what ever we want with this value.
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Image Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
