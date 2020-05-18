import React, { Component } from "react";
import Header from "./components/Title";
import GHSearch from "./components/GHSearch";
import { Container, List } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state = {
    searchResult: [],
    q: "",
    message: "",
  };

  onChangeHandler = (e) => {
    this.setState({ q: e.target.value });
  };

  getSearch = async () => {
    let result;
    try {
      result = await axios.get(
        `https://api.github.com/search/users?q=${this.state.q}`
      );
      this.setState({ searchResult: result.data.items });
    } catch (error) {
      let errorMessage = error.message;
      this.setState({ message: errorMessage });
    }
  };

  render() {
    let items;
    items = this.state.searchResult.map((item) => {
      return (
        <ul key={item.login + item.id} id={item.login}>
          {item.login}
        </ul>
      );
    });
    return (
      <Container>
        <section name="title">
          <Header />
        </section>
        <section name="main">
          <GHSearch
            getSearch={this.getSearch}
            onChangeHandler={this.onChangeHandler}
          />
          <List id="search-items">{items}</List>
        </section>
      </Container>
    );
  }
}

export default App;
