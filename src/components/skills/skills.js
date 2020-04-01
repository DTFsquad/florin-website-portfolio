import React from "react";
import { css, keyframes } from "@emotion/core";
import themes from "../../styles/theme";
import JSIcon from "../icons/javascript";
import ReactIcon from "../icons/react";
import ReduxIcon from "../icons/redux";
import GraphQLIcon from "../icons/graphql";
import ApolloIcon from "../icons/apollo";
import NodeIcon from "../icons/node";
import SASSIcon from "../icons/sass";
import ProgressBar from "../progressBar/progressBar";
import GatsbyIcon from '../icons/gatsby';
import CSSIcon from '../icons/css3';

const { colors, fonts } = themes;

const section = css`
  height: 100vh;
  width: 100%;
  padding: 0 5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const title = css`
  display: inline-block;
  font-family: ${fonts.primary};
  font-size: 5rem;
  margin-bottom: 3rem;
`;

const skillContainer = css`
  width: 100%;
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-rows: repeat(7, 70px);
  grid-gap: 2rem;
  align-items: center;
  & > svg {
    height: auto;
    grid-column: 1/2;
    justify-self: flex-end;
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
        <ProgressBar level={40} description='JavaScript ES6+' />
        <ReactIcon
          width='50px'
          height='auto'
        />
        <ProgressBar level={35} description='React | Hooks | Context API' />
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
        <ProgressBar level={20} description='Apollo Client' />
        <NodeIcon
          width='55px'
          height='auto'
        />
        <ProgressBar level={25} description='Node | Express.js' />
        <CSSIcon
          width='44px'
          height='auto'
        />
        <ProgressBar level={95} description='CSS3 Grid | SCSS | CSS-in-JS '/>
        <GatsbyIcon />
        <ProgressBar level={25} description='Gatsby.js' />
      </div>
    </section>
  );
};

export default Skills;