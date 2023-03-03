import { Fragment } from "react";

import Navbar from "./header-navbar";
import Content from "./header-content";

const Header = () => {
  return (
    <Fragment>
      <Navbar />
      <Content />
    </Fragment>
  );
};
export default Header;
