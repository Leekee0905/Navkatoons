"use client";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #ebebeb;
  margin-top: 50px;
`;

export const FooterContents = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FooterContentsList = styled.li`
  list-style: none;
  flex-basis: calc(33.33% - 10px);
  font-size: 12px;
`;

export const FooterLink = styled.a`
  padding-left: 6px;
  text-decoration: none;
`;
