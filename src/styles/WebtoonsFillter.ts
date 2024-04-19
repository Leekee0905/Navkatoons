import styled from "styled-components";

export const WebtoonsFillterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const DayOfTheWeek = styled.h3`
  font-weight: bold;
  padding: 12px;
`;

export const WebtoonFillterMenu = styled.div`
  padding: 12px;
  cursor: pointer;
  &:active {
    color: #44bb44;
  }

  &.active {
    color: #44bb44;
  }
`;

export const WeekWebtoonsFilterContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

export const WeekWebtoonsFilterMenu = styled.div`
  cursor: pointer;
  padding: 12px;
  font-weight: bold;
  &:active {
    color: #44bb44;
  }

  &.active {
    color: #44bb44;
  }
`;
