"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: black;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 220px;
  align-items: center;
`;

export const SearchInputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 4px;
`;
export const SearchIconContainer = styled.div`
  margin-left: -28px;
  z-index: 1;
`;
