import * as React from "react";
import styled from "styled-components";
import utk from "../images/utk.png";
import GlobalStyle from "../globalStyles";
import { Header } from "../lib/header/header";
import { Helmet } from "react-helmet";

interface Props {
  filled: any;
  children: string;
  href: string;
}

const Hero = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Description = styled.div`
  font-size: 20px;
  color: #58595b;
  margin-bottom: 1em;
`;

const Orange = styled.span`
  color: #ff8200;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 1.2em;
  margin 0 .5em;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5vh;
`;

const Link = styled.a<Props>`
  text-decoration: none;

  background-color: ${(props) => (props.filled ? "#FF8200" : "none")};
  color: black;
  box-shadow: ${(props) =>
    props.filled ? " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" : "none"};
  padding: 0.5em 1.2em;
  margin: 0 1.5em;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    text-decoration: ${(props) => (props.filled ? "none" : "underline")};
    box-shadow: ${(props) =>
      props.filled ? " rgba(0, 0, 0, 0.24) 0px 3px 8px;" : "none"};
  }
`;

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dylan Toth</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <GlobalStyle />
      <Header />
      <Hero>
        <Description>
          <span>
            Hey, I'm <Orange>Dylan!</Orange>
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>
              Currently a computer science major at the
              <Orange> University of Tennesee, Knoxville</Orange>
            </span>
          </div>
        </Description>
        <LinkWrapper>
          <Link
            href={"http://localhost:8000/dylan_toth_resume.pdf"}
            filled={true}
            target="_blank"
          >
            View Resume
          </Link>
          <Link
            href="https://github.com/dylant1"
            filled={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </Link>
        </LinkWrapper>
      </Hero>
    </main>
  );
};

export default IndexPage;
