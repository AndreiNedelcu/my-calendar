import React from "react";

export default ({ name }) => {
  const [name, setName] = React.useState("");
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <button onClick={() => setName(this.Text)}>click me</button>
    </React.Fragment>
  );
};
