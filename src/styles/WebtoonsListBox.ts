import styled from "styled-components";

export const WebtoonsBox = styled.li`
  width: fit-content;
  margin: 0.5em 1em;
  list-style: none;
  padding: 0;
`;

export const WebtoonsListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-gap: 1em 1em;
  list-style: none;
  padding: 0 1em;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
`;
