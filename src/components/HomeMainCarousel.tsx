import {
  HomeMainSlide,
  HomeMainSlider,
  HomeMainSlideTitleBox,
  HomeMainSlideTitleLink,
  NextSlideBtn,
  PrevSlideBtn,
} from "@/styles/Carousel";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}
const NextArrow = (props: ArrowProps) => {
  const { className, onClick } = props;
  return <NextSlideBtn className={className} onClick={onClick}></NextSlideBtn>;
};

const PrevArrow = (props: ArrowProps) => {
  const { className, onClick } = props;
  return (
    <PrevSlideBtn className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </PrevSlideBtn>
  );
};

const HomeMainCarousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "25%",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="slider-container">
      <HomeMainSlider {...settings}>
        {arr.map((e, idx) => (
          <HomeMainSlide key={idx}>
            <a href="https://webtoon.kakao.com/content/스포일러-보는-드라마-작가/3093">
              <img
                width="100%"
                height="90%"
                style={{ cursor: "pointer" }}
                src={
                  "https://kr-a.kakaopagecdn.com/P/C/3093/c1/2x/b973723c-39bb-4d69-b614-1b07ba82e2f6.png"
                }
              />
            </a>
            <HomeMainSlideTitleBox>
              <HomeMainSlideTitleLink href="https://webtoon.kakao.com/content/스포일러-보는-드라마-작가/3093">
                스포일러 보는 드라마 작가
              </HomeMainSlideTitleLink>
            </HomeMainSlideTitleBox>
          </HomeMainSlide>
        ))}
      </HomeMainSlider>
    </div>
  );
};

export default HomeMainCarousel;
