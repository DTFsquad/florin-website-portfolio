import React from "react";
import { css } from "@emotion/core";
import JSIcon from "../icons/javascript";
import ReactIcon from "../icons/react";
import ReduxIcon from "../icons/redux";
import GraphQLIcon from "../icons/graphql";
import ApolloIcon from "../icons/apollo";
import NodeIcon from "../icons/node";
import ProgressBar from "../progress-bar/progress-bar";
import GatsbyIcon from '../icons/gatsby';
import CSSIcon from '../icons/css3';

const section = css`
  width: 100%;
  padding: 0 5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0 2.5rem;
  }
`;

const skillContainer = css`
  width: 100%;
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 2rem;
  align-items: center;
  justify-items: center;

  /* All icon logo are svg */
  & > svg {
    height: auto;
    grid-column: 1/2;
  }

  /* All progress bar are divs */
  & > div {
    justify-self: flex-start;
  }
`;

const Skills = () => {
  return (
    <section css={section}>
      {/* <h4 css={title}>Tech Skills</h4> */}
      <div css={skillContainer}>
        <JSIcon
          width='44px'
          height='auto'
        />
        <ProgressBar level={60} description='JavaScript ES6+' />
        <ReactIcon
          width='50px'
          height='auto'
        />
        <ProgressBar level={65} description='React | Hooks | Context API' />
        <ReduxIcon
          width='40px'
          height='auto'
        />
        <ProgressBar level={25} description='Redux' />
        <GraphQLIcon
          width='41px'
          height='auto'
        />
        <ProgressBar level={25} description='GraphQL' />
        <ApolloIcon />
        <ProgressBar level={40} description='Apollo Client' />
        <NodeIcon
          width='55px'
          height='auto'
        />
        <ProgressBar level={45} description='Node | Express.js' />
        <CSSIcon
          width='44px'
          height='auto'
        />
        <ProgressBar level={45} description='CSS3 Grid | SCSS | CSS-in-JS '/>
        <GatsbyIcon />
        <ProgressBar level={55} description='Gatsby.js' />
      </div>
    </section>
  );
};

export default Skills;