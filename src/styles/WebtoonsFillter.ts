"use client";
import styled from "styled-components";

export const WebtoonsFillterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
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
