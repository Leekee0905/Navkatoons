"use client";

import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NextSlideBtn = styled.div`
  display: block;
  color: white;
  width: 40px;
  height: 40px;
`;
export const PrevSlideBtn = styled.div`
  display: block;
  color: white;
  width: 40px;
  height: 40px;
`;

export const HomeMainSlider = styled(Slider)`
  width: 100%; /* 원하는 너비 설정 */
  height: 550px;
  margin: 0 auto;
  border-radius: 1rem;
  .slick-track {
    max-height: 550px;
    display: flex;
    justify-content: center;
  }
  .slick-list {
    border-radius: 1rem;
    max-height: 550px;
  }
  .slick-slide {
    margin: 0 5px;
  }
`;

export const HomeMainSlide = styled.div`
  color: white;
  border: 1px solid white;
  border-radius: 1rem;
  background-color: black; /* 원하는 배경색 설정 */
  height: 550px;
`;
export const HomeMainSlideTitleBox = styled.div`
  color: white;
  font-weight: bold;
  height: 10%;
  display: flex;
  align-items: center;
  padding-left: 12px;
  text-decoration: none;
`;

export const HomeMainSlideTitleLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const HomeSecondarySlider = styled(Slider)``;
export const HomeSecondarySlide = styled.div``;
