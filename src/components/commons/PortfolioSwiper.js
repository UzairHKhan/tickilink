import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const projects = [
  {
    id: 1,
    title: "Feno",
    img: "/images/feno.png",
  },
  {
    id: 2,
    title: "Appen",
    img: "/images/appen.png",
  },
  {
    id: 3,
    title: "Decentral Games",
    img: "/images/decentral-games.png",
  },
  {
    id: 4,
    title: "Idea Grove",
    img: "/images/ideagrove.png",
  },
  {
    id: 5,
    title: "Shipt",
    img: "/images/shipt.png",
  },
  {
    id: 6,
    title: "Rent Berry",
    img: "/images/rentberry.png",
  },
  {
    id: 7,
    title: "Boxed",
    img: "/images/boxed.png",
  },
  {
    id: 8,
    title: "BTC Market",
    img: "/images/btcmarket.png",
  },
  {
    id: 9,
    title: "Health Line",
    img: "/images/healthline.png",
  },
  {
    id: 10,
    title: "Luv Lap",
    img: "/images/luvlap.png",
  },
];

const PortfolioSwiper = () => {
  return (
    <SwiperContainer>
      <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1.5,
        },
        740: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 4.5,
        },
      }}
        modules={[Autoplay]}
        autoplay={{ delay: 6000 }}
        // slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            {({ isActive, isPrev, isNext }) => (
                <ImageContainer isActive={isActive} isPrev={isPrev} isNext={isNext}>
                    <ImageWrapper>
                    <Image src={project.img} alt={project.title} height="450px" />
                    </ImageWrapper>
                </ImageContainer>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  width: 100vw;
  margin-top: 32px;
`;

const ImageContainer = styled.div`
  padding-top: ${props => props.isActive ? "0" : props.isPrev || props.isNext ? "100px" : "50px"};
  transition: all 0.5s ease-in-out;
  height: 680px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1024px) {
    height: 520px;
  };
  @media (max-width: 740px) {
    height: 420px;
  };
`;

const ImageWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;

const Image = styled.img`
  scale: 1.05;
  transition: all 0.5s ease-in-out;
  @media (max-width: 1024px) {
    height: 400px;
  };
  @media (max-width: 740px) {
    height: 300px;
  };
`

export default PortfolioSwiper;
