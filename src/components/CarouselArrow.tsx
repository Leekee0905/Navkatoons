import { SlideArrow } from "@/styles/Carousel";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ArrowProps {
  className?: string;
  onClick?: () => void;
}
export const NextArrow = (props: ArrowProps) => {
  const { onClick } = props;
  return (
    <SlideArrow className="right" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </SlideArrow>
  );
};

export const PrevArrow = (props: ArrowProps) => {
  const { onClick } = props;
  return (
    <SlideArrow className="left" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </SlideArrow>
  );
};
