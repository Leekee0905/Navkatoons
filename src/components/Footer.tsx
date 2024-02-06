"use client";

import {
  FooterContainer,
  FooterContents,
  FooterContentsList,
  FooterLink,
} from "@/styles/Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <FooterContentsList>
          Blog:
          <FooterLink href="https://velog.io/@leekee0905">
            https://velog.io/@leekee0905
          </FooterLink>
        </FooterContentsList>
        <FooterContentsList>
          Github:
          <FooterLink href="https://github.com/Leekee0905">
            https://github.com/Leekee0905
          </FooterLink>
        </FooterContentsList>
        <FooterContentsList>Email: cj8928@gmail.com</FooterContentsList>
      </FooterContents>
    </FooterContainer>
  );
};

export default Footer;
