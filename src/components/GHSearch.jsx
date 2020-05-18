import React from "react";
import { Button, Input } from "semantic-ui-react";

const GHSearch = () => {
  return (
    <>
      <Input
        id="search-input"
        type="text"
        name="search"
        placeholder="Input GH username"
      />
      <Button id="search-button" name="search">Search</Button>
    </>
  );
};

export default GHSearch;
