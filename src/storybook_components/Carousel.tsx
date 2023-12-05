import { useRef, useEffect, useState } from "react";
import CardProps from "../interfaces/CardProps";
import ImageProps from "../interfaces/ImageProps";
import AltImageProps from "../interfaces/AltImageProps";
import Card from "./Card";
import Image from "./Image";
import AltImage from "./AltImage";
import SvgButton from "./SvgButton";
import { ReactComponent as PreviousElement } from "../assets/svgs/left-chevron-svgrepo-com.svg";
import { ReactComponent as NextElement } from "../assets/svgs/right-chevron-svgrepo-com.svg";
import CardImage from "./CardImage";
import { useImages } from "../context/ImagesContext";

interface Carousel {
  elements: CardProps[] | ImageProps[] | AltImageProps[];
  alternative?: boolean;
}

export default function Carousel({ elements, alternative }: Carousel) {
  const { width, height } = useImages();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const wrapperRef: any = useRef(null);

  function isCard(el: CardProps | ImageProps | AltImageProps): el is CardProps {
    return (el as CardProps).headline !== undefined;
  }

  function isAltImage(
    el: CardProps | AltImageProps | ImageProps
  ): el is AltImageProps {
    return (el as AltImageProps).title !== undefined;
  }

  const list = elements.map((el, i) => {
    if (isCard(el)) {
      return (
        <li key={i}>
          <Card
            img={el.img}
            altText={el.altText}
            headline={el.headline}
            subhead={el.subhead}
            description={el.description}
          />
        </li>
      );
    } else if (isAltImage(el) && alternative) {
      return (
        <li key={i}>
          <CardImage
            url={el.url}
            altText={el.altText}
            title={el.title}
            description={el.description}
            link={el.link}
          />
        </li>
      );
    } else if (isAltImage(el)) {
      return (
        <li key={i}>
          <AltImage
            url={el.url}
            altText={el.altText}
            title={el.title}
            description={el.description}
            link={el.link}
          />
        </li>
      );
    } else {
      return (
        <li key={i}>
          <Image url={el.url} altText={el.altText} />
        </li>
      );
    }
  });

  function handleNext() {
    if (!disabledButtons) {
      setCurrentSlide((prev) => prev + 1);
    }
  }

  function handlePrevious() {
    if (!disabledButtons) {
      setCurrentSlide((prev) => prev - 1);
    }
  }

  function setLoop() {
    if (currentSlide === 0) {
      setDisabledButtons(true);
      setTransitionEnabled(false);
      setCurrentSlide(list.length);
    } else if (currentSlide === list.length + 1) {
      setDisabledButtons(true);
      setTransitionEnabled(false);
      setCurrentSlide(1);
    } else {
      setDisabledButtons(false);
    }
  }

  useEffect(() => {
    wrapperRef.current.addEventListener("transitionstart", () => {
      setDisabledButtons(true);
    });
  }, []);

  useEffect(() => {
    if (currentSlide === 1 || currentSlide === list.length) {
      setDisabledButtons(false);
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 100);
    }
  }, [currentSlide, list.length]);

  return (
    <div className="relative flex flex-col items-center gap-4 mt-4">
      <ul className="list-none w-[80vw] overflow-hidden p-0 pb-3">
        <div
          className={`flex items-center m-0 p-0 ${
            transitionEnabled ? "transition duration-1000" : ""
          }`}
          ref={wrapperRef}
          onTransitionEnd={setLoop}
          style={{ transform: `translateX(-${100 * currentSlide}%)` }}
        >
          {list[list.length - 1]}
          {list}
          {list[0]}
        </div>
      </ul>
      <div
        className={`${
          width >= 640 || (width < 540 && height > 840)
            ? "static top-0 translate-y-0"
            : "absolute top-[30%] translate-y-[-30%]"
        } flex justify-between items-center w-[95%]`}
      >
        <div
          className={`${
            width >= 640 || (width < 540 && height > 840)
              ? "cursor-pointer bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm hover:bg-surface-container"
              : ""
          } ${width < 540 && height > 840 ? "p-2" : "p-4"}`}
        >
          <SvgButton
            label="Previous Card"
            width={width < 540 && height > 840 ? "32px" : "48px"}
            height={width < 540 && height > 840 ? "32px" : "48px"}
            svg={PreviousElement}
            onClick={handlePrevious}
          />
        </div>
        <div
          className={`${
            width >= 640 || (width < 540 && height > 840)
              ? "cursor-pointer bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm hover:bg-surface-container"
              : ""
          } ${width < 540 && height > 840 ? "p-2" : "p-4"}`}
        >
          <SvgButton
            label="Next Card"
            svg={NextElement}
            onClick={handleNext}
            width={width < 540 && height > 840 ? "32px" : "48px"}
            height={width < 540 && height > 840 ? "32px" : "48px"}
          />
        </div>
      </div>
    </div>
  );
}
