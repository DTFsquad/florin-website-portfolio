import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import 'aos/dist/aos.css';
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Footer from "../components/footer/footer";
import LoadingIntro from "..//components/loading-intro/loading-intro";
import Header from "../containers/header/header";
import { Global } from "@emotion/core";
import { globalStyles } from "../styles";

// if in dev mode
if (process.env.NODE_ENV === 'development') {
  // Set react-axe to catch accessibility issues in dev mode
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const Main = styled.main`
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const [ loading, setLoading] = useState(true);

  let AOS;
  useEffect(() => {
    // Server-side rendering is not provide the 'document' object,
    // so this import is needed in either useEffect or componentDidMount,
    // because are executed in client side
    const AOS = require('aos');
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      {!loading ? (
        <React.Fragment>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </React.Fragment>
      ) : (
        <LoadingIntro setLoading={setLoading} />
      )}
    </React.Fragment>
    );
  };

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
