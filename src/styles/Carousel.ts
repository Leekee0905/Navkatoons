import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlideArrow = styled.div`
  display: block;
  background-color: black;
  color: white;
  width: 40px;
  height: 40px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  opacity: 0.7;
  &.left {
    left: 34px;
  }
  &.right {
    right: 34px;
  }

  .secondary-slide-container &.left {
    transform: translateY(-130%);
  }
  .secondary-slide-container &.right {
    transform: translateY(-130%);
  }
`;

export const HomeMainSlider = styled(Slider)`
  width: 100%;
  height: 700px;
  max-height: 700px;
  margin: 0 auto;
  border-radius: 1rem;
  .slick-track {
    max-height: 700px;
    display: flex;
    justify-content: center;
  }
  .slick-list {
    border-radius: 1rem;
    max-height: 700px;
  }
  .slick-slide {
    margin: 0 5px;
  }
`;

export const HomeMainSlide = styled.div`
  border: 1px solid white;
  border-radius: 1rem;
  background-color: #ebebeb; /* 원하는 배경색 설정 */
  height: 700px;
`;
export const HomeMainSlideTitleBox = styled.div`
  color: black;
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

export const HomeSecondarySlideTitle = styled.h3`
  display: inline-block;
  padding-left: 20px;
  margin-top: 50px;
  cursor: pointer;
`;

export const HomeSecondarySlider = styled(Slider)`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  border-radius: 1rem;
  .slick-track {
    max-height: 300px;
    display: flex;
    justify-content: center;
  }
  .slick-list {
    border-radius: 1rem;
    max-height: 300px;
  }
  .slick-slide {
    margin: 0 5px;
  }
`;
export const HomeSecondarySlide = styled.div`
  color: white;
  border: 1px solid white;
  border-radius: 1rem;
  background-color: white; /* 원하는 배경색 설정 */
  height: 270px;
`;

export const HomeSecondarySlideWebtoonTitleBox = styled.div`
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 12px;
  text-decoration: none;
  margin-top: 1em;
`;

export const HomeSecondarySlideTitleLink = styled.a`
  font-size: 13px;
  color: inherit;
  text-decoration: none;
  word-wrap: break-word;
`;
