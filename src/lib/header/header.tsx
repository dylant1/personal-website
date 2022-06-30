import * as React from "react";
import styled from "styled-components";
import GithubIcon from "../../images/Github";
import LinkedinIcon from "../../images/Linkedin";
import InstagramIcon from "../../images/Instagram";
import MailIcon from "../../images/Mail";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const HeaderWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5vh;
  align-items: center;
`;
const LinkBox = styled.div`
  margin: 0 0.5em;
  // background-color: #58595b;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Link = styled.a`
  cursor: pointer;
  display: flex;
`;
const Filler = styled.span`
  margin-left: 25px;
`;
const ToggleWrapper = styled.div``;
export const Header = ({ themeCallback }: any) => {
  let currTheme;
  if (window) {
    currTheme = localStorage.getItem("theme");
  }
  const [theme, setTheme] = React.useState(currTheme || "light");
  React.useEffect(() => {
    if (window) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  const [hovered, setHovered] = React.useState("none");
  const toggleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
      themeCallback("dark");
    } else {
      setTheme("light");
      themeCallback("light");
    }
  };
  return (
    <HeaderWrapper>
      <Filler />
      <LinksWrapper>
        <LinkBox>
          <Link
            href="https://github.com/dylant1"
            rel="noopener noreferrer"
            onMouseEnter={() => {
              setHovered("github");
            }}
            onMouseLeave={() => {
              setHovered("none");
            }}
            target="_blank"
          >
            <GithubIcon fill={theme === "light" ? "#58595B" : "white"} />
          </Link>
        </LinkBox>
        <LinkBox>
          <Link
            href="https://www.linkedin.com/in/dylantoth1"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => {
              setHovered("linkedin");
            }}
            onMouseLeave={() => {
              setHovered("none");
            }}
          >
            <LinkedinIcon fill={theme === "light" ? "#58595B" : "white"} />
          </Link>
        </LinkBox>
        <LinkBox>
          <Link
            href="https://www.instagram.com/dylant223/?hl=en"
            rel="noopener noreferrer"
            onMouseEnter={() => {
              setHovered("instagram");
            }}
            onMouseLeave={() => {
              setHovered("none");
            }}
            target="_blank"
          >
            <InstagramIcon fill={theme === "light" ? "#58595B" : "white"} />
          </Link>
        </LinkBox>
        <LinkBox>
          <Link
            href="mailto: dylan.toth653@gmail.com"
            rel="noopener noreferrer"
            onMouseEnter={() => {
              setHovered("mail");
            }}
            onMouseLeave={() => {
              setHovered("none");
            }}
          >
            <MailIcon fill={theme === "light" ? "#58595B" : "white"} />
          </Link>
        </LinkBox>
      </LinksWrapper>
      <ToggleWrapper>
        <DarkModeSwitch
          style={{
            marginRight: "25px",
          }}
          sunColor="#58595B"
          checked={theme == "light" ? false : true}
          onChange={toggleDarkMode}
          size={25}
        />
      </ToggleWrapper>
    </HeaderWrapper>
  );
};
