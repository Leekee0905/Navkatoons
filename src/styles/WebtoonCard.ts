import styled from "styled-components";

export const WebtoonCardImg = styled.img`
  width: 200px;
  height: 200px;
  display: block;
  text-decoration: none;
  background-color: #ebebeb;
  cursor: pointer;
  object-fit: contain;
`;

export const WebtoonCardTextBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 12px;
`;

export const WebtoonCardTextTitle = styled.a`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  &:active {
    color: inherit;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const WebtoonCardTextAuthor = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
