import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: black;
  padding: 40px 20px;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HeaderLink = styled.h4`
  cursor: pointer;
  margin-left: 24px;
`;

export const SearchContainer = styled.form`
  display: flex;
  width: 220px;
  align-items: center;
  margin-left: auto;
`;

export const SearchInputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 4px;
`;
export const SearchIconButton = styled.button`
  margin-left: -35px;
  z-index: 1;
  background-color: white;
  border: 0;
`;
