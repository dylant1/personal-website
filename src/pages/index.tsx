import * as React from "react";
import styled from "styled-components";
import utk from "../images/utk.png";
import GlobalStyle from "../globalStyles";

interface Props {
  filled: any;
  children: string;
  href: string;
}

const Hero = styled.div`
  height: 100vh;
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
      <title>Home Page</title>
      <GlobalStyle />
      <Hero>
        <Description>
          <span>
            {" "}
            Hey, I'm <Orange>Dylan!</Orange>
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span> Currently pursuing a computer science degree at </span>
            <span>
              <Logo src={utk} alt="UTK" />
            </span>
          </div>
        </Description>
        <LinkWrapper>
          <Link href="" filled={true} target="_blank" rel="noopener noreferrer">
            Resume
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
