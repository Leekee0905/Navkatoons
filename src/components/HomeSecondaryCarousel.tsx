import {
  HomeSecondarySlide,
  HomeSecondarySlideWebtoonTitleBox,
  HomeSecondarySlideTitleLink,
  HomeSecondarySlider,
  HomeSecondarySlideTitle,
  HomeSecondarySlideImageBox,
} from "@/styles/Carousel";
import { NextArrow, PrevArrow } from "./CarouselArrow";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { preload } from "react-dom";
import { WebtoonDataType } from "./HomeMainCarousel";
import Image from "next/image";
import imageLoader from "./ImageLoader";

const HomeSeconDaryCarousel = (props: { title: string; class: string }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const [carouselData, setCarouselData] = useState<WebtoonDataType[]>([]);
  const carouselDataQuery = useQuery({
    queryKey: [props.class],
    queryFn: () =>
      axios.get("/api/secondaryCarousel", {
        params: {
          service: "naver",
          updateDay: props.class,
        },
      }),
    staleTime: Infinity,
  });
  useEffect(() => {
    if (carouselDataQuery.isSuccess) {
      setCarouselData(carouselDataQuery.data.data.response);
      carouselDataQuery.data.data.response.forEach((e: WebtoonDataType) => {
        preload(e.thumbnail[0], { as: "image" });
      });
    }
  }, [carouselDataQuery]);

  return (
    <div className={`secondary-slide-container ${props.class}`}>
      <HomeSecondarySlideTitle>{props.title}</HomeSecondarySlideTitle>
      <HomeSecondarySlider {...settings}>
        {carouselData.map((e, idx) => (
          <HomeSecondarySlide key={idx}>
            <a href={e.url}>
              <picture>
                <HomeSecondarySlideImageBox>
                  <source srcSet={e.thumbnail[0]} type="image/webp" />
                  <Image
                    alt="SeondaryCarousel"
                    loader={imageLoader}
                    fill
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                    style={{ cursor: "pointer", objectFit: "contain" }}
                    src={e.thumbnail[0]}
                    priority
                  />
                </HomeSecondarySlideImageBox>
              </picture>
            </a>

            <HomeSecondarySlideWebtoonTitleBox>
              <HomeSecondarySlideTitleLink href={e.url}>
                {e.title}
              </HomeSecondarySlideTitleLink>
            </HomeSecondarySlideWebtoonTitleBox>
          </HomeSecondarySlide>
        ))}
      </HomeSecondarySlider>
    </div>
  );
};

export default HomeSeconDaryCarousel;
