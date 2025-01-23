import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    name: "Zhon Done",
    title: "Customer",
    image: "/customerPhoto.png",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Jane Smith",
    title: "Designer",
    image: "/customerPhoto.png",
  },
  {
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    name: "John Doe",
    title: "Entrepreneur",
    image: "/customerPhoto.png",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width: "20px",
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <TestimonialSection className="wrapper">
      <Subtitle>Testimonial</Subtitle>
      <Title>Hear From Our Satisfied Clients</Title>
      <TestimonialWrapper>
        <StyledSlider {...settings}>
          {testimonials.map((test, idx) => (
            <QuoteContainer key={idx}>
              <QuoteText>{test.text}</QuoteText>
              <CustomerInfo>
                <CustomerImage src={test.image} alt={test.name} />
                <CustomerName>
                  <Name>{test.name}</Name>
                  <CustomerTitle>{test.title}</CustomerTitle>
                </CustomerName>
              </CustomerInfo>
            </QuoteContainer>
          ))}
        </StyledSlider>
      </TestimonialWrapper>
      <CustomNavigation>
        {testimonials.map((_, idx) => (
          <Dash key={idx} active={currentSlide === idx} />
        ))}
      </CustomNavigation>
    </TestimonialSection>
  );
};

export default Testimonial;

const TestimonialSection = styled.div`
  /* color: #fff; */
  padding: 40px 20px;
  /* width: auto; */
  width: 1400px;
  margin-left: 60px;
  /* text-align: center; */
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 48px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  font-family: Sharp Grotesk;
`;

const Subtitle = styled.span`
  color: #f0a351;
  font-weight: 700;
  display: flex;
  justify-content: center;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 10px;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    display: none !important;
  }
`;

const TestimonialWrapper = styled.div`
  /* background: #1a1b1e; */
  /* padding: 20px; */
  /* border-radius: 20px; */
  /* margin: 20px auto; */
  width: 1400px;
`;

const QuoteContainer = styled.div`
  padding: 20px;
  border-radius: 20px;
  background: #1a1b1e;
  margin: 20px auto;
  height: 220px;
  padding-top: 90px;
`;

const QuoteText = styled.p`
  font-size: 18px;
  display: flex;
  color: #666666;
  font-family: Albert Sans;
  line-height: 35px;
  justify-content: center;
  margin: 0;
  opacity: 0.8;
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin-top: 20px;
`;

const CustomerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CustomerName = styled.div`
  text-align: left;
  color: #ffffff;
  font-size: 20px;
  line-height: 30px;
  font-family: Sharp Grotesk;
`;

const CustomerTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #f0a351;
  font-family: Blinker;
  margin: 0;
`;

const Name = styled.h4`
  color: #ffffff;
  font-size: 20px;
  line-height: 30px;
  font-family: Sharp Grotesk;
  margin: 0;
`;
const CustomNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  width: 1400px;
`;

const Dash = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${(props) => (props.active ? "#f0a351" : "#666666")};
  border-radius: 2px;
  transition: background-color 0.3s ease;
`;
