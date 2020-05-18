import React from "react";
import { Button, Input, Container } from "semantic-ui-react";

const GHSearch = ({ getSearch, onChangeHandler }) => {
  return (
    <>
      <Container>
        <Input
          id="search-input"
          type="text"
          name="search"
          placeholder="Input GH username"
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
        <Button
          id="search-button"
          name="search"
          onClick={() => {
            getSearch();
          }}
        >
          Search
        </Button>
      </Container>
    </>
  );
};

export default GHSearch;
