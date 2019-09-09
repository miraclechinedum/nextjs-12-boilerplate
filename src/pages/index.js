import React from "react";
import withLayout from "../hocs/withLayout";

const Index = props => {
  return (
    <div className="text-center">
      <h1>Heading h1</h1>
      <h2>Heading h2</h2>
      <h3>Heading h3</h3>
      <h4>Heading h4</h4>
      <h5>Heading h5</h5>
      <h6>Heading h6</h6>
    </div>
  );
};

export default withLayout(Index);
