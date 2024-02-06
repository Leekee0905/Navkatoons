import {
  HomeSecondarySlide,
  HomeSecondarySlideWebtoonTitleBox,
  HomeSecondarySlideTitleLink,
  HomeSecondarySlider,
  HomeSecondarySlideTitle,
} from "@/styles/Carousel";
import { NextArrow, PrevArrow } from "./CarouselArrow";

const HomeSeconDaryCarousel = (props: { title: string; class: string }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={`secondary-slide-container ${props.class}`}>
      <HomeSecondarySlideTitle>{props.title}</HomeSecondarySlideTitle>
      <HomeSecondarySlider {...settings}>
        {arr.map((e, idx) => (
          <HomeSecondarySlide key={idx}>
            <a href="https://webtoon.kakao.com/content/스포일러-보는-드라마-작가/3093">
              <img
                width="100%"
                height="220px"
                style={{ cursor: "pointer" }}
                src={
                  "https://kr-a.kakaopagecdn.com/P/C/3093/c1/2x/b973723c-39bb-4d69-b614-1b07ba82e2f6.png"
                }
              />
            </a>
            <HomeSecondarySlideWebtoonTitleBox>
              <HomeSecondarySlideTitleLink href="https://webtoon.kakao.com/content/스포일러-보는-드라마-작가/3093">
                스포일러 보는 드라마 작가
              </HomeSecondarySlideTitleLink>
            </HomeSecondarySlideWebtoonTitleBox>
          </HomeSecondarySlide>
        ))}
      </HomeSecondarySlider>
    </div>
  );
};

export default HomeSeconDaryCarousel;
