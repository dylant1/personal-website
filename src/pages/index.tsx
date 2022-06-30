import * as React from "react";
import styled from "styled-components";
import { Header } from "../lib/header/header";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalStyles";
import { lightTheme, darkTheme } from "../Themes";
interface Props {
  filled: boolean;
  children: string;
  href: string;
}

const Hero = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Description = styled.div`
  font-size: 20px;
  margin-bottom: 1em;
  @media (max-width: 900px) {
    font-size: 15px;
  }
  @media (max-width: 650px) {
    font-size: 15px;
    width: 450px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
    width: 350px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
    width: 300px;
  }
`;

const Orange = styled.span`
  color: #ff8200;
  font-weight: bold;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: calc(5vh + 25px);
`;

const Link = styled.a<Props>`
  text-decoration: none;

  background-color: ${(props) => (props.filled ? "#FF8200" : "none")};
  box-shadow: ${(props) =>
    props.filled ? " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" : "none"};
  padding: 0.5em 1.2em;
  margin: 0 1.5em;
  border-radius: 25px;
  cursor: pointer;
  color: ${(props) => (props.filled ? "white" : "inherit")};
  &:hover {
    text-decoration: ${(props) => (props.filled ? "none" : "underline")};
    box-shadow: ${(props) =>
      props.filled ? " rgba(0, 0, 0, 0.24) 0px 3px 8px;" : "none"};
  }
  @media (max-width: 900px) {
    font-size: 15px;
  }
  @media (max-width: 650px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const IndexPage = () => {
  let currTheme;
  if (typeof window !== "undefined") {
    currTheme = localStorage.getItem("theme");
  }
  const [theme, setTheme] = React.useState(currTheme || "light");
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  const toggleDarkMode = (theme: any) => {
    setTheme(theme);
  };
  return (
    <main>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
        <Header themeCallback={toggleDarkMode} />
        <Hero>
          <Description>
            <b>
              Hey, I'm <Orange>Dylan!</Orange>
            </b>
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
              href={"https://dylantoth.dev/dylan_toth_resume.pdf"}
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
        </Hero>{" "}
      </ThemeProvider>
    </main>
  );
};

export default IndexPage;
