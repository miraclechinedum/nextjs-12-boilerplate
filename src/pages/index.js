import React, { Fragment } from "react";
import Home from "../components/Index/Home";
import withLayout from "../hocs/withLayout";

const Index = props => {
  return (
   <Fragment>
      <Home/>
     </Fragment>
  );
};

export default withLayout(Index);
