import * as React from "react";
import styled from "styled-components";
import GithubIcon from "../../images/Github";
import LinkedinIcon from "../../images/Linkedin";
import InstagramIcon from "../../images/Instagram";
import MailIcon from "../../images/Mail";
const HeaderWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
export const Header = () => {
  const [hovered, setHovered] = React.useState("none");

  return (
    <HeaderWrapper>
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
            <GithubIcon fill={hovered === "github" ? "#FF8200" : "#58595B"} />
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
            <LinkedinIcon
              fill={hovered === "linkedin" ? "#FF8200" : "#58595B"}
            />
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
            <InstagramIcon
              fill={hovered === "instagram" ? "#FF8200" : "#58595B"}
            />
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
            <MailIcon fill={hovered === "mail" ? "#FF8200" : "#58595B"} />
          </Link>
        </LinkBox>
      </LinksWrapper>
    </HeaderWrapper>
  );
};
